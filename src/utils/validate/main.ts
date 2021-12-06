/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// 校验是否是数值类型
export function checkNumber(rule: any, value: string, callback: any, root: ObjectType = {}) {
  console.log(root)
  if (value && isNaN(Number(value))) {
    callback(new Error('必须为数值'))
  }
  callback()
}

// 校验不能为负值
export function checkNegativeNumber(rule: any, value: string, callback: any, root: ObjectType = {}) {
  console.log(root)
  if (value && Number(value) < 0) {
    callback(new Error('数值不能小于0'))
  }
  callback()
}

// 校验是否大于0的数值
export function checkPositiveNumber(rule: any, value: any, callback: any, root: ObjectType = {}) {
  console.log(root)
  if ((value === 0) || (value && Number(value) <= 0)) {
    callback(new Error('数值必须大于0'))
  }
  callback()
}

// 校验小数点, 最多两位
export function checkPoint(rule: any, value: string, callback: any, root: ObjectType = {}) {
  console.log(root)
  if (value && (Number(value) < 0 ? !/^\d+(\.\d{1,2})?$/.test((-Number(value)).toString()) : !/^\d+(\.\d{1,2})?$/.test(value.toString()))) {
    callback(new Error('最多两位小数'))
  }
  callback()
}

// 校验小数点, 最多三位
export function checkOtherPoint(rule: any, value: string, callback: any, root: ObjectType = {}) {
  console.log(root)
  if (value && (Number(value) < 0 ? !/^\d+(\.\d{1,3})?$/.test((-Number(value)).toString()) : !/^\d+(\.\d{1,3})?$/.test(value.toString()))) {
    callback(new Error('最多三位小数'))
  }
  callback()
}

// 校验范围 first:[0,100] second:[0,100) third(0,100] fourth(0,100)
export function checkRange(rule: any, value: string, callback: any, model = 'first', root: ObjectType = {}) {
  console.log(root)
  model = ['first', 'second', 'third', 'fourth'].includes(model) ? model : 'first'
  const rangeObj: ObjectType = {
    first: {
      valid: Number(value) > 100 || Number(value) < 0,
      message: '取值范围[0,100]'
    },
    second: {
      valid: Number(value) >= 100 || Number(value) < 0,
      message: '取值范围[0,100)'
    },
    third: {
      valid: Number(value) > 100 || Number(value) <= 0,
      message: '取值范围(0,100]'
    },
    fourth: {
      valid: Number(value) >= 100 || Number(value) <= 0,
      message: '取值范围(0,100)'
    },
  }
  const { valid, message } = rangeObj[model]
  if (valid) {
    callback(new Error(message))
  }
  callback()
}

// 校验联系电话
export function checkPhone(rule: any, value: string, callback: any, root: ObjectType = {}) {
  console.log(root)
  if (value && !/^[0-9\-()（）]+$/g.test(value)) {
    callback(new Error('请输入正确的联系电话'))
  }
  callback()
}

// 身份证号码
export function checkCertificateNumber(rule: any, value: string | number, callback: any, root: ObjectType = {}) {
  console.log(root)
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/ // 结尾可以为数字或者字母x
  if (value && !reg.test(value.toString())) {
    callback(new Error('请输入正确的身份证号'))
  }
  callback()
}

// 邮箱校验
export function checkEmail(rule: any, value: string | number, callback: any, root: ObjectType = {}) {
  console.log(root)
  const reg = /^([a-zA-Z]|[0-9])(\w)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
  if (value && !reg.test(value.toString())) {
    callback(new Error('请输入正确的邮箱地址'))
  }
  callback()
}




/** 额外传参 示例
 * {
        validator: (rule: any, value: string, callback: any) => {
          checkRange(rule, value, callback, 'second')
        },
        trigger: 'blur'
      }
*/
