import parentBaseInfoField from '../baseInfoField'
export default class baseInfoField extends parentBaseInfoField {
  haveValue(...bytes){
    this.value=((bytes[0] & 0xFF) << 8) | (bytes[1] & 0xFF);
    return this.value != 0x7FFF;
  }
  getValueString(){
    if(JSON.stringify(this.valueMap)!='{}'){
      return this.valueMap[this.value]
    }else{
      return super.getValueString()
    }
  }
}
