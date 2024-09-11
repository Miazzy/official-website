import dayjs from 'dayjs';
import { StoreName } from '../constant/constant';

interface LogInterface {
  log(text: string, error: any): Promise<void>;
  info(text: string, error: any): Promise<void>;
  warn(text: string, error: any): Promise<void>;
  error(text: string, error: any): Promise<void>;
}

export class LogManager implements LogInterface {
  private static instance: LogManager | undefined;
  private static prefix = 'LOG';
  private ls: any;
  private rstore: any;
  private lstore: any;

  constructor() {
    this.ls = idbKeyval ? idbKeyval : { set: () => {}, get: () => {} };
    this.rstore = idbKeyval.createStore(StoreName.REC_STORE, 'data');
    this.lstore = idbKeyval.createStore(StoreName.LOG_STORE, 'data');
  }

  // 获取示例函数
  static getInstance() {
    if (!LogManager.instance) {
      const instance = new LogManager();
      LogManager.instance = instance;
    }
    return LogManager.instance;
  }

  async log(text: string, error: any = '') {
    try {
      const errorText = typeof error === 'object' ? error?.name + ':' + error?.message : error;
      const now = dayjs().format('YYYYMMDDHHmmss');
      const key = LogManager.prefix + '_LOG_' + now;
      const logText = errorText ? `text: ${text}  log message: ${errorText}` : `text: ${text} `;
      console.log(key, logText);
    } catch {
      //
    }
  }

  async info(text: string, error: any = '') {
    try {
      const errorText = typeof error === 'object' ? error?.name + ':' + error?.message : error;
      const now = dayjs().format('YYYYMMDDHHmmss');
      const key = LogManager.prefix + '_INFO_' + now;
      const logText = errorText ? `text: ${text}  info message: ${errorText}` : `text: ${text} `;
      console.info(key, logText);
      this.ls.set(key, logText, this.lstore);
    } catch {
      //
    }
  }

  async warn(text: string, error: any = '') {
    try {
      const errorText = typeof error === 'object' ? error?.name + ':' + error?.message : error;
      const now = dayjs().format('YYYYMMDDHHmmss');
      const key = LogManager.prefix + '_WARN_' + now;
      const logText = errorText ? `text: ${text}  warn message: ${errorText}` : `text: ${text} `;
      console.warn(key, logText);
      this.ls.set(key, logText, this.lstore);
    } catch {
      //
    }
  }

  async record(text: string, error: any = '') {
    try {
      const errorText = typeof error === 'object' ? error?.name + ':' + error?.message : error;
      const now = dayjs().format('YYYYMMDDHHmmss');
      const key = LogManager.prefix + '_REC_' + now;
      const logText = errorText ? `text: ${text}  info message: ${errorText}` : `text: ${text} `;
      this.ls.set(key, logText, this.rstore);
    } catch {
      //
    }
  }

  async error(text: string, error: any = '') {
    try {
      const errorText = typeof error === 'object' ? error?.name + ':' + error?.message : error;
      const now = dayjs().format('YYYYMMDDHHmmss');
      const key = LogManager.prefix + '_ERR_' + now;
      const logText = errorText ? `text: ${text}  error message: ${errorText}` : `text: ${text} `;
      console.error(key, logText);
      this.ls.set(key, logText, this.rstore);
    } catch {
      //
    }
  }
}
