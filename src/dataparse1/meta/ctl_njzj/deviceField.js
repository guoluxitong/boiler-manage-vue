import parentDeviceField from '../deviceField'
export default class deviceField extends parentDeviceField {
  constructor(){
    super()
    this.sb = "";
  }
  haveValue(...bytes){
    this.value= (bytes[1] & 0xFF) | (bytes[0] & 0xFF) << 8;
    if (0x7FFF == this.value){
      return false;
    }
    if(JSON.stringify(this.valueMap)!='{}'){
      let v = (bytes[0] &0xFF) | 0x3F;
      if (0xC0 == (v & 0xC0)) {
        this.sb+=this.valueMap[0xC0];
        this.sb+='/';
      } else {
        this.sb+=this.valueMap[0x3F];
        this.sb+='/';
      }
      v = (bytes[0] &0xFF) | 0xCF;
      if (0x30 == (v & 0x30)) {
        this.sb+=this.valueMap[0x30];
        this.sb+='/';
      } else {
        this.sb+=this.valueMap[0xCF];
        this.sb+='/';
      }
      v = (bytes[0] &0xFF) | 0xF0;
      if (0x0F == (v & 0x0F)) {
        this.sb+=this.valueMap[0x0F];
        this.value = (bytes[1] | 0x80) & 0xFF;
      } else {
        this.sb+=this.valueMap[0xF0];
        this.value =  bytes[1] & 0xFF;
      }
    }
    return true;
  }
  getValueString(){
    return this.sb
  }
}
