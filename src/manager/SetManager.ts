export class SetManager {
    private static instance: SetManager | undefined;
    private static storage: any;

    constructor() {
        SetManager.storage = new Set();
    }

    // 获取示例函数
    static getInstance(): SetManager {
        if (!SetManager.instance) {
            const instance = new SetManager();
            SetManager.instance = instance;
        }
        return SetManager.instance as SetManager;
    }

    // 设置缓存
    add(key: string) {
        SetManager.storage.add(key);
    }

    // 获取缓存
    has(key: string) {
        return SetManager.storage.has(key);
    }

    // 移除缓存
    delete(key: string): void {
        SetManager.storage.delete(key);
    }

    // 清除所有缓存
    clear(): void {
        SetManager.storage.clear();
    }
}
