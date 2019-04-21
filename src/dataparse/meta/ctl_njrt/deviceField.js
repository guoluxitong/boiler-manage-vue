import parentOpenCloseField from './openCloseField'
import { deviceModel } from '../../model/sdcSoftDevice';
export default class deviceField extends parentOpenCloseField {
    setDeviceFieldForUIKey(fieldForUI){
        fieldForUI.key = deviceModel.key_device
    }
    getValueString() {
        if (JSON.stringify(this.valueMap) != '{}') {
            return this.valueMap[this.value]
        } else {
            return super.getValueString()
        }
    }
}
