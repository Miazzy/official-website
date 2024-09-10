interface LockInterface {
  acquireLock(lockName: string, lockValue?: string): Promise<void>;
  releaseLock(lockName: string): Promise<void>;
  hasLock(lockName: string): Promise<boolean>;
}

export class LockManager implements LockInterface {
  private static instance: LockManager | undefined;
  private static prefix = 'LOCK_';
  private ls;

  constructor() {
    this.ls = window.localStorage;
  }

  // 获取示例函数
  static getInstance(): LockInterface {
    if (!LockManager.instance) {
      const instance = new LockManager();
      LockManager.instance = instance;
    }
    return LockManager.instance as LockInterface;
  }

  async acquireLock(lockName: string, lockValue: string = 'true'): Promise<void> {
    const lockKey = `${LockManager.prefix}${lockName}`;
    const existingValue = await this.hasLock(lockName);
    if (!existingValue) {
      this.ls.setItem(lockKey, lockValue);
    }
  }

  async releaseLock(lockName: string): Promise<void> {
    const lockKey = `${LockManager.prefix}${lockName}`;
    this.ls.removeItem(lockKey);
  }

  async hasLock(lockName: string): Promise<boolean> {
    const lockKey = `${LockManager.prefix}${lockName}`;
    const value = await this.ls.getItem(lockKey);
    return !!value;
  }
}
