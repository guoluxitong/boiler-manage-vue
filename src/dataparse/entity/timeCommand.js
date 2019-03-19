import intCommand from "./intCommand";
import command from "./command";
import {format} from '../../utils/stringFormat'

export default class timeCommand extends intCommand{
    constructor(){
        super()
        this.valueType = command.time_value
        this.script = "strs = valueString.split(':');" +
        "reslut = integerToHexString(strs[0].toInteger()*60+strs[1].toInteger());"
    }
    handleValue(...values){
        let h = Number.parseInt(values[0])
        let m = Number.parseInt(values[1])
        this.valueString = format('d',2,h)+':'+format('d',2,m)
        this.value = command.integerToHexString(h*60+m)
    }
}
