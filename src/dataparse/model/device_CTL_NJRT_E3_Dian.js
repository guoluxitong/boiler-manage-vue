import device_CTL from "./device_CTL";
import {byteToString} from '@/utils/dataparse'
import element from "../entity/element";

const key_point_add_shui_beng = "_addshuibeng"
const key_point_add_shui_beng_1 = "oc_1_addshuibeng_start_stop"
const key_point_add_shui_beng_2 = "oc_2_addshuibeng_start_stop"

export default class device_CTL_NJRT_E3_Dian extends device_CTL{
    handleDeviceNo(bytes=[]){
        this.deviceNo=""
    }
    handleByteField(byteField,bytes=[]){
        if(byteField.haveValue(bytes[byteField.startIndex],bytes[byteField.startIndex+1])){
            this.addField(byteField.getDeviceFieldForUI())
        }
    }
    getPowerInfo(){
        let count=0
        this.getOpenCloseFields().forEach((key)=>{
            if(key.indexOf("jiarezu")>-1){
                count+=this.getOpenCloseFields()[key].value
            }
        })
        return count
    }
    getBeng(){
        let listElement=[]
        if(this.getCountFields().hasOwnProperty(key_point_add_shui_beng)) {
            let deviceFieldForUI=this.getCountFields()[key_point_add_shui_beng]
            let elementObj=new element(deviceFieldForUI.title,element.prefix_beng)
            let [d1,d2]=[null,null]
            let count=0
            if(this.getDeviceInfoFields().hasOwnProperty(key_point_add_shui_beng_1)){
                d1=this.getDeviceInfoFields()[key_point_add_shui_beng_1]
                count+=1
            }
            if(this.getDeviceInfoFields().hasOwnProperty(key_point_add_shui_beng_2)){
                d2=this.getDeviceInfoFields()[key_point_add_shui_beng_2]
                count+=2
            }
            let [v1,v2]=[0,0]
            switch (count) {
                case 1:
                    v1=d1.value>0?1:0
                    elementObj.setValues(element.index_beng_count,1,v1)
                    listElement.push(elementObj)
                    break
                case 2:
                    v2=d2.value>0?1:0
                    elementObj.setValues(element.index_beng_count,1,v2)
                    listElement.push(elementObj)
                    break
                case 3:
                    v1=d1.value>0?1:0
                    v2=d2.value>0?2:0
                    elementObj.setValues(element.index_beng_count,2,v1+v2)
                    listElement.push(elementObj)
                    break

            }
        }
        return listElement
    }
    getFan(){
        return []
    }
}
