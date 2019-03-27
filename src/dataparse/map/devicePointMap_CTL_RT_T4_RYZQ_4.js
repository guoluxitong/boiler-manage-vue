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

export default class devicePointMap_CTL_RT_T4_RYZQ_4 extends map {
  constructor () {
    super();

    const byteFieldObj = new byteField();

    /*************start 计算属性（不显示）****************/
    this.getPointMap["_ranshaoqi"] = byteFieldObj.init(new countField(), "_ranshaoqi", "燃烧器")
    this.getPointMap["_addshuibeng"] = byteFieldObj.init(new countField(), "_addshuibeng", "给水泵")
    /*************end 计算属性（不显示）****************/

    this.getPointMap[deviceModel.key_point_system_status] = byteFieldObj.init(new baseInfoField(), deviceModel.key_point_system_status, 3, 2, "系统状态", ctl_njrt_common_valueMap.coms_status)
    this.getPointMap[deviceModel.key_point_run_life] = byteFieldObj.init(new baseInfoField(), deviceModel.key_point_run_life, 53, 2, "运行时间", "时")
    this.getPointMap[deviceModel.key_point_run_days] = byteFieldObj.init(deviceModel.key_base, new countShowField(), deviceModel.key_point_run_days, "运行天数", "天")
    this.getPointMap[deviceModel.key_point_run_hours] = byteFieldObj.init(deviceModel.key_base, new countShowField(), deviceModel.key_point_run_hours, "运行小时数", "时")
    this.getPointMap[deviceModel.key_point_power] = byteFieldObj.init(new fixedValueField(), deviceModel.key_point_power, "燃料类型", 0, coms_power)
    this.getPointMap[deviceModel.key_point_media] = byteFieldObj.init(new fixedValueField(), deviceModel.key_point_media, "介质类型", 1, coms_media)

    this.getPointMap["de_jishuibeng_zhu/bei_"] = byteFieldObj.init(new deviceField(), "de_jishuibeng_zhu/bei_", 49, 2, "给水泵",0, ctl_njrt_common_valueMap.coms_master)
    this.getPointMap["de_jishuibeng_shoudong/zidong_"] = byteFieldObj.init(new deviceField(), "de_jishuibeng_shoudong/zidong_", 49, 2, "给水泵",1, ctl_njrt_common_valueMap.coms_atuo)

    this.getPointMap["ex_zhengqiyalibiansongqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_zhengqiyalibiansongqiguzhang", 45, 2, "蒸汽压力变送器故障",0)
    this.getPointMap["ex_paiyanwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_paiyanwenduchuanganqiguzhang", 45, 2, "排烟温度传感器故障",1)
    this.getPointMap["ex_paiyanwendugaobaojing"]=byteFieldObj.init(new exceptionField(),"ex_paiyanwendugaobaojing", 45, 2, "排烟温度高报警",2)
    this.getPointMap["ex_shuiweichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_shuiweichuanganqiguzhang", 45, 2, "水位传感器故障",3)
    this.getPointMap["ex_chaoyabaojing"]=byteFieldObj.init(new exceptionField(),"ex_chaoyabaojing", 45, 2, "超压报警",4)
    this.getPointMap["ex_gaoshuiweibaojing"]=byteFieldObj.init(new exceptionField(),"ex_gaoshuiweibaojing", 45, 2, "高水位报警",5)
    this.getPointMap["ex_jixiandishuiweibaojing"]=byteFieldObj.init(new exceptionField(),"ex_jixiandishuiweibaojing", 45, 2, "极限低水位报警",6)
    this.getPointMap["ex_bianpinqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_bianpinqiguzhang", 45, 2, "变频器故障",7)
    this.getPointMap["ex_ranshaoqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_ranshaoqiguzhang", 45, 2, "燃烧器故障",8)
    this.getPointMap["ex_qingranshaoqifuwei"]=byteFieldObj.init(new exceptionField(),"ex_qingranshaoqifuwei", 45, 2, "请燃烧器复位",9)
    this.getPointMap["ex_xitongguzhang"]=byteFieldObj.init(new exceptionField(),"ex_xitongguzhang", 45, 2, "系统故障",10)
    this.getPointMap["ex_cunchuqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_cunchuqiguzhang", 45, 2, "存储器故障",11)

    this.getPointMap["mo_zhengqiyali"] = byteFieldObj.init(new mockField(), "mo_zhengqiyali", 13, 2, "蒸汽压力","Mpa")
    this.getPointMap["mo_paiyanwendu"] = byteFieldObj.init(new mockField(), "mo_paiyanwendu", 15, 2, "排烟温度","℃")
    this.getPointMap["mo_zhengqiwendu"] = byteFieldObj.init(new mockField(), "mo_zhengqiwendu", 17, 2, "蒸汽温度","℃")
    this.getPointMap["mo_qibaoshuiwei"] = byteFieldObj.init(new mockField(), "mo_qibaoshuiwei", 19, 2, "汽包水位","mm")

    this.getPointMap["oc_jixiandishuiweidianji_changbiduankaibaojing_"]=byteFieldObj.init(new openCloseField(), "oc_jixiandishuiweidianji_changbiduankaibaojing_", 5, 2, "极限低水位电极（常闭 断开报警）",0,coms_open_close)
    this.getPointMap["oc_gaoshuiweibaojingdianji"]=byteFieldObj.init(new openCloseField(), "oc_gaoshuiweibaojingdianji", 5, 2, "高水位报警电极",1,coms_open_close)
    this.getPointMap["oc_bianpinqiguzhangfanhuixinhao"]=byteFieldObj.init(new openCloseField(), "oc_bianpinqiguzhangfanhuixinhao", 5, 2, "变频器故障返回信号",2,coms_open_close)
    this.getPointMap["oc_chaoyabaojing"]=byteFieldObj.init(new openCloseField(), "oc_chaoyabaojing", 5, 2, "超压报警",9,coms_open_close)
    this.getPointMap["oc_ranshaoqiguzhang"]=byteFieldObj.init(new openCloseField(), "oc_ranshaoqiguzhang", 5, 2, "燃烧器故障",10,coms_open_close)
    this.getPointMap["oc_ranshaoqiqitingkongzhi"]=byteFieldObj.init(new openCloseField(), "oc_ranshaoqiqitingkongzhi", 9, 2, "燃烧器启停控制",0,coms_open_close)
    this.getPointMap["oc_bidiaozeng"]=byteFieldObj.init(new openCloseField(), "oc_bidiaozeng", 9, 2, "比调增",1,coms_open_close)
    this.getPointMap["oc_bidiaojian"]=byteFieldObj.init(new openCloseField(), "oc_bidiaojian", 9, 2, "比调减",2,coms_open_close)
    this.getPointMap["oc_1_addshuibeng_start_stop"] = byteFieldObj.init(new deviceField(), "oc_1_addshuibeng_start_stop", 9, 2, "给水泵控制（主泵)",3,coms_open_close)
    this.getPointMap["oc_2_addshuibeng_start_stop"] = byteFieldObj.init(new deviceField(), "oc_2_addshuibeng_start_stop", 9, 2, "给水泵控制（备泵）",4,coms_open_close)
    this.getPointMap["oc_baojingshuchu"]=byteFieldObj.init(new openCloseField(), "oc_baojingshuchu", 9, 2, "报警输出",6,coms_open_close)
  }
}
