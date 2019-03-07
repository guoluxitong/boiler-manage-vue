import byteField from './byteField'
import {deviceModel} from '../model/sdcSoftDevice'
export default class openCloseField extends byteField {
  setDeviceFieldForUIKey(deviceFieldForUI){
    deviceFieldForUI.key=deviceModel.key_open_close
  }
}
