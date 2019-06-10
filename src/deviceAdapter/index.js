var SdcSoftDevice_1 = require("devices-lib/devices/SdcSoftDevice");
var SdcSoftDevice = SdcSoftDevice_1.SdcSoftDevice
function loadDevicePointMap(type) {
  return new Promise((resolve, reject) => {
    let strs = type.split('_')
    import('devices-lib/map/zh-cn/' + strs.join('/')).then(
      data => {
        resolve(new data())
      }).catch(function (r) {
        console.log(r);
      })
  })
}
function loadDeviceModel(type) {
  return new Promise((resolve, reject) => {
    let strs = type.split('_')
    import('devices-lib/devices/' + strs.join('/')).then(data => {
      resolve(new data())
    }).catch(function (r) { })
  })
}
export function getDeviceByByteDataAndType(dataArray, type, power = SdcSoftDevice.POWER_MEDIA_VALUE_NULL, media = SdcSoftDevice.POWER_MEDIA_VALUE_NULL) {
  //console.log(type)
  return new Promise((resolve, reject) => {
    Promise.all([loadDevicePointMap(type), loadDeviceModel(type)]).then((data) => {
      let map = data[0]
      let device = data[1]
      if (device.validateFalse(dataArray.byteLength)) {
        reject(null)
      }
      map.getPointMap().each((key, value) => {
        device.handleByteField(value, dataArray);
      });
      if (device.getSubDeviceType() != SdcSoftDevice.NO_SUB_DEVICE_TYPE) {
        getSubDevice(type, device.getSubDeviceType(), dataArray).then(data => {
          // console.log('sub:')
          // console.log(data)
          if (data) {
            device = data
            device.power = device.getBaseInfoFields().getItem(SdcSoftDevice.KEY_POINT_POWER).value
            device.media = device.getBaseInfoFields().getItem(SdcSoftDevice.KEY_POINT_MEDIA).value
         
            resolve(device)
          }
          else {
            reject(null)
          }
        })
      } else {
        device.power = device.getBaseInfoFields().getItem(SdcSoftDevice.KEY_POINT_POWER).value
        device.media = device.getBaseInfoFields().getItem(SdcSoftDevice.KEY_POINT_MEDIA).value
       
        resolve(device)
      }
    }).catch(function (r) {
      console.log(r);
    })
  }).catch(function (r) {
    console.log(r);
  })
}
export function getCmdMapByDevice(device) {
  return new Promise((resolve, reject) => {
    let cmdMap = device.getCommands()
    resolve(cmdMap)
  }).catch(function (r) {
    console.log(r)
  })
}


function getSubDevice(type, sub, dataArray) {
  return new Promise((resolve, reject) => {
    let t = type + '_' + sub;
    Promise.all([loadDevicePointMap(t), loadDeviceModel(t)]).then((data) => {
      let map = data[0]
      let device = data[1]
      // console.log(map)
      // console.log(device)
      if (device.validateFalse(dataArray.byteLength)) {
        return null;
      }

      map.getPointMap().each((key, value) => {
        device.handleByteField(value, dataArray);
      });
      resolve(device)
    }).catch(function (r) {
      console.log(r);
    })
  })
}
