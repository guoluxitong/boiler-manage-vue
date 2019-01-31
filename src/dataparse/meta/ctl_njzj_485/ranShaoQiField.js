import parentDeviceField from '../deviceField'
export default class ranShaoQiField extends parentDeviceField {
  haveValue(...bytes){
    this.value = (bytes[1]&0xFF)  | ((bytes[0]&0xFF) << 8)
    if (0x7FFF != this.value)
    {
      this.value = bytes[1]&0xFF
      return true
    }
    return false
  }
  getValueString(){
    if(JSON.stringify(this.valueMap)!='{}'){
      return this.valueMap[this.value]
    }else{
      return super.getValueString()
    }
  }
}
