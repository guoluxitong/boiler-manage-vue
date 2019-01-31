/* 正数、负数、和小数*/
export function validatePositiveAndSmallAndFloatNum(textval) {
    const urlregex = /^(\-|\+)?\d+(\.\d+)?$/
    return urlregex.test(textval)
}

/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validateAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * 验证真实姓名
 * @param str
 * @returns {boolean}
 */
export function validateRealName(str) {
  var reg =  /^[\u4e00-\u9fa5]+$/
  return reg.test(str)
}

/**
 * 验证密码
 * @param str
 * @returns {boolean}
 */
export function validatePassWord(str) {
  var reg =  /^.{6,}$/
  return reg.test(str)
}

/**
 * 验证手机号
 * @param str
 * @returns {boolean}
 */
export function validatePhone(str) {
  var reg = /^1[34578]\d{9}$/
  return reg.test(str)
}

/**
 * 验证微信号
 * @param str
 * @returns {boolean}
 */
export function validateWeiXin(str) {
  var reg = /^[a-zA-Z\d_]{5,}$/
  return reg.test(str)
}

/**
 * 验证QQ号
 * @param str
 * @returns {boolean}
 */
export function validateQQ(str) {
  var reg = /^[1-9]\d{4,9}$/
  return reg.test(str)
}
/**
 * validate email
 * @param email
 * @returns {boolean}
 */
export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

