// 环境变量
const {
  isDev,
  notDev,
  isTest,
  notTest,
  isPro,
  notPro } = require('./env');

/**
 * 接口请求公共参数
 */
const QUERY_INFO_CONFIG = {
  app_id: '',
  version: '1.0',
  charset: 'UTF-8',
}

// api 公共前缀
const prefix = ''

// MD5 密钥
const key = ''

export {
  key,
  QUERY_INFO_CONFIG,
  isDev,
  notDev,
  isTest,
  notTest,
  isPro,
  notPro,
  prefix
}

