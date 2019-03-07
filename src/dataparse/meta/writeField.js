import byteField from "./byteField";

export default class writeField extends byteField{
    getDeviceFieldForUI(){
        return null
    }
    getValue(){
        return 0
    }
    haveValue(...bytes){
        return true
    }
}