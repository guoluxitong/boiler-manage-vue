import command from "./command";
import CRC16Util from "./CRC16Util";
import {getUnit16Number} from '../../utils/dataparse'

export default class intCommand extends command{
    constructor(){
        super()
        this.valueType = command.int_value
    }
    handleValue(...values){
        let i = Number.parseInt(values[0])
        this.valueString = i.toString()
        let value = i.toString(16)
        while (value.length < 4) {
          value = "0" + value
        }
        this.value = value
    }
    convertToString(){
        let modbusNo = getUnit16Number(this.modbusNo)
        for (let i = 0;i<2-modbusNo.length;i++){
          modbusNo = "0"+modbusNo
        }
        let baseStr = modbusNo + this.action + this.address + this.value
        let data = command.toBytes(baseStr)
        return baseStr+CRC16Util.getCrc(CRC16Util.calcCrc16(data))+"0000000000"
    }
}
