import { Lock } from '../constant/constant';
import { sleep, throttle } from '../utils/common';
import { LockManager } from '../manager/LockManager';

/***
 * @description 线程基类
 * @class  Thread 线程基类
 * @classdesc 线程基类，处理定时执行的基本逻辑，设置定时时间间隔、执行启动及关闭等功能
 */
export class Thread {
  protected timer;
  protected running = false;
  protected callback;
  protected arrayTask;
  protected interval = 100;
  public listTask;
  public pushListTask: Function;
  public removeListTask: Function;

  constructor(callback = () => { }) {
    this.callback = callback;
    this.arrayTask = [];
    this.listTask = [];
    this.pushListTask = (id, callback: Function, interval = 1000) => {
      const lasttime = new Date().getTime();
      const tcallback = throttle(callback, 1500);
      this.removeListTask(id);
      this.listTask.push({ id, callback: tcallback, interval, lasttime });
    };
    this.removeListTask = (id) => {
      this.listTask = this.listTask.filter((task) => task.id !== id);
    };
  }

  public run() {
    // TODO
  }

  public destroy() {
    this.callback = null;
    this.arrayTask = null;
    this.listTask = null;
  }

  public pushTask(callback: Function) {
    this.callback = callback;
  }

  public removeTask() {
    this.callback = null;
  }

  public pushOnceTask(callback: Function) {
    this.arrayTask.push(callback);
  }

  public setTimeValue(timeValue) {
    this.interval = timeValue;
  }

  public start() {
    LockManager.getInstance().releaseLock(Lock.ThreadLock);
    if (!this.running) {
      this.running = true;
      this.runLoop();
    }
  }

  public stop() {
    if (this.running) {
      this.running = false;
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  public runLoop() {
    const tinterval = 300; // 额外间隔时间
    let lockCount = 0;
    this.timer = setInterval(async () => {
      if (this.running) {
        const isThreadLock = await LockManager.getInstance().hasLock(Lock.ThreadLock);
        if (!isThreadLock) {
          LockManager.getInstance().acquireLock(Lock.ThreadLock);
          try {
            this.run();
            // 执行回调函数
            if (this.callback != null && typeof this.callback == 'function') {
              this.callback();
            }
            // 执行临时任务
            if (this.arrayTask.length > 0) {
              this.arrayTask.forEach((callback) => {
                callback();
              });
              await sleep(tinterval);
              this.arrayTask = [];
            }
            // 执行循环任务
            if (this.listTask.length > 0) {
              for (const element of this.listTask) {
                const currentTime = new Date().getTime();
                const { id, callback, interval, lasttime } = element;
                if (currentTime > lasttime + interval) {
                  element.lasttime = currentTime;
                  await callback();
                  element.lasttime = new Date().getTime();
                  await sleep(tinterval);
                }
              }
            }
          } finally {
            setTimeout(() => {
              LockManager.getInstance().releaseLock(Lock.ThreadLock);
            }, 0);
          }
        } else {
          if (++lockCount > 5) {
            lockCount = 0;
            setTimeout(() => {
              LockManager.getInstance().releaseLock(Lock.ThreadLock);
            }, 0);
          }
        }
      }
    }, this.interval + tinterval);
  }
}
