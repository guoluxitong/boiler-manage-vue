import map from './map'
import {
    coms_level,
    coms_media,
    coms_power,
    coms_open_close,
    coms_start_stop,
    plc_common_valueMap,
    media,
    power
} from './commonValueMap'
import {deviceModel} from '../model/sdcSoftDevice'
import byteField from '../meta/byteField'
import baseInfoField from '../meta/plc/baseInfoField'
import mediaField from '../meta/plc/mediaField'
import powerField from '../meta/plc/powerField'
import mockField from '../meta/plc/mockField'
import settingField from '../meta/plc/settingField'
import deviceField from '../meta/plc/deviceField'
import exceptionField from '../meta/plc/exceptionField'

export default class devicePointMap_PLC_RanYouReShui extends map {
    constructor() {
        super();
        const byteFieldObj =new byteField();

        /*************start 计算属性（不显示）****************/
        this.getPointMap["_addshuibeng"]=byteFieldObj.init(new deviceField(),"_addshuibeng", 0, 0, "给水泵",false)
        this.getPointMap["_xunhuanbeng"]=byteFieldObj.init(new deviceField(),"_xunhuanbeng", 0, 0, "循环泵",false)
        /*************end 计算属性（不显示）****************/

        this.getPointMap["ba_yunxingxiaoshishu"]=byteFieldObj.init(new baseInfoField(),"ba_yunxingxiaoshishu",9,2,"运行小时数","时")
        this.getPointMap["ba_yunxingtianshu"]=byteFieldObj.init(new baseInfoField(),"ba_yunxingtianshu",11,2,"运行天数","天")
        this.getPointMap[deviceModel.key_point_system_status]=byteFieldObj.init(new baseInfoField(),deviceModel.key_point_system_status,13,2,"系统状态",plc_common_valueMap.coms_status)
        this.getPointMap[deviceModel.key_point_power]=byteFieldObj.init(new powerField(),deviceModel.key_point_power,power.YouQi,2,"燃料",coms_power)
        this.getPointMap[deviceModel.key_point_media]=byteFieldObj.init(new mediaField(),deviceModel.key_point_media,media.ReShui,2,"介质",coms_media)
        this.getPointMap["ba_shuiweizhuangtai"]=byteFieldObj.init(new baseInfoField(),"ba_shuiweizhuangtai",19,2,"水位状态",coms_level)
        this.getPointMap["ba_ranshaoqizhuangtai"]=byteFieldObj.init(new baseInfoField(),"ba_ranshaoqizhuangtai",21,2,"燃烧器状态",plc_common_valueMap.coms_ranshaoqi_status)

        this.getPointMap["mo_chushuiwendu"]=byteFieldObj.init(new mockField(),"mo_chushuiwendu", 35, 4, "出水温度", "℃")
        this.getPointMap["mo_huishuiwendu"]=byteFieldObj.init(new mockField(),"mo_huishuiwendu", 39, 4, "回水温度", "℃")
        this.getPointMap["mo_paiyanwendu"]=byteFieldObj.init(new mockField(),"mo_paiyanwendu", 43, 4, "排烟温度", "℃")
        this.getPointMap["mo_chushuiyali"]=byteFieldObj.init(new mockField(),"mo_chushuiyali", 47, 4, "出水压力", "Mpa")
        this.getPointMap["mo_huishuiyali"]=byteFieldObj.init(new mockField(),"mo_huishuiyali", 51, 4, "回水压力", "Mpa")
        this.getPointMap["mo_yacha"]=byteFieldObj.init(new mockField(),"mo_yacha", 55, 4, "压差", "Mpa")
        this.getPointMap["mo_lengningqijinyanwendu"]=byteFieldObj.init(new mockField(),"mo_lengningqijinyanwendu", 59, 4, "冷凝器进烟温度", "℃")
        this.getPointMap["mo_lengningqijinyanyali"]=byteFieldObj.init(new mockField(),"mo_lengningqijinyanyali", 63, 4, "冷凝器进烟压力", "Pa")
        this.getPointMap["mo_jienengqijinyanwendu"]=byteFieldObj.init(new mockField(),"mo_jienengqijinyanwendu", 67, 4, "节能器进烟温度", "℃")
        this.getPointMap["mo_jienengqijinyanyali"]=byteFieldObj.init(new mockField(),"mo_jienengqijinyanyali", 71, 4, "节能器进烟压力", "Pa")
        this.getPointMap["mo_lutangwendu"]=byteFieldObj.init(new mockField(),"mo_lutangwendu", 75, 4, "炉膛温度", "℃")
        this.getPointMap["mo_lutangyali"]=byteFieldObj.init(new mockField(),"mo_lutangyali", 79, 4, "炉膛压力", "Pa")
        this.getPointMap["mo_kongyuqijinyanwendu"]=byteFieldObj.init(new mockField(),"mo_kongyuqijinyanwendu", 83, 4, "空预器进烟温度", "℃")
        this.getPointMap["mo_kongyuqijinyanyali"]=byteFieldObj.init(new mockField(),"mo_kongyuqijinyanyali", 87, 4, "空预器进烟压力", "Pa")
        this.getPointMap["mo_kongyuqijinfengwendu"]=byteFieldObj.init(new mockField(),"mo_kongyuqijinfengwendu", 91, 4, "空预器进风温度", "℃")
        this.getPointMap["mo_kongyuqijinfengyali"]=byteFieldObj.init(new mockField(),"mo_kongyuqijinfengyali", 95, 4, "空预器进风压力", "Kpa")
        this.getPointMap["mo_kongyuqichufengwendu"]=byteFieldObj.init(new mockField(),"mo_kongyuqichufengwendu", 99, 4, "空预器出风温度", "℃")
        this.getPointMap["mo_zhufengjipinlüfankui"]=byteFieldObj.init(new mockField(),"mo_zhufengjipinlüfankui", 103, 4, "主风机频率反馈", "Hz")
        this.getPointMap["mo_xunhuanfengjipinlüfankui"]=byteFieldObj.init(new mockField(),"mo_xunhuanfengjipinlüfankui", 107, 4, "循环风机频率反馈", "Hz")
        this.getPointMap["mo_bushuibengpinlüfankui"]=byteFieldObj.init(new mockField(),"mo_bushuibengpinlüfankui", 111, 4, "补水泵频率反馈", "Hz")
        this.getPointMap["mo_shiwaiwendu"]=byteFieldObj.init(new mockField(),"mo_shiwaiwendu", 115, 4, "室外温度", "℃")
        this.getPointMap["mo_xunhuanbeng1pinlüfankui"]=byteFieldObj.init(new mockField(),"mo_xunhuanbeng1pinlüfankui", 119, 4, "循环泵1频率反馈", "Hz")
        this.getPointMap["mo_xunhuanbeng2pinlüfankui"]=byteFieldObj.init(new mockField(),"mo_xunhuanbeng2pinlüfankui", 123, 4, "循环泵2频率反馈", "Hz")

        this.getPointMap["se_qiluwendusheding"]=byteFieldObj.init(new settingField(),"se_qiluwendusheding", 248, 4, "启炉温度设定", "℃")
        this.getPointMap["se_mubiaowendusheding"]=byteFieldObj.init(new settingField(),"se_mubiaowendusheding", 252, 4, "目标温度设定", "℃")
        this.getPointMap["se_tingluwendusheding"]=byteFieldObj.init(new settingField(),"se_tingluwendusheding", 256, 4, "停炉温度设定", "℃")
        this.getPointMap["se_yalidisheding"]=byteFieldObj.init(new settingField(),"se_yalidisheding", 260, 4, "压力低设定", "Mpa")
        this.getPointMap["se_yaligaosheding"]=byteFieldObj.init(new settingField(),"se_yaligaosheding", 264, 4, "压力高设定", "Mpa")
        this.getPointMap["se_paiyanwenduchaogaobaojingsheding"]=byteFieldObj.init(new settingField(),"se_paiyanwenduchaogaobaojingsheding", 268, 4, "排烟温度超高报警设定", "℃")
        this.getPointMap["se_chukouwenduchaogaobaojingsheding"]=byteFieldObj.init(new settingField(),"se_chukouwenduchaogaobaojingsheding", 272, 4, "出口温度超高报警设定", "℃")
        this.getPointMap["se_yalichaogaobaojingsheding"]=byteFieldObj.init(new settingField(),"se_yalichaogaobaojingsheding", 276, 4, "压力超高报警设定", "Mpa")
        this.getPointMap["se_yalichaodibaojingsheding"]=byteFieldObj.init(new settingField(),"se_yalichaodibaojingsheding", 280, 4, "压力超低报警设定", "Mpa")


        this.getPointMap["de_ranshaoqiqiting"]=byteFieldObj.init(new deviceField(),"de_ranshaoqiqiting", 368, 2, "燃烧器", plc_common_valueMap.coms_ranshaoqi_status)
        this.getPointMap["de_1_addshuibeng_auto"]=byteFieldObj.init(new deviceField(),"de_1_addshuibeng_auto", 370, 2, "1#补水泵", plc_common_valueMap.coms_atuo)
        this.getPointMap["de_1_addshuibeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_1_addshuibeng_start_stop", 372, 2, "1#补水泵", coms_start_stop)
        this.getPointMap["de_2_addshuibeng_auto"]=byteFieldObj.init(new deviceField(),"de_2_addshuibeng_auto", 374, 2, "2#补水泵", plc_common_valueMap.coms_atuo)
        this.getPointMap["de_2_addshuibeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_2_addshuibeng_start_stop", 376, 2, "2#补水泵", coms_start_stop)
        this.getPointMap["de_1_xunhuanbeng_auto"]=byteFieldObj.init(new deviceField(),"de_1_xunhuanbeng_auto", 378, 2, "1#循环泵", plc_common_valueMap.coms_atuo)
        this.getPointMap["de_1_xunhuanbeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_1_xunhuanbeng_start_stop", 380, 2, "1#循环泵", coms_start_stop)
        this.getPointMap["de_2_xunhuanbeng_auto"]=byteFieldObj.init(new deviceField(),"de_2_xunhuanbeng_auto", 382, 2, "2#循环泵", plc_common_valueMap.coms_atuo)
        this.getPointMap["de_2_xunhuanbeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_2_xunhuanbeng_start_stop", 384, 2, "2#循环泵", coms_start_stop)


        this.getPointMap["ex_lubichaowenbaojing"]=byteFieldObj.init(new exceptionField(),"ex_lubichaowenbaojing", 448, 2, "炉壁超温报警", 0)
        this.getPointMap["ex_chushuiwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_chushuiwenduchuanganqiguzhang", 448, 2, "出水温度传感器故障", 1)
        this.getPointMap["ex_huishuiwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_huishuiwenduchuanganqiguzhang", 448, 2, "回水温度传感器故障", 2)
        this.getPointMap["ex_paiyanwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_paiyanwenduchuanganqiguzhang", 448, 2, "排烟温度传感器故障", 3)
        this.getPointMap["ex_wendushedingcuowubaojing"]=byteFieldObj.init(new exceptionField(),"ex_wendushedingcuowubaojing", 448, 2, "温度设定错误报警", 4)
        this.getPointMap["ex_xunhuanbengliansuoduankaibaojing"]=byteFieldObj.init(new exceptionField(),"ex_xunhuanbengliansuoduankaibaojing", 448, 2, "循环泵连锁断开报警", 5)
        this.getPointMap["ex_waibuliansuoduankaibaojing"]=byteFieldObj.init(new exceptionField(),"ex_waibuliansuoduankaibaojing", 448, 2, "外部连锁断开报警", 6)
        this.getPointMap["ex_chushuiyalibiansongqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_chushuiyalibiansongqiguzhang", 448, 2, "出水压力变送器故障", 7)

        this.getPointMap["ex_ranshaojiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_ranshaojiguzhang", 448, 2, "燃烧器故障", 8)
        this.getPointMap["ex_ranqixielou"]=byteFieldObj.init(new exceptionField(),"ex_ranqixielou", 448, 2, "燃气泄漏", 9)
        this.getPointMap["ex_ranqiyaliyichang"]=byteFieldObj.init(new exceptionField(),"ex_ranqiyaliyichang", 448, 2, "燃气压力异常", 10)
        this.getPointMap["ex_yalichaogaobaojing"]=byteFieldObj.init(new exceptionField(),"ex_yalichaogaobaojing", 448, 2, "压力超高报警", 11)
        this.getPointMap["ex_yalichaodibaojing"]=byteFieldObj.init(new exceptionField(),"ex_yalichaodibaojing", 448, 2, "压力超低报警", 12)
        this.getPointMap["ex_paiyanwenduchaogaobaojing"]=byteFieldObj.init(new exceptionField(),"ex_paiyanwenduchaogaobaojing", 448, 2, "排烟温度超高报警", 13)
        this.getPointMap["ex_chushuiwenduchaogaobaojing"]=byteFieldObj.init(new exceptionField(),"ex_chushuiwenduchaogaobaojing", 448, 2, "出水温度超高报警", 14)
        this.getPointMap["ex_queshuibaohubaojing"]=byteFieldObj.init(new exceptionField(),"ex_queshuibaohubaojing", 448, 2, "缺水保护报警", 15)

        this.getPointMap["ex_huishuiyalibiansongqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_huishuiyalibiansongqiguzhang", 450, 2, "回水压力变送器故障", 8)
    }
}
