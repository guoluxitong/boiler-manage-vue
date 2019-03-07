import parentExceptionField from '../exceptionField'
export default class exceptionField  extends parentExceptionField {
    haveValue(...bytes){
        this.value = bytes[0]& 0xFF
        return true
    }
    getValueString(){
        if (JSON.stringify(this.valueMap) != '{}') {
            this.title = this.valueMap[this.value]
            return this.valueMap[this.value]
        } else {
            return super.getValueString()
        }
    }
}