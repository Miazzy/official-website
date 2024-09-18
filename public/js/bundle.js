// 消息名称常量
const MessageName = {
  JS: 'js',
  CSS: 'css',
  TEN_SECONDS: 10000,
  SOME_SECONDS: 100000,
  INDEX_JS: 'INDEX_JS',
  INDEX_CSS: 'INDEX_CSS',
  RELOAD_FRAMEWORK: 'RELOAD_FRAMEWORK',
  RELOAD_TIME: 'RELOAD_TIME',
  FRAMEWORK_PUBLISH_TIME: 'FRAMEWORK_PUBLISH_TIME',
};

// 时间间隔常量
const TimeInterval = {
  ONE_SECOND: 1000 * 1,
  FIVE_SECOND: 1000 * 5,
  TEN_SECOND: 1000 * 10,
  HALF_MINUTE: 60000 * 0.5,
  ONE_MINUTE: 60000 * 1,
  FIVE_MINUTE: 60000 * 5,
  TEN_MINUTE: 60000 * 10,
  HALF_HOUR: 1800000 * 1,
  ONE_HOUR: 3600000 * 1,
  TWO_HOUR: 3600000 * 2,
  THREE_HOUR: 3600000 * 3,
  FOUR_HOUR: 3600000 * 4,
  FIVE_HOUR: 3600000 * 5,
  TEN_HOUR: 3600000 * 10,
};

// 缓存Map
const cacheMap = new Map();

// 计算UUID函数
const buildUUID = () => {
  const hexList = [];
  let uuid = '';
  for (let i = 0; i <= 15; i++) {
    hexList[i] = i.toString(16);
  }
  for (let i = 1; i <= 36; i++) {
    if (i === 9 || i === 14 || i === 19 || i === 24) {
      uuid += '-';
    } else if (i === 15) {
      uuid += 4;
    } else if (i === 20) {
      uuid += hexList[(Math.random() * 4) | 8];
    } else {
      uuid += hexList[(Math.random() * 16) | 0];
    }
  }
  return uuid.replace(/-/g, '');
};

// 计算UUID函数
const buildShortUUID = (limit = 4) => {
  return buildUUID().slice(0, limit);
};

// 防抖函数
const throttle = (func, limit) => {
  let lastTime = 0;
  return async function (...args) {
    const now = Date.now();
    if (now - lastTime > limit) {
      await func(...args);
      lastTime = now;
    }
  };
};

// 延迟执行函数
const setTimeoutExecs = (callback, intervals) => {
  intervals.forEach((interval) => {
    setTimeout(() => {
      callback();
    }, interval);
  });
};

// sleep函数
const sleep = (waitTime) => {
  return new Promise((resolve) => setTimeout(resolve, waitTime));
};

// 处理框架Reload函数
const handleFrameReload = async (message) => {
  try {
    if (window?.top?.location) {
      const indexJs = cacheMap.get(MessageName.INDEX_JS)
      prefetchLink(indexJs);
      await sleep(1500);
      if (message === true || message?.isReload === true) {
        console.info('new version is published and reload...');
        window.top.location.reload();
      }
    }
  } catch (error) {
    console.error('frame reload error:', error);
  }
};

// 处理重新加载
const handleReloadFn = throttle(async (message) => {
  const time = parseInt(localStorage.getItem(MessageName.RELOAD_TIME));
  const lastTime = time || 0;
  const nowTime = new Date().getTime();
  if (nowTime - lastTime > TimeInterval.ONE_HOUR && window.location.hostname !== 'localhost') {
    localStorage.setItem(MessageName.RELOAD_TIME, nowTime)
    console.info('new version is published and system is reloaded.', message);
    await sleep(1000);
    handleFrameReload(message);
  }
}, TimeInterval.ONE_HOUR);

// 预加载Link函数
const prefetchLink = (file) => {
  const link = document.createElement('link');
  const type = file.endsWith('.js') ? 'js' : 'css';
  if (type === MessageName.JS) {
    link.rel = 'modulepreload';
    link.class = "link";
    link.as = "script";
    link.crossorigin = true;
    link.href = `assets/${file}?_t=` + buildShortUUID();
  } else {
    link.rel = 'stylesheet';
    link.class = "link";
    link.as = "style";
    link.crossorigin = true;
    link.href = `assets/${file}?_t=` + buildShortUUID();
  }
  document.head.appendChild(link);
  // 设置缓存标记
  if (idbKeyval && Reflect.has(idbKeyval, 'set')) {
    idbKeyval.set(file, 'Y');
  }
};

// 预加载Link函数
const preloadLink = (file) => {
  const link = document.createElement('link');
  const type = file.endsWith('.js') ? 'js' : 'css';
  link.rel = 'preload';
  link.class = "link"
  link.as = type === 'js' ? 'script' : 'style';
  link.href = `assets/${file}?_t=` + buildShortUUID();
  document.head.appendChild(link);
  // 设置缓存标记
  if (idbKeyval && Reflect.has(idbKeyval, 'set')) {
    idbKeyval.set(file, 'Y');
  }
};

