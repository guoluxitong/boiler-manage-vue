import byteField from './byteField'
import {deviceModel} from '../model/sdcSoftDevice'
export default class baseInfoField extends byteField {
  setDeviceFieldForUIKey(deviceFieldForUI){
    deviceFieldForUI.key=deviceModel.key_base
  }
}
