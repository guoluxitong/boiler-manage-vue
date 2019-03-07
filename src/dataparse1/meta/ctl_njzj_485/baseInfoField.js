import parentBaseInfoField from '../baseInfoField'
export default class baseInfoField extends parentBaseInfoField {
  haveValue(...bytes){    
    this.value= bytes[1] & 0xFF | (bytes[0] & 0xFF) << 8;
    return 0x7FFF != this.value;
  }
  getValueString(){
    if(JSON.stringify(this.valueMap)!='{}'){
      return this.valueMap[this.value]
    }else{
      return super.getValueString()
    }
  }
}
