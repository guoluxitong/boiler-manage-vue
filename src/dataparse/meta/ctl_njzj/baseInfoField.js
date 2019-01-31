import parentBaseInfoField from '../baseInfoField'
export default class baseInfoField extends parentBaseInfoField {
  haveValue(...bytes){
    this.value=bytes[1] & 0xFF;
    return this.value != 0xFF;
  }
  getValueString(){
    if(JSON.stringify(this.valueMap)!='{}'){
      return this.valueMap[this.value]
    }else{
      return super.getValueString()
    }
  }
}