const rmPreFetchLink = () => {
  const links = document.getElementsByTagName('link');
  for (let i = links.length - 1; i >= 0; i--) {
    if (links[i].getAttribute('rel') === 'modulepreload') {
      links[i].parentNode.removeChild(links[i]);
    }
  }
  document.body.classList.add('bundle-loaded');
}

// 检测是否为IndexJS文件
const checkIndexJS = (file) => {
  if (file.startsWith('index.') && file.endsWith('.js')) {
    return true;
  }
}

// 检测是否为IndexCSS文件
const checkIndexCSS = (file) => {
  if (file.startsWith('index.') && file.endsWith('.css')) {
    return true;
  }
}

// 添加 indexJs 文件
const addIndexJs = (name) => {
  const script = document.createElement('script');
  script.src = '/assets/' + name + '?_t=' + buildShortUUID();
  script.crossorigin = true;
  script.type = 'module';
  document.body.appendChild(script);
}

// 删除indexJs文件
const rmIndexJs = () => {
  const scripts = document.getElementsByTagName('script');
  for (let i = scripts.length - 1; i >= 0; i--) {
    const src = scripts[i].getAttribute('src')?.split('?')[0];
    if (src && src.match(/\/assets\/index.*\.js$/)) {
      scripts[i].parentNode.removeChild(scripts[i]);
    }
  }
};

// 获取indexJs文件
const getIndexJs = () => {
  const script = document.getElementsByTagName('script');
  for (let i = script.length - 1; i >= 0; i--) {
    const src = script[i].getAttribute('src')?.split('?')[0];
    if (src.match(/\/assets\/index.*\.js$/)) {
      return src.split('/assets/')[1];
    }
  }
};

// 添加 indexCss 文件
const addIndexCss = (name) => {
  const link = document.createElement('link');
  link.href = '/assets/' + name + '?_t=' + buildShortUUID();
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}

// 删除indexCss文件
const rmIndexCss = () => {
  const links = document.getElementsByTagName('link');
  for (let i = links.length - 1; i >= 0; i--) {
    const src = links[i].getAttribute('href')?.split('?')[0];
    const isStylesheet = links[i].getAttribute('rel') === 'stylesheet';
    const isCss = src.match(/\/assets\/index.*\.css$/);
    if (isStylesheet && isCss) {
      links[i].parentNode.removeChild(links[i]);
    }
  }
};

// 获取indexCss文件
const getIndexCss = () => {
  const links = document.getElementsByTagName('link');
  for (let i = links.length - 1; i >= 0; i--) {
    const src = links[i].getAttribute('href')?.split('?')[0];
    const isStylesheet = links[i].getAttribute('rel') === 'preload';
    const isCss = src.match(/\/assets\/index.*\.css$/);
    if (isStylesheet && isCss) {
      return src.split('/assets/')[1];
    }
  }
};

// 加载bundle信息
const fetchBundle = (isReloadIndexFile = true) => {
  fetch('bundle.json?_t=' + buildShortUUID())
    .then((response) => response.json())
    .then(async (data) => {
      try {
        if (idbKeyval && typeof idbKeyval === 'object') {
          if (Reflect.has(data, 'files')) {
            let count = 0;
            for (let file of data?.files) {
              try {
                if (file.endsWith('.js') || file != 'index.js') {
                  if (++count % 15 === 0) {
                    await sleep(MessageName.TEN_SECONDS);
                  }
                  prefetchLink(file);
                  if (isReloadIndexFile && checkIndexJS(file)) {
                    cacheMap.set(MessageName.INDEX_JS, file);
                  } else if (isReloadIndexFile && checkIndexCSS(file)) {
                    cacheMap.set(MessageName.INDEX_CSS, file);
                  }
                }
              } catch (error) {
                console.error('prefetch data file error:', error);
              }
            }
          }
        }
      } catch (error) {
        console.error('prefetch data files error:', error);
      }
    })
    .catch((error) => {
      console.error('Error loading bundled files:', error);
    });
};

// 加载bundle文件函数
const handleLoadBundle = () => {
  // 开发环境不执行此操作
  if (['5173'].includes(window.location.port)) {
    return;
  }
  // 开发环境不执行此操作
  if (['127.0.0.1'].includes(window.location.hostname)) {
    return;
  }
  fetch('mainfest.json?_t=' + buildShortUUID())
    .then((response) => response.json())
    .then(async (data) => {
      try {
        if (Reflect.has(data, 't')) {
          const datetime = Reflect.get(data, 't');
          const publishedLastTime = (await idbKeyval.get(MessageName.FRAMEWORK_PUBLISH_TIME)) || 0;
          if (publishedLastTime && publishedLastTime != datetime) {
            fetchBundle(true);
            idbKeyval.set(MessageName.FRAMEWORK_PUBLISH_TIME, datetime);
          } else if (!document.body.classList.contains('bundle-loaded')) {
            fetchBundle(true);
            idbKeyval.set(MessageName.FRAMEWORK_PUBLISH_TIME, datetime);
          }
        }
      } catch (error) {
        console.error('load mainfest json file error:', error);
      }
    })
    .catch(() => {
      fetchBundle();
    });
};

window.handleLoadBundle = handleLoadBundle;
setTimeout(handleLoadBundle, MessageName.SOME_SECONDS);
