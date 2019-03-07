import command from "./command";
import CRC16Util from "./CRC16Util";

export default class intCommand extends command{
    constructor(){
        super()
        this.valueType = command.int_value
    }
    handleValue(...values){
        let i = Number.parseInt(values[0])
        this.valueString = i.toString()
        this.value = String.format("%04x",i)        
    }
    convertToString(){
        let baseStr = String.format(
            "%s%s%s%s",
            String.format("%02x",this.modbusNo),
            this.action,
            this.address,
            this.value
        )
        let data = command.toBytes(baseStr)
        return String.format("%s%s0000000000",baseStr,CRC16Util.getCrc(CRC16Util.calcCrc16(data)))
    }
}