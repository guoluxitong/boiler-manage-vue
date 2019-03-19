import command from "./command";
import CRC16Util from "./CRC16Util";
import {format} from '../../utils/stringFormat'

export default class intCommand extends command{
    constructor(){
        super()
        this.valueType = command.int_value
    }
    handleValue(...values){
        let i = Number.parseInt(values[0])
        this.valueString = i.toString()
        let value = format('x',4,i)
        this.value = value
    }
    convertToString(){
        let modbusNo = format('x',2,this.modbusNo)
        let baseStr = modbusNo + this.action + this.address + this.value
        let data = command.toBytes(baseStr)
        let cmd = baseStr+CRC16Util.getCrc(CRC16Util.calcCrc16(data))
        while (cmd.length < 26) {
          cmd = cmd + '0'
        }
        return cmd
    }
}
