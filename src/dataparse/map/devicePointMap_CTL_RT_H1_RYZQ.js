import map from './map'
import {
    coms_media,
    coms_power,
    coms_open_close,
    ctl_njrt_common_valueMap
} from './commonValueMap'
import {deviceModel} from '../model/sdcSoftDevice'
import byteField from '../meta/byteField'
import baseInfoField from '../meta/ctl_njrt/baseInfoField'
import exceptionField from '../meta/ctl_njrt/exceptionField'
import mediaField from '../meta/ctl_njrt/h1/mediaField'
import mockField from '../meta/ctl_njrt/mockField'
import openCloseField from '../meta/ctl_njrt/openCloseField'
import powerField from '../meta/ctl_njrt/h1/powerField'
import deviceField from "../meta/ctl_njrt/deviceField";
import settingField from "../meta/ctl_njrt/settingField";

export default class devicePointMap_CTL_RT_H1_RYZQ extends map {
    constructor() {
        super();
        const byteFieldObj = new byteField();
        this.getPointMap["_addshuibeng"]=byteFieldObj.init(new deviceField(),"_addshuibeng", 0, 0, "给水泵", false)
        this.getPointMap["_jiarezu"]=byteFieldObj.init(new deviceField(),"_jiarezu", 0, 0, "燃烧器", false)



        this.getPointMap[deviceModel.key_point_system_status]=byteFieldObj.init(new baseInfoField(),deviceModel.key_point_system_status, 3, 2, "控制器状态", ctl_njrt_common_valueMap.coms_status)
       //运行天数与运行小时数需要进行运算
        this.getPointMap[deviceModel.key_point_run_days]=byteFieldObj.init(new baseInfoField(),deviceModel.key_point_run_days, 53, 2, "运行天数", "天")
        this.getPointMap[deviceModel.key_point_run_hours]=byteFieldObj.init(new baseInfoField(), deviceModel.key_point_run_hours, 53, 2, "运行小时数", "时")
        this.getPointMap[deviceModel.key_point_power]=byteFieldObj.init(new powerField(),deviceModel.key_point_power, 0, 0, "燃料类型", coms_power)

        this.getPointMap[deviceModel.key_point_media]=byteFieldObj.init(new mediaField(),deviceModel.key_point_media, 1, 0, "介质类型", coms_media)
        this.getPointMap[deviceModel.key_point_run_life]=byteFieldObj.init(new baseInfoField(),deviceModel.key_point_run_life, 53, 2, "累计燃烧时间","时")

        this.getPointMap["de_jishuibengzhubei"]=byteFieldObj.init(new deviceField(),"de_jishuibengzhubei", 49, 2, "给水泵",0,ctl_njrt_common_valueMap.coms_master)
        this.getPointMap["de_jishuibengshouzi"]=byteFieldObj.init(new deviceField(),"de_jishuibengshouzi", 49, 2, "给水泵",1,ctl_njrt_common_valueMap.coms_atuo)
        this.getPointMap["de_jishuibeng1"]=byteFieldObj.init(new openCloseField(),"de_jishuibeng1", 7, 2,  "给水泵主控制",3,coms_open_close)
        this.getPointMap["de_jishuibeng2"]=byteFieldObj.init(new openCloseField(),"de_jishuibeng2", 7, 2, "给水泵备控制", 4, coms_open_close)

        this.getPointMap["ex_jixiandishuiweibaojing"]=byteFieldObj.init(new exceptionField(),"ex_jixiandishuiweibaojing", 45, 2, "极限低水位报警",0)
        this.getPointMap["ex_zhengqiyalibiansongqiduanlu"]=byteFieldObj.init(new exceptionField(),"ex_zhengqiyalibiansongqiduanlu", 45, 2, "蒸汽压力变送器断路",1)
        this.getPointMap["ex_zhengqiyalibiansongqiduanlu1"]=byteFieldObj.init(new exceptionField(),"ex_zhengqiyalibiansongqiduanlu", 45, 2, "蒸汽压力变送器短路",2)
        this.getPointMap["ex_chaoyabaojing_biansongqi_"]=byteFieldObj.init(new exceptionField(),"ex_chaoyabaojing_biansongqi_", 45, 2, "超压报警（变送器）",3)
        this.getPointMap["ex_paiyanwendugaobaojing"]=byteFieldObj.init(new exceptionField(),"ex_paiyanwendugaobaojing", 45, 2, "排烟温度高报警",4)
        this.getPointMap["ex_chaoyabaojing_kongzhiqi_"]=byteFieldObj.init(new exceptionField(),"ex_chaoyabaojing_kongzhiqi_", 45, 2, "超压报警（控制器）",5)
        this.getPointMap["ex_ranshaoqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_ranshaoqiguzhang", 45, 2, "燃烧器故障",6)
        this.getPointMap["ex_ranqiyalidi"]=byteFieldObj.init(new exceptionField(),"ex_ranqiyalidi", 45, 2, "燃气压力低",7)
        this.getPointMap["ex_ranqixieloubaojing"]=byteFieldObj.init(new exceptionField(),"ex_ranqixieloubaojing", 45, 2, "燃气泄漏报警",8)
        this.getPointMap["ex_shuiweidianjiluojicuo"]=byteFieldObj.init(new exceptionField(),"ex_shuiweidianjiluojicuo", 45, 2, "水位电极逻辑错",9)
        this.getPointMap["ex_gaoshuiweibaojing"]=byteFieldObj.init(new exceptionField(),"ex_gaoshuiweibaojing", 45, 2, "高水位报警",10)
        this.getPointMap["ex_paiyanwenduchuanganqiduanlu"]=byteFieldObj.init(new exceptionField(),"ex_paiyanwenduchuanganqiduanlu", 45, 2, "排烟温度传感器断路",11)
        this.getPointMap["ex_dishuiweibaojing"]=byteFieldObj.init(new exceptionField(),"ex_dishuiweibaojing", 45, 2, "低水位报警",12)
        this.getPointMap["ex_bianpinqiguzhangbaojing"]=byteFieldObj.init(new exceptionField(),"ex_bianpinqiguzhangbaojing", 45, 2, "变频器故障报警",13)
        this.getPointMap["ex_shuiweichuanganqiduanlu"]=byteFieldObj.init(new exceptionField(),"ex_shuiweichuanganqiduanlu", 45, 2, "水位传感器断路",14)
        this.getPointMap["ex_shuiweichuanganqiduanlu1"]=byteFieldObj.init(new exceptionField(),"ex_shuiweichuanganqiduanlu", 45, 2, "水位传感器短路",15)
        this.getPointMap["ex_jixiandishuiweibaojing4-20mA"]=byteFieldObj.init(new exceptionField(),"ex_jixiandishuiweibaojing4-20mA", 47, 2, "极限低水位报警4-20mA",1)
        this.getPointMap["ex_gaoshuiweibaojing4-20mA"]=byteFieldObj.init(new exceptionField(),"ex_gaoshuiweibaojing4-20mA", 47, 2, "高水位报警4-20mA",2)

        this.getPointMap["oc_jixiandishuiweibaojingdianji"]=byteFieldObj.init(new openCloseField(),"oc_jixiandishuiweibaojingdianji", 5, 2, "极限低水位报警电极",0,coms_open_close)
        this.getPointMap["oc_dishuiweibaojingdianji_6dianjiteyou_"]=byteFieldObj.init(new openCloseField(),"oc_dishuiweibaojingdianji_6dianjiteyou_", 5, 2, "低水位报警电极（6 电极特有）",1,coms_open_close)
        this.getPointMap["oc_dishuiweidianji"]=byteFieldObj.init(new openCloseField(),"oc_dishuiweidianji", 5, 2, "低水位电极",2,coms_open_close)
        this.getPointMap["oc_zhongshuiweidianji_6dianjiteyou_"]=byteFieldObj.init(new openCloseField(),"oc_zhongshuiweidianji_6dianjiteyou_", 5, 2, "中水位电极（6 电极特有）",3,coms_open_close)
        this.getPointMap["oc_gaoshuiweidianji"]=byteFieldObj.init(new openCloseField(),"oc_gaoshuiweidianji", 5, 2, "高水位电极",4,coms_open_close)
        this.getPointMap["oc_gaoshuiweibaojingdianji"]=byteFieldObj.init(new openCloseField(),"oc_gaoshuiweibaojingdianji", 5, 2, "高水位报警电极",5,coms_open_close)
        this.getPointMap["oc_bianpinqiguzhangbaojing"]=byteFieldObj.init(new openCloseField(),"oc_bianpinqiguzhangbaojing", 5, 2, "变频器故障报警",6,coms_open_close)
        this.getPointMap["oc_fuhediaojiekongzhi_yalikongzhiqifangshi_"]=byteFieldObj.init(new openCloseField(),"oc_fuhediaojiekongzhi_yalikongzhiqifangshi_", 5, 2, "负荷调节控制（压力控制器方式）",7,coms_open_close)
        this.getPointMap["oc_qitingkongzhi_yalikongzhiqifangshi_"]=byteFieldObj.init(new openCloseField(),"oc_qitingkongzhi_yalikongzhiqifangshi_", 5, 2, "启停控制（压力控制器方式）",8,coms_open_close)
        this.getPointMap["oc_chaoyabaojingxinhao"]=byteFieldObj.init(new openCloseField(),"oc_chaoyabaojingxinhao", 5, 2, "超压报警信号",9,coms_open_close)
        this.getPointMap["oc_ranshaoqiguzhangxinhao"]=byteFieldObj.init(new openCloseField(),"oc_ranshaoqiguzhangxinhao", 5, 2, "燃烧器故障信号",10,coms_open_close)
        this.getPointMap["oc_ranqiyaliyichangbaojingxinhao"]=byteFieldObj.init(new openCloseField(),"oc_ranqiyaliyichangbaojingxinhao", 5, 2, "燃气压力异常报警信号",11,coms_open_close)
        this.getPointMap["oc_ranqixieloubaojingxinhao"]=byteFieldObj.init(new openCloseField(),"oc_ranqixieloubaojingxinhao", 5, 2, "燃气泄漏报警信号",12,coms_open_close)
        this.getPointMap["oc_ranshaoqikongzhi"]=byteFieldObj.init(new openCloseField(),"oc_ranshaoqikongzhi", 7, 2, "燃烧器启停控制",0,coms_open_close)
        this.getPointMap["oc_ranshaoqitiaojie"]=byteFieldObj.init(new openCloseField(), "oc_ranshaoqitiaojie", 0, 0, "燃烧器调节",ctl_njrt_common_valueMap.coms_ranshaoqi_status)
       //燃烧器调节需要将两个点位合成一个进行运算
        this.getPointMap["oc_ranshaoqifuhediaojie/zengdadiaojie"]=byteFieldObj.init(new openCloseField(),"oc_ranshaoqifuhediaojie/zengdadiaojie", 7, 2, "燃烧器负荷调节/增大调节",1,coms_open_close)
        this.getPointMap["oc_jianxiaodiaojie"]=byteFieldObj.init(new openCloseField(),"oc_jianxiaodiaojie", 7, 2, "减小调节",2,coms_open_close)
        this.getPointMap["oc_jishuibengkongzhi_zhu_"]=byteFieldObj.init(new openCloseField(),"oc_jishuibengkongzhi_zhu_", 7, 2, "给水泵控制（主）",3)
        this.getPointMap["oc_jishuibengkongzhi_bei_"]=byteFieldObj.init(new openCloseField(),"oc_jishuibengkongzhi_bei_", 7, 2, "给水泵控制（备）",4)
        this.getPointMap["oc_baojingzhuangtaishuchu"]=byteFieldObj.init(new openCloseField(),"oc_baojingzhuangtaishuchu", 7, 2, "报警状态输出",6)

        this.getPointMap["se_paiyanchaowen"]=byteFieldObj.init(new settingField(),"se_paiyanchaowen", 81, 2, "排烟超温","℃")
        this.getPointMap["se_yalishezhi"]=byteFieldObj.init(new settingField(),"se_yalishezhi", 83, 2, "压力设置")
        this.getPointMap["se_chaoyabaojing"]=byteFieldObj.init(new settingField(),"se_chaoyabaojing", 85, 2, "超压报警","Mpa",100)
        this.getPointMap["se_shangxianyali"]=byteFieldObj.init(new settingField(),"se_shangxianyali", 87, 2, "上限压力","Mpa",100)
        this.getPointMap["se_xiaxianyali"]=byteFieldObj.init(new settingField(),"se_xiaxianyali", 89, 2, "下线压力","Mpa",100)
        this.getPointMap["se_dianjishezhi"]=byteFieldObj.init(new settingField(),"se_dianjishezhi", 91, 2, "电极设置")
        this.getPointMap["se_ranshaoshezhi"]=byteFieldObj.init(new settingField(),"se_ranshaoshezhi", 93, 2, "燃烧设置")
        this.getPointMap["se_shuchushangxian"]=byteFieldObj.init(new settingField(),"se_shuchushangxian", 95, 2, "输出上限","%")
        this.getPointMap["se_shuchuxiaxian"]=byteFieldObj.init(new settingField(),"se_shuchuxiaxian", 97, 2, "输出下限","%")
        this.getPointMap["se_mubiaoyali"]=byteFieldObj.init(new settingField(),"se_mubiaoyali", 99, 2, "目标压力","Mpa",100)
        this.getPointMap["se_zhouqi"]=byteFieldObj.init(new settingField(),"se_zhouqi", 101, 2, "周期")
        this.getPointMap["se_Pshezhizhi"]=byteFieldObj.init(new settingField(),"se_Pshezhizhi", 103, 2, "P设置值")
        this.getPointMap["se_Ishezhizhi"]=byteFieldObj.init(new settingField(),"se_Ishezhizhi", 105, 2, "I设置值")
        this.getPointMap["se_Dshezhizhi"]=byteFieldObj.init(new settingField(),"se_Dshezhizhi", 107, 2, "D设置值")
        this.getPointMap["se_xingcheng"]=byteFieldObj.init(new settingField(),"se_xingcheng", 109, 2, "行程")
        this.getPointMap["se_zhuanhuoyali"]=byteFieldObj.init(new settingField(),"se_zhuanhuoyali", 111, 2, "转火压力","Mpa",100)
        this.getPointMap["se_zhouqi2"]=byteFieldObj.init(new settingField(),"se_zhouqi", 113, 2, "周期")
        this.getPointMap["se_Pshezhizhi2"]=byteFieldObj.init(new settingField(),"se_Pshezhizhi", 115, 2, "P设置值")
        this.getPointMap["se_Ishezhizhi2"]=byteFieldObj.init(new settingField(),"se_Ishezhizhi", 117, 2, "I设置值")
        this.getPointMap["se_Dshezhizhi2"]=byteFieldObj.init(new settingField(),"se_Dshezhizhi", 119, 2, "D设置值")
        this.getPointMap["se_queshuishuiwei"]=byteFieldObj.init(new settingField(),"se_queshuishuiwei", 121, 2, "缺水水位","%")
        this.getPointMap["se_dishuiwei"]=byteFieldObj.init(new settingField(),"se_dishuiwei", 123, 2, "低水位","%")
        this.getPointMap["se_gaoshuiwei"]=byteFieldObj.init(new settingField(),"se_gaoshuiwei", 125, 2, "高水位","%")
        this.getPointMap["se_gaobaojingshuiwei"]=byteFieldObj.init(new settingField(),"se_gaobaojingshuiwei", 127, 2, "高报警水位","%")
        this.getPointMap["se_mubiaoshuiwei"]=byteFieldObj.init(new settingField(),"se_mubiaoshuiwei", 129, 2, "目标水位","%")

        this.getPointMap["mo_paiyanwendu"]=byteFieldObj.init(new mockField(),"mo_paiyanwendu", 19, 2, "排烟温度", "℃")
        this.getPointMap["mo_zhengqiyali"]=byteFieldObj.init(new mockField(),"mo_zhengqiyali", 21, 2, "蒸汽压力","Mpa")
        this.getPointMap["mo_4-20mAxinhaolianxujishui"]=byteFieldObj.init(new mockField(),"mo_4-20mAxinhaolianxujishui", 23, 2, "4-20mA信号连续给水")
    }
}