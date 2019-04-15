import parentOpenCloseField from './openCloseField'
import { deviceModel } from '../../model/sdcSoftDevice';
import systemCommand from '../../entity/systemCommand'
export default class deviceField extends parentOpenCloseField {
    setDeviceFieldForUIKey(fieldForUI){
        fieldForUI.key = deviceModel.key_device
    }
    getValueString() {
        if (JSON.stringify(this.valueMap) != '{}') {
            return this.valueMap[this.value]
        } else {
            return super.getValueString()
        }
    }
    getCommand(){
        let cmd = new systemCommand()
        cmd.address = this.address
        cmd.maxValue = this.maxValue
        cmd.minValue = this.minValue
        cmd.initValue(this.value)
        cmd.title = this.title
        return cmd
    }
}
