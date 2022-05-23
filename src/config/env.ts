/** 是 开发环境 */
const isDev = process.env.NODE_ENV === 'development';

/** 不是 开发环境 */
const notDev = process.env.NODE_ENV !== 'development';

/** 是 测试环境 */
const isTest = process.env.VUE_APP_TITLE === 'test';

/** 不是 测试环境 */
const notTest = process.env.VUE_APP_TITLE !== 'test';

/** 是 生产环境 */
const isPro = process.env.NODE_ENV === 'production';

/** 不是 生产环境 */
const notPro = process.env.NODE_ENV !== 'production';

module.exports = {
  isDev,
  notDev,
  isTest,
  notTest,
  isPro,
  notPro
}
