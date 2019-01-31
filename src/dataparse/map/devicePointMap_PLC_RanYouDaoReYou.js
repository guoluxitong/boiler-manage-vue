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

export default class devicePointMap_PLC_RanYouDaoReYou extends map {
    constructor() {
        super();
        const byteFieldObj =new byteField();

        /*************start 计算属性（不显示）****************/
        this.getPointMap["_zhuyoubeng"]=byteFieldObj.init(new deviceField(),"_zhuyoubeng", 0, 0, "注油泵",false)
        this.getPointMap["_xunhuanbeng"]=byteFieldObj.init(new deviceField(),"_xunhuanbeng", 0, 0, "循环泵",false)
        /*************end 计算属性（不显示）****************/

        this.getPointMap["ba_yunxingxiaoshishu"]=byteFieldObj.init(new baseInfoField(),"ba_yunxingxiaoshishu",9,2,"运行小时数","时")
        this.getPointMap["ba_yunxingtianshu"]=byteFieldObj.init(new baseInfoField(),"ba_yunxingtianshu",11,2,"运行天数","天")
        this.getPointMap[deviceModel.key_point_system_status]=byteFieldObj.init(new baseInfoField(),deviceModel.key_point_system_status,13,2,"系统状态",plc_common_valueMap.coms_status)
        this.getPointMap[deviceModel.key_point_power]=byteFieldObj.init(new powerField(),deviceModel.key_point_power,power.YouQi,2,"燃料",coms_power)
        this.getPointMap[deviceModel.key_point_media]=byteFieldObj.init(new mediaField(),deviceModel.key_point_media,media.DaoReYou,2,"介质",coms_media)
        this.getPointMap["ba_shuiweizhuangtai"]=byteFieldObj.init(new baseInfoField(),"ba_shuiweizhuangtai",19,2,"水位状态",coms_level)
        this.getPointMap["ba_ranshaoqizhuangtai"]=byteFieldObj.init(new baseInfoField(),"ba_ranshaoqizhuangtai",21,2,"燃烧器状态",plc_common_valueMap.coms_ranshaoqi_status)

        this.getPointMap["mo_jinkouwendu"]=byteFieldObj.init(new mockField(),"mo_jinkouwendu", 35, 4, "进口温度", "℃")
        this.getPointMap["mo_chukouwendu"]=byteFieldObj.init(new mockField(),"mo_chukouwendu", 39, 4, "出口温度", "℃")
        this.getPointMap["mo_gaoweiyoucaowendu"]=byteFieldObj.init(new mockField(),"mo_gaoweiyoucaowendu", 43, 4, "高位油槽温度", "℃")
        this.getPointMap["mo_paiyanwendu"]=byteFieldObj.init(new mockField(),"mo_paiyanwendu", 47, 4, "排烟温度", "℃")
        this.getPointMap["mo_lutangwendu"]=byteFieldObj.init(new mockField(),"mo_lutangwendu", 51, 4, "炉膛温度", "℃")
        this.getPointMap["mo_lutangchukouwendu"]=byteFieldObj.init(new mockField(),"mo_lutangchukouwendu", 55, 4, "炉膛出口温度", "℃")
        this.getPointMap["mo_kongyuqianwendu"]=byteFieldObj.init(new mockField(),"mo_kongyuqianwendu", 59, 4, "空预前温度", "℃")
        this.getPointMap["mo_kongyuhouwendu"]=byteFieldObj.init(new mockField(),"mo_kongyuhouwendu", 63, 4, "空预后温度", "℃")
        this.getPointMap["mo_jinkouyali"]=byteFieldObj.init(new mockField(),"mo_jinkouyali", 67, 4, "进口压力", "MPa")
        this.getPointMap["mo_chukouyali"]=byteFieldObj.init(new mockField(),"mo_chukouyali", 71, 4, "出口压力", "MPa")
        this.getPointMap["mo_danqiyali"]=byteFieldObj.init(new mockField(),"mo_danqiyali", 75, 4, "氮气压力", "kPa")
        this.getPointMap["mo_lutangyali"]=byteFieldObj.init(new mockField(),"mo_lutangyali", 79, 4, "炉膛压力", "kPa")
        this.getPointMap["mo_gaoweiyoucaowei"]=byteFieldObj.init(new mockField(),"mo_gaoweiyoucaowei", 83, 4, "高位槽油位", "%")
        this.getPointMap["mo_chuyouguanyouwei"]=byteFieldObj.init(new mockField(),"mo_chuyouguanyouwei", 87, 4, "储油罐油位", "%")
        this.getPointMap["mo_liuliangceliang"]=byteFieldObj.init(new mockField(),"mo_liuliangceliang", 91, 4, "流量测量", "m³/h")
        this.getPointMap["mo_diandongtiaojiefashuchu"]=byteFieldObj.init(new mockField(),"mo_diandongtiaojiefashuchu", 95, 4, "电动调节阀输出", "%")
        this.getPointMap["mo_bianpinqipinlvshuchu"]=byteFieldObj.init(new mockField(),"mo_bianpinqipinlvshuchu", 99, 4, "变频器频率输出", "Hz")

        this.getPointMap["se_chukouwenduqiluwendusheding"]=byteFieldObj.init(new settingField(),"se_chukouwenduqiluwendusheding", 111, 4, "出口温度起炉温度设定", "℃")
        this.getPointMap["se_chukouwendubitiaowendusheding"]=byteFieldObj.init(new settingField(),"se_chukouwendubitiaowendusheding", 115, 4, "出口温度比调温度设定", "℃")
        this.getPointMap["se_chukouwendutingluwendusheding"]=byteFieldObj.init(new settingField(),"se_chukouwendutingluwendusheding", 119, 4, "出口温度停炉温度设定", "℃")
        this.getPointMap["se_chukouwenduchaogaobaojingwendusheding"]=byteFieldObj.init(new settingField(),"se_chukouwenduchaogaobaojingwendusheding", 123, 4, "出口温度超高报警温度设定", "℃")
        this.getPointMap["se_paiyanwenduchaogaobaojingsheding"]=byteFieldObj.init(new settingField(),"se_paiyanwenduchaogaobaojingsheding", 127, 4, "排烟温度超高报警设定", "℃")
        this.getPointMap["se_gaoweicaoyouweidisheding"]=byteFieldObj.init(new settingField(),"se_gaoweicaoyouweidisheding", 131, 4, "高位槽油位低设定", "%")
        this.getPointMap["se_gaoweicaoyouweigaosheding"]=byteFieldObj.init(new settingField(),"se_gaoweicaoyouweigaosheding", 135, 4, "高位槽油位高设定", "%")
        this.getPointMap["se_anquanyouwensheding"]=byteFieldObj.init(new settingField(),"se_anquanyouwensheding", 139, 4, "安全油温设定", "℃")
        this.getPointMap["se_fengjiqidongshijiansheding"]=byteFieldObj.init(new settingField(),"se_fengjiqidongshijiansheding", 143, 4, "风机启动时间设定", "S")
        this.getPointMap["se_fengjiqidongpinlvsheding"]=byteFieldObj.init(new settingField(),"se_fengjiqidongpinlvsheding", 147, 4, "风机启动频率设定", "Hz")
        this.getPointMap["se_fengjiyunxingpinlvsheding"]=byteFieldObj.init(new settingField(),"se_fengjiyunxingpinlvsheding", 151, 4, "风机运行频率设定", "Hz")
        this.getPointMap["se_jinchukouyachagaobaojingsheding"]=byteFieldObj.init(new settingField(),"se_jinchukouyachagaobaojingsheding", 155, 4, "进出口压差高报警设定", "MPa")
        this.getPointMap["se_jinchukouyachadibaojingsheding"]=byteFieldObj.init(new settingField(),"se_jinchukouyachadibaojingsheding", 159, 4, "进出口压差低报警设定", "MPa")
        this.getPointMap["se_liuliangxiaxianbaojing"]=byteFieldObj.init(new settingField(),"se_liuliangxiaxianbaojing", 163, 4, "流量下限报警", "m³/h")
        this.getPointMap["se_liuliangjidibaojing"]=byteFieldObj.init(new settingField(),"se_liuliangjidibaojing", 167, 4, "流量极低报警", "m³/h")
        this.getPointMap["se_danqiyalidisheding"]=byteFieldObj.init(new settingField(),"se_danqiyalidisheding", 171, 4, "氮气压力低设定", "kPa")
        this.getPointMap["se_danqiyaligaosheding"]=byteFieldObj.init(new settingField(),"se_danqiyaligaosheding", 175, 4, "氮气压力高设定", "kPa")
        this.getPointMap["se_diandongfashoudongkaidusheding"]=byteFieldObj.init(new settingField(),"se_diandongfashoudongkaidusheding", 179, 4, "电动阀手动开度设定", "%")

        this.getPointMap["de_1_xunhuanbeng_auto"]=byteFieldObj.init(new deviceField(),"de_1_xunhuanbeng_auto", 203, 2, "1#循环泵",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_1_xunhuanbeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_1_xunhuanbeng_start_stop", 205, 2, "1#循环泵",coms_start_stop)
        this.getPointMap["de_2_xunhuanbeng_auto"]=byteFieldObj.init(new deviceField(),"de_2_xunhuanbeng_auto", 207, 2, "2#循环泵",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_2_xunhuanbeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_2_xunhuanbeng_start_stop", 209, 2, "2#循环泵",coms_start_stop)
        this.getPointMap["de_3_xunhuanbeng_auto "]=byteFieldObj.init(new deviceField(),"de_3_xunhuanbeng_auto", 211, 2, "3#循环泵",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_3_xunhuanbeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_3_xunhuanbeng_start_stop", 213, 2, "3#循环泵",coms_start_stop)
        this.getPointMap["de_zhuyoubeng_auto"]=byteFieldObj.init(new deviceField(),"de_zhuyoubeng_auto", 215, 2, "注油泵",plc_common_valueMap.coms_atuo)
        this.getPointMap["de_zhuyoubeng_start_stop"]=byteFieldObj.init(new deviceField(),"de_zhuyoubeng_start_stop", 217, 2, "注油泵",coms_start_stop)

        this.getPointMap["ex_jinchukouyachachaogao"]=byteFieldObj.init(new exceptionField(),"ex_jinchukouyachachaogao", 229, 2, "进出口压差超高", 0)
        this.getPointMap["ex_jinchukouyachachaodi"]=byteFieldObj.init(new exceptionField(),"ex_jinchukouyachachaodi", 229, 2, "进出口压差超低",1)
        this.getPointMap["ex_paiyanwenduchaogao"]=byteFieldObj.init(new exceptionField(),"ex_paiyanwenduchaogao", 229, 2, "排烟温度超高", 2)
        this.getPointMap["ex_chukouwenduchaogao"]=byteFieldObj.init(new exceptionField(),"ex_chukouwenduchaogao", 229, 2, "出口温度超高", 3)
        this.getPointMap["ex_liuliangxiaxianbaojing"]=byteFieldObj.init(new exceptionField(),"ex_liuliangxiaxianbaojing", 229, 2, "流量下限报警", 4)
        this.getPointMap["ex_liuliangjidibaojing"]=byteFieldObj.init(new exceptionField(),"ex_liuliangjidibaojing", 229, 2, "流量极低报警", 5)
        this.getPointMap["ex_queyoubaojingfuqiu"]=byteFieldObj.init(new exceptionField(),"ex_queyoubaojingfuqiu", 229, 2, "缺油报警（浮球）", 6)
        this.getPointMap["ex_chuyouwenduchuanganqibaojing"]=byteFieldObj.init(new exceptionField(),"ex_chuyouwenduchuanganqibaojing", 229, 2, "出油温度传感器故障", 7)
        this.getPointMap["ex_ranshaoqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_ranshaoqiguzhang", 229, 2, "燃烧器故障", 8)
        this.getPointMap["ex_ranqixielou"]=byteFieldObj.init(new exceptionField(),"ex_ranqixielou", 229, 2, "燃气泄漏", 9)
        this.getPointMap["ex_ranqiyaliyichang"]=byteFieldObj.init(new exceptionField(),"ex_ranqiyaliyichang", 229, 2, "燃气压力异常", 10)
        this.getPointMap["ex_fengjiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_fengjiguzhang", 229, 2, "风机故障", 11)
        this.getPointMap["ex_1#xunhuanbengguzhang"]=byteFieldObj.init(new exceptionField(),"xunhuanbengguzhang", 229, 2, "1#循环泵故障", 12)
        this.getPointMap["ex_2#xunhuanbengguzhang"]=byteFieldObj.init(new exceptionField(),"xunhuanbengguzhang", 229, 2, "2#循环泵故障", 13)
        this.getPointMap["ex_3#xunhuanbengguzhang"]=byteFieldObj.init(new exceptionField(),"xunhuanbengguzhang", 229, 2, "3#循环泵故障", 14)
        this.getPointMap["ex_zhuyoubengguzhang"]=byteFieldObj.init(new exceptionField(),"ex_zhuyoubengguzhang", 229, 2, "注油泵故障", 15)
        this.getPointMap["ex_3#zhiguanchaowenbaojing"]=byteFieldObj.init(new exceptionField(),"ex_3#zhiguanchaowenbaojing", 231, 2, "3#支管超温报警", 0)
        this.getPointMap["ex_4#zhiguanchaowenbaojing"]=byteFieldObj.init(new exceptionField(),"ex_4#zhiguanchaowenbaojing", 231, 2, "4#支管超温报警", 1)
        this.getPointMap["ex_5#zhiguanchaowenbaojing"]=byteFieldObj.init(new exceptionField(),"ex_5#zhiguanchaowenbaojing", 231, 2, "5#支管超温报警", 2)
        this.getPointMap["ex_6#zhiguanchaowenbaojing"]=byteFieldObj.init(new exceptionField(),"ex_6#zhiguanchaowenbaojing", 231, 2, "6#支管超温报警", 3)
        this.getPointMap["ex_7#zhiguanchaowenbaojing"]=byteFieldObj.init(new exceptionField(),"ex_7#zhiguanchaowenbaojing", 231, 2, "7#支管超温报警", 4)
        this.getPointMap["ex_8#zhiguanchaowenbaojing"]=byteFieldObj.init(new exceptionField(),"ex_8#zhiguanchaowenbaojing", 231, 2, "8#支管超温报警", 5)
        this.getPointMap["ex_9#zhiguanchaowenbaojing"]=byteFieldObj.init(new exceptionField(),"ex_9#zhiguanchaowenbaojing", 231, 2, "9#支管超温报警", 6)
        this.getPointMap["ex_10#zhiguanchaowenbaojing"]=byteFieldObj.init(new exceptionField(),"ex_10#zhiguanchaowenbaojing", 231, 2, "10#支管超温报警", 7)
        this.getPointMap["ex_huiyouwenduchuanganqibaojing"]=byteFieldObj.init(new exceptionField(),"ex_huiyouwenduchuanganqibaojing", 231, 2, "回油温度传感器故障", 8)
        this.getPointMap["ex_paiyanwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_paiyanwenduchuanganqiguzhang", 231, 2, "排烟温度传感器故障", 9)
        this.getPointMap["ex_xunhuanbengliansuoguzhang"]=byteFieldObj.init(new exceptionField(),"ex_xunhuanbengliansuoguzhang", 231, 2, "循环泵连锁故障", 10)
        this.getPointMap["ex_wendushedingcuowuguzhang"]=byteFieldObj.init(new exceptionField(),"ex_wendushedingcuowuguzhang", 231, 2, "温度设定错误故障", 11)
        this.getPointMap["ex_gaoweiyoucaoyouweidibaojing"]=byteFieldObj.init(new exceptionField(),"ex_gaoweiyoucaoyouweidibaojing", 231, 2, "高位油槽油位低报警", 12)
        this.getPointMap["ex_gaoweiyoucaoyouweigaobaojing"]=byteFieldObj.init(new exceptionField(),"ex_gaoweiyoucaoyouweigaobaojing", 231, 2, "高位油槽油位高报警", 13)
        this.getPointMap["ex_1#zhiguanchaowenbaojing"]=byteFieldObj.init(new exceptionField(),"ex_1#zhiguanchaowenbaojing", 231, 2, "1#支管超温报警", 14)
        this.getPointMap["ex_2#zhiguanchaowenbaojing"]=byteFieldObj.init(new exceptionField(),"ex_2#zhiguanchaowenbaojing", 231, 2, "2#支管超温报警", 15)
        this.getPointMap["ex_plcguzhangbaojing"]=byteFieldObj.init(new exceptionField(),"ex_plcguzhangbaojing", 233, 2, "PLC故障报警", 8)

    }
}
