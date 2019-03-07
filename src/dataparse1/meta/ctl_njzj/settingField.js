import parentMockField from './mockField'
import {deviceModel} from "../../model/sdcSoftDevice";
export default class settingField extends parentMockField {
  setDeviceFieldForUIKey(deviceFieldForUI){
    deviceFieldForUI.key=deviceModel.key_setting
  }
}
