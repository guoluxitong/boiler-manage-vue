import byteField from './byteField'
import {deviceModel} from '../model/sdcSoftDevice'
export default class startStopField extends byteField {
  setDeviceFieldForUIKey(deviceFieldForUI){
    deviceFieldForUI.key=deviceModel.key_start_stop
  }
}
