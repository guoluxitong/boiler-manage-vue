import map from './map'
import { coms_media, coms_power, ctl_njrt_common_valueMap, coms_open_close, } from './commonValueMap'
import { deviceModel } from '../model/sdcSoftDevice'
import byteField from '../meta/byteField'
import baseInfoField from '../meta/ctl_njrt/baseInfoField'
import exceptionField from '../meta/ctl_njrt/exceptionField'
import mockField from '../meta/ctl_njrt/mockField'
import openCloseField from '../meta/ctl_njrt/openCloseField'
import deviceField from '../meta/ctl_njrt/deviceField'
import countField from "../meta/countField";
import countShowField from "../meta/countShowField";
import fixedValueField from "../meta/fixedValueField";

export default class devicePointMap_CTL_RT_X6_RYRS extends map {
  constructor () {
    super();

    const byteFieldObj = new byteField();

    /*************start 计算属性（不显示）****************/
    this.getPointMap["_ranshaoqi"] = byteFieldObj.init(new countField(), "_ranshaoqi", "燃烧器")
    this.getPointMap["_addshuibeng"] = byteFieldObj.init(new countField(), "_addshuibeng", "给水泵")
    this.getPointMap["_lengningbeng"] = byteFieldObj.init(new countField(), "_xunhuanbeng", "循环泵")
    /*************end 计算属性（不显示）****************/

    this.getPointMap[deviceModel.key_point_system_status] = byteFieldObj.init(new baseInfoField(), deviceModel.key_point_system_status, 3, 2, "系统状态", ctl_njrt_common_valueMap.coms_status)
    this.getPointMap[deviceModel.key_point_run_life] = byteFieldObj.init(new baseInfoField(), deviceModel.key_point_run_life, 53, 2, "运行时间", "时")
    this.getPointMap[deviceModel.key_point_run_days] = byteFieldObj.init(deviceModel.key_base, new countShowField(), deviceModel.key_point_run_days, "运行天数", "天")
    this.getPointMap[deviceModel.key_point_run_hours] = byteFieldObj.init(deviceModel.key_base, new countShowField(), deviceModel.key_point_run_hours, "运行小时数", "时")
    this.getPointMap[deviceModel.key_point_power] = byteFieldObj.init(new fixedValueField(), deviceModel.key_point_power, "燃料类型", 0, coms_power)
    this.getPointMap[deviceModel.key_point_media] = byteFieldObj.init(new fixedValueField(), deviceModel.key_point_media, "介质类型", 0, coms_media)

    this.getPointMap["de_bushuibeng_shoudong/zidong_"] = byteFieldObj.init(new deviceField(), "de_bushuibeng_shoudong/zidong_", 49, 2, "补水泵",1, ctl_njrt_common_valueMap.coms_atuo)
    this.getPointMap["de_xunhuanbeng_zidong/shoudong_"] = byteFieldObj.init(new deviceField(), "de_xunhuanbeng_zidong/shoudong_", 49, 2, "循环泵",3, ctl_njrt_common_valueMap.coms_atuo)
    this.getPointMap["mo_chushuiwendu"] = byteFieldObj.init(new mockField(), "mo_chushuiwendu", 13, 2, "出水温度","℃")
    this.getPointMap["mo_huishuiwendu"] = byteFieldObj.init(new mockField(), "mo_huishuiwendu", 15, 2, "回水温度","℃")
    this.getPointMap["mo_paiyanwendu"] = byteFieldObj.init(new mockField(), "mo_paiyanwendu", 17, 2, "排烟温度","℃")

    this.getPointMap["ex_jixiandishuiweibao"]=byteFieldObj.init(new exceptionField(),"ex_jixiandishuiweibao", 45, 2, "极限低水位报",0)
    this.getPointMap["ex_lubichaowen_changbiduankaibaojing_"]=byteFieldObj.init(new exceptionField(),"ex_lubichaowen_changbiduankaibaojing_", 45, 2, "炉壁超温（常闭 断开报警）",1)
    this.getPointMap["ex_ranshaoqiguzhangbaojing"]=byteFieldObj.init(new exceptionField(),"ex_ranshaoqiguzhangbaojing", 45, 2, "燃烧器故障报警",2)
    this.getPointMap["ex_chushuiwenduchuanganqibaojing"]=byteFieldObj.init(new exceptionField(),"ex_chushuiwenduchuanganqibaojing", 45, 2, "出水温度传感器报警",3)
    this.getPointMap["ex_huishuiwenduchuanganqibaojing"]=byteFieldObj.init(new exceptionField(),"ex_huishuiwenduchuanganqibaojing", 45, 2, "回水温度传感器报警",4)
    this.getPointMap["ex_paiyanwenduchuanganqibaojing"]=byteFieldObj.init(new exceptionField(),"ex_paiyanwenduchuanganqibaojing", 45, 2, "排烟温度传感器报警",5)
    this.getPointMap["ex_chushuiwendugaobaojing"]=byteFieldObj.init(new exceptionField(),"ex_chushuiwendugaobaojing", 45, 2, "出水温度高报警",6)
    this.getPointMap["ex_shuiweichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_shuiweichuanganqiguzhang", 45, 2, "水位传感器故障",7)
    this.getPointMap["ex_paiyanwendugaobaojing"]=byteFieldObj.init(new exceptionField(),"ex_paiyanwendugaobaojing", 45, 2, "排烟温度高报警",8)
    this.getPointMap["ex_gaoshuiweibaojing"]=byteFieldObj.init(new exceptionField(),"ex_gaoshuiweibaojing", 45, 2, "高水位报警",9)

    this.getPointMap["oc_jixiandishuiweidianji"]=byteFieldObj.init(new openCloseField(), "oc_jixiandishuiweidianji", 5, 2, "极限低水位电极",0)
    this.getPointMap["oc_dishuiwei"]=byteFieldObj.init(new openCloseField(), "oc_dishuiwei", 5, 2, "低水位",1)
    this.getPointMap["oc_gaoshuiwei"]=byteFieldObj.init(new openCloseField(), "oc_gaoshuiwei", 5, 2, "高水位",2)
    this.getPointMap["oc_gaoshuiweibaojing"]=byteFieldObj.init(new openCloseField(), "oc_gaoshuiweibaojing", 5, 2, "高水位报警",3)
    this.getPointMap["oc_lubichaowen_changbiduankaibaojing_"]=byteFieldObj.init(new openCloseField(), "oc_lubichaowen_changbiduankaibaojing_", 5, 2, "炉壁超温（常闭 断开报警）",4)
    this.getPointMap["oc_NC"]=byteFieldObj.init(new openCloseField(), "oc_NC", 5, 2, "NC",5)
    this.getPointMap["oc_NC1"]=byteFieldObj.init(new openCloseField(), "oc_NC", 5, 2, "NC",6)
    this.getPointMap["oc_ranshaoqiguzhang"]=byteFieldObj.init(new openCloseField(), "oc_ranshaoqiguzhang", 5, 2, "燃烧器故障",7)
    this.getPointMap["oc_NC2"]=byteFieldObj.init(new openCloseField(), "oc_NC", 5, 2, "NC",8)
    this.getPointMap["oc_NC3"]=byteFieldObj.init(new openCloseField(), "oc_NC", 5, 2, "NC",9)
    this.getPointMap["oc_NC4"]=byteFieldObj.init(new openCloseField(), "oc_NC", 5, 2, "NC",10)
    this.getPointMap["oc_ranshaoqiqitingkongzhi"]=byteFieldObj.init(new openCloseField(), "oc_ranshaoqiqitingkongzhi", 9, 2, "燃烧器启停控制",0)
    this.getPointMap["oc_ranshaoqifuhetiaojie"]=byteFieldObj.init(new openCloseField(), "oc_ranshaoqifuhetiaojie", 9, 2, "燃烧器负荷调节",1)
    this.getPointMap["oc_1_addshuibeng_start_stop"] = byteFieldObj.init(new deviceField(), "oc_1_addshuibeng_start_stop", 9, 2, "补水泵输出",2,coms_open_close)
    this.getPointMap["oc_1_xunhuanbeng_start_stop"] = byteFieldObj.init(new deviceField(), "oc_1_xunhuanbeng_start_stop", 9, 2, "循环泵输出",3,coms_open_close)
    this.getPointMap["oc_NC5"]=byteFieldObj.init(new openCloseField(), "oc_NC", 9, 2, "NC",4)
    this.getPointMap["oc_baojingzhuangtaishuchu"]=byteFieldObj.init(new openCloseField(), "oc_baojingzhuangtaishuchu", 9, 2, "报警状态输出",5)
    this.getPointMap["oc_NC6"]=byteFieldObj.init(new openCloseField(), "oc_NC", 9, 2, "NC",6)
  }
}
