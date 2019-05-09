var SdcSoftDevice_1 = require("devices-lib/devices/SdcSoftDevice");
var SdcSoftDevice = SdcSoftDevice_1.SdcSoftDevice
function loadDevicePointMap(type) {
  /*let strs = type.split('_')
  let path = 'static/devices-lib/devices/' + strs.join('/');*/
  return new Promise((resolve, reject) => {
    let strs = type.split('_')
    import('devices-lib/map/zh-cn/' + strs.join('/')).then(
      data=>{
      resolve(new data())
    }).catch(function(r){
      console.log(r);
    })
  })
}
function loadDeviceModel(type) {
  return new Promise((resolve, reject) => {
    let strs = type.split('_')
    import('devices-lib/devices/' + strs.join('/')).then(data=>{
      resolve(new data())
    }).catch(function(r){})
    /*import('../model/device_'+type).then(data=>{
      resolve(new data.default())
    }).catch(function(r){
    })*/
  })
}
export function getDeviceByByteDataAndType(dataArray , type ,power = SdcSoftDevice.POWER_MEDIA_VALUE_NULL, media = SdcSoftDevice.POWER_MEDIA_VALUE_NULL, lang = 'zh-cn') {
  return new Promise((resolve, reject) => {
    Promise.all([loadDevicePointMap(type), loadDeviceModel(type)]).then((data) => {
      let map = data[0]
      let device = data[1]
      /* if(device.validateByteLength(byteData.length)){
        reject(null)
      } */
      if (device.validateFalse(dataArray.byteLength)) {
        reject(null)
      }
      /* const pointMap=devicePointMap.getPointMap
      device.handleDeviceNo(byteData)
      for(let key in pointMap){
        let byteField=pointMap[key]
        device.handleByteField(byteField,byteData)
      } */
      map.getPointMap().each((key, value) => {
        device.handleByteField(value, dataArray);
      });
      if (device.getSubDeviceType() != SdcSoftDevice.NO_SUB_DEVICE_TYPE) {
        let subDevice = getSubDevice(type, device.getSubDeviceType(), dataArray, lang)
        if (null == subDevice)
          return null;
        device = subDevice;
      }
      device.power =device.getBaseInfoFields().getItem(SdcSoftDevice.KEY_POINT_POWER).value
      device.media =device.getBaseInfoFields().getItem(SdcSoftDevice.KEY_POINT_MEDIA).value
      resolve(device)
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


function getSubDevice(type, sub, dataArray, lang = 'zh-cn') {
  let t = type + '_' + sub;
  Promise.all([loadDevicePointMap(type), loadDeviceModel(type)]).then((data) => {
    let map = data[0]
    let device = data[1]
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
  /* let device = this.createDeviceFunc(t);
  let map = this.createMapFunc(t, lang);
  if (device.validateFalse(data.byteLength)) {
    return null;
  }

  map.getPointMap().each((key, value) => {
    device.handleByteField(value, data);
  });
  return device; */
}

/* function getSdcSoftDevice(type, data, power = SdcSoftDevice.POWER_MEDIA_VALUE_NULL, media = SdcSoftDevice.POWER_MEDIA_VALUE_NULL, lang = 'zh-cn') {
  let device = this.createDeviceFunc(type);
  let map = this.createMapFunc(type, lang);

  if (device.validateFalse(data.byteLength)) {
    return null;
  }
  map.getPointMap().each((key, value) => {
    device.handleByteField(value, data);
  });
  if (device.getSubDeviceType() != SdcSoftDevice.NO_SUB_DEVICE_TYPE) {
    let subDevice: SdcSoftDevice | null = this.getSubDevice(type, device.getSubDeviceType(), data, lang);
    if (null == subDevice)
      return null;
    device = subDevice;
  }

  let powerUI = device.getBaseInfoFields().getItem(SdcSoftDevice.KEY_POINT_POWER);
  let mediaUI = device.getBaseInfoFields().getItem(SdcSoftDevice.KEY_POINT_MEDIA);
  if (powerUI && mediaUI) {
    if (power != SdcSoftDevice.POWER_MEDIA_VALUE_NULL &&
      media != SdcSoftDevice.POWER_MEDIA_VALUE_NULL) {
      powerUI.setValue(power);
      powerUI.setValueString(map.getPowerString(power));
      mediaUI.setValue(media);
      mediaUI.setValueString(map.getMediaString(media));

    } else {
      device.setPower(powerUI.getValue());
      device.setMedia(mediaUI.getValue());
    }
  }
  else {
    device.setPower(0);
    device.setMedia(0);
  }

  return device;
} */


