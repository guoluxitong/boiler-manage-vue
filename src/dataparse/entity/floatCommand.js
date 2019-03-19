import command from "./command";
import CRC16Util from "./CRC16Util";
import {format} from '../../utils/stringFormat'

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
    this.value = format('x',2,data[0])+format('x',2,data[1])+format('x',2,data[2])+format('x',2,data[3])
  }
  convertToString(){
    let baseStr = this.modbusNo + this.action + this.address + "000204" + this.value
    let data = command.toBytes(baseStr)
    return baseStr + CRC16Util.getCrc(CRC16Util.calcCrc16(data))
  }
}
