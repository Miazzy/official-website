import { LogManager } from '../manager/LogManager';
import { StoreName } from '../constant/constant';

const STRING_PREFIX = '__s__';
const OBJECT_PREFIX = '__o__';

export class CacheManager {
  private static instance: CacheManager | undefined;
  private static storage: any;
  private rstore: any;

  constructor() {
    CacheManager.storage = idbKeyval ? idbKeyval : { set: () => {}, get: () => {} };
    this.rstore = idbKeyval.createStore(StoreName.CACHE_STORE, 'data');
  }

  // 获取示例函数
  static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      const instance = new CacheManager();
      CacheManager.instance = instance;
    }
    return CacheManager.instance as CacheManager;
  }

  // 设置缓存
  async setCache<T>(key: string, value: T): Promise<void> {
    let storedValue: string;
    if (typeof value === 'string') {
      storedValue = `${STRING_PREFIX}${value}`;
    } else {
      storedValue = `${OBJECT_PREFIX}${JSON.stringify(value)}`;
    }
    CacheManager.storage.set(key, storedValue, this.rstore);
  }

  // 获取缓存
  async getCache<T>(key: string): Promise<T | null> {
    const storedValue = await CacheManager.storage.get(key, this.rstore);
    if (!storedValue) {
      return null;
    }
    try {
      if (storedValue.startsWith(STRING_PREFIX)) {
        return storedValue.slice(STRING_PREFIX.length) as T;
      } else if (storedValue.startsWith(OBJECT_PREFIX)) {
        return JSON.parse(storedValue.slice(OBJECT_PREFIX.length)) as T;
      } else {
        return null;
      }
    } catch (error) {
      LogManager.getInstance().error('Error parsing cached value:', error);
      return null;
    }
  }

  // 移除缓存
  remove(key: string): void {
    CacheManager.storage.del(key, this.rstore);
  }

  // 清除所有缓存
  clear(): void {
    CacheManager.storage.clear(this.rstore);
  }
}
