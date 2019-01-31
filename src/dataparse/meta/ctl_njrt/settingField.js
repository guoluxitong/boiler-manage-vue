import parentMockField from './mockField'
import {deviceModel} from "../../model/sdcSoftDevice";
export default class settingField extends parentMockField {
    setDeviceFieldForUIKey(deviceFieldForUI){
        deviceFieldForUI.key=deviceModel.key_setting
    }
    haveValue(...bytes){
        this.value=((bytes[0] & 0xFF) << 8) | (bytes[1] & 0xFF);
        return true;
    }
    getValueString(){
        if (JSON.stringify(this.valueMap) != '{}') {
            return this.valueMap[this.value]
        } else {
            return super.getValueString()
        }
    }
}