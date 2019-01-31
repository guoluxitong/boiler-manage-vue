import deviceFieldForUI from "./deviceFieldForUI";
import {deviceModel} from '../model/sdcSoftDevice'
export default class byteField{
    constructor() {
        this.name = ''
        this.unit=''
        this.title=''
        this.startIndex=0
        this.bytesLength=0
        this.value=0
        this.valueMap={}
        this.bit=0
        this.baseNumber=0
        this.isShow=true
    }
    getValueString(){
        if(this.unit!=""){
            return this.value+this.unit
        }else{
            return this.value+"";
        }
    }
    getDeviceFieldForUI(){
        const deviceFieldForUIObj=new deviceFieldForUI()
        if(this.bytesLength<1){
            if(this.isShow){
                this.setDeviceFieldForUIKey(deviceFieldForUIObj)
            }else{
                deviceFieldForUIObj.key=deviceModel.key_count_fields
            }
        }else{
            this.setDeviceFieldForUIKey(deviceFieldForUIObj)
        }
        deviceFieldForUIObj.name=this.name
        deviceFieldForUIObj.title=this.title
        deviceFieldForUIObj.value=this.value
        deviceFieldForUIObj.valueString= this.getValueString()
        return deviceFieldForUIObj
    }
    init() {
        arguments[0].name=arguments[1]
        arguments[0].startIndex=arguments[2]
        arguments[0].byteLength=arguments[3]
        arguments[0].title=arguments[4]
        switch (arguments.length){
            case 6:
                if(typeof arguments[5] =='number'){
                    arguments[0].bit=arguments[5]
                }else if(typeof arguments[5] =='object'){
                    arguments[0].valueMap=arguments[5]
                }else if(typeof arguments[5] =='boolean'){
                    arguments[0].isShow=arguments[5]
                }else if(typeof arguments[5] =='string'){
                    arguments[0].unit=arguments[5]
                }
                break;
            case 7:
                if(typeof arguments[5] =='object'){
                    arguments[0].valueMap=arguments[5]
                    arguments[0].bit=arguments[6]
                }else if(typeof arguments[5] =='string'){
                    arguments[0].unit=arguments[5]
                    arguments[0].baseNumber=arguments[6]
                }
              break;
        }
        return arguments[0]
    }
}
