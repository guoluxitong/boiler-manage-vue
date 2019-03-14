import parentMockField from './mockField'
import {deviceModel} from "../../model/sdcSoftDevice";
import { getInt16Number, getFloat32Number } from '../../../utils/dataparse';
export default class settingField extends parentMockField {
    setDeviceFieldForUIKey(deviceFieldForUI){
        deviceFieldForUI.key=deviceModel.key_setting
    }
    haveValue(...bytes){
        let i = getInt16Number(bytes)
        if(0x8000 == Math.abs(i)){
            return false
        }
        if(this.baseNumber>0){
            this.value = Math.abs(i/this.baseNumber)
        }
        else{
            this.value = Math.abs(i)
        }
        return true
    }
    getValueString(){
        if (JSON.stringify(this.valueMap)!='{}') {
            return this.valueMap[this.value]
        } else {
            return super.getValueString()
        }
    }
}
