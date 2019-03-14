import device_CTL_NJZJ_IPK2 from "./device_CTL_NJZJ_IPK2";

export default class device_CTL_NJZJ_IPK2_485 extends device_CTL_NJZJ_IPK2{
    constructor(){
        super()
        this.byteArrayLength=1749
    }
    handleByteField(byteField,bytes=[]){
        if(byteField.haveValue(bytes[byteField.startIndex],bytes[byteField.startIndex+1])){
            this.addField(byteField)
        }
    }
    handleDeviceNo(bytes=[]){
        this.deviceNo=""
    }
    getMode(){
      return -1
    }
    getDeviceFocusFields(){
      let map = super.getDeviceFocusFields()
      let i = map[this.deviceModel.key_point_run_hours].value
      map[this.deviceModel.key_point_run_days].value = i/24
      map[this.deviceModel.key_point_run_days].valueString = parseInt(i/24)+ "天"

      map[this.deviceModel.key_point_run_hours].value = i%24
      map[this.deviceModel.key_point_run_hours].valueString = i%24 + "时"
      return map
    }
}
