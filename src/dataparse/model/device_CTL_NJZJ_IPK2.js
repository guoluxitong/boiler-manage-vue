import device_CTL from "./device_CTL";
import { byteToString} from '@/utils/dataparse'
import element from "../entity/element"
import {media,power} from '../map/commonValueMap'

const device_suffix_beng = "_beng"
const device_suffix_fan = "_fan"

const key_point_ran_shao_qi = "de_ranshaoqi"
const key_point_jia_re_zu = "se_jiarezushu"
const key_point_yin_feng_ji = "de_yinfengji_fan"

export default class device_CTL_NJZJ_IPK2 extends device_CTL{
    handleDeviceNo(bytes=[]){
        let deviceNo=byteToString(bytes.slice(1,20))
        this.deviceNo=deviceNo.substring(deviceNo.length-10,deviceNo.length)
    }
    getPowerInfo(){
        let pointPower=this.getBaseInfoFields()[this.deviceModel.key_point_power]
        if(pointPower.value==power.Dian){
            return this.getSettingFields()[key_point_jia_re_zu].value > 0?1:0
        }else if(pointPower.value==power.Mei){
            return this.getDeviceInfoFields()[key_point_yin_feng_ji].value > 0x7F ? 1 : 0
        }
        return this.getDeviceInfoFields()[key_point_ran_shao_qi].value
    }
    getBeng(){
        return this.getElements(device_suffix_beng,element.prefix_beng,element.index_beng_count)
    }
    getFan(){
        return this.getElements(device_suffix_fan,element.prefix_fan,element.index_fan_status)
    }
    getElements(deviceSuffix,elementPrefix,valueIndex){
        let listElement=[]
        for (let key in this.getDeviceInfoFields()){
            let device=this.getDeviceInfoFields()[key]
            if(device.name.indexOf(deviceSuffix)>0){
                let elementObj=new element(device.title,elementPrefix)
                let value = device.value;
                let v=value & 0x80
                if (0x80 == v){
                    elementObj.setValues(valueIndex,1,1)
                }else{
                    elementObj.setValues(valueIndex,1,0)
                }
                listElement.push(elementObj)
            }
        }
        return listElement
    }
}
