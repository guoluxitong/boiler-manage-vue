import command from "./command";
import CRC16Util from "./CRC16Util";

export default class floatCommand extends command{
    constructor(){
        super()
        this.action = "10"
        this.valueType = command.float_value
    }
    handleValue(...values){
        let f = parseFloat(values[0])
        this.valueString = f.toFixed(2)
        let data = command.intToByte4(f)
        //this.value = String.format("%02x%02x%02x%02x",data[0],data[1],data[2],data[3])
        this.value = parseInt(data[0],16)+parseInt(data[1],16)+parseInt(data[2],16)+parseInt(data[3],16)
    }
    convertToString(){
        /*let baseStr = String.format(
            "%s%s%s000204%s",
            this.modbusNo,
            this.action,
            this.address,
            this.value
        )*/
        let baseStr = this.modbusNo + this.action + this.address + "000204" + this.value
        let data = command.toBytes(baseStr)
        //return String.format("%s%s",baseStr,CRC16Util.getCrc(CRC16Util.calcCrc16(data)))
        return baseStr + CRC16Util.getCrc(CRC16Util.calcCrc16(data))
    }
}
