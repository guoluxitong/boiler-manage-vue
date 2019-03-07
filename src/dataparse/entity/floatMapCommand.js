import intCommand from "./intCommand";
import command from "./command";

export default class floatMapCommand extends intCommand{
    constructor(){
        super()
        this.valueType = command.float_value
        this.script = "reslut = integerToHexString(valueString.toInteger()*100);"
    }
    handleValue(...values){
        let i = Number.parseInt(values[0])
        this.value = this.evalScriptText(this.valueString).toString()
        this.valueString = i.toString()
    }
    encoding(){
        return null
    }
    annotationType(){
        return null
    }
}