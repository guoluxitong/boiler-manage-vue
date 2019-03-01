import map from './map'
import { coms_media, coms_power, ctl_njrt_common_valueMap, coms_open_close } from './commonValueMap'
import { deviceModel } from '../model/sdcSoftDevice'
import byteField from '../meta/ctl_njrt/t2/byteField'
import baseInfoField from '../meta/ctl_njrt/baseInfoField'
import exceptionField from '../meta/ctl_njrt/exceptionField'
import mediaField from '../meta/ctl_njrt/t2/mediaField'
import mockField from '../meta/ctl_njrt/t2/mockField'
import openCloseField from '../meta/ctl_njrt/openCloseField'
import powerField from '../meta/ctl_njrt/t2/powerField'
import settingField from '../meta/ctl_njrt/settingField'
import runDayField from '../meta/ctl_njrt/runDaysField'
import runHousField from '../meta/ctl_njrt/runHousField'
import deviceField from '../meta/ctl_njrt/deviceField'

export default class devicePointMap_CTL_RT_T2_RYZQ_YLBSQ extends map {
    constructor() {
        super();

        const coms_status = {
            0: '待命',
            1: '报警',
            2: '运行',
        }

        const byteFieldObj = new byteField();

        /*************start 计算属性（不显示）****************/
        this.getPointMap["_ranshaoqi"] = byteFieldObj.init(new baseInfoField(), "_ranshaoqi", 0, 0, "燃烧器",false)
        this.getPointMap["_addshuibeng"] = byteFieldObj.init(new baseInfoField(), "_addshuibeng", 0, 0, "给水泵" ,false)
        this.getPointMap["_lengningbeng"] = byteFieldObj.init(new baseInfoField(), "_lengningbeng", 0, 0, "冷凝泵" ,false)
        /*************end 计算属性（不显示）****************/

        this.getPointMap[deviceModel.key_point_system_status] = byteFieldObj.init(new baseInfoField(), deviceModel.key_point_system_status, 3, 2, "系统状态", coms_status)
        this.getPointMap[deviceModel.key_point_run_life] = byteFieldObj.init(new baseInfoField(), deviceModel.key_point_run_life, 53, 2, "运行时间", "时")
        this.getPointMap[deviceModel.key_point_run_days] = byteFieldObj.init(new runDayField(), deviceModel.key_point_run_days, 0, 0, "运行天数", "天")
        this.getPointMap[deviceModel.key_point_run_hours] = byteFieldObj.init(new runHousField(), deviceModel.key_point_run_hours, 0, 0, "运行小时数", "时")
        this.getPointMap[deviceModel.key_point_power] = byteFieldObj.init(new powerField(), deviceModel.key_point_power, 0, 0, "燃料类型", coms_power)
        this.getPointMap[deviceModel.key_point_media] = byteFieldObj.init(new mediaField(), deviceModel.key_point_media, 1, 0, "介质类型", coms_media)

        this.getPointMap["oc_queshuidianji"] = byteFieldObj.init(new openCloseField(), "oc_queshuidianji", 5, 2, "缺水电极", 0, coms_open_close)
        this.getPointMap["oc_dishuiweibaojingdianji_6dianjiteyou_"] = byteFieldObj.init(new openCloseField(), "oc_dishuiweibaojingdianji_6dianjiteyou_", 5, 2, "低水位报警电极（6电极特有）", 1, coms_open_close)
        this.getPointMap["oc_dishuiweidianji"] = byteFieldObj.init(new openCloseField(), "oc_dishuiweidianji", 5, 2, "低水位电极", 2, coms_open_close)
        this.getPointMap["oc_zhongshuiweidianji_6dianjiteyou_"] = byteFieldObj.init(new openCloseField(), "oc_zhongshuiweidianji_6dianjiteyou_", 5, 2, "中水位电极（6 电极特有）", 3, coms_open_close)
        this.getPointMap["oc_gaoshuiweidianji"] = byteFieldObj.init(new openCloseField(), "oc_gaoshuiweidianji", 5, 2, "高水位电极", 4, coms_open_close)
        this.getPointMap["oc_gaoshuiweibaojingdianji"] = byteFieldObj.init(new openCloseField(), "oc_gaoshuiweibaojingdianji", 5, 2, "高水位报警电极", 5, coms_open_close)
        this.getPointMap["oc_bianpinqiguzhangbaojing"] = byteFieldObj.init(new openCloseField(), "oc_bianpinqiguzhangbaojing", 5, 2, "变频器故障报警", 6, coms_open_close)
        this.getPointMap["oc_chaoyabaojing"] = byteFieldObj.init(new openCloseField(), "oc_chaoyabaojing", 5, 2, "超压报警", 9, coms_open_close)
        this.getPointMap["oc_ranshaoqiguzhang"] = byteFieldObj.init(new openCloseField(), "oc_ranshaoqiguzhang", 5, 2, "燃烧器故障", 10, coms_open_close)
        this.getPointMap["oc_ranqixieloubaojing"] = byteFieldObj.init(new openCloseField(), "oc_ranqixieloubaojing", 5, 2, "燃气泄漏报警", 11, coms_open_close)
        this.getPointMap["oc_ranqiyalidibaojing"] = byteFieldObj.init(new openCloseField(), "oc_ranqiyalidibaojing", 5, 2, "燃气压力低报警", 12, coms_open_close)
        this.getPointMap["oc_ranqiyaligaobaojing"] = byteFieldObj.init(new openCloseField(), "oc_ranqiyaligaobaojing", 5, 2, "燃气压力高报警", 13, coms_open_close)
        this.getPointMap["oc_ranshaoqikongzhi"] = byteFieldObj.init(new openCloseField(), "oc_ranshaoqikongzhi", 9, 2, "燃烧器启停控制", coms_open_close)
        this.getPointMap["oc_ranshaoqitiaojie"] = byteFieldObj.init(new openCloseField(), "oc_ranshaoqitiaojie", 0, 0, "燃烧器调节", ctl_njrt_common_valueMap.coms_ranshaoqi_status)

        this.getPointMap["oc_ranshaoqifuhediaojie/zengdadiaojie"] = byteFieldObj.init(new openCloseField(), "oc_ranshaoqifuhediaojie/zengdadiaojie", 9, 2, "燃烧器负荷调节/增大调节", 1)
        this.getPointMap["oc_jianxiaodiaojie"] = byteFieldObj.init(new openCloseField(), "oc_jianxiaodiaojie", 9, 2, "减小调节", 2)
        this.getPointMap["oc_1_addshuibeng_start_stop"] = byteFieldObj.init(new deviceField(), "oc_1_addshuibeng_start_stop", 9, 2, "给水泵控制（主）", 3, coms_open_close)
        this.getPointMap["oc_2_addshuibeng_start_stop"] = byteFieldObj.init(new deviceField(), "oc_2_addshuibeng_start_stop", 9, 2, "给水泵控制（备）", 4, coms_open_close)
        this.getPointMap["oc_1_lengningxunhuanbeng_start_stop"] = byteFieldObj.init(new deviceField(), "oc_1_lengningxunhuanbeng_start_stop", 9, 2, "冷凝循环泵控制", 5, coms_open_close)
        this.getPointMap["oc_baojingzhuangtaishuchu"] = byteFieldObj.init(new openCloseField(), "oc_baojingzhuangtaishuchu", 9, 2, "报警状态输出", 6, coms_open_close)

        this.getPointMap["mo_lengningqiyanwen"] = byteFieldObj.init(new mockField(), "mo_lengningqiyanwen", 13, 2, "冷凝器烟温", "℃")
        this.getPointMap["mo_jishuiwendu"] = byteFieldObj.init(new mockField(), "mo_jishuiwendu", 15, 2, "给水温度", "℃")
        this.getPointMap["mo_zhengqiyali"] = byteFieldObj.init(new mockField(), "mo_zhengqiyali", 17, 2, "蒸汽压力", "Mpa", 100)
        this.getPointMap["mo_shuiweixinhao"] = byteFieldObj.init(new mockField(), "mo_shuiweixinhao", 19, 2, "水位信号")
        this.getPointMap["mo_paiyanwendu"] = byteFieldObj.init(new mockField(), "mo_paiyanwendu", 21, 2, "排烟温度", "℃")
        this.getPointMap["mo_jienengqiyanwen"] = byteFieldObj.init(new mockField(), "mo_jienengqiyanwen", 23, 2, "节能器烟温", "℃")

        this.getPointMap["de_jishuibeng_zhu/bei_"] = byteFieldObj.init(new deviceField(), "de_jishuibeng_zhu/bei_", 49, 2, "给水泵", 0, ctl_njrt_common_valueMap.coms_master)
        this.getPointMap["de_jishuibeng_shoudong/zidong_"] = byteFieldObj.init(new deviceField(), "de_jishuibeng_shoudong/zidong_", 49, 2, "给水泵", 1, ctl_njrt_common_valueMap.coms_atuo)
        this.getPointMap["de_lengningxunhuanbeng_zidong/shoudong_"] = byteFieldObj.init(new deviceField(), "de_lengningxunhuanbeng_zidong/shoudong_", 49, 2, "冷凝循环泵", 3, ctl_njrt_common_valueMap.coms_atuo)

        this.getPointMap["ex_yalibiansongqiduanlu1"] = byteFieldObj.init(new exceptionField(), "ex_yalibiansongqiduanlu1", 45, 2, "压力变送器断路", 0)
        this.getPointMap["ex_yalibiansongqiduanlu"] = byteFieldObj.init(new exceptionField(), "ex_yalibiansongqiduanlu", 45, 2, "压力变送器短路", 1)
        this.getPointMap["ex_chaoyabaojing_biansongqi_"] = byteFieldObj.init(new exceptionField(), "ex_chaoyabaojing_biansongqi_", 45, 2, "超压报警（变送器）", 2)
        this.getPointMap["ex_shuiweichuanganqiduanlu1"] = byteFieldObj.init(new exceptionField(), "ex_shuiweichuanganqiduanlu1", 45, 2, "水位传感器断路", 3)
        this.getPointMap["ex_shuiweichuanganqiduanlu"] = byteFieldObj.init(new exceptionField(), "ex_shuiweichuanganqiduanlu", 45, 2, "水位传感器短路", 4)
        this.getPointMap["ex_jixiandishuiweibaojing_dianliu_"] = byteFieldObj.init(new exceptionField(), "ex_jixiandishuiweibaojing_dianliu_", 45, 2, "极限低水位报警（电流）", 5)
        this.getPointMap["ex_gaoshuiweibaojing_dianliu_"] = byteFieldObj.init(new exceptionField(), "ex_gaoshuiweibaojing_dianliu_", 45, 2, "高水位报警（电流）", 6)
        this.getPointMap["ex_paiyanwendugaobaojing"] = byteFieldObj.init(new exceptionField(), "ex_paiyanwendugaobaojing", 45, 2, "排烟温度高报警", 7)
        this.getPointMap["ex_jixiandishuiweibaojing"] = byteFieldObj.init(new exceptionField(), "ex_jixiandishuiweibaojing", 45, 2, "极限低水位报警", 8)
        this.getPointMap["ex_shuiweidianjiluojicuo"] = byteFieldObj.init(new exceptionField(), "ex_shuiweidianjiluojicuo", 45, 2, "水位电极逻辑错", 9)
        this.getPointMap["ex_dishuiweibaojing"] = byteFieldObj.init(new exceptionField(), "ex_dishuiweibaojing", 45, 2, "低水位报警", 10)
        this.getPointMap["ex_gaoshuiweibaojing"] = byteFieldObj.init(new exceptionField(), "ex_gaoshuiweibaojing", 45, 2, "高水位报警", 1)
        this.getPointMap["ex_bianpinqiguzhang"] = byteFieldObj.init(new exceptionField(), "ex_bianpinqiguzhang", 45, 2, "变频器故障", 12)
        this.getPointMap["ex_chaoyabaojing_kongzhiqi_"] = byteFieldObj.init(new exceptionField(), "ex_chaoyabaojing_kongzhiqi_", 45, 2, "超压报警（控制器）", 13)
        this.getPointMap["ex_ranqiyalidibaojing"] = byteFieldObj.init(new exceptionField(), "ex_ranqiyalidibaojing", 45, 2, "燃气压力低报警", 14)
        this.getPointMap["ex_ranqiyaligaobaojing"] = byteFieldObj.init(new exceptionField(), "ex_ranqiyaligaobaojing", 45, 2, "燃气压力高报警", 15)
        this.getPointMap["ex_ranqixieloubaojing"] = byteFieldObj.init(new exceptionField(), "ex_ranqixieloubaojing", 47, 2, "燃气泄漏报警", 0)
        this.getPointMap["ex_ranshaoqiguzhang"] = byteFieldObj.init(new exceptionField(), "ex_ranshaoqiguzhang", 47, 2, "燃烧器故障", 1)
        this.getPointMap["ex_jixiandishuiweibaojing2"] = byteFieldObj.init(new exceptionField(), "ex_jixiandishuiweibaojing2", 47, 2, "极限低水位报警2",4)
        this.getPointMap["se_paiyanchaowen"] = byteFieldObj.init(new settingField(), "se_paiyanchaowen", 107, 2, "排烟超温","℃")
        this.getPointMap["se_chaoyabaojing"] = byteFieldObj.init(new settingField(), "se_chaoyabaojing", 109, 2, "超压报警","Mpa",100)
        this.getPointMap["se_tingluyali"] = byteFieldObj.init(new settingField(), "se_tingluyali", 111, 2, "停炉压力","Mpa",100)
        this.getPointMap["se_qiluyali"] = byteFieldObj.init(new settingField(), "se_qiluyali", 115, 2, "启炉压力","Mpa",100)
        this.getPointMap["se_zuanhuoyali"] = byteFieldObj.init(new settingField(), "se_zuanhuoyali", 113, 2, "转火压力","Mpa",100)
        this.getPointMap["se_shuchushangxian"] = byteFieldObj.init(new settingField(), "se_shuchushangxian", 117, 2, "输出上限","%")
        this.getPointMap["se_shuchuxiaxian"] = byteFieldObj.init(new settingField(), "se_shuchuxiaxian", 119, 2, "输出下限","%")
        this.getPointMap["se_ranshaozhouqi"] = byteFieldObj.init(new settingField(), "se_ranshaozhouqi", 121, 2, "燃烧  周期")
        this.getPointMap["se_ranshaoP"] = byteFieldObj.init(new settingField(), "se_ranshaoP", 123, 2, "燃烧  P")
        this.getPointMap["se_ranshaoI"] = byteFieldObj.init(new settingField(), "se_ranshaoI", 125, 2, "燃烧  I")
        this.getPointMap["se_ranshaoD"] = byteFieldObj.init(new settingField(), "se_ranshaoD", 127, 2, "燃烧  D")
        this.getPointMap["se_xingcheng"] = byteFieldObj.init(new settingField(), "se_xingcheng", 129, 2, "行程")
        this.getPointMap["se_gaobaojing"] = byteFieldObj.init(new settingField(), "se_gaobaojing", 131, 2, "高报警","mm")
        this.getPointMap["se_gaoshuiwei"] = byteFieldObj.init(new settingField(), "se_gaoshuiwei", 133, 2, "高水位","mm")
        this.getPointMap["se_dishuiwei"] = byteFieldObj.init(new settingField(), "se_dishuiwei", 135, 2, "低水位","mm")
        this.getPointMap["se_mubiaoshuiwei"] = byteFieldObj.init(new settingField(), "se_mubiaoshuiwei", 137, 2, "目标水位","mm")
        this.getPointMap["se_queshuishuiwei"] = byteFieldObj.init(new settingField(), "se_queshuishuiwei", 139, 2, "缺水水位","mm")
        this.getPointMap["se_shuiweizhouqi"] = byteFieldObj.init(new settingField(), "se_shuiweizhouqi", 141, 2, "水位  周期")
        this.getPointMap["se_shuiweip"] = byteFieldObj.init(new settingField(), "se_shuiweip", 143, 2, "水位  p")
        this.getPointMap["se_shuiweiI"] = byteFieldObj.init(new settingField(), "se_shuiweiI", 145, 2, "水位  I")
        this.getPointMap["se_shuiweiD"] = byteFieldObj.init(new settingField(), "se_shuiweiD", 147, 2, "水位  D")
        this.getPointMap["se_chongxiyanshi"] = byteFieldObj.init(new settingField(), "se_chongxiyanshi", 157, 2, "冲洗延时","S")
        this.getPointMap["se_zhuanhuohuicha"] = byteFieldObj.init(new settingField(), "se_zhuanhuohuicha", 159, 2, "转火回差","Mpa",100)
    }
}