// 获取36进制的时间戳
const getDayTimestamp = () => {
  let now = new Date();
  let yy = Number(now.getFullYear() % 100 % 36).toString(36);
  let mn = Number(now.getMonth() % 36).toString(36);
  let dd = Number(now.getDate() % 36).toString(36);
  let hr = Number(now.getHours() % 36).toString(36);
  let mi =  Number(now.getMinutes() % 36).toString(36);
  let ss = Number(now.getSeconds() % 36).toString(36);
  return (yy + mn + dd + hr + mi + ss).toUpperCase();
};

// 获取URL参数
const getParamByName = (param) => {
  var searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(param);
};

// 页面刷新函数
const handleReload = () => {
  if (window.self != window.top) {
    return;
  }
  const url = window.location.origin + window.location.pathname;
  const now = getDayTimestamp();
  const lastTime = getParamByName('T') || 0;
  if (Math.abs(parseInt(now, 36) - parseInt(lastTime, 36)) > 3600 * 24) {
    window.location.href = url + '?T=' + now + window.location.hash;
  }
};

// 注册 Reload 监听函数
const registerReload = () => {
  // 刷新前执行操作
  window.addEventListener('beforeunload', handleReload);
  // 刷新后执行操作
  window.addEventListener('load', handleReload);
};

// 取消 Reload 监听函数
const unRegisterReload = () => {
  // 刷新前执行操作
  window.removeEventListener('beforeunload', handleReload);
  // 刷新后执行操作
  window.removeEventListener('load', handleReload);
};

// 执行监听
registerReload();
