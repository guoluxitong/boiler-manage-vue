import device_CTL from "./device_CTL";
import { byteToString} from '../../utils/dataparse'
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
        let de = deviceNo.substring(deviceNo.length-10,deviceNo.length)
        this.deviceNo=de
        return de
    }
    getDeviceFocusFields(){
      let map=this.getBaseInfoFields()

      if (this.powerVal == power.Dian){
        map["se_jiarezushu"] = this.getSettingFields()["se_jiarezushu"]
        if (this.mediaVal == media.ReShui) {
          map["mo_chukouwendu"] = this.getMockFields()["mo_chukouwendu"]
          map["mo_rukouwendu"] = this.getMockFields()["mo_rukouwendu"]
          map["ba_shuixiangshuiweizhuangtai"] = this.getBaseInfoFields()["ba_shuixiangshuiweizhuangtai"]
          map["ba_guolushuiweizhuangtai"] = this.getBaseInfoFields()["ba_guolushuiweizhuangtai"]
        }else if (this.mediaVal == media.DaoReYou) {

        }else if (this.mediaVal == media.ReFeng) {

        }else if (this.mediaVal == media.ZhengQi){
          map["ba_guolushuiweizhuangtai"] = this.getBaseInfoFields()["ba_guolushuiweizhuangtai"]
          if (this.getBaseInfoFields().key == 'ba_guoluyalizhuangtai') {
            map["ba_guoluyalizhuangtai"] = this.getBaseInfoFields()["ba_guoluyalizhuangtai"]
          }else {
            map["mo_zhengqiyali"] = this.getMockFields()["mo_zhengqiyali"]
          }
        }else if (this.mediaVal == media.ZhenKong){

        }
      }else if (this.powerVal = power.Mei) {
        if (this.mediaVal = media.ReShui) {
          map["mo_paiyanwendu"] = this.getMockFields()["mo_paiyanwendu"]
          map["mo_chukouwendu"] = this.getMockFields()["mo_chukouwendu"]
          map["mo_rukouwendu"] = this.getMockFields()["mo_rukouwendu"]
          if (map.keys.indexOf('ba_guoluyalizhuangtai')) {
            map["ba_guoluyalizhuangtai"] = this.getBaseInfoFields()["ba_guoluyalizhuangtai"]
          }else {
            map["mo_zhengqiyali"] = this.getMockFields()["mo_zhengqiyali"]
          }
        }else if (this.mediaVal == media.DaoReYou) {
          map["mo_paiyanwendu"] = this.getMockFields()["mo_paiyanwendu"]
          map["mo_chukouwendu"] = this.getMockFields()["mo_chukouwendu"]
          map["mo_rukouwendu"] = this.getMockFields()["mo_rukouwendu"]
          if (map.keys.indexOf('ba_guoluyalizhuangtai')) {
            map["ba_guoluyalizhuangtai"] = this.getBaseInfoFields()["ba_guoluyalizhuangtai"]
          }else {
            map["mo_zhengqiyali"] = this.getMockFields()["mo_zhengqiyali"]
          }
        }else if (this.mediaVal == media.ReFeng) {

        }else if (this.mediaVal == media.ZhengQi) {
          if (map.keys.indexOf('ba_guoluyalizhuangtai')) {
            map["ba_guoluyalizhuangtai"] = this.getBaseInfoFields()["ba_guoluyalizhuangtai"]
          }else {
            map["mo_zhengqiyali"] = this.getMockFields()["mo_zhengqiyali"]
          }
          map["mo_paiyanwendu"] = this.getMockFields()["mo_paiyanwendu"]
          map["ba_guolushuiweizhuangtai"] = this.getBaseInfoFields()["ba_guolushuiweizhuangtai"]
        }else if (this.mediaVal == media.ZhenKong) {

        }

      }else if (this.powerVal = power.ShengWuZhi) {
        if (this.mediaVal == media.ReShui) {

        } else if (this.mediaVal == media.DaoReYou) {

        } else if (this.mediaVal == media.ReFeng) {

        } else if (this.mediaVal == media.ZhengQi) {

        } else if (this.mediaVal == media.ZhenKong) {

        }
      }else if (this.powerVal == power.YouQi) {
        if (this.mediaVal == media.ReShui) {
          map["mo_paiyanwendu"] = this.getMockFields()["mo_paiyanwendu"]
          map["mo_chukouwendu"] = this.getMockFields()["mo_chukouwendu"]
          map["mo_rukouwendu"] = this.getMockFields()["mo_rukouwendu"]
          map["ba_guolushuiweizhuangtai"] = this.getBaseInfoFields()["ba_guolushuiweizhuangtai"]
          map["ba_shuixiangshuiweizhuangtai"] = this.getBaseInfoFields()["ba_shuixiangshuiweizhuangtai"]
        }else if (this.mediaVal == media.DaoReYou) {
          map["mo_paiyanwendu"] = this.getMockFields()["mo_paiyanwendu"]
          map["mo_chukouwendu"] = this.getMockFields()["mo_chukouwendu"]
          map["mo_rukouwendu"] = this.getMockFields()["mo_rukouwendu"]
        }else if (this.mediaVal == media.ReFeng) {
          map["mo_paiyanwendu"] = this.getMockFields()["mo_paiyanwendu"]
          map["de_ranshaoqi"] = this.getMockFields()["de_ranshaoqi"]
          map["de_yinfengji"] = this.getMockFields()["de_yinfengji"]
        }else if (this.mediaVal = media.ZhengQi) {
          map["ba_guolushuiweizhuangtai"] = this.getBaseInfoFields()["ba_guolushuiweizhuangtai"]
          map["mo_paiyanwendu"] = this.getMockFields()["mo_paiyanwendu"]
          if (map.keys.indexOf('ba_guoluyalizhuangtai')) {
            map["ba_guoluyalizhuangtai"] = this.getBaseInfoFields()["ba_guoluyalizhuangtai"]
          }else {
            map["mo_zhengqiyali"] = this.getMockFields()["mo_zhengqiyali"]
          }
        }else if (this.mediaVal == media.ZhenKong) {
          map["mo_paiyanwendu"] = this.getMockFields()["mo_paiyanwendu"]
          map["mo_chukouwendu"] = this.getMockFields()["mo_chukouwendu"]
          map["mo_meishuiwendu"] = this.getMockFields()["mo_meishuiwendu"]
          map["ba_guolushuiweizhuangtai"] = this.getMockFields()["ba_guolushuiweizhuangtai"]
          if (map.keys.indexOf('ba_guoluyalizhuangtai')) {
            map["ba_guoluyalizhuangtai"] = this.getBaseInfoFields()["ba_guoluyalizhuangtai"]
          }else {
            map["mo_zhengqiyali"] = this.getMockFields()["mo_zhengqiyali"]
          }
        }
      }
      return map
    }
    getMode(){
      return this.getBaseInfoFields()["ba_moshibianhao"]
    }
    getPowerInfo(){
        let pointPower=this.getBaseInfoFields()[this.deviceModel.key_point_power]
        if(pointPower.value==power.Dian){
            return this.getSettingFields()[key_point_jia_re_zu].value > 0?1:0
        }else if(pointPower.value==power.Mei){
            return this.getDeviceInfoFields()[key_point_yin_feng_ji].value > 0x7F ? 1 : 0
        }
      return this.getDeviceInfoFields()[key_point_ran_shao_qi].value> 0x7F ? 1 : 0
    }
    getBeng(){
        return this.getElements(device_suffix_beng,element.prefix_beng,element.index_beng_count)
    }
    getFan(){
        return this.getElements(device_suffix_fan,element.prefix_fan,element.index_fan_count)
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
