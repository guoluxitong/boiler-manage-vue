import baseInfoField from '../baseInfoField'

export default class systemStatusField extends baseInfoField{
  haveValue(...bytes){
    this.value = this.startIndex
    return true
  }
  getValueString(){
    if(JSON.stringify(this.valueMap)!='{}'){
      return this.valueMap[this.value]
    }else{
      return super.getValueString()
    }
  }
}
