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
export default class devicePointMap_PLC_RanMeiZhengQi extends map {
    constructor() {
        super();
        const byteFieldObj =new byteField();
        /*************start 计算属性（不显示）****************/
        this.getPointMap["_addshuibeng"]=byteFieldObj.init(new deviceField(),"_addshuibeng", 0, 0, "给水泵",false)
        this.getPointMap["_chuanyangbeng"]=byteFieldObj.init(new deviceField(),"_chuanyangbeng", 0, 0, "除氧泵",false)
        this.getPointMap["_gufengfan"]=byteFieldObj.init(new deviceField(),"_gufengfan", 0, 0, "鼓风",false)
        this.getPointMap["_yinfengfan"]=byteFieldObj.init(new deviceField(),"_yinfengfan", 0, 0, "引风",false)
        this.getPointMap["_lupaifan"]=byteFieldObj.init(new deviceField(),"_lupaifan", 0, 0, "炉排",false)
        this.getPointMap["_chuzhafan"]=byteFieldObj.init(new deviceField(),"_chuzhafan", 0, 0, "出渣",false)
        /*************end 计算属性（不显示）****************/

        this.getPointMap["ba_yunxingxiaoshishu"]=byteFieldObj.init(new baseInfoField(),"ba_yunxingxiaoshishu",9,2,"运行小时数","时")
        this.getPointMap["ba_yunxingtianshu"]=byteFieldObj.init(new baseInfoField(),"ba_yunxingtianshu",11,2,"运行天数","天")
        this.getPointMap[deviceModel.key_point_system_status]=byteFieldObj.init(new baseInfoField(),deviceModel.key_point_system_status,13,2,"系统状态",plc_common_valueMap.coms_status)
        this.getPointMap[deviceModel.key_point_power]=byteFieldObj.init(new powerField(),deviceModel.key_point_power,power.Mei,2,"燃料",coms_power)
        this.getPointMap[deviceModel.key_point_media]=byteFieldObj.init(new mediaField(),deviceModel.key_point_media,media.ZhengQi,2,"介质",coms_media)
        this.getPointMap["ba_shuiweizhuangtai"]=byteFieldObj.init(new baseInfoField(),"ba_shuiweizhuangtai",19,2,"水位状态",coms_level)
        this.getPointMap["ba_ranshaoqizhuangtai"]=byteFieldObj.init(new baseInfoField(),"ba_ranshaoqizhuangtai",21,2,"燃烧器状态",plc_common_valueMap.coms_ranshaoqi_status)
        this.getPointMap["mo_zhengqiyali"]=byteFieldObj.init(new mockField(),"mo_zhengqiyali", 35, 4, "蒸汽压力", "MPa")
        this.getPointMap["mo_guoluyewei"]=byteFieldObj.init(new mockField(),"mo_guoluyewei", 39, 4, "锅炉液位", "mm")
        this.getPointMap["mo_zhengqishunshiliuliang"]=byteFieldObj.init(new mockField(),"mo_zhengqishunshiliuliang", 43, 4, "蒸汽瞬时流量", "T/h")
        this.getPointMap["mo_bushuishunshiliuliang"]=byteFieldObj.init(new mockField(),"mo_bushuishunshiliuliang", 47, 4, "补水瞬时流量", "m³/h")
        this.getPointMap["mo_lutangwendu"]=byteFieldObj.init(new mockField(),"mo_lutangwendu", 51, 4, "炉膛温度", "℃")
        this.getPointMap["mo_lutangyali"]=byteFieldObj.init(new mockField(),"mo_lutangyali", 55, 4, "炉膛压力", "Pa")
        this.getPointMap["mo_shengmeiqijinkouyanwen"]=byteFieldObj.init(new mockField(),"mo_shengmeiqijinkouyanwen", 59, 4, "省煤器进口烟温", "℃")
        this.getPointMap["mo_zuizhongpaiyanwendu"]=byteFieldObj.init(new mockField(),"mo_zuizhongpaiyanwendu", 63, 4, "最终排烟温度", "℃")
        this.getPointMap["mo_zhengqileijiliuliang"]=byteFieldObj.init(new mockField(),"mo_zhengqileijiliuliang", 67, 4, "蒸汽累计流量", "T")
        this.getPointMap["mo_bushuileijiliuliang"]=byteFieldObj.init(new mockField(),"mo_bushuileijiliuliang", 71, 4, "补水累计流量", "m³")
        this.getPointMap["mo_shengmeiqijinshuiwendu"]=byteFieldObj.init(new mockField(),"mo_shengmeiqijinshuiwendu", 75, 4, "省煤器进水温度", "℃")
        this.getPointMap["mo_shengmeiqichushuiwendu"]=byteFieldObj.init(new mockField(),"mo_shengmeiqichushuiwendu", 79, 4, "省煤器出水温度", "℃")
        this.getPointMap["mo_bushuiwendu"]=byteFieldObj.init(new mockField(),"mo_bushuiwendu", 83, 4, "补水温度", "℃")
        this.getPointMap["mo_paiyanyali"]=byteFieldObj.init(new mockField(),"mo_paiyanyali", 87, 4, "排烟压力", "Pa")
        this.getPointMap["mo_jishuibengpinlvfankui"]=byteFieldObj.init(new mockField(),"mo_jishuibengpinlvfankui", 91, 4, "给水泵频率反馈", "Hz")
        this.getPointMap["mo_yinfengjipinlvfankui"]=byteFieldObj.init(new mockField(),"mo_yinfengjipinlvfankui", 95, 4, "引风机频率反馈", "Hz")
        this.getPointMap["mo_gufengjipinlvfankui"]=byteFieldObj.init(new mockField(),"mo_gufengjipinlvfankui", 99, 4, "鼓风机频率反馈", "Hz")
        this.getPointMap["mo_ruanshuixiangyewei"]=byteFieldObj.init(new mockField(),"mo_ruanshuixiangyewei", 103, 4, "软水箱液位", "%")
        this.getPointMap["mo_guorezhengqiyali"]=byteFieldObj.init(new mockField(),"mo_guorezhengqiyali", 107, 4, "过热蒸汽压力", "MPa")
        this.getPointMap["mo_chuyangqiyewei"]=byteFieldObj.init(new mockField(),"mo_chuyangqiyewei", 111, 4, "除氧器液位", "%")
        this.getPointMap["mo_guoreqichukouyanwen"]=byteFieldObj.init(new mockField(),"mo_guoreqichukouyanwen", 115, 4, "过热器出口烟温", "℃")
        this.getPointMap["mo_guoreqizhengqiwendu"]=byteFieldObj.init(new mockField(),"mo_guoreqizhengqiwendu", 119, 4, "过热器蒸汽温度", "℃")
        this.getPointMap["mo_baohezhengqiwendu"]=byteFieldObj.init(new mockField(),"mo_baohezhengqiwendu", 123, 4, "饱和蒸汽温度", "℃")
        this.getPointMap["mo_yureqijinyanwendu"]=byteFieldObj.init(new mockField(),"mo_yureqijinyanwendu", 127, 4, "预热器进烟温度", "℃")
        this.getPointMap["mo_yureqijinyanyali"]=byteFieldObj.init(new mockField(),"mo_yureqijinyanyali", 131, 4, "预热器进烟压力", "Pa")
        this.getPointMap["mo_chuyangqiwendu"]=byteFieldObj.init(new mockField(),"mo_chuyangqiwendu", 135, 4, "除氧器温度", "℃")
        this.getPointMap["mo_chuyangqiyali"]=byteFieldObj.init(new mockField(),"mo_chuyangqiyali", 139, 4, "除氧器压力", "KPa")
        this.getPointMap["mo_chuyangbengpinlvfankui"]=byteFieldObj.init(new mockField(),"mo_chuyangbengpinlvfankui", 143, 4, "除氧泵频率反馈", "Hz")
        this.getPointMap["mo_bushuidiandongfafankui"]=byteFieldObj.init(new mockField(),"mo_bushuidiandongfafankui", 147, 4, "补水电动阀反馈", "%")
        this.getPointMap["mo_jianwenshuidiandongfafankui"]=byteFieldObj.init(new mockField(),"mo_jianwenshuidiandongfafankui", 151, 4, "减温水电动阀反馈", "%")
        this.getPointMap["mo_chuyangjiarediandongfafankui"]=byteFieldObj.init(new mockField(),"mo_chuyangjiarediandongfafankui", 155, 4, "除氧加热电动阀反馈", "%")
        this.getPointMap["mo_zhaoqiyali"]=byteFieldObj.init(new mockField(),"mo_zhaoqiyali", 159, 4, "沼气压力", "kPa")
        this.getPointMap["mo_lutangchukouyanwen"]=byteFieldObj.init(new mockField(),"mo_lutangchukouyanwen", 163, 4, "炉膛出口烟温", "℃")
        this.getPointMap["mo_kongyuqichukouyanwen"]=byteFieldObj.init(new mockField(),"mo_kongyuqichukouyanwen", 167, 4, "空预器出口烟温", "℃")
        this.getPointMap["mo_shengmeiqichukouyanwen"]=byteFieldObj.init(new mockField(),"mo_shengmeiqichukouyanwen", 171, 4, "省煤器出口烟温", "℃")

        this.getPointMap["se_qiluyalisheding"]=byteFieldObj.init(new settingField(),"se_qiluyalisheding", 248, 4, "启炉压力设定", "MPa")
        this.getPointMap["se_mubiaoyalisheding"]=byteFieldObj.init(new settingField(),"se_mubiaoyalisheding", 252, 4, "目标压力设定", "MPa")
        this.getPointMap["se_tingluyalisheding"]=byteFieldObj.init(new settingField(),"se_tingluyalisheding", 256, 4, "停炉压力设定", "MPa")
        this.getPointMap["se_chaoyabaojingyalisheding"]=byteFieldObj.init(new settingField(),"se_chaoyabaojingyalisheding", 260, 4, "超压报警压力设定", "MPa")
        this.getPointMap["se_paiyanchaowenbaojing"]=byteFieldObj.init(new settingField(),"se_paiyanchaowenbaojing", 264, 4, "排烟超温报警", "℃")
        this.getPointMap["se_guolushuiweimubiaosheding"]=byteFieldObj.init(new settingField(),"se_guolushuiweimubiaosheding", 268, 4, "锅炉水位目标设定", "mm")
        this.getPointMap["se_guolushuiweijigaobaojingsheding"]=byteFieldObj.init(new settingField(),"se_guolushuiweijigaobaojingsheding", 272, 4, "锅炉水位极高报警设定", "mm")
        this.getPointMap["se_guolutingbengshuiweisheding"]=byteFieldObj.init(new settingField(),"se_guolutingbengshuiweisheding", 276, 4, "锅炉停泵水位设定", "mm")
        this.getPointMap["se_guoluqibengshuiweisheding"]=byteFieldObj.init(new settingField(),"se_guoluqibengshuiweisheding", 280, 4, "锅炉启泵水位设定", "mm")
        this.getPointMap["se_guolushuiweijidibaojingsheding"]=byteFieldObj.init(new settingField(),"se_guolushuiweijidibaojingsheding", 284, 4, "锅炉水位极低报警设定", "mm")
        this.getPointMap["se_guolushuiweishoudonggeisu"]=byteFieldObj.init(new settingField(),"se_guolushuiweishoudonggeisu", 288, 4, "锅炉水位手动给速", "%")

        this.getPointMap["de_yinfeng_auto"]=byteFieldObj.init(new deviceField(),"de_yinfeng_auto", 368, 2, "引风",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_1_yinfengji_start_stop"]=byteFieldObj.init(new deviceField(),"de_1_yinfengji_start_stop", 370, 2, "引风", coms_start_stop)
        this.getPointMap["de_gufeng_auto"]=byteFieldObj.init(new deviceField(),"de_gufeng_auto", 372, 2, "鼓风",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_1_gufengji_start_stop"]=byteFieldObj.init(new deviceField(),"de_1_gufengji_start_stop", 374, 2, "鼓风", coms_start_stop)
        this.getPointMap["de_lupai_auto"]=byteFieldObj.init(new deviceField(),"de_lupai_auto", 376, 2, "炉排",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_lupai_start_stop"]=byteFieldObj.init(new deviceField(),"de_lupai_start_stop", 378, 2, "炉排", coms_start_stop)
        this.getPointMap["de_chuzha_auto"]=byteFieldObj.init(new deviceField(),"de_chuzha_auto", 380, 2, "除渣",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_chuzha_start_stop"]=byteFieldObj.init(new deviceField(),"de_chuzha_start_stop", 382, 2, "除渣", coms_start_stop)
        this.getPointMap["de_1_addshuibeng_auto"]=byteFieldObj.init(new deviceField(),"de_1_addshuibeng_auto", 384, 2, "1#给水泵",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_1_addshuibeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_1_addshuibeng_start_stop", 386, 2, "1#给水泵", coms_start_stop)
        this.getPointMap["de_2_addshuibeng_auto"]=byteFieldObj.init(new deviceField(),"de_2_addshuibeng_auto", 388, 2, "2#给水泵",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_2_addshuibeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_2_addshuibeng_start_stop", 390, 2, "2#给水泵", coms_start_stop)
        this.getPointMap["de_1_chuyangbeng_auto"]=byteFieldObj.init(new deviceField(),"de_1_chuyangbeng_auto", 392, 2, "1#除氧泵",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_1_chuyangbeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_1_chuyangbeng_start_stop", 394, 2, "1#除氧泵", coms_start_stop)
        this.getPointMap["de_2_chuyangbeng_auto"]=byteFieldObj.init(new deviceField(),"de_2_chuyangbeng_auto", 396, 2, "2#除氧泵",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_2_chuyangbeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_2_chuyangbeng_start_stop", 398, 2, "2#除氧泵", coms_start_stop)

        this.getPointMap["ex_shuiweijidibaojing_shedingzhi"]=byteFieldObj.init(new exceptionField(),"ex_shuiweijidibaojing_shedingzhi", 448, 2, "水位极低报警（设定值）", 0)
        this.getPointMap["ex_shuiweijigaobaojing_shedingzhi"]=byteFieldObj.init(new exceptionField(),"ex_shuiweijigaobaojing_shedingzhi", 448, 2, "水位极高报警（设定值）", 1)
        this.getPointMap["ex_chaoyabaojing_yalikaiguan"]=byteFieldObj.init(new exceptionField(),"ex_chaoyabaojing_yalikaiguan", 448, 2, "超压报警（压力开关）", 2)
        this.getPointMap["ex_chaoyabaojing_shedingzhi"]=byteFieldObj.init(new exceptionField(),"ex_chaoyabaojing_shedingzhi", 448, 2, "超压报警（设定值）", 3)
        this.getPointMap["ex_paiyanchaowenbaojing"]=byteFieldObj.init(new exceptionField(),"ex_paiyanchaowenbaojing", 448, 2, "排烟超温报警", 4)
        this.getPointMap["ex_ruanshuixiangqueshuibaojing"]=byteFieldObj.init(new exceptionField(),"ex_ruanshuixiangqueshuibaojing", 448, 2, "软水箱缺水报警", 5)
        this.getPointMap["ex_shuidianjiluojicuobaojing"]=byteFieldObj.init(new exceptionField(),"ex_shuidianjiluojicuobaojing", 448, 2, "水电极逻辑错报警", 6)
        this.getPointMap["ex_yalibiansongqiguzhangbaojing"]=byteFieldObj.init(new exceptionField(),"ex_yalibiansongqiguzhangbaojing", 448, 2, "压力变送器故障报警", 7)

        this.getPointMap["ex_yinfengjibianpinqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_yinfengjibianpinqiguzhang", 448, 2, "引风机变频器故障", 8)
        this.getPointMap["ex_gufengjibianpinqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_gufengjibianpinqiguzhang", 448, 2, "鼓风机变频器故障", 9)
        this.getPointMap["ex_lupaibianpinqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_lupaibianpinqiguzhang", 448, 2, "炉排变频器故障", 10)
        this.getPointMap["ex_chuzhabianpinqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_chuzhabianpinqiguzhang", 448, 2, "除渣变频器故障", 11)
        this.getPointMap["ex_jishuibianpinqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_jishuibianpinqiguzhang", 448, 2, "给水变频器故障", 12)
        this.getPointMap["ex_shuiweiweidibaojing"]=byteFieldObj.init(new exceptionField(),"ex_shuiweiweidibaojing", 448, 2, "水位危低报警（电极）", 13)
        this.getPointMap["ex_shuiweijidibaojing_dianji"]=byteFieldObj.init(new exceptionField(),"ex_shuiweijidibaojing_dianji", 448, 2, "水位极低报警（电极）", 14)
        this.getPointMap["ex_shuiweijigaobaojing_dianji"]=byteFieldObj.init(new exceptionField(),"ex_shuiweijigaobaojing_dianji", 448, 2, "水位极高报警（电极）", 15)

        this.getPointMap["ex_shuiweibiansongqiguzhangbaojing"]=byteFieldObj.init(new exceptionField(),"ex_shuiweibiansongqiguzhangbaojing", 450, 2, "水位变送器故障报警", 8)
        this.getPointMap["ex_paiyanwenduchuanganqiguzhangbaojing"]=byteFieldObj.init(new exceptionField(),"ex_paiyanwenduchuanganqiguzhangbaojing", 450, 2, "排烟温度传感器故障报警", 9)
        this.getPointMap["ex_chuyangqiqueshuibaojing"]=byteFieldObj.init(new exceptionField(),"ex_chuyangqiqueshuibaojing", 450, 2, "除氧器缺水报警", 10)
        this.getPointMap["ex_chuyangqigaoshuiweibaojing"]=byteFieldObj.init(new exceptionField(),"ex_chuyangqigaoshuiweibaojing", 450, 2, "除氧器高水位报警", 11)

    }
}
