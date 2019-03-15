import deviceFieldForUI from "./deviceFieldForUI"
import intCommand from '../entity/intCommand'
import commandField from "./commandField";
export default class byteField extends commandField{
    constructor(startIndex,bytesLength,baseNumber,bit,needFormat,valueMap,address,maxValue,minValue,value) {
        super()
        this.startIndex=startIndex
        this.bytesLength=bytesLength
        this.baseNumber=baseNumber
        this.bit=bit
        this.needFormat = false
        this.valueMap={}
        this.address = address
        this.maxValue = maxValue
        this.minValue = minValue
        this.value = value
    }
    createCommandAndInitValue(){
        const cmd = new intCommand()
        cmd.initValue(this.value)
        return cmd
    }
    getBaseNumber(){
        return this.baseNumber
    }
    getValueBitString(){
        return this.value
    }
    haveValue(...bytes){}
    getValueString(){
      if (this.title == "压力设置"){
        console.log("========")
      }
        if(this.bytesLength > 0){
            return this.value+this.unit
        }
        this.needFormat = true
        return this.getValueBitString()+this.unit
    }
    setDeviceFieldForUIKey(fieldForUI){}
    getDeviceFieldForUI(){
      const deviceFieldForUIObj=new deviceFieldForUI()
      this.setDeviceFieldForUIKey(deviceFieldForUIObj)
      deviceFieldForUIObj.name = this.name
      if(this.title == "报警"){
        deviceFieldForUIObj.title=this.getValueString()
      }else{
        deviceFieldForUIObj.title=this.title
      }
      deviceFieldForUIObj.value = this.value
      deviceFieldForUIObj.valueString = this.getValueString()
      deviceFieldForUIObj.needFormat = this.needFormat
      deviceFieldForUIObj.unit = this.unit
      return deviceFieldForUIObj

    }
    /**
     * 添加计算并显示的点位
     */
    
    init(){
        switch (arguments.length) {
            case 3:
                arguments[0].name = arguments[1]
                arguments[0].title = arguments[2]
                break;
            case 4:
                arguments[1].groupKey = arguments[0]
                arguments[1].name = arguments[2]
                arguments[1].title = arguments[3]
                return arguments[1]
            case 5:
                if(typeof arguments[1] == 'string'){
                    if(typeof arguments[2] == 'string'){
                        arguments[0].name = arguments[1]
                        arguments[0].title = arguments[2]
                        arguments[0].value = arguments[3]
                        arguments[0].valueMap = arguments[4]
                        arguments[0].bytesLength = 0
                    }else if(typeof arguments[2] == 'number'){
                        arguments[0].name=arguments[1]
                        arguments[0].startIndex=arguments[2]
                        arguments[0].bytesLength=arguments[3]
                        arguments[0].title=arguments[4]
                    }
                }else{
                    arguments[1].groupKey = arguments[0]
                    arguments[1].commandGroupKey = arguments[0]
                    arguments[1].name = arguments[2]
                    arguments[1].title = arguments[3]
                    arguments[1].unit = arguments[4]
                    return arguments[1]
                }
                break;
            case 6:
                if(typeof arguments[5] == 'object'){
                    arguments[0].name=arguments[1]
                    arguments[0].startIndex=arguments[2]
                    arguments[0].bytesLength=arguments[3]
                    arguments[0].title=arguments[4]
                    arguments[0].valueMap=arguments[5]
                }else if(typeof arguments[5] == 'number'){
                    arguments[0].name=arguments[1]
                    arguments[0].startIndex=arguments[2]
                    arguments[0].bytesLength=arguments[3]
                    arguments[0].title=arguments[4]
                    arguments[0].bit=arguments[5]
                }else if(typeof arguments[5] == 'string'){
                    arguments[0].name=arguments[1]
                    arguments[0].startIndex=arguments[2]
                    arguments[0].bytesLength=arguments[3]
                    arguments[0].title=arguments[4]
                    arguments[0].unit=arguments[5]
                }
                break;
            case 7:
                if(typeof arguments[6] == 'object'){
                    arguments[0].name=arguments[1]
                    arguments[0].startIndex=arguments[2]
                    arguments[0].bytesLength=arguments[3]
                    arguments[0].title=arguments[4]
                    arguments[0].bit=arguments[5]
                    arguments[0].valueMap=arguments[6]
                }else if(typeof arguments[6] == 'number'){
                    arguments[0].name=arguments[1]
                    arguments[0].startIndex=arguments[2]
                    arguments[0].bytesLength=arguments[3]
                    arguments[0].title=arguments[4]
                    arguments[0].unit=arguments[5]
                    arguments[0].baseNumber=arguments[6]
                }
                break;
            case 10:
                if(typeof arguments[5] == 'object'){
                    arguments[0].name=arguments[1]
                    arguments[0].startIndex=arguments[2]
                    arguments[0].bytesLength=arguments[3]
                    arguments[0].title=arguments[4]
                    arguments[0].valueMap=arguments[5]
                    arguments[0].commandGroupKey=arguments[6]
                    arguments[0].address=arguments[7]
                    arguments[0].minValue=arguments[8]
                    arguments[0].maxValue=arguments[9]
                }else if(typeof arguments[5] == 'string'){
                    arguments[0].name=arguments[1]
                    arguments[0].startIndex=arguments[2]
                    arguments[0].bytesLength=arguments[3]
                    arguments[0].title=arguments[4]
                    arguments[0].unit=arguments[5]
                    arguments[0].commandGroupKey=arguments[6]
                    arguments[0].address=arguments[7]
                    arguments[0].minValue=arguments[8]
                    arguments[0].maxValue=arguments[9]
                }
                break;
            case 11:
                arguments[0].name=arguments[1]
                arguments[0].startIndex=arguments[2]
                arguments[0].bytesLength=arguments[3]
                arguments[0].title=arguments[4]
                arguments[0].bit=arguments[5]
                arguments[0].valueMap=arguments[6]
                arguments[0].commandGroupKey=arguments[7]
                arguments[0].address=arguments[8]
                arguments[0].minValue=arguments[9]
                arguments[0].maxValue=arguments[10]
                break;
            
        }
        return arguments[0]
    }

}
