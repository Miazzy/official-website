// 防抖函数
export const throttle = (func, limit) => {
    let lastTime = 0;
    return async function (...args) {
        const now = Date.now();
        if (now - lastTime > limit) {
            await func(...args);
            lastTime = now;
        }
    };
};

/**
 * sleep函数
 * @param waitTime
 */
export const sleep = (waitTime: number) => {
    return new Promise((resolve) => setTimeout(resolve, waitTime));
};
