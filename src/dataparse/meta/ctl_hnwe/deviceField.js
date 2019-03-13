import parentDeviceField from '../deviceField'
import { getInt16Number } from '../../../utils/dataparse';
export default class deviceField extends parentDeviceField {
    haveValue(...bytes){
        let i = getInt16Number(bytes)
        if(0x7FFF == i){
            this.value = 1
        }else {
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
