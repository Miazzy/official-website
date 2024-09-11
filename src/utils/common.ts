/**
 * 防抖函数
 */
export const throttle = (func: Function, limit: number) => {
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
 */
export const sleep = (waitTime: number) => {
    return new Promise((resolve) => setTimeout(resolve, waitTime));
};

/**
 * 延时执行函数
 */
export const setTimexec = (callback: Function, intervals: number[]) => {
    intervals.forEach((interval) => {
        setTimeout(() => {
        callback();
        }, interval);
    });
};
  
/**
 * 消息提示函数
 */
export const message = {
    loading: (title, content, duration = 3000) => {
      // 创建提示容器
      const container = document.createElement('div');
      container.style.position = 'fixed';
      container.style.top = '0';
      container.style.left = '0';
      container.style.width = '100%';
      container.style.height = '100%';
      container.style.display = 'flex';
      container.style.justifyContent = 'center';
      container.style.alignItems = 'center';
      container.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
      container.style.zIndex = '9999';
  
      // 创建提示框
      const messageBox = document.createElement('div');
      messageBox.style.position = 'relative';
      messageBox.style.padding = '30px 80px';
      messageBox.style.backgroundColor = '#fefefe01';
      messageBox.style.borderRadius = '10px';
      messageBox.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.03)';
      messageBox.style.textAlign = 'left';
      messageBox.style.maxWidth = '80%';
      messageBox.style.maxHeight = '80%';
      messageBox.style.overflowY = 'auto';
  
      // 创建标题
      const titleElement = document.createElement('div');
      titleElement.style.fontSize = '20px';
      titleElement.style.fontWeight = 'bold';
      titleElement.style.marginBottom = '10px';
      titleElement.textContent = title;
  
      // 创建内容
      const contentElement = document.createElement('div');
      contentElement.style.fontSize = '16px';
      contentElement.style.color = '#409eff';
      contentElement.textContent = content;
  
      // 将标题添加到提示框
      if (title) {
        messageBox.appendChild(titleElement);
      }
  
      // 将内容添加到提示框
      messageBox.appendChild(contentElement);
  
      // 将提示框添加到容器
      container.appendChild(messageBox);
  
      // 将容器添加到 body
      document.body.appendChild(container);
  
      // 设置定时器移除提示框
      setTimeout(() => {
        document.body.removeChild(container);
      }, duration);
    },
  };