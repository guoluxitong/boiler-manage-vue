import map from './map'
import { coms_media, coms_power, ctl_njrt_common_valueMap, coms_open_close, } from './commonValueMap'
import { deviceModel } from '../model/sdcSoftDevice'
import byteField from '../meta/byteField'
import baseInfoField from '../meta/ctl_njrt/baseInfoField'
import exceptionField from '../meta/ctl_njrt/exceptionField'
import mockField from '../meta/ctl_njrt/mockField'
import openCloseField from '../meta/ctl_njrt/openCloseField'
import settingField from '../meta/ctl_njrt/settingField'
import deviceField from '../meta/ctl_njrt/deviceField'
import countField from "../meta/countField";
import countShowField from "../meta/countShowField";
import fixedValueField from "../meta/fixedValueField";

export default class devicePointMap_CTL_RT_T2_RYRS_18126024 extends map {
    constructor() {
        super();

        const coms_status = {
            0: '待命',
            1: '报警',
            2: '运行',
        }
        const coms_guolu = {
            0: '常压',
            1: '承压',
        }
        const coms_ranshaoqi = {
            0: '内置比调',
            1: '两段火力',
        }
        const coms_bushuibeng = {
            0: '4电极',
            1: '电接点压力表',
        }
        const coms_xunhuanbeng = {
            0: '出水温度',
            1: '回水温度',
            2: '燃烧器',
        }
        const byteFieldObj = new byteField();

        const commands_key_paramenters_setting = "参数设置"
        const commands_key_system_ctl = "系统控制"

        /*************start 计算属性（不显示）****************/
        this.getPointMap["_ranshaoqi"] = byteFieldObj.init(new countField(), "_ranshaoqi","燃烧器")
        this.getPointMap["_addshuibeng"] = byteFieldObj.init(new countField(), "_addshuibeng","给水泵" )
        this.getPointMap["_lengningbeng"] = byteFieldObj.init(new countField(), "_lengningbeng", "循环泵")
        /*************end 计算属性（不显示）****************/

        this.getPointMap[deviceModel.key_point_system_status] = byteFieldObj.init(new baseInfoField(), deviceModel.key_point_system_status, 3, 2, "系统状态", coms_status)
        this.getPointMap[deviceModel.key_point_run_life] = byteFieldObj.init(new baseInfoField(), deviceModel.key_point_run_life, 53, 2, "运行时间", "时")
        this.getPointMap[deviceModel.key_point_run_days] = byteFieldObj.init(deviceModel.key_base,new countShowField(), deviceModel.key_point_run_days,"运行天数", "天")
        this.getPointMap[deviceModel.key_point_run_hours] = byteFieldObj.init(deviceModel.key_base,new countShowField(),deviceModel.key_point_run_hours, "运行小时数", "时")
        this.getPointMap[deviceModel.key_point_power] = byteFieldObj.init(new fixedValueField(), deviceModel.key_point_power,"燃料类型",0, coms_power)
        this.getPointMap[deviceModel.key_point_media] = byteFieldObj.init(new fixedValueField(), deviceModel.key_point_media,"介质类型",0, coms_media)

        this.getPointMap["oc_queshuidianji"] = byteFieldObj.init(new openCloseField(), "oc_queshuidianji", 5, 2, "缺水电极",0,coms_open_close)
        this.getPointMap["oc_dishuiweidianji"] = byteFieldObj.init(new openCloseField(), "oc_dishuiweidianji", 5, 2, "低水位电极",1,coms_open_close)
        this.getPointMap["oc_gaoshuiweidianji"] = byteFieldObj.init(new openCloseField(), "oc_gaoshuiweidianji", 5, 2, "高水位电极",2,coms_open_close)
        this.getPointMap["oc_gaoshuiweibaojingdianji"] = byteFieldObj.init(new openCloseField(), "oc_gaoshuiweibaojingdianji", 5, 2, "高水位报警电极",3,coms_open_close)
        this.getPointMap["oc_dianjiedianyalibiaodizhen"] = byteFieldObj.init(new openCloseField(), "oc_dianjiedianyalibiaodizhen", 5, 2, "电接点压力表低针",4,coms_open_close)
        this.getPointMap["oc_dianjiedianyalibiaogaozhen"] = byteFieldObj.init(new openCloseField(), "oc_dianjiedianyalibiaogaozhen", 5, 2, "电接点压力表高针",5,coms_open_close)

        this.getPointMap["oc_chaoyabaojing"] = byteFieldObj.init(new openCloseField(), "oc_chaoyabaojing", 5, 2, "超压报警",9,coms_open_close)
        this.getPointMap["oc_ranshaoqiguzhang"] = byteFieldObj.init(new openCloseField(), "oc_ranshaoqiguzhang", 5, 2, "燃烧器故障",10,coms_open_close)
        this.getPointMap["oc_ranqixieloubaojing"] = byteFieldObj.init(new openCloseField(), "oc_ranqixieloubaojing", 5, 2, "燃气泄漏报警",11,coms_open_close)
        this.getPointMap["oc_ranqiyalidibaojing"] = byteFieldObj.init(new openCloseField(), "oc_ranqiyalidibaojing", 5, 2, "燃气压力低报警",12,coms_open_close)
        this.getPointMap[KEY_POINT_RAN_SHAO_QI_KONGZHI] = byteFieldObj.init(new openCloseField(), KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, "燃烧器启停控制",0,coms_open_close, commands_key_system_ctl, "00a0", 5, 8)
        this.getPointMap[KEY_POINT_RAN_SHAO_QI_STATUS] = byteFieldObj.init(new openCloseField(), KEY_POINT_RAN_SHAO_QI_STATUS, 0, 0, "燃烧器调节",ctl_njrt_common_valueMap.coms_ranshaoqi_status)

        this.getPointMap["oc_ranshaoqifuhediaojie/zengdadiaojie"] = byteFieldObj.init(new openCloseField(), "oc_ranshaoqifuhediaojie/zengdadiaojie", 9, 2, "燃烧器负荷增大调节",1)
        this.getPointMap["oc_jianxiaodiaojie"] = byteFieldObj.init(new openCloseField(), "oc_jianxiaodiaojie", 9, 2, "减小调节",2)
        this.getPointMap[KEY_POINT_Add_SHUI_BENG_1] = byteFieldObj.init(new deviceField(), KEY_POINT_Add_SHUI_BENG_1, 9, 2, "补水泵控制（主）",3,coms_open_close, commands_key_system_ctl, "00a0", 100, 101)
        this.getPointMap[KEY_POINT_Add_SHUI_BENG_2] = byteFieldObj.init(new deviceField(), KEY_POINT_Add_SHUI_BENG_2, 9, 2, "补水泵控制（备）",4)
        this.getPointMap[KEY_POINT_LENG_NING_BENG_1] = byteFieldObj.init(new deviceField(), KEY_POINT_LENG_NING_BENG_1, 9, 2, "循环泵控制（主）",5,coms_open_close, commands_key_system_ctl, "00a0", 106, 107)
        this.getPointMap[KEY_POINT_LENG_NING_BENG_2] = byteFieldObj.init(new deviceField(), KEY_POINT_LENG_NING_BENG_2, 9, 2, "循环泵控制（备）",6)

        this.getPointMap["mo_chushuiwendu"] = byteFieldObj.init(new mockField(), "mo_chushuiwendu", 13, 2, "出水温度","℃")
        this.getPointMap["mo_huishuiwendu"] = byteFieldObj.init(new mockField(), "mo_huishuiwendu", 15, 2, "回水温度","℃")
        this.getPointMap["mo_paiyanwendu"] = byteFieldObj.init(new mockField(), "mo_paiyanwendu", 21, 2, "排烟温度","℃")

        this.getPointMap["de_jishuibeng_zhu/bei_"] = byteFieldObj.init(new deviceField(), "de_jishuibeng_zhu/bei_", 49, 2, "补水泵",0, ctl_njrt_common_valueMap.coms_master, commands_key_system_ctl, "00a0", 104, 105)
        this.getPointMap["de_jishuibeng_shoudong/zidong_"] = byteFieldObj.init(new deviceField(), "de_jishuibeng_shoudong/zidong_", 49, 2, "补水泵",1, ctl_njrt_common_valueMap.coms_atuo, commands_key_system_ctl, "00a0", 102, 103)
        this.getPointMap["de_xunhuanbeng_zhu/bei_"] = byteFieldObj.init(new deviceField(), "de_xunhuanbeng_zhu/bei_", 49, 2, "循环泵",2, ctl_njrt_common_valueMap.coms_atuo, commands_key_system_ctl, "00a0", 110, 111)
        this.getPointMap["de_xunhuanbeng_zidong/shoudong_"] = byteFieldObj.init(new deviceField(), "de_xunhuanbeng_zidong/shoudong_", 49, 2, "循环泵",3, ctl_njrt_common_valueMap.coms_atuo, commands_key_system_ctl, "00a0", 108, 109)

        this.getPointMap["ex_chushuiwenduchuanganqiduanlu1"] = byteFieldObj.init(new exceptionField(), "ex_chushuiwenduchuanganqiduanlu1", 45, 2, "出水温度传感器断路",0)
        this.getPointMap["ex_chushuiwenduchuanganqiduanlu"] = byteFieldObj.init(new exceptionField(), "ex_chushuiwenduchuanganqiduanlu", 45, 2, "出水温度传感器短路",1)
        this.getPointMap["ex_chushuiwendugaobaojing_"] = byteFieldObj.init(new exceptionField(), "ex_chushuiwendugaobaojing_", 45, 2, "出水温度高报警",2)
        this.getPointMap["ex_huishuiwenduchuanganqiduanlu1"] = byteFieldObj.init(new exceptionField(), "ex_huishuiwenduchuanganqiduanlu1", 45, 2, "回水温度传感器断路",3)
        this.getPointMap["ex_paiyanwendugaobaojing"] = byteFieldObj.init(new exceptionField(), "ex_paiyanwendugaobaojing", 45, 2, "排烟温度高报警",4)
        this.getPointMap["ex_jixiandishuiweibaojing"] = byteFieldObj.init(new exceptionField(), "ex_jixiandishuiweibaojing", 45, 2, "极限低水位报警",5)
        this.getPointMap["ex_shuiweidianjiluojicuo"] = byteFieldObj.init(new exceptionField(), "ex_shuiweidianjiluojicuo", 45, 2, "水位电极逻辑错",6)
        this.getPointMap["ex_gaoshuiweibaojing"] = byteFieldObj.init(new exceptionField(), "ex_gaoshuiweibaojing", 45, 2, "高水位报警",7)
        this.getPointMap["ex_dianjiedianyalibiaoduanlu"] = byteFieldObj.init(new exceptionField(), "ex_dianjiedianyalibiaoduanlu", 45, 2, "电接点压力表短路",8)
        this.getPointMap["ex_chaoyabaojing_kongzhiqi_"] = byteFieldObj.init(new exceptionField(), "ex_chaoyabaojing_kongzhiqi_", 45, 2, "超压报警（控制器）",9)
        this.getPointMap["ex_ranqiyalidibaojing"] = byteFieldObj.init(new exceptionField(), "ex_ranqiyalidibaojing", 45, 2, "燃气压力低报警",10)
        this.getPointMap["ex_ranqixieloubaojing"] = byteFieldObj.init(new exceptionField(), "ex_ranqixieloubaojing", 47, 2, "燃气泄漏报警",11)
        this.getPointMap["ex_ranshaoqiguzhang"] = byteFieldObj.init(new exceptionField(), "ex_ranshaoqiguzhang", 47, 2, "燃烧器故障",12)

        this.getPointMap["se_paiyanchaowen"] = byteFieldObj.init(new settingField(), "se_paiyanchaowen", 67, 2, "排烟超温","℃", commands_key_paramenters_setting, "0120", 100, 400)
        this.getPointMap["se_lushuichaowen"] = byteFieldObj.init(new settingField(), "se_lushuichaowen", 69, 2, "炉水超温","℃", commands_key_paramenters_setting, "0121", 10, 105)
        this.getPointMap["se_kaibengwendu"] = byteFieldObj.init(new settingField(), "se_kaibengwendu", 71, 2, "开泵温度","℃", commands_key_paramenters_setting, "0122", 10, 100)
        this.getPointMap["se_guanbengwendu"] = byteFieldObj.init(new settingField(), "se_guanbengwendu", 73, 2, "关泵温度","℃", commands_key_paramenters_setting, "0123", 10, 100)
        this.getPointMap["se_xunhuanbenghouyanshi"] = byteFieldObj.init(new settingField(), "se_xunhuanbenghouyanshi", 75, 2, "循环泵后延时","分钟", commands_key_paramenters_setting, "0124", 0, 30)
        this.getPointMap["se_ranshaozhouqi"] = byteFieldObj.init(new settingField(), "se_ranshaozhouqi", 77, 2, "燃烧  周期","", commands_key_paramenters_setting, "0125", 1, 3600)
        this.getPointMap["se_ranshaoP"] = byteFieldObj.init(new settingField(), "se_ranshaoP", 79, 2, "燃烧  P","", commands_key_paramenters_setting, "0126", 1, 1000)
        this.getPointMap["se_ranshaoI"] = byteFieldObj.init(new settingField(), "se_ranshaoI", 81, 2, "燃烧  I","", commands_key_paramenters_setting, "0127", 1, 3600)
        this.getPointMap["se_ranshaoD"] = byteFieldObj.init(new settingField(), "se_ranshaoD", 83, 2, "燃烧  D","", commands_key_paramenters_setting, "0128", 0, 20)
        this.getPointMap["se_xingcheng"] = byteFieldObj.init(new settingField(), "se_xingcheng", 85, 2, "行程","", commands_key_paramenters_setting, "0129", 10, 300)
        this.getPointMap["o_guoluleixing"] = byteFieldObj.init(new baseInfoField(), "o_guoluleixing", 87, 2, "锅炉类型",coms_guolu)
        this.getPointMap["o_ranshaoqigongzuofangshi"] = byteFieldObj.init(new baseInfoField(), "o_ranshaoqigongzuofangshi", 89, 2, "燃烧器工作方式",coms_ranshaoqi)
        this.getPointMap["o_bushuibengkongzhifangshi"] = byteFieldObj.init(new baseInfoField(), "o_bushuibengkongzhifangshi", 91, 2, "补水泵控制方式",coms_bushuibeng)
        this.getPointMap["o_xunhuanbengkongzhifangshi"] = byteFieldObj.init(new baseInfoField(), "o_xunhuanbengkongzhifangshi", 93, 2, "循环泵控制方式",coms_xunhuanbeng)

    }
}
