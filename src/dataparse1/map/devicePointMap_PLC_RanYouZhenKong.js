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

export default class devicePointMap_PLC_RanYouZhenKong extends map {
    constructor() {
        super();
        const byteFieldObj =new byteField();

        /*************start 计算属性（不显示）****************/
        this.getPointMap["_xunhuanbeng"]=byteFieldObj.init(new deviceField(),"_xunhuanbeng", 0, 0, "循环泵",false)
        this.getPointMap["_addshuibeng"]=byteFieldObj.init(new deviceField(),"_addshuibeng", 0, 0, "给水泵",false)
        this.getPointMap["_zhenkongbeng"]=byteFieldObj.init(new deviceField(),"_zhenkongbeng", 0, 0, "真空泵",false)
        /*************end 计算属性（不显示）****************/

        this.getPointMap["ba_yunxingxiaoshishu"]=byteFieldObj.init(new baseInfoField(),"ba_yunxingxiaoshishu",9,2,"运行小时数","时")
        this.getPointMap["ba_yunxingtianshu"]=byteFieldObj.init(new baseInfoField(),"ba_yunxingtianshu",11,2,"运行天数","天")
        this.getPointMap[deviceModel.key_point_system_status]=byteFieldObj.init(new baseInfoField(),deviceModel.key_point_system_status,13,2,"系统状态",plc_common_valueMap.coms_status)
        this.getPointMap[deviceModel.key_point_power]=byteFieldObj.init(new powerField(),deviceModel.key_point_power,power.YouQi,2,"燃料",coms_power)
        this.getPointMap[deviceModel.key_point_media]=byteFieldObj.init(new mediaField(),deviceModel.key_point_media,media.ZhenKong,2,"介质",coms_media)
        this.getPointMap["ba_shuiweizhuangtai"]=byteFieldObj.init(new baseInfoField(),"ba_shuiweizhuangtai",19,2,"水位状态",coms_level)
        this.getPointMap["ba_ranshaoqizhuangtai"]=byteFieldObj.init(new baseInfoField(),"ba_ranshaoqizhuangtai",21,2,"燃烧器状态",plc_common_valueMap.coms_ranshaoqi_status)

        this.getPointMap["mo_remeishuiwendu"]=byteFieldObj.init(new mockField(),"mo_remeishuiwendu",35,4,"热媒水温度","℃")
        this.getPointMap["mo_zhenkongyali"]=byteFieldObj.init(new mockField(),"mo_zhenkongyali",39,4,"真空压力","Kpa")
        this.getPointMap["mo_jinyanwendu"]=byteFieldObj.init(new mockField(),"mo_jinyanwendu",43,4,"进烟温度","℃")
        this.getPointMap["mo_paiyanwendu"]=byteFieldObj.init(new mockField(),"mo_paiyanwendu",47,4,"排烟温度","℃")
        this.getPointMap["mo_shiwaiwendu"]=byteFieldObj.init(new mockField(),"mo_shiwaiwendu",51,4,"室外温度","℃")
        this.getPointMap["mo_cainuanchushuiwendu"]=byteFieldObj.init(new mockField(),"mo_cainuanchushuiwendu",55,4,"采暖出水温度","℃")
        this.getPointMap["mo_cainuanhuishuiwendu"]=byteFieldObj.init(new mockField(),"mo_cainuanhuishuiwendu",59,4,"采暖回水温度","℃")
        this.getPointMap["mo_cainuanchushuiyali"]=byteFieldObj.init(new mockField(),"mo_cainuanchushuiyali",63,4,"采暖出水压力","Mpa")
        this.getPointMap["mo_cainuanhuishuiyali"]=byteFieldObj.init(new mockField(),"mo_cainuanhuishuiyali",67,4,"采暖回水压力","Mpa")
        this.getPointMap["mo_shenghuochushuiwendu"]=byteFieldObj.init(new mockField(),"mo_shenghuochushuiwendu",71,4,"生活出水温度","℃")
        this.getPointMap["mo_shenghuohuishuiwendu"]=byteFieldObj.init(new mockField(),"mo_shenghuohuishuiwendu",75,4,"生活回水温度","℃")
        this.getPointMap["mo_shenghuochushuiyali"]=byteFieldObj.init(new mockField(),"mo_shenghuochushuiyali",79,4,"生活出水压力","℃")
        this.getPointMap["mo_shenghuohuishuiyali"]=byteFieldObj.init(new mockField(),"mo_shenghuohuishuiyali",83,4,"生活回水压力","℃")

        this.getPointMap["se_qiluwendusheding"]=byteFieldObj.init(new settingField(),"se_qiluwendusheding",111,4,"启炉温度设定","℃")
        this.getPointMap["se_mubiaowendusheding"]=byteFieldObj.init(new settingField(),"se_mubiaowendusheding",115,4,"目标温度设定","℃")
        this.getPointMap["se_tingluwendusheding"]=byteFieldObj.init(new settingField(),"se_tingluwendusheding",119,4,"停炉温度设定","℃")
        this.getPointMap["se_zhenkongyalidisheding"]=byteFieldObj.init(new settingField(),"se_zhenkongyalidisheding",123,4,"真空压力低设定","KPa")
        this.getPointMap["se_zhenkongyaligaosheding"]=byteFieldObj.init(new settingField(),"se_zhenkongyaligaosheding",127,4,"真空压力高设定","KPa")
        this.getPointMap["se_paiyanwenduchaogaobaojingsheding"]=byteFieldObj.init(new settingField(),"se_paiyanwenduchaogaobaojingsheding",131,4,"排烟温度超高报警设定","℃")
        this.getPointMap["se_chukouwenduchaogaobaojingsheding"]=byteFieldObj.init(new settingField(),"se_chukouwenduchaogaobaojingsheding",135,4,"出口温度超高报警设定","℃")
        this.getPointMap["se_zhenkongyalichaogaobaojingsheding"]=byteFieldObj.init(new settingField(),"se_zhenkongyalichaogaobaojingsheding",139,4,"真空压力超高报警设定","KPa")

        this.getPointMap["de_ranshaojiqiting"]=byteFieldObj.init(new deviceField(),"de_ranshaojiqiting", 163, 2, "燃烧器",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_1_xunhuanbeng_auto"]=byteFieldObj.init(new deviceField(),"de_1_xunhuanbeng_auto", 165, 2, "1#循环泵",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_1_xunhuanbeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_1_xunhuanbeng_start_stop", 167, 2, "1#循环泵",coms_start_stop)
        this.getPointMap["de_2_xunhuanbeng_auto"]=byteFieldObj.init(new deviceField(),"de_2_xunhuanbeng_auto", 169, 2, "2#循环泵",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_2_xunhuanbeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_2_xunhuanbeng_start_stop", 171, 2, "2#循环泵", coms_start_stop)
        this.getPointMap["de_1_addshuibeng_auto"]=byteFieldObj.init(new deviceField(),"de_1_addshuibeng_auto", 173, 2, "1#补水泵",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_1_addshuibeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_1_addshuibeng_start_stop", 175, 2, "1#补水泵", coms_start_stop)
        this.getPointMap["de_2_addshuibeng_auto"]=byteFieldObj.init(new deviceField(),"de_2_addshuibeng_auto", 177, 2, "2#补水泵",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_2_addshuibeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_2_addshuibeng_start_stop", 179, 2, "2#补水泵", coms_start_stop)
        this.getPointMap["de_zhenkongbeng_auto"]=byteFieldObj.init(new deviceField(),"de_zhenkongbeng_auto", 181, 2, "真空泵",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_zhenkongbeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_zhenkongbeng_start_stop", 183, 2, "真空泵", coms_start_stop)

        this.getPointMap["ex_ranshaojiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_ranshaojiguzhang",203,2,"燃烧机故障",8)
        this.getPointMap["ex_ranqixielou"]=byteFieldObj.init(new exceptionField(),"ex_ranqixielou",203,2,"燃气泄漏",9)
        this.getPointMap["ex_ranqiyaliyichang"]=byteFieldObj.init(new exceptionField(),"ex_ranqiyaliyichang",203,2,"燃气压力异常",10)
        this.getPointMap["ex_luneiyaligaobaojingshedingzhi"]=byteFieldObj.init(new exceptionField(),"ex_luneiyaligaobaojingshedingzhi",203,2,"炉内压力高报警（设定值）",11)
        this.getPointMap["ex_luneiyaligaobaojingyalikaiguan"]=byteFieldObj.init(new exceptionField(),"ex_luneiyaligaobaojingyalikaiguan",203,2,"炉内压力高报警（压力开关）",12)
        this.getPointMap["ex_paiyanwenduchaogaobaojing"]=byteFieldObj.init(new exceptionField(),"ex_paiyanwenduchaogaobaojing",203,2,"排烟温度超高报警",13)
        this.getPointMap["ex_remeishuiwenduchaogaobaojing"]=byteFieldObj.init(new exceptionField(),"ex_remeishuiwenduchaogaobaojing",203,2,"热媒水温度超高报警",14)
        this.getPointMap["ex_queshuibaohubaojing"]=byteFieldObj.init(new exceptionField(),"ex_queshuibaohubaojing",203,2,"缺水保护报警",15)

        this.getPointMap["ex_lubichaowenbaojing"]=byteFieldObj.init(new exceptionField(),"ex_lubichaowenbaojing",203,2,"炉壁超温报警",0)
        this.getPointMap["ex_remeishuiwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_remeishuiwenduchuanganqiguzhang",203,2,"热媒水温度传感器故障",1)
        this.getPointMap["ex_paiyanwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_paiyanwenduchuanganqiguzhang",203,2,"排烟温度传感器故障",2)
        this.getPointMap["ex_cainuanchushuiwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_cainuanchushuiwenduchuanganqiguzhang",203,2,"采暖出水温度传感器故障",3)
        this.getPointMap["ex_shenghuochushuiwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_shenghuochushuiwenduchuanganqiguzhang",203,2,"生活出水温度传感器故障",4)
        this.getPointMap["ex_wendushedingcuowubaojing"]=byteFieldObj.init(new exceptionField(),"ex_wendushedingcuowubaojing",203,2,"温度设定错误报警",5)
        this.getPointMap["ex_xunhuanbengliansuoduankaibaojing"]=byteFieldObj.init(new exceptionField(),"ex_xunhuanbengliansuoduankaibaojing",203,2,"循环泵连锁断开报警",6)
        this.getPointMap["ex_waibuliansuoduankaibaojing"]=byteFieldObj.init(new exceptionField(),"ex_waibuliansuoduankaibaojing",203,2,"外部连锁断开报警",7)

    }
}
