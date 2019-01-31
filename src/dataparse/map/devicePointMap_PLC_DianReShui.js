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

export default class devicePointMap_PLC_DianReShui extends map {
    constructor() {
        super();
        const byteFieldObj =new byteField();
        /*************start 计算属性（不显示）****************/
        this.getPointMap["_addshuibeng"]=byteFieldObj.init(new deviceField(),"_addshuibeng", 0, 0, "补水泵",false)
        this.getPointMap["_addshuibeng"]=byteFieldObj.init(new deviceField(),"_xunhuanbeng", 0, 0, "循环泵", false)
        /*************end 计算属性（不显示）****************/

        this.getPointMap["ba_yunxingxiaoshishu"]=byteFieldObj.init(new baseInfoField(),"ba_yunxingxiaoshishu",9,2,"运行小时数","时")
        this.getPointMap["ba_yunxingtianshu"]=byteFieldObj.init(new baseInfoField(),"ba_yunxingtianshu",11,2,"运行天数","天")
        this.getPointMap[deviceModel.key_point_system_status]=byteFieldObj.init(new baseInfoField(),deviceModel.key_point_system_status,13,2,"系统状态",plc_common_valueMap.coms_status)
        this.getPointMap[deviceModel.key_point_power]=byteFieldObj.init(new powerField(),deviceModel.key_point_power,power.Dian,0,"燃料",coms_power)
        this.getPointMap[deviceModel.key_point_media]=byteFieldObj.init(new mediaField(),deviceModel.key_point_media,media.ReShui,0,"介质",coms_media)
        this.getPointMap["ba_shuiweizhuangtai"]=byteFieldObj.init(new baseInfoField(),"ba_shuiweizhuangtai",19,2,"水位状态",coms_level)
        this.getPointMap["ba_ranshaoqizhuangtai"]=byteFieldObj.init(new baseInfoField(),"ba_ranshaoqizhuangtai",21,2,"燃烧器状态",plc_common_valueMap.coms_ranshaoqi_status)
        this.getPointMap["mo_chushuiwendu"]=byteFieldObj.init(new mockField(),"mo_chushuiwendu", 35, 4, "出水温度", "℃")
        this.getPointMap["mo_huishuiwendu"]=byteFieldObj.init(new mockField(),"mo_huishuiwendu", 39, 4, "回水温度", "℃")
        this.getPointMap["mo_chushuiyali"]=byteFieldObj.init(new mockField(),"mo_chushuiyali", 43, 4, "出水压力", "Mpa")
        this.getPointMap["mo_huishuiyali"]=byteFieldObj.init(new mockField(),"mo_huishuiyali", 47, 4, "回水压力", "Mpa")
        this.getPointMap["mo_qidongjiarezushu"]=byteFieldObj.init(new mockField(),"mo_qidongjiarezushu", 79, 4, "启动加热组数", "组")
        this.getPointMap["mo_qidongjiarezushubaifenbi"]=byteFieldObj.init(new mockField(),"mo_qidongjiarezushubaifenbi", 83, 4, "启动加热组数百分比", "%")

        this.getPointMap["se_chaowenbaojingsheding"]=byteFieldObj.init(new settingField(),"se_chaowenbaojingsheding", 127, 4, "超温报警设定", "℃")
        this.getPointMap["se_shiyongjiarezushusheding"]=byteFieldObj.init(new settingField(),"se_shiyongjiarezushusheding", 131, 4, "使用加热组数设定", "组")
        this.getPointMap["se_touqiejiangeshijiansheding"]=byteFieldObj.init(new settingField(),"se_touqiejiangeshijiansheding", 135, 4, "投切间隔时间设定", "S")
        this.getPointMap["se_kuaiqiejiangeshijiansheding"]=byteFieldObj.init(new settingField(),"se_kuaiqiejiangeshijiansheding", 139, 4, "快切间隔时间设定", "S")
        this.getPointMap["se_tingluwendusheding"]=byteFieldObj.init(new settingField(),"se_tingluwendusheding", 143, 4, "停炉温度设定", "℃")
        this.getPointMap["se_shiyongwendusheding"]=byteFieldObj.init(new settingField(),"se_shiyongwendusheding", 147, 4, "使用温度设定", "℃")
        this.getPointMap["se_qiluwendusheding"]=byteFieldObj.init(new settingField(),"se_qiluwendusheding", 151, 4, "启炉温度设定", "℃")
        this.getPointMap["se_yalidibaojingsheding"]=byteFieldObj.init(new settingField(),"se_yalidibaojingsheding", 155, 4, "压力低报警设定", "Mpa")
        this.getPointMap["se_yaligaobaojingsheding"]=byteFieldObj.init(new settingField(),"se_yaligaobaojingsheding", 159, 4, "压力高报警设定", "Mpa")
        this.getPointMap["se_qibengyalisheding"]=byteFieldObj.init(new settingField(),"se_qibengyalisheding", 163, 4, "启泵压力设定", "Mpa")
        this.getPointMap["se_tingbengyalisheding"]=byteFieldObj.init(new settingField(),"se_tingbengyalisheding", 167, 4, "停泵压力设定", "Mpa")
        this.getPointMap["se_xunhuanbengshangxianwendusheding"]=byteFieldObj.init(new settingField(),"se_xunhuanbengshangxianwendusheding", 171, 4, "循环泵上限温度设定", "℃")
        this.getPointMap["se_xunhuanbengxiaxianwendusheding"]=byteFieldObj.init(new settingField(),"se_xunhuanbengxiaxianwendusheding", 175, 4, "循环泵下限温度设定", "℃")

        this.getPointMap["de_1_addshuibeng_auto"]=byteFieldObj.init(new deviceField(),"de_1_addshuibeng_auto", 199, 2, "1#补水泵",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_1_addshuibeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_1_addshuibeng_start_stop", 201, 2, "1#补水泵", coms_start_stop)
        this.getPointMap["de_2_addshuibeng_auto"]=byteFieldObj.init(new deviceField(),"de_2_addshuibeng_auto", 203, 2, "2#补水泵",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_2_addshuibeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_2_addshuibeng_start_stop", 205, 2, "2#补水泵", coms_start_stop)
        this.getPointMap["de_baojingshuchuzhishi"]=byteFieldObj.init(new deviceField(),"de_baojingshuchuzhishi", 207, 2, "报警输出指示",coms_open_close)
        this.getPointMap["de_1_xunhuanbeng_auto"]=byteFieldObj.init(new deviceField(),"de_1_xunhuanbeng_auto", 209, 2, "1#循环泵",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_1_xunhuanbeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_1_xunhuanbeng_start_stop", 211, 2, "1#循环泵", coms_start_stop)
        this.getPointMap["de_2_xunhuanbeng_auto"]=byteFieldObj.init(new deviceField(),"de_2_xunhuanbeng_auto", 213, 2, "2#循环泵",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_2_xunhuanbeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_2_xunhuanbeng_start_stop", 215, 2, "2#循环泵", coms_start_stop)

        this.getPointMap["ex_shuiweijidibaojing（dianji）"]=byteFieldObj.init(new exceptionField(),"ex_shuiweijidibaojing（dianji）", 233, 2, "水位极低报警（电极）", 8)
        this.getPointMap["ex_xitongchaoyabaojing（shedingzhi）"]=byteFieldObj.init(new exceptionField(),"ex_xitongchaoyabaojing（shedingzhi）", 233, 2, "系统超压报警（设定值）", 9)
        this.getPointMap["ex_xitongyalidibaojing（shedingzhi）"]=byteFieldObj.init(new exceptionField(),"ex_xitongyalidibaojing（shedingzhi）", 233, 2, "系统压力低报警（设定值）", 10)
        this.getPointMap["ex_xitongchaoyabaojing（dianjiedianyalibiao）"]=byteFieldObj.init(new exceptionField(),"ex_xitongchaoyabaojing（dianjiedianyalibiao）", 233, 2, "系统超压报警（电接点压力表）", 11)
        this.getPointMap["ex_xitongyalidibaojing（dianjiedianyalibiao）"]=byteFieldObj.init(new exceptionField(),"ex_xitongyalidibaojing（dianjiedianyalibiao）", 233, 2, "系统压力低报警（电接点压力表）", 12)
        this.getPointMap["ex_chushuiwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_chushuiwenduchuanganqiguzhang", 233, 2, "出水温度传感器故障", 13)
        this.getPointMap["ex_huishuiwenduchuanganqiguzhang）"]=byteFieldObj.init(new exceptionField(),"ex_huishuiwenduchuanganqiguzhang）", 233, 2, "回水温度传感器故障）", 14)
        this.getPointMap["ex_chushuiyalibiansongqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_chushuiyalibiansongqiguzhang", 233, 2, "出水压力变送器故障", 15)
        this.getPointMap["ex_huishuiyalibiansongqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_huishuiyalibiansongqiguzhang", 233, 2, "回水压力变送器故障", 0)
        this.getPointMap["ex_lubichaowenbaojing"]=byteFieldObj.init(new exceptionField(),"ex_lubichaowenbaojing", 233, 2, "炉壁超温报警", 1)
        this.getPointMap["ex_waibuliansuoduankaibaojing"]=byteFieldObj.init(new exceptionField(),"ex_waibuliansuoduankaibaojing", 233, 2, "外部连锁断开报警", 2)
        this.getPointMap["ex_xunhuanbengliansuoduankaibaojing"]=byteFieldObj.init(new exceptionField(),"ex_xunhuanbengliansuoduankaibaojing", 233, 2, "循环泵连锁断开报警", 3)
        this.getPointMap["ex_loudianbaojing"]=byteFieldObj.init(new exceptionField(),"ex_loudianbaojing", 233, 2, "漏电报警", 4)
        this.getPointMap["ex_qianyabaojing"]=byteFieldObj.init(new exceptionField(),"ex_qianyabaojing", 233, 2, "欠压报警", 5)
        this.getPointMap["ex_chushuichaowenbaojing"]=byteFieldObj.init(new exceptionField(),"ex_chushuichaowenbaojing", 233, 2, "出水超温报警", 6)
        this.getPointMap["ex_wendushedingcuowubaojing"]=byteFieldObj.init(new exceptionField(),"ex_wendushedingcuowubaojing", 233, 2, "温度设定错误报警", 7)
        this.getPointMap["ex_Axiangguoliubaojing"]=byteFieldObj.init(new exceptionField(),"ex_Axiangguoliubaojing", 235, 2, "A相过流报警", 8)
        this.getPointMap["ex_Bxiangguoliubaojing"]=byteFieldObj.init(new exceptionField(),"ex_Bxiangguoliubaojing", 235, 2, "B相过流报警", 9)
        this.getPointMap["ex_Cxiangguoliubaojing"]=byteFieldObj.init(new exceptionField(),"ex_Cxiangguoliubaojing", 235, 2, "C相过流报警",10)

    }
}
