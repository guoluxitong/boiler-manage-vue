import device_CTL from './device_CTL'

export default class device_CTL_HNWE extends device_CTL{
    handleByteField(byteField,bytes=[]){

        if (byteField.bytesLength == 1) {
          if (byteField.haveValue(bytes[byteField.startIndex])) {
            this.addField(byteField)
          }
        }else {
          if (byteField.haveValue(bytes[byteField.startIndex],bytes[byteField.startIndex+1])){
            this.addField(byteField)
          }
        }
    }
    handleDeviceNo(bytes=[]){
        return ""
    }
    getDeviceFocusFields(){
        let map=this.getBaseInfoFields()
        let runLife=map[this.deviceModel.key_point_run_life].value
        map[this.deviceModel.key_point_run_days].value=runLife/24
        map[this.deviceModel.key_point_run_hours].value=runLife%24
        return map
    }
    getMode(){
        return 0
    }
    getPowerInfo(){
        return 0
    }
    getBeng(){
        return []
    }
    getFan(){
        return []
    }
}
