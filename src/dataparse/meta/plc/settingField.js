import mockField from './mockField'
import {deviceModel} from "../../model/sdcSoftDevice";
import floatCommand from '../../entity/floatCommand'
export default class settingField extends mockField {
  setDeviceFieldForUIKey(deviceFieldForUI){
    deviceFieldForUI.key=deviceModel.key_setting
  }
  createCommandAndInitValue(){
    let cmd = new floatCommand()
    cmd.initValue(this.value)
    return cmd
  }
}
