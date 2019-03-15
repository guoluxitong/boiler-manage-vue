import byteField from './byteField'
import {deviceModel} from '../model/sdcSoftDevice'
export default class mockField extends byteField {
  setDeviceFieldForUIKey(deviceFieldForUI){
    deviceFieldForUI.key=deviceModel.key_mock
  }
  getValueBitString(){
    //return String.format("%.2f",this.value)
    return this.value.toFixed(2)
  }
}
