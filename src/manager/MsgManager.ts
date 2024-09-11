import { LogManager } from '../manager/LogManager';

/**
 * 获取页面标识函数
 */
const getWindowUID = () => window?.top?.UID || 'FRAMEWORK';

/**
 * @description 主题类
 */
class Subject {
  observers: Set<any>;
  observeMap: Map<string, Set<any>>;

  constructor() {
    this.observers = new Set();
    this.observeMap = new Map<string, Set<any>>();
  }

  // 注册观察者
  addObserver(observer: any) {
    const channelName = observer.getChannelName();
    this.observers.add(observer);
    if (channelName) {
      const sets = this.observeMap.get(channelName);
      if (!sets) {
        this.observeMap.set(channelName, new Set([observer]));
      } else {
        sets.add(observer);
        this.observeMap.set(channelName, sets);
      }
    }
  }

  // 移除观察者
  removeObserver(observer: any) {
    this.observers.delete(observer);
  }

  // 通知观察者
  notifyObservers(channelName: string, message: any) {
    try {
      const sets = this.observeMap.get(channelName);
      if (sets && sets.size) {
        sets.forEach((observer) => observer.update(channelName, message));
      } else {
        for (const observer of this.observers) {
          if (channelName === observer.getChannelName()) {
            observer.update(channelName, message);
          }
        }
      }
    } catch (error) {
      LogManager.getInstance().error('Error notifying observers:', error);
    }
  }
}

/**
 * @description 观察者
 */
class Observer {
  channelName: string;
  callback: Function;

  constructor(channelName: string, callback: Function) {
    this.channelName = channelName;
    this.callback = callback;
  }

  // 更新方法，当主题状态发生变化时调用
  update(channelName: string, message: any) {
    if (channelName === this.channelName) {
      if (typeof message === 'object' && getWindowUID()) {
        const flag = message['range'] === getWindowUID();
        if (flag) {
          this.callback(message);
        }
      } else {
        this.callback(message);
      }
    }
  }

  getChannelName() {
    return this.channelName;
  }
}

/**
 * @description 全局推送监听消息类
 */
export class MsgManager extends Subject {
  private static instance: MsgManager | undefined;
  private static channels: Map<string, any>;
  private static subchannels: Map<string, any>;

  constructor() {
    super();
    MsgManager.channels = new Map<string, any>();
    MsgManager.subchannels = new Map<string, any>();

    window.addEventListener('storage', (event) => {
      if (event.key && event.key.startsWith('MsgManager_') && event.newValue) {
        const message = JSON.parse(event.newValue);
        const channelName = event.key.replace('MsgManager_', '');
        const observers = this.observeMap.get(channelName);
        if (observers) {
          observers.forEach((observer) => observer.update(channelName, message));
        }
      }
    });
  }

  // 获取实例函数
  static getInstance(): MsgManager {
    if (!MsgManager.instance) {
      const instance = new MsgManager();
      MsgManager.instance = instance;
      try {
        if (!Reflect.has(window, 'MsgManager')) {
          (window as any).MsgManager = instance;
        }
      } catch (error) {
        LogManager.getInstance().error('Error accessing window.top:', error);
        (window as any).MsgManager = instance;
      }
    }
    return MsgManager.instance as MsgManager;
  }

  // 使用 sessionStorage 存储消息
  public postMsg(channelName: string, message: any) {
    if (typeof message === 'object' && getWindowUID()) {
      message['range'] = getWindowUID();
    }
    try {
      const key = `MsgManager_${channelName}`;
      const newValue = JSON.stringify(message);
      sessionStorage.setItem(key, newValue);
      const event = new StorageEvent('storage', { key, newValue });
      window.dispatchEvent(event);
    } catch (error) {
      LogManager.getInstance().error('Error in postMsg:', error);
    }
  }

  // 向指定信道推送信息
  public sendMsg(channelName: string, message: any) {
    if (typeof message === 'object' && getWindowUID()) {
      message['range'] = getWindowUID();
    }
    try {
      const precall = async () => {
        try {
          let channel = MsgManager.channels.get(channelName);
          if (!channel) {
            channel = new BroadcastChannel(channelName);
            MsgManager.channels.set(channelName, channel);
          }
          channel.postMessage(message);
        } catch (error) {
          LogManager.getInstance().error('Error sending message via BroadcastChannel:', error);
        }
      };
      precall();
      const callback = async () => {
        try {
          let subchannel = MsgManager.subchannels.get(channelName);
          if (!subchannel) {
            subchannel = new Set();
            MsgManager.subchannels.set(channelName, subchannel);
          }
          subchannel.add(message);
          this.notifyObservers(channelName, message);
        } catch (error) {
          LogManager.getInstance().error('Error updating subchannel:', error);
        }
      };
      callback();
    } catch (error) {
      LogManager.getInstance().error('Error in sendMsg:', error);
    }
  }

  // 监听指定信道消息
  public listen(channelName: string, callback: Function) {
    if (typeof callback !== 'function') {
      LogManager.getInstance().error('Listen Message Error: callback is not function.');
      return;
    }
    try {
      // BroadcastChannel 方式监听
      let channel = MsgManager.channels.get(channelName);
      if (!channel) {
        channel = new BroadcastChannel(channelName);
        MsgManager.channels.set(channelName, channel);
      }
      channel.onmessage = (event) => {
        const message = event.data;
        if (typeof message === 'object' && getWindowUID()) {
          const flag = message['range'] === getWindowUID();
          if (flag) {
            callback(message);
          }
        } else {
          callback(message);
        }
      };

      // 观察者模式监听
      const observer = new Observer(channelName, callback);
      this.addObserver(observer);
      let subchannel = MsgManager.subchannels.get(channelName);
      if (!subchannel) {
        subchannel = new Set();
        MsgManager.subchannels.set(channelName, subchannel);
      }
      subchannel.forEach((message) => {
        observer.update(channelName, message);
      });
    } catch (error) {
      LogManager.getInstance().error('Error in listen:', error);
    }
  }
}
