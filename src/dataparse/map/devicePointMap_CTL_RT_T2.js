import map from './map'
import {coms_media, coms_power, coms_start_stop, ctl_njrt_common_valueMap} from './commonValueMap'
import {deviceModel} from '../model/sdcSoftDevice'
import byteField from '../meta/byteField'
import baseInfoField from '../meta/ctl_njrt/baseInfoField'
import exceptionField from '../meta/ctl_njrt/exceptionField'
import mockField from '../meta/ctl_njrt/mockField'
import openCloseField from '../meta/ctl_njrt/openCloseField'
import countField from "../meta/countField";
import countShowField from "../meta/countShowField";
import fixedValueField from "../meta/fixedValueField";

export default class devicePointMap_CTL_RT_T2 extends map {
    constructor() {
        super();
        const byteFieldObj =new byteField();

        /*************start 计算属性（不显示）****************/
        this.getPointMap["_ranshaoqi"]=byteFieldObj.init(new countField(),"de_ranshaoqi","燃烧器")
        this.getPointMap["_jishui_beng"]=byteFieldObj.init(new countField(),"oc_jishui_beng","给水泵")
        this.getPointMap["_lengning_beng"]=byteFieldObj.init(new countField(),"oc_lengning_beng","冷凝泵")
        /*************end 计算属性（不显示）****************/

        this.getPointMap[deviceModel.key_point_system_status]=byteFieldObj.init(new baseInfoField(),deviceModel.key_point_system_status,3,2,"系统状态",ctl_njrt_common_valueMap.coms_status)
        this.getPointMap[deviceModel.key_point_run_life]=byteFieldObj.init(new baseInfoField(),deviceModel.key_point_run_life,53,2,"运行时间")
        this.getPointMap[deviceModel.key_point_run_days]=byteFieldObj.init(deviceModel.key_base, new countShowField(),deviceModel.key_point_run_days,"运行天数","天")
        this.getPointMap[deviceModel.key_point_run_hours]=byteFieldObj.init(deviceModel.key_base, new countShowField(),deviceModel.key_point_run_hours,"运行小时数","时")
        this.getPointMap[deviceModel.key_point_power]=byteFieldObj.init(new baseInfoField(),deviceModel.key_point_power,87,2,"燃料类型",coms_power)
        this.getPointMap[deviceModel.key_point_media]=byteFieldObj.init(new baseInfoField(),deviceModel.key_point_media,89,2,"介质类型",coms_media)

        this.getPointMap["oc_ranshaoqiqitingkongzhi"]=byteFieldObj.init(new openCloseField(),"oc_ranshaoqiqitingkongzhi", 9, 2, "燃烧器启停控制", coms_start_stop,0)
        this.getPointMap["oc_ranshaoqifuhetiaojie"]=byteFieldObj.init(new openCloseField(),"oc_ranshaoqifuhetiaojie", 9, 2, "燃烧i器负荷调节", coms_start_stop,1)
        this.getPointMap["oc_addshuibengzhukongzhi_beng"]=byteFieldObj.init(new openCloseField(),"oc_addshuibengzhukongzhi_beng", 9, 2, "给水泵（主）控制", coms_start_stop,3)
        this.getPointMap["oc_addshuibengbeikongzhi_beng"]=byteFieldObj.init(new openCloseField(),"oc_addshuibengbeikongzhi_beng", 9, 2, "给水泵（备）控制", coms_start_stop,4)
        this.getPointMap["oc_lengningxunhuanbengkongzhi_beng"]=byteFieldObj.init(new openCloseField(),"oc_lengningxunhuanbengkongzhi_beng", 9, 2, "冷凝循环泵控制", coms_start_stop,5)
        this.getPointMap["oc_baojingshuchu"]=byteFieldObj.init(new openCloseField(),"oc_baojingshuchu", 9, 2, "报警输出", coms_start_stop,6)
        this.getPointMap["oc_jishuibengzhubei"]=byteFieldObj.init(new openCloseField(),"oc_jishuibengzhubei", 49, 2, "给水泵主备", ctl_njrt_common_valueMap.coms_master,0)
        this.getPointMap["oc_jishuibengshouzi"]=byteFieldObj.init(new openCloseField(),"oc_jishuibengshouzi", 49, 2, "给水泵手自", ctl_njrt_common_valueMap.coms_atuo,1)
        this.getPointMap["oc_jienengxunhuanbengshouzi"]=byteFieldObj.init(new openCloseField(),"oc_jienengxunhuanbengshouzi", 49, 2, "节能循环泵手自", ctl_njrt_common_valueMap.coms_master,3)

        this.getPointMap["ex_shuiweichuanganqicut"]=byteFieldObj.init(new exceptionField(),"ex_shuiweichuanganqicut", 45, 2, "水位传感器断路", 3)
        this.getPointMap["ex_shuiweichuanganqishort"]=byteFieldObj.init(new exceptionField(),"ex_shuiweichuanganqishort", 45, 2, "水位传感器短路", 4)
        this.getPointMap["ex_jixiandishuiweibaojingdianliu"]=byteFieldObj.init(new exceptionField(),"ex_jixiandishuiweibaojingdianliu", 45, 2, "极限低水位报警（电流）", 5)
        this.getPointMap["ex_gaoshuiweibaojingdianliu"]=byteFieldObj.init(new exceptionField(),"ex_gaoshuiweibaojingdianliu", 45, 2, "高水位报警（电流）", 6)
        this.getPointMap["ex_paiyanwendugaobaojing"]=byteFieldObj.init(new exceptionField(),"ex_paiyanwendugaobaojing", 45, 2, "排烟温度高报警", 7)
        this.getPointMap["ex_jixiandishuiweibaojing"]=byteFieldObj.init(new exceptionField(),"ex_jixiandishuiweibaojing", 45, 2, "极限低水位报警", 8)
        this.getPointMap["ex_shuiweidianjiluojicuo"]=byteFieldObj.init(new exceptionField(),"ex_shuiweidianjiluojicuo", 45, 2, "水位电极逻辑错", 9)
        this.getPointMap["ex_dishuiweibaojing"]=byteFieldObj.init(new exceptionField(),"ex_dishuiweibaojing", 45, 2, "低水位报警", 10)
        this.getPointMap["ex_gaoshuiweibaojing"]=byteFieldObj.init(new exceptionField(),"ex_gaoshuiweibaojing", 45, 2, "高水位报警", 11)
        this.getPointMap["ex_bianpinqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_bianpinqiguzhang", 45, 2, "变频器故障", 12)
        this.getPointMap["ex_chaoyabaojingkongzhiqi"]=byteFieldObj.init(new exceptionField(),"ex_chaoyabaojingkongzhiqi", 45, 2, "超压报警（控制器）", 13)
        this.getPointMap["ex_ranqiyalidibaojing"]=byteFieldObj.init(new exceptionField(),"ex_ranqiyalidibaojing", 45, 2, "燃气压力低报警", 14)
        this.getPointMap["ex_ranqiyaligaobaojing"]=byteFieldObj.init(new exceptionField(),"ex_ranqiyaligaobaojing", 45, 2, "燃气压力高报警", 15)
        this.getPointMap["ex_ranqixieloubaojing"]=byteFieldObj.init(new exceptionField(),"ex_ranqixieloubaojing", 47, 2, "燃气泄漏报警", 0)
        this.getPointMap["ex_ranshaoqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_ranshaoqiguzhang", 47, 2, "燃烧器故障", 1)

        this.getPointMap["mo_lengningqiyanwen"]=byteFieldObj.init(new mockField(),"mo_lengningqiyanwen", 13, 2, "冷凝器烟温", "℃")
        this.getPointMap["mo_jishuiwendu"]=byteFieldObj.init(new mockField(),"mo_jishuiwendu", 15, 2, "给水温度", "℃")
        this.getPointMap["mo_shuiweixinhao"]=byteFieldObj.init(new mockField(),"mo_shuiweixinhao", 19, 2, "水位", "%")
        this.getPointMap["mo_paiyanwendu"]=byteFieldObj.init(new mockField(),"mo_paiyanwendu", 21, 2, "排烟温度", "℃")
        this.getPointMap["mo_jienengqiyanwen"]=byteFieldObj.init(new mockField(),"mo_jienengqiyanwen", 23, 2, "节能器烟温", "℃")
    }
}
