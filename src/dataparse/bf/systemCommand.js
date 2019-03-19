import intCommand from "./intCommand";
import command from "./command";

export default class systemComand extends intCommand{
    constructor(){
        super()
        this.valueType = command.system_value
        this.valueIsSet = false
    }
}