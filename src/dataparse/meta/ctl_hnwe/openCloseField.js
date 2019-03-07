import parentOpenCloseField from '../openCloseField'
export default class openCloseField extends parentOpenCloseField {
    haveValue(...bytes){
        this.value = bytes[0] & 0xFF
        let i = 1 << this.bit
        if((i & this.value) == i){
            this.value = 1
        }else{
            this.value = 0
        }
        return true
    }
    getValueString(){
        if (JSON.stringify(this.valueMap) != '{}') {
            return this.valueMap[this.value]
        } else {
            return super.getValueString()
        }
    }
}