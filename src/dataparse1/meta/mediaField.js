import byteField from './byteField'
import {deviceModel} from '../model/sdcSoftDevice'
export default class mediaField extends byteField {
    setDeviceFieldForUIKey(deviceFieldForUI){
        deviceFieldForUI.key=deviceModel.key_base
    }
    getValueString(){
        if(JSON.stringify(this.valueMap)!='{}'){
            return this.valueMap[this.value]
        }else{
            return super.getValueString()
        }
    }
}
