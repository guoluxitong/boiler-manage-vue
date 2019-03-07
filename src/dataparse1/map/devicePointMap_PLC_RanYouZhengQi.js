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
    export default class devicePointMap_PLC_RanYouZhengQi extends map {
    constructor() {
        super();
        const byteFieldObj =new byteField();

        /*************start 计算属性（不显示）****************/
        this.getPointMap["_addshuibeng"]=byteFieldObj.init(new deviceField(),"_addshuibeng", 0, 0, "补水泵",false)
        this.getPointMap["_jienengbeng"]=byteFieldObj.init(new deviceField(),"_jienengbeng", 0, 0, "节能泵",false)
        this.getPointMap["_chuanyangbeng"]=byteFieldObj.init(new deviceField(),"_chuanyangbeng", 0, 0, "除氧泵",false)
        this.getPointMap["_zhaoqifan"]=byteFieldObj.init(new deviceField(),"_zhaoqifan", 0, 0, "沼气风机",false)

        /*************end 计算属性（不显示）****************/
        this.getPointMap["ba_yunxingxiaoshishu"]=byteFieldObj.init(new baseInfoField(),"ba_yunxingxiaoshishu",9,2,"运行小时数","时")
        this.getPointMap["ba_yunxingtianshu"]=byteFieldObj.init(new baseInfoField(),"ba_yunxingtianshu",11,2,"运行天数","天")
        this.getPointMap[deviceModel.key_point_system_status]=byteFieldObj.init(new baseInfoField(),deviceModel.key_point_system_status,13,2,"系统状态",plc_common_valueMap.coms_status)
        this.getPointMap[deviceModel.key_point_power]=byteFieldObj.init(new powerField(),deviceModel.key_point_power,power.YouQi,0,"燃料",coms_power)
        this.getPointMap[deviceModel.key_point_media]=byteFieldObj.init(new mediaField(),deviceModel.key_point_media,media.ZhengQi,0,"介质",coms_media)
        this.getPointMap["ba_shuiweizhuangtai"]=byteFieldObj.init(new baseInfoField(),"ba_shuiweizhuangtai",19,2,"水位状态",coms_level)
        this.getPointMap["ba_ranshaoqizhuangtai"]=byteFieldObj.init(new baseInfoField(),"ba_ranshaoqizhuangtai",21,2,"燃烧器状态",plc_common_valueMap.coms_ranshaoqi_status)

        this.getPointMap["mo_zhengqiyali"]=byteFieldObj.init(new mockField(),"mo_zhengqiyali",35,4,"蒸汽压力","MPa")
        this.getPointMap["mo_guorezhengqiyali"]=byteFieldObj.init(new mockField(),"mo_guorezhengqiyali",39,4,"过热蒸汽压力","MPa")
        this.getPointMap["mo_zhengqiwendu"]=byteFieldObj.init(new mockField(),"mo_zhengqiwendu",43,4,"蒸汽温度","℃")
        this.getPointMap["mo_guorezhengqiwendu"]=byteFieldObj.init(new mockField(),"mo_guorezhengqiwendu",47,4,"过热蒸汽温度","℃")
        this.getPointMap["mo_guolushuiwei"]=byteFieldObj.init(new mockField(),"mo_guolushuiwei",51,4,"锅炉水位")
        this.getPointMap["mo_zhengqishunshiliuliang"]=byteFieldObj.init(new mockField(),"mo_zhengqishunshiliuliang",55,4,"蒸汽瞬时流量","m³/h")
        this.getPointMap["mo_bushuishunshiliuliang"]=byteFieldObj.init(new mockField(),"mo_bushuishunshiliuliang",59,4,"补水瞬时流量","m³/h")
        this.getPointMap["mo_lutangwendu"]=byteFieldObj.init(new mockField(),"mo_lutangwendu",63,4,"炉膛温度","℃")
        this.getPointMap["mo_lutangyali"]=byteFieldObj.init(new mockField(),"mo_lutangyali",67,4,"炉膛压力","MPa")
        this.getPointMap["mo_lengningqijinkouyanwen"]=byteFieldObj.init(new mockField(),"mo_lengningqijinkouyanwen",71,4,"冷凝器进口烟温","℃")
        this.getPointMap["mo_lengningqijinkouyanya"]=byteFieldObj.init(new mockField(),"mo_lengningqijinkouyanya",75,4,"冷凝器进口烟压","kPa")
        this.getPointMap["mo_jienengqijinkouyanwen"]=byteFieldObj.init(new mockField(),"mo_jienengqijinkouyanwen",79,4,"节能器进口烟温","℃")
        this.getPointMap["mo_jienengqijinkouyanya"]=byteFieldObj.init(new mockField(),"mo_jienengqijinkouyanya",83,4,"节能器进口烟压","kPa")
        this.getPointMap["mo_zhengqileijiliuliang"]=byteFieldObj.init(new mockField(),"mo_zhengqileijiliuliang",87,4,"蒸汽累计流量","m³/h")
        this.getPointMap["mo_bushuileijiliuliang"]=byteFieldObj.init(new mockField(),"mo_bushuileijiliuliang",91,4,"补水累计流量","m³/h")
        this.getPointMap["mo_kongyuqijinyanwendu"]=byteFieldObj.init(new mockField(),"mo_kongyuqijinyanwendu",95,4,"空预器进烟温度","℃")
        this.getPointMap["mo_kongyuqijinyanyali"]=byteFieldObj.init(new mockField(),"mo_kongyuqijinyanyali",99,4,"空预器进烟压力","kPa")
        this.getPointMap["mo_zuizhongpaiyanwendu"]=byteFieldObj.init(new mockField(),"mo_zuizhongpaiyanwendu",103,4,"最终排烟温度","℃")
        this.getPointMap["mo_zuizhongpaiyanyali"]=byteFieldObj.init(new mockField(),"mo_zuizhongpaiyanyali",107,4,"最终排烟压力","MPa")
        this.getPointMap["mo_lengningqijinshuiwendu"]=byteFieldObj.init(new mockField(),"mo_lengningqijinshuiwendu",111,4,"冷凝器进水温度","℃")
        this.getPointMap["mo_lengningqichushuiwendu"]=byteFieldObj.init(new mockField(),"mo_lengningqichushuiwendu",115,4,"冷凝器出水温度","℃")
        this.getPointMap["mo_jienengqijinshuiwendu"]=byteFieldObj.init(new mockField(),"mo_jienengqijinshuiwendu",119,4,"节能器进水温度","℃")
        this.getPointMap["mo_jienengqichushuiwendu"]=byteFieldObj.init(new mockField(),"mo_jienengqichushuiwendu",123,4,"节能器出水温度","℃")
        this.getPointMap["mo_lengningqichushuiyali"]=byteFieldObj.init(new mockField(),"mo_lengningqichushuiyali",127,4,"冷凝器出水压力","MPa")
        this.getPointMap["mo_jienengqichushuiyali"]=byteFieldObj.init(new mockField(),"mo_jienengqichushuiyali",131,4,"节能器出水压力","MPa")
        this.getPointMap["mo_bushuibengpinlüfankui"]=byteFieldObj.init(new mockField(),"mo_bushuibengpinlüfankui",135,4,"补水泵频率反馈")
        this.getPointMap["mo_ruanshuixiangyewei"]=byteFieldObj.init(new mockField(),"mo_ruanshuixiangyewei",139,4,"软水箱液位","mm")
        this.getPointMap["mo_chuyangqiyewei"]=byteFieldObj.init(new mockField(),"mo_chuyangqiyewei",143,4,"除氧器液位","mm")
        this.getPointMap["mo_chuyangqiwendu"]=byteFieldObj.init(new mockField(),"mo_chuyangqiwendu",147,4,"除氧器温度","℃")
        this.getPointMap["mo_bushuidiandongfafankui"]=byteFieldObj.init(new mockField(),"mo_bushuidiandongfafankui",151,4,"补水电动阀反馈")
        this.getPointMap["mo_guoreqijiangwendiandongfafankui"]=byteFieldObj.init(new mockField(),"mo_guoreqijiangwendiandongfafankui",155,4,"过热器降温电动阀反馈")
        this.getPointMap["mo_zhufengjipinlüfankui"]=byteFieldObj.init(new mockField(),"mo_zhufengjipinlüfankui",159,4,"主风机频率反馈")
        this.getPointMap["mo_xunhuanfengjipinlüfankui"]=byteFieldObj.init(new mockField(),"mo_xunhuanfengjipinlüfankui",163,4,"循环风机频率反馈")
        this.getPointMap["mo_kongyuqijinfengwendu"]=byteFieldObj.init(new mockField(),"mo_kongyuqijinfengwendu",167,4,"空预器进风温度","℃")
        this.getPointMap["mo_kongyuqijinfengyali"]=byteFieldObj.init(new mockField(),"mo_kongyuqijinfengyali",171,4,"空预器进风压力","MPa")
        this.getPointMap["mo_kongyuqichufengwendu"]=byteFieldObj.init(new mockField(),"mo_kongyuqichufengwendu",175,4,"空预器出风温度","℃")
        this.getPointMap["mo_kongyuqichufengyali"]=byteFieldObj.init(new mockField(),"mo_kongyuqichufengyali",179,4,"空预器出风压力","MPa")
        this.getPointMap["mo_zhaoqiyali"]=byteFieldObj.init(new mockField(),"mo_zhaoqiyali",183,4,"沼气压力","MPa")
        this.getPointMap["mo_zhaoqishunshiliuliang"]=byteFieldObj.init(new mockField(),"mo_zhaoqishunshiliuliang",187,4,"沼气瞬时流量","MPa")
        this.getPointMap["mo_zhaoqileijiliuliang"]=byteFieldObj.init(new mockField(),"mo_zhaoqileijiliuliang",191,4,"沼气累计流量","MPa")
        this.getPointMap["mo_zhaoqifengjipinlvfankui"]=byteFieldObj.init(new mockField(),"mo_zhaoqifengjipinlvfankui",195,4,"沼气风机频率反馈","MPa")

        this.getPointMap["se_qiluyalisheding"]=byteFieldObj.init(new settingField(),"se_qiluyalisheding",248,4,"启炉压力设定","MPa")
        this.getPointMap["se_mubiaoyalisheding"]=byteFieldObj.init(new settingField(),"se_mubiaoyalisheding",252,4,"目标压力设定","MPa")
        this.getPointMap["se_tingluyalisheding"]=byteFieldObj.init(new settingField(),"se_tingluyalisheding",256,4,"停炉压力设定","MPa")
        this.getPointMap["se_chaoyabaojingyalisheding"]=byteFieldObj.init(new settingField(),"se_chaoyabaojingyalisheding",260,4,"超压报警压力设定","MPa")
        this.getPointMap["se_paiyanchaowenbaojing"]=byteFieldObj.init(new settingField(),"se_paiyanchaowenbaojing",264,4,"排烟超温报警","℃")
        this.getPointMap["se_guolushuiweimubiaosheding"]=byteFieldObj.init(new settingField(),"se_guolushuiweimubiaosheding",268,4,"锅炉水位目标设定","mm")
        this.getPointMap["se_guolushuiweijigaobaojingsheding"]=byteFieldObj.init(new settingField(),"se_guolushuiweijigaobaojingsheding",272,4,"锅炉水位极高报警设定","mm")
        this.getPointMap["se_guolushuiweijidibaojingsheding"]=byteFieldObj.init(new settingField(),"se_guolushuiweijidibaojingsheding",276,4,"锅炉水位极低报警设定","mm")
        this.getPointMap["se_jishuibengshoudongpinlüsheding"]=byteFieldObj.init(new settingField(),"se_jishuibengshoudongpinlüsheding",280,4,"给水泵手动频率设定","Hz")
        this.getPointMap["se_chuyangqibushuimubiaosheding"]=byteFieldObj.init(new settingField(),"se_chuyangqibushuimubiaosheding",284,4,"除氧器补水目标设定","mm")
        this.getPointMap["se_chuyangqijigaobaojingsheding"]=byteFieldObj.init(new settingField(),"se_chuyangqijigaobaojingsheding",288,4,"除氧器极高报警设定","mm")
        this.getPointMap["se_chuyangqitingbengyeweisheding"]=byteFieldObj.init(new settingField(),"se_chuyangqitingbengyeweisheding",292,4,"除氧器停泵液位设定","mm")
        this.getPointMap["se_chuyangqiqibengyeweisheding"]=byteFieldObj.init(new settingField(),"se_chuyangqiqibengyeweisheding",296,4,"除氧器启泵液位设定","mm")
        this.getPointMap["se_chuyangqijidibaojingsheding"]=byteFieldObj.init(new settingField(),"se_chuyangqijidibaojingsheding",300,4,"除氧器极低报警设定","mm")
        this.getPointMap["se_chuyangqibushuishoudonggeisu"]=byteFieldObj.init(new settingField(),"se_chuyangqibushuishoudonggeisu",304,4,"除氧器补水手动给速","Hz")
        this.getPointMap["se_zhaoqiyalimubiaosheding"]=byteFieldObj.init(new settingField(),"se_zhaoqiyalimubiaosheding",308,4,"沼气压力目标设定","KPa")

        this.getPointMap["de_1_addshuibeng_auto"]=byteFieldObj.init(new deviceField(),"de_1_addshuibeng_auto", 368, 2, "1#补水泵", plc_common_valueMap.coms_atuo)
        this.getPointMap["de_1_addshuibeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_1_addshuibeng_start_stop", 370, 2, "1#补水泵", coms_start_stop)
        this.getPointMap["de_2_addshuibeng_auto"]=byteFieldObj.init(new deviceField(),"de_2_addshuibeng_auto", 372, 2, "2#补水泵", plc_common_valueMap.coms_atuo)
        this.getPointMap["de_2_addshuibeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_2_addshuibeng_start_stop", 374, 2, "2#补水泵", coms_start_stop)
        this.getPointMap["de_1_jienengbeng_auto"]=byteFieldObj.init(new deviceField(),"de_1_jienengbeng_auto", 376, 2, "1#节能泵", plc_common_valueMap.coms_atuo)
        this.getPointMap["de_1_jienengbeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_1_jienengbeng_start_stop", 378, 2, "1#节能泵", coms_start_stop)
        this.getPointMap["de_2_jienengbeng_auto"]=byteFieldObj.init(new deviceField(),"de_2_jienengbeng_auto", 380, 2, "2#节能泵", plc_common_valueMap.coms_atuo)
        this.getPointMap["de_2_jienengbeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_2_jienengbeng_start_stop", 382, 2, "2#节能泵", coms_start_stop)
        this.getPointMap["de_1_chuyangbeng_auto"]=byteFieldObj.init(new deviceField(),"de_1_chuyangbeng_auto", 384, 2, "1#除氧泵", plc_common_valueMap.coms_atuo)
        this.getPointMap["de_1_chuyangbeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_1_chuyangbeng_start_stop", 386, 2, "1#除氧泵", coms_start_stop)
        this.getPointMap["de_2_chuyangbeng_auto"]=byteFieldObj.init(new deviceField(),"de_2_chuyangbeng_auto", 388, 2, "2#除氧泵", plc_common_valueMap.coms_atuo)
        this.getPointMap["de_2_chuyangbeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_2_chuyangbeng_start_stop", 390, 2, "2#除氧泵", coms_start_stop)
        this.getPointMap["de_baojingshuchuzhishi"]=byteFieldObj.init(new deviceField(),"de_baojingshuchuzhishi", 392, 2, "报警输出指示", coms_open_close)
        this.getPointMap["de_1_zhaoqifengji_auto"]=byteFieldObj.init(new deviceField(),"de_1_zhaoqifengji_auto", 394, 2, "1#沼气风机", plc_common_valueMap.coms_atuo)
        this.getPointMap["de_1_zhaoqifengji_start_stop"]=byteFieldObj.init(new deviceField(),"de_1_zhaoqifengji_start_stop", 396, 2, "1#沼气风机", coms_start_stop)
        this.getPointMap["de_2_zhaoqifengji_auto"]=byteFieldObj.init(new deviceField(),"de_2_zhaoqifengji_auto", 398, 2, "2#沼气风机", plc_common_valueMap.coms_atuo)
        this.getPointMap["de_2_zhaoqifengji_start_stop"]=byteFieldObj.init(new deviceField(),"de_2_zhaoqifengji_start_stop", 400, 2, "2#沼气风机", coms_start_stop)

        this.getPointMap["ex_chaoyabaojingyalikaiguan"]=byteFieldObj.init(new exceptionField(), "ex_chaoyabaojingyalikaiguan", 448, 2, "超压报警（压力开关）", 0)
        this.getPointMap["ex_chaoyabaojingshedingzhi"]=byteFieldObj.init(new exceptionField(), "ex_chaoyabaojingshedingzhi", 448, 2, "超压报警（设定值）", 1)
        this.getPointMap["ex_paiyanchaowenbaojing"]=byteFieldObj.init(new exceptionField(), "ex_paiyanchaowenbaojing", 448, 2, "排烟超温报警", 2)
        this.getPointMap["ex_ruanshuixiangqueshuibaojing"]=byteFieldObj.init(new exceptionField(), "ex_ruanshuixiangqueshuibaojing", 448, 2, "软水箱缺水报警", 3)
        this.getPointMap["ex_shuidianjiluojicuobaojing"]=byteFieldObj.init(new exceptionField(), "ex_shuidianjiluojicuobaojing", 448, 2, "水电极逻辑错报警", 4)
        this.getPointMap["ex_yalibiansongqiguzhangbaojing"]=byteFieldObj.init(new exceptionField(), "ex_yalibiansongqiguzhangbaojing", 448, 2, "压力变送器故障报警",5)
        this.getPointMap["ex_shuiweibiansongqiguzhangbaojing"]=byteFieldObj.init(new exceptionField(), "ex_shuiweibiansongqiguzhangbaojing", 448, 2, "水位变送器故障报警", 6)
        this.getPointMap["ex_paiyanwenduchuanganqiguzhangbaojing"]=byteFieldObj.init(new exceptionField(), "ex_paiyanwenduchuanganqiguzhangbaojing", 448, 2, "排烟温度传感器故障报警", 7)
        this.getPointMap["ex_ranshaoqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_ranshaoqiguzhang", 448, 2, "燃烧器故障", 8)
        this.getPointMap["ex_ranqixielou"]=byteFieldObj.init(new exceptionField(), "ex_ranqixielou", 448, 2, "燃气泄漏", 9)
        this.getPointMap["ex_ranqiyaliyichang"]=byteFieldObj.init(new exceptionField(), "ex_ranqiyaliyichang", 448, 2, "燃气压力异常", 10)
        this.getPointMap["ex_shuiweiweidibaojingdianji"]=byteFieldObj.init(new exceptionField(), "ex_shuiweiweidibaojingdianji", 448, 2, "水位危低报警（电极）", 11)
        this.getPointMap["ex_shuiweijidibaojingdianji"]=byteFieldObj.init(new exceptionField(), "ex_shuiweijidibaojingdianji", 448, 2, "水位极低报警（电极）", 12)
        this.getPointMap["ex_shuiweijigaobaojingdianji"]=byteFieldObj.init(new exceptionField(), "ex_shuiweijigaobaojingdianji", 448, 2, "水位极高报警（电极）", 13)
        this.getPointMap["ex_shuiweijidibaojingshedingzhi"]=byteFieldObj.init(new exceptionField(), "ex_shuiweijidibaojingshedingzhi", 448, 2, "水位极低报警（设定值）", 14)
        this.getPointMap["ex_shuiweijigaobaojingshedingzhi"]=byteFieldObj.init(new exceptionField(), "ex_shuiweijigaobaojingshedingzhi", 448, 2, "水位极高报警（设定值）", 15)
        this.getPointMap["ex_jishuibeng1guzhang"]=byteFieldObj.init(new exceptionField(), "ex_jishuibeng1guzhang", 450, 2, "给水泵1故障", 0)
        this.getPointMap["ex_jishuibeng2guzhang"]=byteFieldObj.init(new exceptionField(), "ex_jishuibeng2guzhang", 450, 2, "给水泵2故障", 1)
        this.getPointMap["ex_zhaoqifengjibianpinqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_zhaoqifengjibianpinqiguzhang", 450, 2, "沼气风机变频器故障", 2)
        this.getPointMap["ex_chuyangqiqueshuibaojing"]=byteFieldObj.init(new exceptionField(), "ex_chuyangqiqueshuibaojing", 450, 2, "除氧器缺水报警", 8)
        this.getPointMap["ex_chuyangqigaoshuiweibaojing"]=byteFieldObj.init(new exceptionField(), "ex_chuyangqigaoshuiweibaojing", 450, 2, "除氧器高水位报警", 9)
        this.getPointMap["ex_jishuibengbianpinqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_jishuibengbianpinqiguzhang", 450, 2, "给水泵变频器故障", 10)
        this.getPointMap["ex_chuyangbengbianpinqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_chuyangbengbianpinqiguzhang", 450, 2, "除氧泵变频器故障", 11)
        this.getPointMap["ex_zhufengjibianpinqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_zhufengjibianpinqiguzhang", 450, 2, "主风机变频器故障", 12)
        this.getPointMap["ex_xunhuanfengjibianpinqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_xunhuanfengjibianpinqiguzhang", 450, 2, "循环风机变频器故障", 13)
        this.getPointMap["ex_jienengbeng1guzhang"]=byteFieldObj.init(new exceptionField(), "ex_jienengbeng1guzhang", 450, 2, "节能泵1故障", 14)
        this.getPointMap["ex_jienengbeng2guzhang"]=byteFieldObj.init(new exceptionField(), "ex_jienengbeng2guzhang", 450, 2, "节能泵2故障",15)

    }
}
