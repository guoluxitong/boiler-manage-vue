import parentMockField from './mockField'
import {deviceModel} from "../../model/sdcSoftDevice";
import { getInt16Number, getFloat32Number } from '../../../utils/dataparse';
export default class settingField extends parentMockField {
    setDeviceFieldForUIKey(deviceFieldForUI){
        deviceFieldForUI.key=deviceModel.key_setting
    }
    haveValue(...bytes){
        //this.value=((bytes[0] & 0xFF) << 8) | (bytes[1] & 0xFF);

        if(0x7FF == getInt16Number(bytes)){
            return false
        }
        if(this.getBaseNumber()>0){
            this.value = getInt16Number(bytes)/this.getBaseNumber()
        }else{
            this.value = getInt16Number(bytes)
        }

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