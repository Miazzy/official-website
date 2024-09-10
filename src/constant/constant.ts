// 时间间隔枚举
export enum TimeInterval {
  ONE_SECOND = 1000 * 1,
  FIVE_SECOND = 1000 * 5,
  TEN_SECOND = 1000 * 10,
  HALF_MINUTE = 60000 * 0.5,
  ONE_MINUTE = 60000 * 1,
  FIVE_MINUTE = 60000 * 5,
  TEN_MINUTE = 60000 * 10,
  HALF_HOUR = 1800000 * 1,
  ONE_HOUR = 3600000 * 1,
  TWO_HOUR = 3600000 * 2,
  THREE_HOUR = 3600000 * 3,
  FOUR_HOUR = 3600000 * 4,
  FIVE_HOUR = 3600000 * 5,
  TEN_HOUR = 3600000 * 10,
}

// 锁名称
export enum Lock {
  CommonLock = 'COMMON_LOCK',
  RequestLock = 'REQUEST_LOCK',
  ThreadLock = 'THREAD_LOCK',
}

// 常用常量
export enum ComConstant {
  ReloadTime = 'RELOAD_TIME__',
}

export enum MessageName {
  RELOAD_FRAMEWORK = 'RELOAD_FRAMEWORK',
  RELOAD_TIME = 'RELOAD_TIME',
  FRAMEWORK_PUBLISH_TIME = 'FRAMEWORK_PUBLISH_TIME',
}

export enum StoreName {
  CACHE_STORE = 'cache-store',
  MEM_STORE = 'mem-store',
  SYS_STORE = 'sys-store',
  LOG_STORE = 'log-store',
  REC_STORE = 'rec-store',
  DATA_STORE = 'data-store',
}

export enum TaskName {
  EXEC_TODO_TASK = 'EXEC_TODO_TASK',
  LOAD_BUNDLE_TASK = 'LOAD_BUNDLE_TASK',
}

// 配置信息
export const Config = {
  //
};

// 附件预览枚举
export enum FILE_PREVIEW {
  
}