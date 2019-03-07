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
    setDeviceFieldForUiKey(fieldForUI){
        fieldForUI.key = this.groupKey
    }
}