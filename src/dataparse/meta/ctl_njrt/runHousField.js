import parentBaseInfoField from '../baseInfoField'
export default class runHousField extends parentBaseInfoField {
    haveValue(...bytes){
        this.value=((bytes[0] & 0xFF) << 8) | (bytes[1] & 0xFF);
        return this.value
    }
    getValueString(){
        if (JSON.stringify(this.valueMap) != '{}') {
            return this.valueMap[this.value]
        } else {
            return super.getValueString()
        }
    }
}