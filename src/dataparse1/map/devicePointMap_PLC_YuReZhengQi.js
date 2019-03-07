import map from './map'
import {
    coms_level,
    coms_media,
    coms_open_close,
    coms_power,
    coms_start_stop,
    media,
    plc_common_valueMap,
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

export default class devicePointMap_PLC_YuReZhengQi extends map {
    constructor() {
        super();
        const byteFieldObj =new byteField();

        /*************start 计算属性（不显示）****************/
        this.getPointMap["_addshuibeng"]=byteFieldObj.init(new deviceField(),"_addshuibeng", 0, 0, "给水泵",false)
        this.getPointMap["_chuanyangbeng"]=byteFieldObj.init(new deviceField(),"_chuanyangbeng", 0, 0, "除氧泵",false)
        /*************end 计算属性（不显示）****************/

        this.getPointMap["ba_yunxingxiaoshishu"]=byteFieldObj.init(new baseInfoField(),"ba_yunxingxiaoshishu",9,2,"运行小时数","时")
        this.getPointMap["ba_yunxingtianshu"]=byteFieldObj.init(new baseInfoField(),"ba_yunxingtianshu",11,2,"运行天数","天")
        this.getPointMap[deviceModel.key_point_system_status]=byteFieldObj.init(new baseInfoField(),deviceModel.key_point_system_status,13,2,"系统状态",plc_common_valueMap.coms_status)
        this.getPointMap[deviceModel.key_point_power]=byteFieldObj.init(new powerField(),deviceModel.key_point_power,power.YuRe,0,"燃料",coms_power)
        this.getPointMap[deviceModel.key_point_media]=byteFieldObj.init(new mediaField(),deviceModel.key_point_media,media.ZhengQi,0,"介质",coms_media)
        this.getPointMap["ba_shuiweizhuangtai"]=byteFieldObj.init(new baseInfoField(),"ba_shuiweizhuangtai",19,2,"水位状态",coms_level)
        this.getPointMap["ba_ranshaoqizhuangtai"]=byteFieldObj.init(new baseInfoField(),"ba_ranshaoqizhuangtai",21,2,"燃烧器状态",plc_common_valueMap.coms_ranshaoqi_status)

        this.getPointMap["mo_zhengqiyali"]=byteFieldObj.init(new mockField(),"mo_zhengqiyali", 35, 4, "蒸汽压力", "MPa")
        this.getPointMap["mo_zhengqiwendu"]=byteFieldObj.init(new mockField(),"mo_zhengqiwendu", 39, 4, "蒸汽温度", "℃")
        this.getPointMap["mo_guoluyewei"]=byteFieldObj.init(new mockField(),"mo_guolushuiwei", 43, 4, "锅炉水位", "mm")
        this.getPointMap["mo_zhengqishunshiliuliang"]=byteFieldObj.init(new mockField(),"mo_zhengqishunshiliuliang", 47, 4, "蒸汽瞬时流量", "T/H")
        this.getPointMap["mo_bushuishunshiliuliang"]=byteFieldObj.init(new mockField(),"mo_bushuishunshiliuliang", 51, 4, "补水瞬时流量", "m³/H")
        this.getPointMap["mo_zhengqileijiliuliang"]=byteFieldObj.init(new mockField(),"mo_zhengqileijiliuliang", 55, 4, "蒸汽累计流量", "T")
        this.getPointMap["mo_bushuileijiliuliang"]=byteFieldObj.init(new mockField(),"mo_bushuileijiliuliang", 59, 4, "补水累计流量", "m³")
        this.getPointMap["mo_jinyanwendu"]=byteFieldObj.init(new mockField(),"mo_jinyanwendu", 63, 4, "进烟温度", "℃")
        this.getPointMap["mo_jinyanyali"]=byteFieldObj.init(new mockField(),"mo_jinyanyali", 67, 4, "进烟压力", "Kpa")
        this.getPointMap["mo_chuyanwendu"]=byteFieldObj.init(new mockField(),"mo_chuyanwendu", 71, 4, "出烟温度", "℃")
        this.getPointMap["mo_chuyanyali"]=byteFieldObj.init(new mockField(),"mo_chuyanyali", 75, 4, "出烟压力", "Kpa")
        this.getPointMap["mo_bushuiwendu"]=byteFieldObj.init(new mockField(),"mo_bushuiwendu", 79, 4, "补水温度", "℃")
        this.getPointMap["mo_bushuiyali"]=byteFieldObj.init(new mockField(),"mo_bushuiyali", 83, 4, "补水压力", "Mpa")
        this.getPointMap["mo_bushuibengpinlvfankui"]=byteFieldObj.init(new mockField(),"mo_bushuibengpinlvfankui", 87, 4, "补水泵频率反馈", "Hz")
        this.getPointMap["mo_chushuibengpinlvfankui"]=byteFieldObj.init(new mockField(),"mo_chushuibengpinlvfankui", 91, 4, "除水泵频率反馈", "Hz")
        this.getPointMap["mo_ruanshuixiangyewei"]=byteFieldObj.init(new mockField(),"mo_ruanshuixiangyewei", 95, 4, "软水箱液位", "cm")
        this.getPointMap["mo_chuyangqiyewei"]=byteFieldObj.init(new mockField(),"mo_chuyangqiyewei", 99, 4, "除氧器液位", "cm")
        this.getPointMap["mo_chuyangqiwendu"]=byteFieldObj.init(new mockField(),"mo_chuyangqiwendu", 103, 4, "除氧器温度", "℃")
        this.getPointMap["mo_chuyangqiyali"]=byteFieldObj.init(new mockField(),"mo_chuyangqiyali", 107, 4, "除氧器压力", "KPa")
        this.getPointMap["mo_bushuidiandongfafankui"]=byteFieldObj.init(new mockField(),"mo_bushuidiandongfafankui", 111, 4, "补水电动阀反馈", "%")
        this.getPointMap["mo_chuyangbushuidiandongfafankui"]=byteFieldObj.init(new mockField(),"mo_chuyangbushuidiandongfafankui", 115, 4, "除氧补水电动阀反馈", "%")
        this.getPointMap["mo_chuyangzhengqidiandongfafankui"]=byteFieldObj.init(new mockField(),"mo_chuyangzhengqidiandongfafankui", 119, 4, "除氧蒸汽电动阀反馈", "%")
        this.getPointMap["mo_jinyandiandongfafankui"]=byteFieldObj.init(new mockField(),"mo_jinyandiandongfafankui", 123, 4, "进烟电动阀反馈", "%")
        this.getPointMap["mo_chuyandiandongfafankui"]=byteFieldObj.init(new mockField(),"mo_chuyandiandongfafankui", 127, 4, "出烟电动阀反馈", "%")
        this.getPointMap["mo_guoluzhuzhengqitiaojiefafankui"]=byteFieldObj.init(new mockField(),"mo_guoluzhuzhengqitiaojiefafankui", 131, 4, "锅炉主蒸汽调节阀反馈", "%")
        this.getPointMap["mo_shigufangshuidiandongfafankui"]=byteFieldObj.init(new mockField(),"mo_shigufangshuidiandongfafankui", 135, 4, "事故放水电动阀反馈", "%")
        this.getPointMap["mo_jinjipaiqidiandongfafankui"]=byteFieldObj.init(new mockField(),"mo_jinjipaiqidiandongfafankui", 139, 4, "紧急排气电动阀反馈", "%")
        this.getPointMap["mo_panyanwenduxianshi"]=byteFieldObj.init(new mockField(),"mo_panyanwenduxianshi", 143, 4, "排烟温度显示", "℃")

        this.getPointMap["se_chaoyabaojingyalisheding"]=byteFieldObj.init(new settingField(),"se_chaoyabaojingyalisheding", 248, 4, "超压报警压力设定", "MPa")
        this.getPointMap["se_guolushuiweimubiaosheding"]=byteFieldObj.init(new settingField(),"se_guolushuiweimubiaosheding", 252, 4, "锅炉水位目标设定", "mm")
        this.getPointMap["se_guolushuiweijigaobaojingsheding"]=byteFieldObj.init(new settingField(),"se_guolushuiweijigaobaojingsheding", 256, 4, "锅炉水位极高报警设定", "mm")
        this.getPointMap["se_guolushuiweigaosheding"]=byteFieldObj.init(new settingField(),"se_guolushuiweigaosheding", 260, 4, "锅炉水位高设定", "mm")
        this.getPointMap["se_guolushuiweidisheding"]=byteFieldObj.init(new settingField(),"se_guolushuiweidisheding", 264, 4, "锅炉水位低设定", "mm")
        this.getPointMap["se_guolushuiweijidibaojingsheding"]=byteFieldObj.init(new settingField(),"se_guolushuiweijidibaojingsheding", 268, 4, "锅炉水位极低报警设定", "mm")
        this.getPointMap["se_jishuibengshoudongpinlvsheding"]=byteFieldObj.init(new settingField(),"se_jishuibengshoudongpinlvsheding", 272, 4, "给水泵手动频率设定", "Hz")
        this.getPointMap["se_chuyangqibushuimubiaosheding"]=byteFieldObj.init(new settingField(),"se_chuyangqibushuimubiaosheding", 276, 4, "除氧器补水目标设定", "CM")
        this.getPointMap["se_chuyangqishuiweijigaobaojingsheding"]=byteFieldObj.init(new settingField(),"se_chuyangqishuiweijigaobaojingsheding", 280, 4, "除氧器水位极高报警设定", "CM")
        this.getPointMap["se_chuyangqitingbengyeweisheding"]=byteFieldObj.init(new settingField(),"se_chuyangqitingbengyeweisheding", 284, 4, "除氧器停泵液位设定", "CM")
        this.getPointMap["se_chuyangqiqibengyeweisheding"]=byteFieldObj.init(new settingField(),"se_chuyangqiqibengyeweisheding", 288, 4, "除氧器启泵液位设定", "CM")
        this.getPointMap["se_chuyangqijidibaojingsheding"]=byteFieldObj.init(new settingField(),"se_chuyangqijidibaojingsheding", 292, 4, "除氧器极低报警设定", "CM")
        this.getPointMap["se_guolushuiweishoudonggeisu"]=byteFieldObj.init(new settingField(),"se_chuyangqibushuishoudonggeisu", 296, 4, "除氧器补水手动给定", "%")
        this.getPointMap["se_jinyandiandongfageiding"]=byteFieldObj.init(new settingField(),"se_jinyandiandongfageiding", 300, 4, "进烟电动阀给定", "%")
        this.getPointMap["se_chuyandiandongfageiding"]=byteFieldObj.init(new settingField(),"se_chuyandiandongfageiding", 304, 4, "出烟电动阀给定", "%")
        this.getPointMap["se_chuyangqizhengqishoudongjiding"]=byteFieldObj.init(new settingField(),"se_chuyangqizhengqishoudongjiding", 308, 4, "除氧器蒸汽手动给定", "%")
        this.getPointMap["se_chuyangqiwendumubiaojiding"]=byteFieldObj.init(new settingField(),"se_chuyangqiwendumubiaojiding", 312, 4, "除氧器温度目标给定", "℃")
        this.getPointMap["se_ruanshuixiangqueshuibaojingsheding"]=byteFieldObj.init(new settingField(),"se_ruanshuixiangqueshuibaojingsheding", 316, 4, "软水箱缺水报警设定", "%")
        this.getPointMap["se_paiyanchaowenbaojingsheding"]=byteFieldObj.init(new settingField(),"se_paiyanchaowenbaojingsheding", 320, 4, "排烟超温报警设定", "℃")

        this.getPointMap["de_1_addshuibeng_auto"]=byteFieldObj.init(new deviceField(),"de_1_addshuibeng_auto", 368, 2, "1#给水泵",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_1_addshuibeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_1_addshuibeng_start_stop", 370, 2, "1#给水泵", coms_start_stop)
        this.getPointMap["de_2_addshuibeng_auto"]=byteFieldObj.init(new deviceField(),"de_2_addshuibeng_auto", 372, 2, "2#给水泵",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_2_addshuibeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_2_addshuibeng_start_stop", 374, 2, "2#给水泵", coms_start_stop)
        this.getPointMap["de_1_chuyangbeng_auto"]=byteFieldObj.init(new deviceField(),"de_1_chuyangbeng_auto", 376, 2, "1#除氧泵",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_1_chuyangbeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_1_chuyangbeng_start_stop", 378, 2, "1#除氧泵", coms_start_stop)
        this.getPointMap["de_2_chuyangbeng_auto"]=byteFieldObj.init(new deviceField(),"de_2_chuyangbeng_auto", 380, 2, "2#除氧泵",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_2_chuyangbeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_2_chuyangbeng_start_stop", 382, 2, "2#除氧泵", coms_start_stop)
        this.getPointMap["de_baojingshuchuzhishi"]=byteFieldObj.init(new deviceField(),"de_baojingshuchuzhishi", 384, 2, "报警输出指示", coms_open_close)

        this.getPointMap["ex_shuiweiweidibaojingdianji"]=byteFieldObj.init(new exceptionField(), "ex_shuiweiweidibaojingdianji", 448, 2, "水位危低报警（电极）", 8)
        this.getPointMap["ex_shuiweijidibaojingdianji"]=byteFieldObj.init(new exceptionField(), "ex_shuiweijidibaojingdianji", 448, 2, "水位极低报警（电极）", 9)
        this.getPointMap["ex_shuiweijigaobaojingdianji"]=byteFieldObj.init(new exceptionField(), "ex_shuiweijigaobaojingdianji", 448, 2, "水位极高报警（电极）", 10)
        this.getPointMap["ex_shuiweijidibaojingshedingzhi"]=byteFieldObj.init(new exceptionField(), "ex_shuiweijidibaojingshedingzhi", 448, 2, "水位极低报警（设定值）", 11)
        this.getPointMap["ex_shuiweijigaobaojingshedingzhi"]=byteFieldObj.init(new exceptionField(), "ex_shuiweijigaobaojingshedingzhi", 448, 2, "水位极高报警（设定值）", 12)

        this.getPointMap["ex_chaoyabaojingyalikaiguan"]=byteFieldObj.init(new exceptionField(), "ex_chaoyabaojingyalikaiguan", 448, 2, "超压报警（压力开关）", 13)
        this.getPointMap["ex_chaoyabaojingshedingzhi"]=byteFieldObj.init(new exceptionField(), "ex_chaoyabaojingshedingzhi", 448, 2, "超压报警（设定值）", 14)
        this.getPointMap["ex_paiyanchaowenbaojing"]=byteFieldObj.init(new exceptionField(), "ex_paiyanchaowenbaojing", 448, 2, "排烟超温报警", 15)
        this.getPointMap["ex_ruanshuixiangqueshuibaojing"]=byteFieldObj.init(new exceptionField(), "ex_ruanshuixiangqueshuibaojing", 448, 2, "软水箱缺水报警", 0)
        this.getPointMap["ex_shuidianjiluojicuobaojing"]=byteFieldObj.init(new exceptionField(), "ex_shuidianjiluojicuobaojing", 448, 2, "水电极逻辑错报警", 1)
        this.getPointMap["ex_yalibiansongqiguzhangbaojing"]=byteFieldObj.init(new exceptionField(), "ex_yalibiansongqiguzhangbaojing", 448, 2, "压力变送器故障报警", 2)
        this.getPointMap["ex_shuiweibiansongqiguzhangbaojing"]=byteFieldObj.init(new exceptionField(), "ex_shuiweibiansongqiguzhangbaojing", 448, 2, "水位变送器故障报警", 3)
        this.getPointMap["ex_paiyanwenduchuanganqiguzhangbaojing"]=byteFieldObj.init(new exceptionField(), "ex_paiyanwenduchuanganqiguzhangbaojing", 448, 2, "排烟温度传感器故障报警", 4)
        this.getPointMap["ex_chuyangqiqueshuibaojing"]=byteFieldObj.init(new exceptionField(), "ex_chuyangqiqueshuibaojing", 448, 2, "除氧器缺水报警", 5)
        this.getPointMap["ex_chuyangqigaoshuiweibaojing"]=byteFieldObj.init(new exceptionField(), "ex_chuyangqigaoshuiweibaojing", 448, 2, "除氧器高水位报警", 6)
        this.getPointMap["ex_addshuibengbianpinqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_addshuibengbianpinqiguzhang", 448, 2, "给水泵变频器故障", 7)
        this.getPointMap["ex_chuyangbengbianpinqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_chuyangbengbianpinqiguzhang", 448, 2, "除氧泵变频器故障", 8)

        this.getPointMap["ex_bushuibeng1guzhang"]=byteFieldObj.init(new exceptionField(), "ex_bushuibeng1guzhang", 450, 2, "补水泵1故障", 8)
        this.getPointMap["ex_bushuibeng2guzhang"]=byteFieldObj.init(new exceptionField(), "ex_bushuibeng2guzhang", 450, 2, "补水泵2故障", 9)
        this.getPointMap["ex_chuyangbeng1guzhang"]=byteFieldObj.init(new exceptionField(), "ex_chuyangbeng1guzhang", 450, 2, "除氧泵1故障", 10)
        this.getPointMap["ex_chuyangbeng2guzhang"]=byteFieldObj.init(new exceptionField(), "ex_chuyangbeng2guzhang", 450, 2, "除氧泵2故障", 11)
    }
}
