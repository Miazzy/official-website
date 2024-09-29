import { SetManager } from '../manager/SetManager';

/**
 * 防抖函数
 */
export const throttle = (func: Function, limit: number, llimit: number = limit) => {
  let lastTime = 0;
  let llTime = 0;
  return async function (...args) {
    const now = Date.now();
    const flag = now - lastTime > limit && now - llTime > llimit;
    llTime = lastTime;
    if (flag) {
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
 * 追加媒体查询
 */
export const addMediaQuery = async (widths: [number, number], heights: [number, number], cssContent: string) => {
  // 校验参数长度
  if (widths.length!== 2 || heights.length!== 2) {
    throw new Error('Widths and heights arrays must contain exactly two numbers (min and max).');
  }

  // 设置媒体查询范围
  const [maxWidth, minWidth] = widths;
  const [maxHeight, minHeight] = heights;

  // 校验参数类型
  if (isNaN(minWidth) || isNaN(maxWidth) || isNaN(minHeight) || isNaN(maxHeight)) {
    throw new Error('All width and height values must be valid numbers.');
  }

  // 设置样式 className
  const className = `w-${minWidth}-${maxWidth} h-${minHeight}-${maxHeight}`;
  const mediaQueryKey = `${minWidth}-${maxWidth}-${minHeight}-${maxHeight}`;

  if (!SetManager.getInstance().has(mediaQueryKey)) {
    const styleElement = document.createElement('style');
    styleElement.textContent = `@media only screen and (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) and (min-height: ${minHeight}px) and (max-height: ${maxHeight}px) { ${cssContent} }`;
    styleElement.className = className;
    document.head.appendChild(styleElement);
    SetManager.getInstance().add(mediaQueryKey);
  }
};

/**
 * 处理Resize导致屏幕长宽变化的样式媒体查询功能
 */
export const handleResize = (index, event) => {
  const minWidth = parseInt(window.innerWidth / 5) * 5;
  const maxWidth = minWidth + 5;
  const minHeight = parseInt(window.innerHeight / 5) * 5;
  const maxHeight = minHeight + 100;

  if (minWidth > 1920) {
    const scale = (minWidth / 1920).toFixed(6);
    const wvalue = (100 / scale).toFixed(2);
    const diff = (minWidth - 1920);
    const ptop = ((0.234375) * diff + 50).toFixed(2);
  
    const cssContent = `
      .header .navbar {
        margin-left: calc(${(35 + diff/200).toFixed(2)}vw - 10px) !important;
        margin-top: ${(3.40 + (0.7/400) * diff).toFixed(2)}vh !important;
        transform: scale(${scale}) !important;
        transform-origin: top left !important;
      }
  
      .header .logo a {
        margin: ${(1.01 + (0.3/400) * diff).toFixed(2)}vh 0 0 ${(11.34 + (0.3/400) * diff).toFixed(2)}vw !important;
  
        .logo {
          width: 7.5vw !important;
  
          img {
            width: 7.5vw !important;
          }
        }
      }
  
      .home .carousel-container .indicator {
        right: 6.5vw !important;
  
        .segment {
          height: 6vh !important;
        }
      }
  
      .home .copyright {
        bottom: 2vh !important;
        right: 26vh !important;
        font-size: 0.8vw !important;
      }
        
      #container.plans {
        main {
          transform: scale(${scale}) !important;
          transform-origin: top left !important;
        }
        .plans.container .middle-content .index-container {
          margin: 60px 0 0 80px !important;
          .indicator-component {
            margin: 20px 0 0 60px !important;
            transform: scale(1.25) !important;
          }
        }
        .plans.container .bottom-section .business-container {
          margin: ${(250 + (20/1920) * minWidth).toFixed(2)}px 80px 0px calc(${(25.25 - (10/1920) * (minWidth - 1920)).toFixed(2)}vw) !important;
        }
      }
      #container.projectCases {
        main {
          transform: scale(${scale}) !important;
          transform-origin: top left !important;
        }
      }
      #container.informationCenter {
        main {
          transform: scale(${scale}) !important;
          transform-origin: top left !important;
        }
        .information-center {
          .banner-box {
            width: ${wvalue}% !important;
          }
          .content-box {
            width: ${wvalue}% !important;
            margin: 0 !important;
          }
        }
      }
      #container.aboutus {
        main {
          transform: scale(${scale}) !important;
          transform-origin: top left !important;
        }
        .aboutus.container .submid-section {
          width: 100% !important;
        }
        .aboutus.container .bottom-section {
          overflow: hidden;
          .left-content,
          .right-content {
            width: ${((wvalue - 8) / 2).toFixed(2)}%;
          }
        }
        footer {
          padding-top: ${ptop}px !important;
        }
      }
      .footer {
        transform: scale(${scale}) !important;
        width: ${wvalue}% !important;
        transform-origin: top left !important;
        margin-top: ${diff - 55}px !important;
        .footer-content-column:last-child {
          margin: 0 0 0 110px !important;
        }
      }`;
      
    // 追加媒体查询
    addMediaQuery([maxWidth, minWidth], [maxHeight, minHeight], cssContent);
  }
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