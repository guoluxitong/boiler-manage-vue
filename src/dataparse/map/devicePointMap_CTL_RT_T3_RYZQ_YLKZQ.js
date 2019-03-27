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

export default class devicePointMap_CTL_RT_T3_RYZQ_YLKZQ extends map {
  constructor () {
    super();

    const byteFieldObj = new byteField();

    /*************start 计算属性（不显示）****************/
    this.getPointMap["_ranshaoqi"] = byteFieldObj.init(new countField(), "_ranshaoqi", "燃烧器")
    this.getPointMap["_addshuibeng"] = byteFieldObj.init(new countField(), "_addshuibeng", "给水泵")
    this.getPointMap["_lengningbeng"] = byteFieldObj.init(new countField(), "_lengningbeng", "冷凝泵")
    /*************end 计算属性（不显示）****************/

    this.getPointMap[deviceModel.key_point_system_status] = byteFieldObj.init(new baseInfoField(), deviceModel.key_point_system_status, 3, 2, "系统状态", ctl_njrt_common_valueMap.coms_status)
    this.getPointMap[deviceModel.key_point_run_life] = byteFieldObj.init(new baseInfoField(), deviceModel.key_point_run_life, 53, 2, "运行时间", "时")
    this.getPointMap[deviceModel.key_point_run_days] = byteFieldObj.init(deviceModel.key_base, new countShowField(), deviceModel.key_point_run_days, "运行天数", "天")
    this.getPointMap[deviceModel.key_point_run_hours] = byteFieldObj.init(deviceModel.key_base, new countShowField(), deviceModel.key_point_run_hours, "运行小时数", "时")
    this.getPointMap[deviceModel.key_point_power] = byteFieldObj.init(new fixedValueField(), deviceModel.key_point_power, "燃料类型", 0, coms_power)
    this.getPointMap[deviceModel.key_point_media] = byteFieldObj.init(new fixedValueField(), deviceModel.key_point_media, "介质类型", 1, coms_media)

    this.getPointMap["oc_queshuidianji"]=byteFieldObj.init(new openCloseField(), "oc_queshuidianji", 5, 2, "缺水电极",0,coms_open_close)
    this.getPointMap["oc_dishuiweibaojingdianji_6dianjiteyou_"]=byteFieldObj.init(new openCloseField(), "oc_dishuiweibaojingdianji_6dianjiteyou_", 5, 2, "低水位报警电极（6电极特有）",1,coms_open_close)
    this.getPointMap["oc_dishuiweidianji"]=byteFieldObj.init(new openCloseField(), "oc_dishuiweidianji", 5, 2, "低水位电极",2,coms_open_close)
    this.getPointMap["oc_zhongshuiweidianji_6dianjiteyou_"]=byteFieldObj.init(new openCloseField(), "oc_zhongshuiweidianji_6dianjiteyou_", 5, 2, "中水位电极（6 电极特有）",3,coms_open_close)
    this.getPointMap["oc_gaoshuiweidianji"]=byteFieldObj.init(new openCloseField(), "oc_gaoshuiweidianji", 5, 2, "高水位电极",4,coms_open_close)
    this.getPointMap["oc_gaoshuiweibaojingdianji"]=byteFieldObj.init(new openCloseField(), "oc_gaoshuiweibaojingdianji", 5, 2, "高水位报警电极",5,coms_open_close)
    this.getPointMap["oc_bianpinqiguzhangbaojing"]=byteFieldObj.init(new openCloseField(), "oc_bianpinqiguzhangbaojing", 5, 2, "变频器故障报警",6,coms_open_close)
    this.getPointMap["oc_fuhetiaojie"]=byteFieldObj.init(new openCloseField(), "oc_fuhetiaojie", 5, 2, "负荷调节",7,coms_open_close)
    this.getPointMap["oc_qitingkongzhi"]=byteFieldObj.init(new openCloseField(), "oc_qitingkongzhi", 5, 2, "启停控制",8,coms_open_close)
    this.getPointMap["oc_chaoyabaojing"]=byteFieldObj.init(new openCloseField(), "oc_chaoyabaojing", 5, 2, "超压报警",9,coms_open_close)
    this.getPointMap["oc_ranshaoqiguzhang"]=byteFieldObj.init(new openCloseField(), "oc_ranshaoqiguzhang", 5, 2, "燃烧器故障",10,coms_open_close)
    this.getPointMap["oc_ranqixieloubaojing"]=byteFieldObj.init(new openCloseField(), "oc_ranqixieloubaojing", 5, 2, "燃气泄漏报警",11,coms_open_close)
    this.getPointMap["oc_ranqiyalidibaojing"]=byteFieldObj.init(new openCloseField(), "oc_ranqiyalidibaojing", 5, 2, "燃气压力低报警",12,coms_open_close)
    this.getPointMap["oc_ranqiyaligaobaojing"]=byteFieldObj.init(new openCloseField(), "oc_ranqiyaligaobaojing", 5, 2, "燃气压力高报警",13,coms_open_close)
    this.getPointMap["oc_ranshaoqiqitingkongzhi"]=byteFieldObj.init(new openCloseField(), "oc_ranshaoqiqitingkongzhi", 9, 2, "燃烧器启停控制",0,coms_open_close)
    this.getPointMap["oc_ranshaoqifuhetiaojie"]=byteFieldObj.init(new openCloseField(), "oc_ranshaoqifuhetiaojie", 9, 2, "燃烧器调节",1,ctl_njrt_common_valueMap.coms_ranshaoqi_status)

    this.getPointMap["oc_1_addshuibeng_start_stop"] = byteFieldObj.init(new deviceField(), "oc_1_addshuibeng_start_stop", 9, 2, "给水泵控制（主）",3,coms_open_close)
    this.getPointMap["oc_2_addshuibeng_start_stop"] = byteFieldObj.init(new deviceField(), "oc_2_addshuibeng_start_stop", 9, 2, "给水泵控制（备）",4,coms_open_close)
    this.getPointMap["oc_1_lengningxunhuanbeng_start_stop"] = byteFieldObj.init(new deviceField(), "oc_1_lengningxunhuanbeng_start_stop", 9, 2, "冷凝循环泵控制",5,coms_open_close)
    this.getPointMap["oc_baojingzhuangtaishuchu"]=byteFieldObj.init(new openCloseField(), "oc_baojingzhuangtaishuchu", 9, 2, "报警状态输出",8,coms_open_close)

    this.getPointMap["mo_lengningqiyanwen"] = byteFieldObj.init(new mockField(), "mo_lengningqiyanwen", 13, 2, "冷凝器烟温","℃")
    this.getPointMap["mo_jishuiwendu"] = byteFieldObj.init(new mockField(), "mo_jishuiwendu", 15, 2, "给水温度","℃")
    this.getPointMap["mo_shuiweixinhao"] = byteFieldObj.init(new mockField(), "mo_shuiweixinhao", 19, 2, "水位信号","%")
    this.getPointMap["mo_paiyanwendu"] = byteFieldObj.init(new mockField(), "mo_paiyanwendu", 21, 2, "排烟温度","℃")
    this.getPointMap["mo_jienengqiyanwen"] = byteFieldObj.init(new mockField(), "mo_jienengqiyanwen", 23, 2, "节能器烟温","℃")

    this.getPointMap["de_jishuibeng_zhu/bei_"] = byteFieldObj.init(new deviceField(), "de_jishuibeng_zhu/bei_", 49, 2, "给水泵",0, ctl_njrt_common_valueMap.coms_master)
    this.getPointMap["de_jishuibeng_shoudong/zidong_"] = byteFieldObj.init(new deviceField(), "de_jishuibeng_shoudong/zidong_", 49, 2, "给水泵",1, ctl_njrt_common_valueMap.coms_atuo)
    this.getPointMap["de_lengningxunhuanbeng_zidong/shoudong_"] = byteFieldObj.init(new deviceField(), "de_lengningxunhuanbeng_zidong/shoudong_", 49, 2, "节能循环泵",3, ctl_njrt_common_valueMap.coms_master)

    this.getPointMap["ex_shuiweichuanganqiduanlu1"]=byteFieldObj.init(new exceptionField(),"ex_shuiweichuanganqiduanlu1", 45, 2, "水位传感器断路",3)
    this.getPointMap["ex_shuiweichuanganqiduanlu"]=byteFieldObj.init(new exceptionField(),"ex_shuiweichuanganqiduanlu", 45, 2, "水位传感器短路",4)
    this.getPointMap["ex_jixiandishuiweibaojing_dianliu_"]=byteFieldObj.init(new exceptionField(),"ex_jixiandishuiweibaojing_dianliu_", 45, 2, "极限低水位报警（电流）",5)
    this.getPointMap["ex_gaoshuiweibaojing_dianliu_"]=byteFieldObj.init(new exceptionField(),"ex_gaoshuiweibaojing_dianliu_", 45, 2, "高水位报警（电流）",6)
    this.getPointMap["ex_paiyanwendugaobaojing"]=byteFieldObj.init(new exceptionField(),"ex_paiyanwendugaobaojing", 45, 2, "排烟温度高报警",7)
    this.getPointMap["ex_jixiandishuiweibaojing"]=byteFieldObj.init(new exceptionField(),"ex_jixiandishuiweibaojing", 45, 2, "极限低水位报警",8)
    this.getPointMap["ex_shuiweidianjiluojicuo"]=byteFieldObj.init(new exceptionField(),"ex_shuiweidianjiluojicuo", 45, 2, "水位电极逻辑错",9)
    this.getPointMap["ex_dishuiweibaojing"]=byteFieldObj.init(new exceptionField(),"ex_dishuiweibaojing", 45, 2, "低水位报警",10)
    this.getPointMap["ex_gaoshuiweibaojing"]=byteFieldObj.init(new exceptionField(),"ex_gaoshuiweibaojing", 45, 2, "高水位报警",11)
    this.getPointMap["ex_bianpinqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_bianpinqiguzhang", 45, 2, "变频器故障",12)
    this.getPointMap["ex_chaoyabaojing_kongzhiqi_"]=byteFieldObj.init(new exceptionField(),"ex_chaoyabaojing_kongzhiqi_", 45, 2, "超压报警（控制器）",13)
    this.getPointMap["ex_ranqiyalidibaojing"]=byteFieldObj.init(new exceptionField(),"ex_ranqiyalidibaojing", 45, 2, "燃气压力低报警",14)
    this.getPointMap["ex_ranqiyaligaobaojing"]=byteFieldObj.init(new exceptionField(),"ex_ranqiyaligaobaojing", 45, 2, "燃气压力高报警",15)
    this.getPointMap["ex_ranqixieloubaojing"]=byteFieldObj.init(new exceptionField(),"ex_ranqixieloubaojing", 47, 2, "燃气泄漏报警",0)
    this.getPointMap["ex_ranshaoqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_ranshaoqiguzhang", 47, 2, "燃烧器故障",1)
  }
}
