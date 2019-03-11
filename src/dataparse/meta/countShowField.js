import byteField from "./byteField";

export default class countShowField extends byteField{
    constructor(){
        super()
        this.groupKey = ""
    }
    getValue(){
        return 0
    }
    haveValue(...bytes){
        return true
    }
    setDeviceFieldForUIKey(deviceFieldForUI){
        deviceFieldForUI.key=this.groupKey
    }
}