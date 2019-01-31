import sdcSoftDevice from "./sdcSoftDevice";
import { getUnit32Number} from '@/utils/dataparse'
import element from "../entity/element";

const key_point_add_shui_beng = "_addshuibeng"
const key_point_add_shui_beng_1 = "de_1_addshuibeng_start_stop"
const key_point_add_shui_beng_2 = "de_2_addshuibeng_start_stop"

const key_point_xun_huan_beng = "_xunhuanbeng"
const key_point_xun_huan_beng_1 = "de_1_xunhuanbeng_start_stop"
const key_point_xun_huan_beng_2 = "de_2_xunhuanbeng_start_stop"
const key_point_xun_huan_beng_3 = "de_3_xunhuanbeng_start_stop"

const key_point_chu_yang_beng = "_chuanyangbeng"
const key_point_chu_yang_beng_1 = "de_1_chuyangbeng_start_stop"
const key_point_chu_yang_beng_2 = "de_2_chuyangbeng_start_stop"

const key_point_zhu_you_beng = "_zhuyoubeng"
const key_point_zhu_you_beng_1 = "de_zhuyoubeng_start_stop"

const key_point_zhen_kong_beng = "_zhenkongbeng"
const key_point_zhen_kong_beng_1 = "de_zhenkongbeng_start_stop"

const key_point_jie_neng_beng = "_jienengbeng"
const key_point_jie_neng_beng_1 = "de_1_jienengbeng_start_stop"
const key_point_jie_neng_beng_2 = "de_2_jienengbeng_start_stop"

const key_point_zhao_qi_fan = "_zhaoqifan"
const key_point_zhao_qi_fan_1 = "de_1_zhaoqifengji_start_stop"
const key_point_zhao_qi_fan_2 = "de_1_zhaoqifengji_start_stop"

const key_point_gu_feng_fan = "_gufengfan"
const key_point_gu_feng_fan_1 = "de_1_zhaoqifengji_start_stop"

const key_point_yin_feng_fan = "_yinfengfan"
const key_point_yin_feng_fan_1 = "de_1_zhaoqifengji_start_stop"

const key_point_lu_pai_fan = "_lupaifan";
const key_point_lu_pai_fan_1 = "de_lupai_start_stop";

const key_point_chu_zha_fan = "_chuzhafan";
const key_point_chu_zha_fan_1 = "de_chuzha_start_stop";

