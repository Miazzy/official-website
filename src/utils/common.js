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