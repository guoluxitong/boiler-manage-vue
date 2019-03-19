export default class command {
    static int_value = 1;
    static float_value = 2;
    static float_map_value = 3;
    static time_value = 4;
    static open_close_value = 5;
    static system_value = 6;

    constructor(name, address, valueString, value, unit, title, maxValue, minvalue, script,modbusNo) {
        this.name = name;
        this.address = address;
        this.valueString = valueString;
        this.value = value;
        this.unit = unit;
        this.title = title;
        this.maxValue = maxValue;
        this.minValue = minvalue;
        this.script = script;
        this.action = "06";
        this.valueType = command.int_value;
        this.valueIsSet = false;
        this.modbusNo = modbusNo
    }
    handleValue(...value) {
    }
    initValue(...values) {
        this.handleValue(values)
    }
    setValue(...values){
       if (null == values) {
           return
       }
       if (null == values[0]) {
           return
       }
       this.handleValue(values);
       this.valueIsSet = true
    }
    convertToString(){}
    getCommandString(){
        if (this.valueIsSet) {
            this.valueIsSet = false;
            let str = this.convertToString();
            this.valueString = "";
            return str.toUpperCase();
        }
        return "";
    }
    static toBytes(str){
        let bytes = new ArrayBuffer(str.length/2);
        if (str != null && str.length !== 0){
            for (let i = 0; i < str.length / 2; i++) {
                let subStr = str.substring(i*2,i*2+2);
                bytes[i] = Number.parseInt(subStr,16);
            }
            return bytes;
        }
        return bytes;
    }
    static hexStringToInteger(hexString){
        return Number.parseInt(hexString,16);
    }
    static integerToHexString(x){
      let value = Number.parseInt(x,16)
      while (value.length < 4) {
        value = "0" + value
      }
      return value
        //return String.format("%04x",x);
    }
    static intToByte4(n){
        let b = new ArrayBuffer(4);
        for (let i = 0; i < 4; i++) {
            b[i] = (n>>(24-i*8))
        }
        return b;
    }
    initCommand(){
        arguments[0].name = arguments[1]
        arguments[0].address = arguments[2]
        arguments[0].maxValue= arguments[3]
        arguments[0].minValue = arguments[4]
        arguments[0].value = arguments[5]
    }
    evalScriptText(valueString){
        var obj = {}
        return obj
    }
}



