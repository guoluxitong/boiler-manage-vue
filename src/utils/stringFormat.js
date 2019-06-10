/**
 * js字符串格式化扩展方法
 * @param len 长度
 * @param type  类型
 * @param data  要格式化的数据
 * 只扩展了对number的格式化
 */
export function format(type,len,data) {
  if (type == 'd') {
    let str = data.toString(10)
    while (str.length < len) {
      str = "0"+ str
    }
    return str
  }else if (type == 'x') {
    let str = data.toString(16)
    while (str.length < len) {
      str = "0" + str
    }
    return str
  }
}
