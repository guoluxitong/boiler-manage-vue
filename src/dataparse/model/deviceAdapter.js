function loadDevicePointMap(type) {
  return new Promise((resolve, reject) => {
    import('@/dataparse/map/devicePointMap_'+type).then(data=>{
      resolve(new data.default())
    }).catch(function(r){
        console.log(r);
    })
  })
}
function loadDeviceModel(type) {
  return new Promise((resolve, reject) => {
    import('@/dataparse/model/device_'+type).then(data=>{
      resolve(new data.default())
    }).catch(function(r){
    })
  })
}
export function getDeviceByByteDataAndType(byteData=[],type='') {
    return new Promise((resolve, reject) => {
      Promise.all([loadDevicePointMap(type),loadDeviceModel(type)]).then((data)=>{
        let devicePointMap=data[0]
        let device=data[1]
        if(device.validateByteLength(byteData.length)){
          reject(null)
        }
        const pointMap=devicePointMap.getPointMap
        device.handleDeviceNo(byteData)
        for(let key in pointMap){
          let byteField=pointMap[key]
          device.handleByteField(byteField,byteData)
        }
        resolve(device)
      }).catch(function(r){
          console.log(r);
      })
    }).catch(function(r){
        console.log(r);
    })
}
