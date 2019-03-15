import baseInfoField from './baseInfoField'
/**
 * 值恒定的点位，一般为燃料与介质
 */
export default class fixedValueField extends baseInfoField{
    constructor (value){
      super()
      this.value = value
    }
    haveValue(...bytes){
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
