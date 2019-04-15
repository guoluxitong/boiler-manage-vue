import device_CTL from "./device_CTL";
import {deviceModel} from "./sdcSoftDevice"
import element from "../entity/element";

const key_point_ran_shao_qi = "_ranshaoqi"
const key_point_ran_shao_qi_kongzhi = "oc_ranshaoqiqitingkongzhi";
const key_point_ran_shao_qi_status = "oc_ranshaoqifuhetiaojie";

const key_point_add_shui_beng = "_addshuibeng"
const key_point_add_shui_beng_1 = "oc_1_addshuibeng_start_stop"
const key_point_add_shui_beng_2 = "oc_2_addshuibeng_start_stop"

const key_point_leng_ning_beng = "_lengningbeng"
const key_point_leng_ning_beng_1 = "oc_1_lengningxunhuanbeng_start_stop"
const key_point_leng_ning_beng_2 = "oc_2_lengningxunhuanbeng_start_stop"

export default class device_CTL_RT_T2 extends device_CTL{
    constructor(){
        super()
        this.byteArrayLength=109
    }
    handleDeviceNo(bytes=[]){
        //this.deviceNo=byteToString(bytes.slice(68,87))
        return "";
    }
    handleByteField(byteField,bytes=[]){
        if(byteField.haveValue(bytes[byteField.startIndex],bytes[byteField.startIndex+1])){
            this.addField(byteField)
        }
    }
    getBaseInfoFields(){
        let map=this.getFieldsMap(deviceModel.key_base)
        let runLife=map[this.deviceModel.key_point_run_life].value
        map[this.deviceModel.key_point_run_days].value=runLife/24
        map[this.deviceModel.key_point_run_hours].value=runLife%24
        return map
    }

    /**
     * 获得燃烧器的信息
     */
    getPowerInfo(){
        if(this.getOpenCloseFields()[key_point_ran_shao_qi_kongzhi].value>0){
            return this.getOpenCloseFields()[key_point_ran_shao_qi_status].value > 0 ? 1:0
        }
        return 0
    }
    getMode(){
        return 0;
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
        if(this.getCountFields().hasOwnProperty(key_point_leng_ning_beng)){
            let deviceFieldForUI=this.getCountFields()[key_point_leng_ning_beng]
            let elementObj=new element(deviceFieldForUI.title,element.prefix_beng)
            let [d1,d2]=[null,null]
            let count=0
            if(this.getDeviceInfoFields().hasOwnProperty(key_point_leng_ning_beng_1)){
                d1=this.getDeviceInfoFields()[key_point_leng_ning_beng_1]
                count+=1
            }
            if(this.getDeviceInfoFields().hasOwnProperty(key_point_leng_ning_beng_2)){
                d1=this.getDeviceInfoFields()[key_point_leng_ning_beng_2]
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
