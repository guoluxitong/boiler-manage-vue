import countShowField from "./countShowField";
import { deviceModel } from "../model/sdcSoftDevice";

export default class countField extends countShowField{
    getDeviceFieldForUI(){
        return null
    }
    setDeviceFieldForUIKey(fieldForUI){
        fieldForUI.key = deviceModel.key_count_fields
    }
    getValue(){
        return 0
    }
    haveValue(...bytes){
        return true
    }
}