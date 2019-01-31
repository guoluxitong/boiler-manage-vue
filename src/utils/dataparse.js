export function byteToString(arr) {
  var str = ''
  for(var i = 0; i < arr.length; i++) {
    str += String.fromCharCode(arr[i]);
  }
  return str;
}

/**
 * 将两个字节的数组转换为整数-短整型
 * @param byteData 字节数组
 * @returns {number}
 */
export function getInt16Number(byteData){
    return getDataView(byteData).getInt16(0)
}

/**
 * 将两个字节的数组转换为整数-无符号短整型
 * @param byteData 字节数组
 * @returns {number}
 */
export function getUnit16Number(byteData){
  return getDataView(byteData).getUint16(0)
}


/**
 * 将四个字节的数组转换为整数
 * @param byteData
 * @returns {number}
 */
export function getUnit32Number(byteData){
  return getDataView(byteData).getUint32(0)
}

/**
 * 将四字节的数组转换为浮点数
 * @param byteData
 * @returns {number}
 */
export function getFloat32Number(byteData){
  return getDataView(byteData).getFloat32(0)
}

/**
 * dataView开辟空间进行解析
 * @param byteData
 * @returns {DataView}
 */
function getDataView(byteData) {
  var buffer = new ArrayBuffer(byteData.length)
  let dataView = new DataView(buffer);
  for(let i=0;i<byteData.length;i++){
    dataView.setUint8(i,byteData[i]);
  }
  return dataView;
}
