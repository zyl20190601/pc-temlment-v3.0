import dayjs from 'dayjs'

/**
 * 格式化时间
 * @param val 格式化样式
 */
Object.defineProperty(Date.prototype, 'format', {
  writable: true,
  enumerable: false, // 不可枚举
  configurable: true,
  value: function (val = 'YYYY-MM-DD') {
    return dayjs(this).format(val || 'YYYY-MM-DD');
  }
});

/**
 * 格式化时间 'YYYY-MM-DD HH:mm'
 */
Object.defineProperty(Date.prototype, 'datetime', {
  writable: true,
  enumerable: false, // 不可枚举
  configurable: true,
  value: function () {
    return dayjs(this).format('YYYY-MM-DD HH:mm');
  }
});

/**
 * 格式化时间 'YYYY-MM-DD HH:mm:ss'
 */
Object.defineProperty(Date.prototype, 'dateTime', {
  writable: true,
  enumerable: false, // 不可枚举
  configurable: true,
  value: function () {
    return dayjs(this).format('YYYY-MM-DD HH:mm:ss');
  }
});

/**
 * 格式化时间 'HH:mm'
 */
Object.defineProperty(Date.prototype, 'time', {
  writable: true,
  enumerable: false, // 不可枚举
  configurable: true,
  value: function () {
    return dayjs(this).format('HH:mm');
  }
});