export default class device_PLC extends sdcSoftDevice{
    handleByteField(byteField,bytes=[]){
        switch (byteField.byteLength) {
            case 0:
                if(byteField.haveValue()){
                    this.addField(byteField.getDeviceFieldForUI())
                }
                break
            case 2:
                if(byteField.haveValue(bytes[byteField.startIndex],bytes[byteField.startIndex+1])){
                    this.addField(byteField.getDeviceFieldForUI())
                }
                break
            case 4:
                if(byteField.haveValue(bytes[byteField.startIndex],bytes[byteField.startIndex+1],bytes[byteField.startIndex+2],bytes[byteField.startIndex+3])){
                    this.addField(byteField.getDeviceFieldForUI())
                }
                break
        }
    }
    handleDeviceNo(bytes=[]){
        let deviceNo=getUnit32Number([bytes[5],bytes[6],bytes[7],bytes[8]])+""
        for (let i=0;i<10-parseInt(deviceNo.length);i++){
            deviceNo="0"+deviceNo
        }
        this.deviceNo=deviceNo
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
        if(this.getCountFields().hasOwnProperty(key_point_xun_huan_beng)){
            let deviceFieldForUI=this.getCountFields()[key_point_xun_huan_beng]
            let elementObj=new element(deviceFieldForUI.title,element.prefix_beng)
            let [d1,d2,d3]=[null,null]
            let count=0
            if(this.getDeviceInfoFields().hasOwnProperty(key_point_xun_huan_beng_1)){
                d1=this.getDeviceInfoFields()[key_point_xun_huan_beng_1]
                count+=1
            }
            if(this.getDeviceInfoFields().hasOwnProperty(key_point_xun_huan_beng_2)){
                d2=this.getDeviceInfoFields()[key_point_xun_huan_beng_2]
                count+=2
            }
            if(this.getDeviceInfoFields().hasOwnProperty(key_point_xun_huan_beng_3)){
                d3=this.getDeviceInfoFields()[key_point_xun_huan_beng_3]
                count+=4
            }
            let [v1,v2,v3]=[0,0,0]
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
                case 4:
                    v3=d3.value>0?1:0
                    elementObj.setValues(element.index_beng_count,1,v3)
                    listElement.push(elementObj)
                    break
                case 5:
                    v1=d1.value>0?1:0
                    v3=d3.value>0?4:0
                    elementObj.setValues(element.index_beng_count,2,v1+v3)
                    listElement.push(elementObj)
                    break
                case 6:
                    v2=d2.value>0?2:0
                    v3=d3.value>0?4:0
                    elementObj.setValues(element.index_beng_count,2,v2+v3)
                    listElement.push(elementObj)
                    break
                case 7:
                    v1=d1.value>0?1:0
                    v2=d2.value>0?2:0
                    v3=d3.value>0?4:0
                    elementObj.setValues(element.index_beng_count,3,v1+v2+v3)
                    listElement.push(elementObj)
                    break
            }
        }
        if(this.getCountFields().hasOwnProperty(key_point_chu_yang_beng)){
            let deviceFieldForUI=this.getCountFields()[key_point_chu_yang_beng]
            let elementObj=new element(deviceFieldForUI.title,element.prefix_beng)
            let [d1,d2]=[null,null]
            let count=0
            if(this.getDeviceInfoFields().hasOwnProperty(key_point_chu_yang_beng_1)){
                d1=this.getDeviceInfoFields()[key_point_chu_yang_beng_1]
                count+=1
            }
            if(this.getDeviceInfoFields().hasOwnProperty(key_point_chu_yang_beng_2)){
                d2=this.getDeviceInfoFields()[key_point_chu_yang_beng_2]
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
        if(this.getCountFields().hasOwnProperty(key_point_zhu_you_beng)){
            let deviceFieldForUI=this.getCountFields()[key_point_zhu_you_beng]
            let elementObj=new element(deviceFieldForUI.title,element.prefix_beng)
            let [d1]=[null]
            let count=0
            if(this.getDeviceInfoFields().hasOwnProperty(key_point_zhu_you_beng_1)){
                d1=this.getDeviceInfoFields()[key_point_zhu_you_beng_1]
                count+=1
            }
            let [v1]=[0]
            switch (count) {
                case 1:
                    v1=d1.value>0?1:0
                    elementObj.setValues(element.index_beng_count,1,v1)
                    listElement.push(elementObj)
                    break
            }
        }
        if(this.getCountFields().hasOwnProperty(key_point_jie_neng_beng)){
            let deviceFieldForUI=this.getCountFields()[key_point_jie_neng_beng]
            let elementObj=new element(deviceFieldForUI.title,element.prefix_beng)
            let [d1,d2]=[null,null]
            let count=0
            if(this.getDeviceInfoFields().hasOwnProperty(key_point_jie_neng_beng_1)){
                d1=this.getDeviceInfoFields()[key_point_jie_neng_beng_1]
                count+=1
            }
            if(this.getDeviceInfoFields().hasOwnProperty(key_point_jie_neng_beng_2)){
                d2=this.getDeviceInfoFields()[key_point_jie_neng_beng_2]
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
        if(this.getCountFields().hasOwnProperty(key_point_zhen_kong_beng)){
            let deviceFieldForUI=this.getCountFields()[key_point_zhen_kong_beng]
            let elementObj=new element(deviceFieldForUI.title,element.prefix_beng)
            let [d1]=[null]
            let count=0
            if(this.getDeviceInfoFields().hasOwnProperty(key_point_zhen_kong_beng_1)){
                d1=this.getDeviceInfoFields()[key_point_zhen_kong_beng_1]
                count+=1
            }
            let [v1]=[0]
            switch (count) {
                case 1:
                    v1=d1.value>0?1:0
                    elementObj.setValues(element.index_beng_count,1,v1)
                    listElement.push(elementObj)
                    break
            }
        }
        return listElement
    }
    getFan(){
        let listElement=[]
        if(this.getCountFields().hasOwnProperty(key_point_gu_feng_fan)){
            let deviceFieldForUI=this.getCountFields()[key_point_gu_feng_fan]
            let elementObj=new element(deviceFieldForUI.title,element.prefix_fan)
            let [d1]=[null]
            let count=0
            if(this.getDeviceInfoFields().hasOwnProperty(key_point_gu_feng_fan_1)){
                d1=this.getDeviceInfoFields()[key_point_gu_feng_fan_1]
                count=1
            }
            let [v1]=[0]
            switch (count) {
                case 1:
                    v1=d1.value>0?1:0
                    elementObj.setValues(element.index_fan_count,1,v1)
                    listElement.push(elementObj)
                    break
            }
        }
        if(this.getCountFields().hasOwnProperty(key_point_yin_feng_fan)){
            let deviceFieldForUI=this.getCountFields()[key_point_yin_feng_fan]
            let elementObj=new element(deviceFieldForUI.title,element.prefix_fan)
            let [d1]=[null]
            let count=0
            if(this.getDeviceInfoFields().hasOwnProperty(key_point_yin_feng_fan_1)){
                d1=this.getDeviceInfoFields()[key_point_yin_feng_fan_1]
                count=1
            }
            let [v1]=[0]
            switch (count) {
                case 1:
                    v1=d1.value>0?1:0
                    elementObj.setValues(element.index_fan_count,1,v1)
                    listElement.push(elementObj)
                    break
            }
        }
        if(this.getCountFields().hasOwnProperty(key_point_zhao_qi_fan)){
            let deviceFieldForUI=this.getCountFields()[key_point_zhao_qi_fan]
            let elementObj=new element(deviceFieldForUI.title,element.prefix_fan)
            let [d1,d2]=[null,null]
            let count=0
            if(this.getDeviceInfoFields().hasOwnProperty(key_point_zhao_qi_fan_1)){
                d1=this.getDeviceInfoFields()[key_point_zhao_qi_fan_1]
                count+=1
            }
            if(this.getDeviceInfoFields().hasOwnProperty(key_point_zhao_qi_fan_2)){
                d2=this.getDeviceInfoFields()[key_point_zhao_qi_fan_2]
                count+=2
            }
            let [v1,v2]=[0,0]
            switch (count) {
                case 1:
                    v1=d1.value>0?1:0
                    elementObj.setValues(element.index_fan_count,1,v1)
                    listElement.push(elementObj)
                    break
                case 2:
                    v2=d2.value>0?1:0
                    elementObj.setValues(element.index_fan_count,1,v2)
                    listElement.push(elementObj)
                    break
                case 3:
                    v1=d1.value>0?1:0
                    v2=d2.value>0?2:0
                    elementObj.setValues(element.index_fan_count,2,v1+v2)
                    listElement.push(elementObj)
                    break
            }
        }
        if(this.getCountFields().hasOwnProperty(key_point_lu_pai_fan)){
            let deviceFieldForUI=this.getCountFields()[key_point_lu_pai_fan]
            let elementObj=new element(deviceFieldForUI.title,element.prefix_fan)
            let [d1]=[null]
            let count=0
            if(this.getDeviceInfoFields().hasOwnProperty(key_point_lu_pai_fan_1)){
                d1=this.getDeviceInfoFields()[key_point_lu_pai_fan_1]
                count=1
            }
            let [v1]=[0]
            switch (count) {
                case 1:
                    v1=d1.value>0?1:0
                    elementObj.setValues(element.index_fan_count,1,v1)
                    listElement.push(elementObj)
                    break
            }
        }
        if(this.getCountFields().hasOwnProperty(key_point_chu_zha_fan)){
            let deviceFieldForUI=this.getCountFields()[key_point_chu_zha_fan]
            let elementObj=new element(deviceFieldForUI.title,element.prefix_fan)
            let [d1]=[null]
            let count=0
            if(this.getDeviceInfoFields().hasOwnProperty(key_point_chu_zha_fan_1)){
                d1=this.getDeviceInfoFields()[key_point_chu_zha_fan_1]
                count=1
            }
            let [v1]=[0]
            switch (count) {
                case 1:
                    v1=d1.value>0?1:0
                    elementObj.setValues(element.index_fan_count,1,v1)
                    listElement.push(elementObj)
                    break
            }
        }
        return listElement
    }
}
