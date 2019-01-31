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

export default class devicePointMap_PLC_DianZhengQi extends map {
    constructor() {
        super();
        const byteFieldObj =new byteField();
        /*************start 计算属性（不显示）****************/
        this.getPointMap["_addshuibeng"]=byteFieldObj.init(new deviceField(),"_addshuibeng", 0, 0, "给水泵",false)
        /*************end 计算属性（不显示）****************/

        this.getPointMap["ba_yunxingxiaoshishu"]=byteFieldObj.init(new baseInfoField(),"ba_yunxingxiaoshishu",9,2,"运行小时数","时")
        this.getPointMap["ba_yunxingtianshu"]=byteFieldObj.init(new baseInfoField(),"ba_yunxingtianshu",11,2,"运行天数","天")
        this.getPointMap[deviceModel.key_point_system_status]=byteFieldObj.init(new baseInfoField(),deviceModel.key_point_system_status,13,2,"系统状态",plc_common_valueMap.coms_status)
        this.getPointMap[deviceModel.key_point_power]=byteFieldObj.init(new powerField(),deviceModel.key_point_power,power.Dian,0,"燃料",coms_power)
        this.getPointMap[deviceModel.key_point_media]=byteFieldObj.init(new mediaField(),deviceModel.key_point_media,media.ZhengQi,0,"介质",coms_media)
        this.getPointMap["ba_shuiweizhuangtai"]=byteFieldObj.init(new baseInfoField(),"ba_shuiweizhuangtai",19,2,"水位状态",coms_level)
        this.getPointMap["ba_ranshaoqizhuangtai"]=byteFieldObj.init(new baseInfoField(),"ba_ranshaoqizhuangtai",21,2,"燃烧器状态",plc_common_valueMap.coms_ranshaoqi_status)

        this.getPointMap["mo_zhengqiyali"]=byteFieldObj.init(new mockField(),"mo_zhengqiyali",35,4,"蒸汽压力","MPa")
        this.getPointMap["mo_zhengqiwendu"]=byteFieldObj.init(new mockField(),"mo_zhengqiwendu",39,4,"蒸汽温度","℃")
        this.getPointMap["mo_guolushuiwei"]=byteFieldObj.init(new mockField(),"mo_guolushuiwei",43,4,"锅炉水位","mm")
        this.getPointMap["mo_zhengqishunshiliuliang"]=byteFieldObj.init(new mockField(),"mo_zhengqishunshiliuliang",47,4,"蒸汽瞬时流量","T/H")
        this.getPointMap["mo_bushuishunshiliuliang"]=byteFieldObj.init(new mockField(),"mo_bushuishunshiliuliang",51,4,"补水瞬时流量","T/H")
        this.getPointMap["mo_zhengqileijiliuliang"]=byteFieldObj.init(new mockField(),"mo_zhengqileijiliuliang",55,4,"蒸汽累计流量","T")
        this.getPointMap["mo_bushuileijiliuliang"]=byteFieldObj.init(new mockField(),"mo_bushuileijiliuliang",59,4,"补水累计流量","T")
        this.getPointMap["mo_jinshuiwendu"]=byteFieldObj.init(new mockField(),"mo_jinshuiwendu",63,4,"进水温度","℃")
        this.getPointMap["mo_jinshuiyali"]=byteFieldObj.init(new mockField(),"mo_jinshuiyali",67,4,"进水压力","Mpa")
        this.getPointMap["mo_bushuibengpinlvfankui"]=byteFieldObj.init(new mockField(),"mo_bushuibengpinlvfankui",71,4,"补水泵频率反馈","Hz")
        this.getPointMap["mo_ruanshuixiangyewei"]=byteFieldObj.init(new mockField(),"mo_ruanshuixiangyewei",75,4,"软水箱液位","%")
        this.getPointMap["mo_qidongjiarezushu"]=byteFieldObj.init(new mockField(),"mo_qidongjiarezushu",79,4,"启动加热组数","组")
        this.getPointMap["mo_qidongjiarezushubaifenbi"]=byteFieldObj.init(new mockField(),"mo_qidongjiarezushubaifenbi",83,4,"启动加热组数百分比","%")

        this.getPointMap["se_chaoyabaojingsheding"]=byteFieldObj.init(new settingField(),"se_chaoyabaojingsheding",127,4,"超压报警设定","MPa")
        this.getPointMap["se_shiyongjiarezushusheding"]=byteFieldObj.init(new settingField(),"se_shiyongjiarezushusheding",131,4,"使用加热组数设定","组")
        this.getPointMap["se_touqiejiangeshijiansheding"]=byteFieldObj.init(new settingField(),"se_touqiejiangeshijiansheding",135,4,"投切间隔时间设定","S")
        this.getPointMap["se_kuaiqiejiangeshijiansheding"]=byteFieldObj.init(new settingField(),"se_kuaiqiejiangeshijiansheding",139,4,"快切间隔时间设定","S")
        this.getPointMap["se_tingluyalisheding"]=byteFieldObj.init(new settingField(),"se_tingluyalisheding",143,4,"停炉压力设定","Mpa")
        this.getPointMap["se_shiyongyalisheding"]=byteFieldObj.init(new settingField(),"se_shiyongyalisheding",147,4,"使用压力设定","Mpa")
        this.getPointMap["se_qiluyalisheding"]=byteFieldObj.init(new settingField(),"se_qiluyalisheding",151,4,"启炉压力设定","Mpa")
        this.getPointMap["se_guolushuiweijidibaojingsheding"]=byteFieldObj.init(new settingField(),"se_guolushuiweijidibaojingsheding",155,4,"锅炉水位极低报警设定","mm")
        this.getPointMap["se_geishuibengshoudongpinlvsheding"]=byteFieldObj.init(new settingField(),"se_geishuibengshoudongpinlvsheding",159,4,"给水泵手动频率设定","Hz")
        this.getPointMap["se_bushuimubiaosheding"]=byteFieldObj.init(new settingField(),"se_bushuimubiaosheding",163,4,"补水目标设定","mm")
        this.getPointMap["se_guolushuiweijigaobaojingsheding"]=byteFieldObj.init(new settingField(),"se_guolushuiweijigaobaojingsheding",167,4,"锅炉水位极高报警设定","mm")
        this.getPointMap["se_qibengyeweisheding"]=byteFieldObj.init(new settingField(),"se_qibengyeweisheding",171,4,"启泵液位设定","mm")
        this.getPointMap["se_tingbengyeweisheding"]=byteFieldObj.init(new settingField(),"se_tingbengyeweisheding ",175,4,"停泵液位设定","mm")

        this.getPointMap["de_1_addshuibeng_auto"]=byteFieldObj.init(new deviceField(),"de_1_addshuibeng_auto",199,2,"1#补水泵",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_1_addshuibeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_1_addshuibeng_start_stop",201,2,"1#补水泵",coms_start_stop)
        this.getPointMap["de_2_addshuibeng_auto"]=byteFieldObj.init(new deviceField(),"de_2_addshuibeng_auto",203,2,"2#补水泵",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_2_addshuibeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_2_addshuibeng_start_stop",205,2,"2#补水泵",coms_start_stop)
        this.getPointMap["de_baojingshuchuzhishi"]=byteFieldObj.init(new deviceField(),"de_baojingshuchuzhishi ",207,2,"报警输出指示",coms_open_close)

        this.getPointMap["ex_shuiweiweidibaojing（dianji）"]=byteFieldObj.init(new exceptionField(),"ex_shuiweiweidibaojing（dianji）",233,2,"水位危低报警（电极）",8)
        this.getPointMap["ex_shuiweijidibaojing（dianji）"]=byteFieldObj.init(new exceptionField(),"ex_shuiweijidibaojing（dianji）",233,2,"水位极低报警（电极）",9)
        this.getPointMap["ex_shuiweijigaobaojing（dianji）"]=byteFieldObj.init(new exceptionField(),"ex_shuiweijigaobaojing（dianji）",233,2,"水位极高报警（电极）",10)
        this.getPointMap["ex_shuiweijidibaojing（shedingzhi）"]=byteFieldObj.init(new exceptionField(),"ex_shuiweijidibaojing（shedingzhi）",233,2,"水位极低报警（设定值）",11)
        this.getPointMap["ex_shuiweijigaobaojing（shedingzhi）"]=byteFieldObj.init(new exceptionField(),"ex_shuiweijigaobaojing（shedingzhi）",233,2,"水位极高报警（设定值）",12)
        this.getPointMap["ex_chaoyabaojing（yalikaiguan）"]=byteFieldObj.init(new exceptionField(),"ex_chaoyabaojing（yalikaiguan）",233,2,"超压报警（压力开关）",13)
        this.getPointMap["ex_chaoyabaojing（shedingzhi）"]=byteFieldObj.init(new exceptionField(),"ex_chaoyabaojing（shedingzhi）",233,2,"超压报警（设定值）",14)
        this.getPointMap["ex_ruanshuixiangqueshuibaojing"]=byteFieldObj.init(new exceptionField(),"ex_ruanshuixiangqueshuibaojing",233,2,"软水箱缺水报警",15)

        this.getPointMap["ex_shuidianjiluojicuobaojing"]=byteFieldObj.init(new exceptionField(),"ex_shuidianjiluojicuobaojing",233,2,"水电极逻辑错报警",0)
        this.getPointMap["ex_yalibiansongqiguzhangbaojing"]=byteFieldObj.init(new exceptionField(),"ex_yalibiansongqiguzhangbaojing",233,2,"压力变送器故障报警",1)
        this.getPointMap["ex_shuiweibiansongqiguzhangbaojing"]=byteFieldObj.init(new exceptionField(),"ex_shuiweibiansongqiguzhangbaojing",233,2,"水位变送器故障报警",2)
        this.getPointMap["ex_geishuibengbianpinqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_geishuibengbianpinqiguzhang",233,2,"给水泵变频器故障",3)
        this.getPointMap["ex_loudianbaojing"]=byteFieldObj.init(new exceptionField(),"ex_loudianbaojing",233,2,"漏电报警",4)
        this.getPointMap["ex_qianyabaojing"]=byteFieldObj.init(new exceptionField(),"ex_qianyabaojing",233,2,"欠压报警",5)
    }
}
