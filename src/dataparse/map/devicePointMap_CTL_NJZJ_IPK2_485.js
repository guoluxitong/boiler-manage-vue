import map from './map'
import {
  coms_level,
  coms_media,
  coms_power,
  coms_open_close,
  ctl_njzj_common_valueMap
} from './commonValueMap'
import {deviceModel} from '../model/sdcSoftDevice'
import byteField from '../meta/byteField'
import baseInfoField from "../meta/ctl_njzj_485/baseInfoField"
import deviceField from "../meta/ctl_njzj_485/deviceField"
import exceptionField from "../meta/ctl_njzj_485/exceptionField"
import mockField from "../meta/ctl_njzj_485/mockField"
import runDayField from "../meta/ctl_njzj_485/runDayField"
import settingField from "../meta/ctl_njzj_485/settingField"
import startStopField from "../meta/ctl_njzj_485/startStopField"
import systemStatusField from '../meta/ctl_njzj_485/systemStatusField'

export default class devicePointMap_CTL_NJZJ_IPK2_485 extends map {
  constructor() {
    super();
    const Commands_Key_Parameters_Setting = "设置参数";
    const Commands_Key_System_Ctl = "系统控制";
    const byteFieldObj =new byteField();
      this.getPointMap[deviceModel.key_point_system_status]=byteFieldObj.init(new systemStatusField(),deviceModel.key_point_system_status,7,2,"系统状态",ctl_njzj_common_valueMap.coms_status,Commands_Key_System_Ctl,"0602",1,2)
      this.getPointMap[deviceModel.key_point_run_days]=byteFieldObj.init(new runDayField(),deviceModel.key_point_run_days,0,0, "运行天数", "天")
      this.getPointMap[deviceModel.key_point_run_hours]=byteFieldObj.init(new baseInfoField(),deviceModel.key_point_run_hours,0,0, "运行小时数", "时")
      this.getPointMap[deviceModel.key_point_power]=byteFieldObj.init(new baseInfoField(),deviceModel.key_point_power,3,2,"燃料类型",coms_power)
      this.getPointMap[deviceModel.key_point_media]=byteFieldObj.init(new baseInfoField(),deviceModel.key_point_media,5,2,"介质类型",coms_media)
      this.getPointMap["ba_guolushuiweizhuangtai"]=byteFieldObj.init(new baseInfoField(),"ba_guolushuiweizhuangtai", 25, 2, "锅炉液位状态", coms_level)
      this.getPointMap["ba_shuixiangshuiweizhuangtai"]=byteFieldObj.init(new baseInfoField(),"ba_shuixiangshuiweizhuangtai", 27, 2, "水箱液位状态", coms_level)

        this.getPointMap["ba_guoluyalizhuangtai"]=byteFieldObj.init(new baseInfoField(),"ba_guoluyalizhuangtai", 29, 2, "锅炉压力状态", ctl_njzj_common_valueMap.coms_yalistatus)

        this.getPointMap["ba_leijijiaretianshu"]=byteFieldObj.init(new baseInfoField(),"ba_leijijiaretianshu", 51, 2, "累计加热", "天")

        this.getPointMap["ba_leijijiarexiaoshi"]=byteFieldObj.init(new baseInfoField(),"ba_leijijiarexiaoshi", 53, 2, "累计加热", "时")

        this.getPointMap["ba_dahuoshijian"]=byteFieldObj.init(new baseInfoField(),"ba_dahuoshijian", 55, 2, "大火工作时间", "时")

        this.getPointMap["ba_xiaohuoshijian"]=byteFieldObj.init(new baseInfoField(),"ba_xiaohuoshijian", 57, 2, "小火工作时间", "时")

        this.getPointMap["ba_fangdongkaiguan"]=byteFieldObj.init(new baseInfoField(),"ba_fangdongkaiguan", 61, 2, "防冻开关",coms_open_close)

        this.getPointMap["ex_paiyanwendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_paiyanwendugaobaojing", 88, 2, "排烟温度高报警")

        this.getPointMap["ex_lushuiwendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_lushuiwendugaobaojing", 90, 2, "炉水温度高报警")

        this.getPointMap["ex_chukouwendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_chukouwendugaobaojing", 92, 2, "出口温度高报警")

        this.getPointMap["ex_chaoyabaojing"]=byteFieldObj.init(new exceptionField(), "ex_chaoyabaojing", 94, 2, "超压报警")

        this.getPointMap["ex_jixiandishuiweibaojing"]=byteFieldObj.init(new exceptionField(), "ex_jixiandishuiweibaojing", 96, 2, "极限低水位报警")

        this.getPointMap["ex_dishuiweibaojing"]=byteFieldObj.init(new exceptionField(), "ex_dishuiweibaojing", 98, 2, "低水位报警")

        this.getPointMap["ex_gaoshuiweibaojing"]=byteFieldObj.init(new exceptionField(), "ex_gaoshuiweibaojing", 100, 2, "高水位报警")

        this.getPointMap["ex_shuiweixinhaoluojicuobaojing"]=byteFieldObj.init(new exceptionField(), "ex_shuiweixinhaoluojicuobaojing", 102, 2, "水位信号逻辑错报警")

        this.getPointMap["ex_lubiwendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_lubiwendugaobaojing", 104, 2, "炉壁温度高报警")

        this.getPointMap["ex_fuyazhengqiwendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_fuyazhengqiwendugaobaojing", 106, 2, "负压蒸汽温度高报警")

        this.getPointMap["ex_ranshaoqiguzhangbaojing"]=byteFieldObj.init(new exceptionField(), "ex_ranshaoqiguzhangbaojing", 108, 2, "燃烧器故障报警")

        this.getPointMap["ex_ranqixieloubaojing"]=byteFieldObj.init(new exceptionField(), "ex_ranqixieloubaojing", 110, 2, "燃气泄漏报警")

        this.getPointMap["ex_ranqiyalidibaojing"]=byteFieldObj.init(new exceptionField(), "ex_ranqiyalidibaojing", 112, 2, "燃气压力低报警")

        this.getPointMap["ex_ranqiyaliyichangbaojing"]=byteFieldObj.init(new exceptionField(), "ex_ranqiyaliyichangbaojing", 114, 2, "燃气压力异常报警")

        this.getPointMap["ex_ranqiyaligaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_ranqiyaligaobaojing", 116, 2, "燃气压力高报警")

        this.getPointMap["ex_jishuibianpinqiguzhangbaojing"]=byteFieldObj.init(new exceptionField(), "ex_jishuibianpinqiguzhangbaojing", 118, 2, "给水变频器故障报警")

        this.getPointMap["ex_xunhuanbianpinqiguzhangbaojing"]=byteFieldObj.init(new exceptionField(), "ex_xunhuanbianpinqiguzhangbaojing", 120, 2, "循环变频器故障报警")

        this.getPointMap["ex_yinfengbianpinqiguzhangbaojing"]=byteFieldObj.init(new exceptionField(), "ex_yinfengbianpinqiguzhangbaojing", 122, 2, "引风变频器故障报警")

        this.getPointMap["ex_gufengbianpinqiguzhangbaojing"]=byteFieldObj.init(new exceptionField(), "ex_gufengbianpinqiguzhangbaojing", 124, 2, "鼓风变频器故障报警")

        this.getPointMap["ex_ecigufengbianpinqiguzhangbaojing"]=byteFieldObj.init(new exceptionField(), "ex_ecigufengbianpinqiguzhangbaojing", 126, 2, "二次鼓风变频器故障报警")

        this.getPointMap["ex_lupaibianpinqiguzhangbaojing"]=byteFieldObj.init(new exceptionField(), "ex_lupaibianpinqiguzhangbaojing", 128, 2, "炉排变频器故障报警")

        this.getPointMap["ex_jishuibengguzhangbaojing"]=byteFieldObj.init(new exceptionField(), "ex_jishuibengguzhangbaojing", 130, 2, "给水泵故障报警")

        this.getPointMap["ex_xunhuanbengguzhangbaojing"]=byteFieldObj.init(new exceptionField(), "ex_xunhuanbengguzhangbaojing", 132, 2, "循环泵故障报警")

        this.getPointMap["ex_chaodiyabaojing"]=byteFieldObj.init(new exceptionField(), "ex_chaodiyabaojing", 134, 2, "超低压报警")

        this.getPointMap["ex_qiandianyabaojing"]=byteFieldObj.init(new exceptionField(), "ex_qiandianyabaojing", 136, 2, "欠电压报警")

        this.getPointMap["ex_guodianyabaojing"]=byteFieldObj.init(new exceptionField(), "ex_guodianyabaojing", 138, 2, "过电压报警")

        this.getPointMap["ex_quexiangbaojing"]=byteFieldObj.init(new exceptionField(), "ex_quexiangbaojing", 140, 2, "缺相报警")

        this.getPointMap["ex_loudianbaojing"]=byteFieldObj.init(new exceptionField(), "ex_loudianbaojing", 142, 2, "漏电报警")

        this.getPointMap["ex_biansongqiguoyabaohu"]=byteFieldObj.init(new exceptionField(), "ex_biansongqiguoyabaohu", 144, 2, "变送器过压保护")

        this.getPointMap["ex_guanjiancanshuyichang"]=byteFieldObj.init(new exceptionField(), "ex_guanjiancanshuyichang", 146, 2, "关键参数异常")

        this.getPointMap["ex_shedingcanshuyichang"]=byteFieldObj.init(new exceptionField(), "ex_shedingcanshuyichang", 148, 2, "设定参数异常")

        this.getPointMap["ex_shizhongguzhang"]=byteFieldObj.init(new exceptionField(), "ex_shizhongguzhang", 150, 2, "时钟故障")

        this.getPointMap["ex_cunchuqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_cunchuqiguzhang", 152, 2, "存储器故障")

        this.getPointMap["ex_waibuliansuobaojing"]=byteFieldObj.init(new exceptionField(), "ex_waibuliansuobaojing", 154, 2, "外部连锁报警")

        this.getPointMap["ex_queyoubaojing"]=byteFieldObj.init(new exceptionField(), "ex_queyoubaojing", 156, 2, "缺油报警")

        this.getPointMap["ex_diyouweibaojing"]=byteFieldObj.init(new exceptionField(), "ex_diyouweibaojing", 158, 2, "低油位报警")

        this.getPointMap["ex_bentipaiyanwendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_bentipaiyanwendugaobaojing", 160, 2, "本体排烟温度高报警")

        this.getPointMap["ex_bianpinqiguzhangbaojing"]=byteFieldObj.init(new exceptionField(), "ex_bianpinqiguzhangbaojing", 162, 2, "变频器故障报警")

        this.getPointMap["ex_meishuiwendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_meishuiwendugaobaojing", 164, 2, "媒水温度高报警")

        this.getPointMap["ex_1#guoluguzhang"]=byteFieldObj.init(new exceptionField(), "ex_1#guoluguzhang", 166, 2, "1#锅炉故障")

        this.getPointMap["ex_2#guoluguzhang"]=byteFieldObj.init(new exceptionField(), "ex_2#guoluguzhang", 168, 2, "2#锅炉故障")

        this.getPointMap["ex_3#guoluguzhang"]=byteFieldObj.init(new exceptionField(), "ex_3#guoluguzhang", 170, 2, "3#锅炉故障")

        this.getPointMap["ex_4#guoluguzhang"]=byteFieldObj.init(new exceptionField(), "ex_4#guoluguzhang", 172, 2, "4#锅炉故障")

        this.getPointMap["ex_5#guoluguzhang"]=byteFieldObj.init(new exceptionField(), "ex_5#guoluguzhang", 174, 2, "5#锅炉故障")

        this.getPointMap["ex_6#guoluguzhang"]=byteFieldObj.init(new exceptionField(), "ex_6#guoluguzhang", 176, 2, "6#锅炉故障")

        this.getPointMap["ex_7#guoluguzhang"]=byteFieldObj.init(new exceptionField(), "ex_7#guoluguzhang", 178, 2, "7#锅炉故障")

        this.getPointMap["ex_8#guoluguzhang"]=byteFieldObj.init(new exceptionField(), "ex_8#guoluguzhang", 180, 2, "8#锅炉故障")

        this.getPointMap["ex_bushuibianpinqiguzhangbaojing"]=byteFieldObj.init(new exceptionField(), "ex_bushuibianpinqiguzhangbaojing", 182, 2, "补水变频器故障报警")

        this.getPointMap["ex_diliuliangbaojing"]=byteFieldObj.init(new exceptionField(), "ex_diliuliangbaojing", 184, 2, "低流量报警")

        this.getPointMap["ex_jinkouwendudibaojing"]=byteFieldObj.init(new exceptionField(), "ex_jinkouwendudibaojing", 186, 2, "进口温度低报警")

        this.getPointMap["ex_xunhuanbengbianpinqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_xunhuanbengbianpinqiguzhang", 188, 2, "循环泵变频器故障")

        this.getPointMap["ex_ecixunhuanbengbianpinqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_ecixunhuanbengbianpinqiguzhang", 190, 2, "二次循环泵变频器故障")

        this.getPointMap["ex_reshuibengbianpinqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_reshuibengbianpinqiguzhang", 192, 2, "热水泵变频器故障")

        this.getPointMap["ex_buyoubengbianpinqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_buyoubengbianpinqiguzhang", 194, 2, "补油泵变频器故障")

        this.getPointMap["ex_ecigufengbianpinqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_ecigufengbianpinqiguzhang", 196, 2, "二次鼓风变频器故障")

        this.getPointMap["ex_songliaojibianpinqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_songliaojibianpinqiguzhang", 198, 2, "送料机变频器故障")

        this.getPointMap["ex_zhenkongbengbianpinqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_zhenkongbengbianpinqiguzhang", 200, 2, "真空泵变频器故障")

        this.getPointMap["ex_lengningbengbianpinqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_lengningbengbianpinqiguzhang", 202, 2, "冷凝泵变频器故障")

        this.getPointMap["ex_bushuibengguzhang"]=byteFieldObj.init(new exceptionField(), "ex_bushuibengguzhang", 204, 2, "补水泵故障")

        this.getPointMap["ex_buyoubengguzhang"]=byteFieldObj.init(new exceptionField(), "ex_buyoubengguzhang", 206, 2, "补油泵故障")

        this.getPointMap["ex_lengningbengguzhang"]=byteFieldObj.init(new exceptionField(), "ex_lengningbengguzhang", 208, 2, "冷凝泵故障")

        this.getPointMap["ex_reshuibengguzhang"]=byteFieldObj.init(new exceptionField(), "ex_reshuibengguzhang", 210, 2, "热水泵故障")

        this.getPointMap["ex_zhenkongbengguzhang"]=byteFieldObj.init(new exceptionField(), "ex_zhenkongbengguzhang", 212, 2, "真空泵故障")

        this.getPointMap["ex_ecixunhuanbengguzhang"]=byteFieldObj.init(new exceptionField(), "ex_ecixunhuanbengguzhang", 214, 2, "二次循环泵故障")

        this.getPointMap["ex_huilu1xunhuanbengguzhang"]=byteFieldObj.init(new exceptionField(), "ex_huilu1xunhuanbengguzhang", 216, 2, "回路1循环泵故障")

        this.getPointMap["ex_huilu2xunhuanbengguzhang"]=byteFieldObj.init(new exceptionField(), "ex_huilu2xunhuanbengguzhang", 218, 2, "回路2循环泵故障")

        this.getPointMap["ex_huilu3xunhuanbengguzhang"]=byteFieldObj.init(new exceptionField(), "ex_huilu3xunhuanbengguzhang", 220, 2, "回路3循环泵故障")

        this.getPointMap["ex_huilu4xunhuanbengguzhang"]=byteFieldObj.init(new exceptionField(), "ex_huilu4xunhuanbengguzhang", 222, 2, "回路4循环泵故障")

        this.getPointMap["ex_huilu5xunhuanbengguzhang"]=byteFieldObj.init(new exceptionField(), "ex_huilu5xunhuanbengguzhang", 224, 2, "回路5循环泵故障")

        this.getPointMap["ex_huilu1wendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_huilu1wendugaobaojing", 226, 2, "回路1温度高报警")

        this.getPointMap["ex_huilu2wendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_huilu2wendugaobaojing", 228, 2, "回路2温度高报警")

        this.getPointMap["ex_huilu3wendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_huilu3wendugaobaojing", 230, 2, "回路3温度高报警")

        this.getPointMap["ex_huilu4wendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_huilu4wendugaobaojing", 232, 2, "回路4温度高报警")

        this.getPointMap["ex_huilu5wendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_huilu5wendugaobaojing", 234, 2, "回路5温度高报警")

        this.getPointMap["ex_panguan1wendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_panguan1wendugaobaojing", 236, 2, "盘管1温度高报警")

        this.getPointMap["ex_panguan2wendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_panguan2wendugaobaojing", 238, 2, "盘管2温度高报警")

        this.getPointMap["ex_panguan3wendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_panguan3wendugaobaojing", 240, 2, "盘管3温度高报警")

        this.getPointMap["ex_panguan4wendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_panguan4wendugaobaojing", 242, 2, "盘管4温度高报警")

        this.getPointMap["ex_panguan5wendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_panguan5wendugaobaojing", 244, 2, "盘管5温度高报警")

        this.getPointMap["ex_panguan6wendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_panguan6wendugaobaojing", 246, 2, "盘管6温度高报警")

        this.getPointMap["ex_panguan7wendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_panguan7wendugaobaojing", 248, 2, "盘管7温度高报警")

        this.getPointMap["ex_panguan8wendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_panguan8wendugaobaojing", 250, 2, "盘管8温度高报警")

        this.getPointMap["ex_panguan9wendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_panguan9wendugaobaojing", 252, 2, "盘管9温度高报警")

        this.getPointMap["ex_panguan10wendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_panguan10wendugaobaojing", 254, 2, "盘管10温度高报警")

        this.getPointMap["ex_shanzhengguanchaoyabaojing"]=byteFieldObj.init(new exceptionField(), "ex_shanzhengguanchaoyabaojing", 256, 2, "闪蒸罐超压报警")

        this.getPointMap["ex_lengningguanchaoyabaojing"]=byteFieldObj.init(new exceptionField(), "ex_lengningguanchaoyabaojing", 258, 2, "冷凝罐超压报警")

        this.getPointMap["ex_pengzhangguanchaoyabaojing"]=byteFieldObj.init(new exceptionField(), "ex_pengzhangguanchaoyabaojing", 260, 2, "膨胀罐超压报警")

        this.getPointMap["ex_shanzhengguanyeweigaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_shanzhengguanyeweigaobaojing", 262, 2, "闪蒸罐液位高报警")

        this.getPointMap["ex_shanzhengguanyeweidibaojing"]=byteFieldObj.init(new exceptionField(), "ex_shanzhengguanyeweidibaojing", 264, 2, "闪蒸罐液位低报警")

        this.getPointMap["ex_lengningguanyeweigaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_lengningguanyeweigaobaojing", 266, 2, "冷凝罐液位高报警")

        this.getPointMap["ex_lengningguanyeweidibaojing"]=byteFieldObj.init(new exceptionField(), "ex_lengningguanyeweidibaojing", 268, 2, "冷凝罐液位低报警")

        this.getPointMap["ex_pengzhangguanyeweigaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_pengzhangguanyeweigaobaojing", 270, 2, "膨胀罐液位高报警")

        this.getPointMap["ex_pengzhangguanyeweidibaojing"]=byteFieldObj.init(new exceptionField(), "ex_pengzhangguanyeweidibaojing", 272, 2, "膨胀罐液位低报警")

        this.getPointMap["ex_jinchukouyachadibaojing"]=byteFieldObj.init(new exceptionField(), "ex_jinchukouyachadibaojing", 274, 2, "进出口压差低报警")

        this.getPointMap["ex_jinchukouyachagaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_jinchukouyachagaobaojing", 276, 2, "进出口压差高报警")

        this.getPointMap["ex_zhenkongyalibuzubaojing,"]=byteFieldObj.init(new exceptionField(), "ex_zhenkongyalibuzubaojing,", 278, 2, "真空压力不足报警,")

        this.getPointMap["ex_jinchukouwenchadibaojing"]=byteFieldObj.init(new exceptionField(), "ex_jinchukouwenchadibaojing", 280, 2, "进出口温差低报警")

        this.getPointMap["ex_jinchukouwenchagaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_jinchukouwenchagaobaojing", 282, 2, "进出口温差高报警")

        this.getPointMap["ex_chukouyaligaobaojing_guoluhuohuilu_"]=byteFieldObj.init(new exceptionField(), "ex_chukouyaligaobaojing_guoluhuohuilu_", 284, 2, "出口压力高报警（锅炉或回路）")

        this.getPointMap["ex_chukouyalidibaojing_guoluhuohuilu_"]=byteFieldObj.init(new exceptionField(), "ex_chukouyalidibaojing_guoluhuohuilu_", 286, 2, "出口压力低报警（锅炉或回路）")

        this.getPointMap["ex_jinkouyaligaobaojing_guoluhuohuilu_"]=byteFieldObj.init(new exceptionField(), "ex_jinkouyaligaobaojing_guoluhuohuilu_", 288, 2, "进口压力高报警（锅炉或回路）")

        this.getPointMap["ex_jinkouyalidibaojing_guoluhuohuilu_"]=byteFieldObj.init(new exceptionField(), "ex_jinkouyalidibaojing_guoluhuohuilu_", 290, 2, "进口压力低报警（锅炉或回路）")

        this.getPointMap["ex_yinfengjiguzhangbaojing_dongzuofankuiyichang_"]=byteFieldObj.init(new exceptionField(), "ex_yinfengjiguzhangbaojing_dongzuofankuiyichang_", 292, 2, "引风机故障报警（动作反馈异常）")

        this.getPointMap["ex_cainuanchukouwendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_cainuanchukouwendugaobaojing", 294, 2, "采暖出口温度高报警")

        this.getPointMap["ex_reshuichukouwendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_reshuichukouwendugaobaojing", 296, 2, "热水出口温度高报警")

        this.getPointMap["ex_jinkouwendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_jinkouwendugaobaojing", 298, 2, "进口温度高报警")

        this.getPointMap["ex_pengzhangguanwendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_pengzhangguanwendugaobaojing", 300, 2, "膨胀罐温度高报警")

        this.getPointMap["ex_guodianliubaojing"]=byteFieldObj.init(new exceptionField(), "ex_guodianliubaojing", 302, 2, "过电流报警")

        this.getPointMap["ex_jishuiyaligaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_jishuiyaligaobaojing", 304, 2, "给水压力高报警")

        this.getPointMap["ex_jienengqichukouyanwengaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_jienengqichukouyanwengaobaojing", 306, 2, "节能器出口烟温高报警")

        this.getPointMap["ex_lengningqichukouyanwengaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_lengningqichukouyanwengaobaojing", 308, 2, "冷凝器出口烟温高报警")

        this.getPointMap["ex_chushuiwendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_chushuiwendugaobaojing", 310, 2, "出水温度高报警")

        this.getPointMap["ex_gaowenbaohuwendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_gaowenbaohuwendugaobaojing", 312, 2, "高温保护温度高报警")

        this.getPointMap["ex_youwengaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_youwengaobaojing", 314, 2, "油温高报警")

        this.getPointMap["ex_wenchagaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_wenchagaobaojing", 316, 2, "温差高报警")

        this.getPointMap["ex_shuibengguozaibaojing"]=byteFieldObj.init(new exceptionField(), "ex_shuibengguozaibaojing", 318, 2, "水泵过载报警")

        this.getPointMap["ex_jiarezuguozaibaojing"]=byteFieldObj.init(new exceptionField(), "ex_jiarezuguozaibaojing", 320, 2, "加热组过载报警")

        this.getPointMap["ex_churexunhuanbengguzhangbaojing"]=byteFieldObj.init(new exceptionField(), "ex_churexunhuanbengguzhangbaojing", 322, 2, "储热循环泵故障报警")

        this.getPointMap["ex_yandaodiefaguzhang"]=byteFieldObj.init(new exceptionField(), "ex_yandaodiefaguzhang", 324, 2, "烟道蝶阀故障")

        this.getPointMap["ex_nengliangshezhiwendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_nengliangshezhiwendugaobaojing", 326, 2, "能量设置温度高报警")
        //
        this.getPointMap["ex_zhengqiwendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_zhengqiwendugaobaojing", 333, 2, "蒸汽温度高报警")

        this.getPointMap["ex_shuixiangwendugaobaojing"]=byteFieldObj.init(new exceptionField(), "ex_shuixiangwendugaobaojing", 335, 2, "水箱温度高报警")
        //
        this.getPointMap["ex_bentipaiyanwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_bentipaiyanwenduchuanganqiguzhang", 578, 2, "本体排烟温度传感器故障")

        this.getPointMap["ex_paiyanwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_paiyanwenduchuanganqiguzhang", 580, 2, "排烟温度传感器故障")

        this.getPointMap["ex_lushuiwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_lushuiwenduchuanganqiguzhang", 582, 2, "炉水温度传感器故障")

        this.getPointMap["ex_chukouwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_chukouwenduchuanganqiguzhang", 584, 2, "出口温度传感器故障")

        this.getPointMap["ex_jinkouwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_jinkouwenduchuanganqiguzhang", 586, 2, "进口温度传感器故障")

        this.getPointMap["ex_jienengqichukouwenduchuanganqiguzhang(shui_"]=byteFieldObj.init(new exceptionField(), "ex_jienengqichukouwenduchuanganqiguzhang(shui_", 588, 2, "节能器出口温度传感器故障(水）")

        this.getPointMap["ex_jienengqijinkouwenduchuanganqiguzhang(shui_"]=byteFieldObj.init(new exceptionField(), "ex_jienengqijinkouwenduchuanganqiguzhang(shui_", 590, 2, "节能器进口温度传感器故障(水）")

        this.getPointMap["ex_jishuiwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_jishuiwenduchuanganqiguzhang", 592, 2, "给水温度传感器故障")

        this.getPointMap["ex_lutangwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_lutangwenduchuanganqiguzhang", 594, 2, "炉膛温度传感器故障")

        this.getPointMap["ex_lutangchukouwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_lutangchukouwenduchuanganqiguzhang", 596, 2, "炉膛出口温度传感器故障")

        this.getPointMap["ex_lubiwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_lubiwenduchuanganqiguzhang", 598, 2, "炉壁温度传感器故障")

        this.getPointMap["ex_ranliaowenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_ranliaowenduchuanganqiguzhang", 600, 2, "燃料温度传感器故障")

        this.getPointMap["ex_refengwenduchuanganqiguzhang_kongyuqichukou_"]=byteFieldObj.init(new exceptionField(), "ex_refengwenduchuanganqiguzhang_kongyuqichukou_", 602, 2, "热风温度传感器故障（空预器出口）")

        this.getPointMap["ex_fuyazhengqiwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_fuyazhengqiwenduchuanganqiguzhang", 604, 2, "负压蒸汽温度传感器故障")

        this.getPointMap["ex_guorezhengqiwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_guorezhengqiwenduchuanganqiguzhang", 606, 2, "过热蒸汽温度传感器故障")

        this.getPointMap["ex_huilu1wenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_huilu1wenduchuanganqiguzhang", 608, 2, "回路1温度传感器故障")

        this.getPointMap["ex_huilu2wenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_huilu2wenduchuanganqiguzhang", 610, 2, "回路2温度传感器故障")

        this.getPointMap["ex_huilu3wenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_huilu3wenduchuanganqiguzhang", 612, 2, "回路3温度传感器故障")

        this.getPointMap["ex_huilu4wenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_huilu4wenduchuanganqiguzhang", 614, 2, "回路4温度传感器故障")

        this.getPointMap["ex_huilu5wenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_huilu5wenduchuanganqiguzhang", 616, 2, "回路5温度传感器故障")

        this.getPointMap["ex_shiwaiwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_shiwaiwenduchuanganqiguzhang", 618, 2, "室外温度传感器故障")

        this.getPointMap["ex_zhengqiyalichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_zhengqiyalichuanganqiguzhang", 620, 2, "蒸汽压力传感器故障")

        this.getPointMap["ex_jishuiyalichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_jishuiyalichuanganqiguzhang", 622, 2, "给水压力传感器故障")

        this.getPointMap["ex_chukouyalichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_chukouyalichuanganqiguzhang", 624, 2, "出口压力传感器故障")

        this.getPointMap["ex_jinkouyalichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_jinkouyalichuanganqiguzhang", 626, 2, "进口压力传感器故障")

        this.getPointMap["ex_lutangyalichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_lutangyalichuanganqiguzhang", 628, 2, "炉膛压力传感器故障")

        this.getPointMap["ex_lutangchukouyalichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_lutangchukouyalichuanganqiguzhang", 630, 2, "炉膛出口压力传感器故障")

        this.getPointMap["ex_ranqiyalichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_ranqiyalichuanganqiguzhang", 632, 2, "燃气压力传感器故障")

        this.getPointMap["ex_yicifengyachuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_yicifengyachuanganqiguzhang", 634, 2, "一次风压传感器故障")

        this.getPointMap["ex_ecifengyachuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_ecifengyachuanganqiguzhang", 636, 2, "二次风压传感器故障")

        this.getPointMap["ex_ranliaoliangchuanganqiguzhang_shunshizhi_"]=byteFieldObj.init(new exceptionField(), "ex_ranliaoliangchuanganqiguzhang_shunshizhi_", 638, 2, "燃料量传感器故障（瞬时值）")

        this.getPointMap["ex_zhengqiliuliangchuanganqiguzhang_shunshizhi_"]=byteFieldObj.init(new exceptionField(), "ex_zhengqiliuliangchuanganqiguzhang_shunshizhi_", 640, 2, "蒸汽流量传感器故障（瞬时值）")

        this.getPointMap["ex_jishuiliuliangchuanganqiguzhang_shunshizhi_"]=byteFieldObj.init(new exceptionField(), "ex_jishuiliuliangchuanganqiguzhang_shunshizhi_", 642, 2, "给水流量传感器故障（瞬时值）")

        this.getPointMap["ex_xunhuanliuliangchuanganqiguzhang_shunshizhi_"]=byteFieldObj.init(new exceptionField(), "ex_xunhuanliuliangchuanganqiguzhang_shunshizhi_", 644, 2, "循环流量传感器故障（瞬时值）")

        this.getPointMap["ex_bushuiliuliangchuanganqiguzhang_shunshizhi_"]=byteFieldObj.init(new exceptionField(), "ex_bushuiliuliangchuanganqiguzhang_shunshizhi_", 646, 2, "补水流量传感器故障（瞬时值）")

        this.getPointMap["ex_guoluyeweichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_guoluyeweichuanganqiguzhang", 648, 2, "锅炉液位传感器故障")

        this.getPointMap["ex_shuixiangyeweichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_shuixiangyeweichuanganqiguzhang", 650, 2, "水箱液位传感器故障")

        this.getPointMap["ex_paiyanyanghanliangchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_paiyanyanghanliangchuanganqiguzhang", 652, 2, "排烟氧含量传感器故障")

        this.getPointMap["ex_lupaisudufankuichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_lupaisudufankuichuanganqiguzhang", 654, 2, "炉排速度反馈传感器故障")

        this.getPointMap["ex_yinfengshuchufankuichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_yinfengshuchufankuichuanganqiguzhang", 656, 2, "引风输出反馈传感器故障")

        this.getPointMap["ex_gufengshuchufankuichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_gufengshuchufankuichuanganqiguzhang", 658, 2, "鼓风输出反馈传感器故障")

        this.getPointMap["ex_jishuishuchufankuichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_jishuishuchufankuichuanganqiguzhang", 660, 2, "给水输出反馈传感器故障")

        this.getPointMap["ex_meishuiwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_meishuiwenduchuanganqiguzhang", 662, 2, "媒水温度传感器故障")

        this.getPointMap["ex_shuixiangwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_shuixiangwenduchuanganqiguzhang", 664, 2, "水箱温度传感器故障")

        this.getPointMap["ex_pengzhangguanyeweichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_pengzhangguanyeweichuanganqiguzhang", 666, 2, "膨胀罐液位传感器故障")

        this.getPointMap["ex_shanzhengguanyeweichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_shanzhengguanyeweichuanganqiguzhang", 668, 2, "闪蒸罐液位传感器故障")

        this.getPointMap["ex_lengningyeguanyeweichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_lengningyeguanyeweichuanganqiguzhang", 670, 2, "冷凝液罐液位传感器故障")

        this.getPointMap["ex_chuguanyeweichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_chuguanyeweichuanganqiguzhang", 672, 2, "储罐液位传感器故障")

        this.getPointMap["ex_pengzhangguanwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_pengzhangguanwenduchuanganqiguzhang", 674, 2, "膨胀罐温度传感器故障")

        this.getPointMap["ex_shanzhengguanwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_shanzhengguanwenduchuanganqiguzhang", 676, 2, "闪蒸罐温度传感器故障")

        this.getPointMap["ex_lengningyeguanwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_lengningyeguanwenduchuanganqiguzhang", 678, 2, "冷凝液罐温度传感器故障")

        this.getPointMap["ex_chuguanwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_chuguanwenduchuanganqiguzhang", 680, 2, "储罐温度传感器故障")

        this.getPointMap["ex_xitongyalichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_xitongyalichuanganqiguzhang", 682, 2, "系统压力传感器故障")

        this.getPointMap["ex_guorezhengqiyalichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_guorezhengqiyalichuanganqiguzhang", 684, 2, "过热蒸汽压力传感器故障")

        this.getPointMap["ex_paiyanchuyalichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_paiyanchuyalichuanganqiguzhang", 686, 2, "排烟处压力传感器故障")

        this.getPointMap["ex_fengshifengyachuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_fengshifengyachuanganqiguzhang", 688, 2, "风室风压传感器故障")

        this.getPointMap["ex_yinfengjidianliuchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_yinfengjidianliuchuanganqiguzhang", 690, 2, "引风机电流传感器故障")

        this.getPointMap["ex_gufengjidianliuchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_gufengjidianliuchuanganqiguzhang", 692, 2, "鼓风机电流传感器故障")

        this.getPointMap["ex_jiliaojisudufankuichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_jiliaojisudufankuichuanganqiguzhang", 694, 2, "给料机速度反馈传感器故障")

        this.getPointMap["ex_panguan1wenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_panguan1wenduchuanganqiguzhang", 696, 2, "盘管1温度传感器故障")

        this.getPointMap["ex_panguan2wenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_panguan2wenduchuanganqiguzhang", 698, 2, "盘管2温度传感器故障")

        this.getPointMap["ex_panguan3wenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_panguan3wenduchuanganqiguzhang", 700, 2, "盘管3温度传感器故障")

        this.getPointMap["ex_panguan4wenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_panguan4wenduchuanganqiguzhang", 702, 2, "盘管4温度传感器故障")

        this.getPointMap["ex_panguan5wenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_panguan5wenduchuanganqiguzhang", 704, 2, "盘管5温度传感器故障")

        this.getPointMap["ex_panguan6wenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_panguan6wenduchuanganqiguzhang", 706, 2, "盘管6温度传感器故障")

        this.getPointMap["ex_panguan7wenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_panguan7wenduchuanganqiguzhang", 708, 2, "盘管7温度传感器故障")

        this.getPointMap["ex_panguan8wenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_panguan8wenduchuanganqiguzhang", 710, 2, "盘管8温度传感器故障")

        this.getPointMap["ex_panguan9wenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_panguan9wenduchuanganqiguzhang", 712, 2, "盘管9温度传感器故障")

        this.getPointMap["ex_panguan10wenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_panguan10wenduchuanganqiguzhang", 714, 2, "盘管10温度传感器故障")

        this.getPointMap["ex_cainuanchukouwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_cainuanchukouwenduchuanganqiguzhang", 716, 2, "采暖出口温度传感器故障")

        this.getPointMap["ex_reshuichukouwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_reshuichukouwenduchuanganqiguzhang", 718, 2, "热水出口温度传感器故障")

        this.getPointMap["ex_jinchukouyachachuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_jinchukouyachachuanganqiguzhang", 720, 2, "进出口压差传感器故障")

        this.getPointMap["ex_1#chukouwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_1#chukouwenduchuanganqiguzhang", 722, 2, "1#出口温度传感器故障")

        this.getPointMap["ex_2#chukouwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_2#chukouwenduchuanganqiguzhang", 724, 2, "2#出口温度传感器故障")

        this.getPointMap["ex_jienengqichukouyanwenchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_jienengqichukouyanwenchuanganqiguzhang", 726, 2, "节能器出口烟温传感器故障")

        this.getPointMap["ex_jienengqijinkouyanwenchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_jienengqijinkouyanwenchuanganqiguzhang", 728, 2, "节能器进口烟温传感器故障")

        this.getPointMap["ex_lengningqichukouwendu_shui_chuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_lengningqichukouwendu_shui_chuanganqiguzhang", 730, 2, "冷凝器出口温度（水）传感器故障")

        this.getPointMap["ex_lengningqijinkou_shui_chuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_lengningqijinkou_shui_chuanganqiguzhang", 732, 2, "冷凝器进口（水）传感器故障")

        this.getPointMap["ex_lengningqichukouyanwenchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_lengningqichukouyanwenchuanganqiguzhang", 734, 2, "冷凝器出口烟温传感器故障")

        this.getPointMap["ex_lengningqijinkouyanwenchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_lengningqijinkouyanwenchuanganqiguzhang", 736, 2, "冷凝器进口烟温传感器故障")

        this.getPointMap["ex_cainuanjinkouwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_cainuanjinkouwenduchuanganqiguzhang", 738, 2, "采暖进口温度传感器故障")

        this.getPointMap["ex_reshuijinkouwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_reshuijinkouwenduchuanganqiguzhang", 740, 2, "热水进口温度传感器故障")

        this.getPointMap["ex_kongzhixiangwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_kongzhixiangwenduchuanganqiguzhang", 742, 2, "控制箱温度传感器故障")

        this.getPointMap["ex_zhenkongyalichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_zhenkongyalichuanganqiguzhang", 744, 2, "真空压力传感器故障")

        this.getPointMap["ex_chushuiwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_chushuiwenduchuanganqiguzhang", 746, 2, "出水温度传感器故障")

        this.getPointMap["ex_jinshuiwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_jinshuiwenduchuanganqiguzhang", 748, 2, "进水温度传感器故障")

        this.getPointMap["ex_youwenjiancechuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_youwenjiancechuanganqiguzhang", 750, 2, "油温检测传感器故障")

        this.getPointMap["ex_gaowenbaohuchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_gaowenbaohuchuanganqiguzhang", 752, 2, "高温保护传感器故障")

        this.getPointMap["ex_chukouyouwenchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_chukouyouwenchuanganqiguzhang", 754, 2, "出口油温传感器故障")

        this.getPointMap["ex_jinkouyouwenchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_jinkouyouwenchuanganqiguzhang", 756, 2, "进口油温传感器故障")

        this.getPointMap["ex_huanrewenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_huanrewenduchuanganqiguzhang", 758, 2, "换热温度传感器故障")

        this.getPointMap["ex_xitongwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_xitongwenduchuanganqiguzhang", 760, 2, "系统温度传感器故障")

        this.getPointMap["ex_nengliangshezhiwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_nengliangshezhiwenduchuanganqiguzhang", 762, 2, "能量设置温度传感器故障")

        this.getPointMap["ex_zhengqiwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(), "ex_zhengqiwenduchuanganqiguzhang", 764, 2, "蒸汽温度传感器故障")
        //
        this.getPointMap["mo_bentipaiyanwendu"]=byteFieldObj.init(new mockField(), "mo_bentipaiyanwendu", 823, 2, "本体排烟温度", "℃")
        this.getPointMap["mo_paiyanwendu"]=byteFieldObj.init(new mockField(), "mo_paiyanwendu", 825, 2, "排烟温度", "℃")
        this.getPointMap["mo_lushuiwendu"]=byteFieldObj.init(new mockField(), "mo_lushuiwendu", 827, 2, "炉水温度", "℃")
        this.getPointMap["mo_chukouwendu"]=byteFieldObj.init(new mockField(), "mo_chukouwendu", 829, 2, "出口温度", "℃")
        this.getPointMap["mo_jinkouwendu"]=byteFieldObj.init(new mockField(), "mo_jinkouwendu", 831, 2, "进口温度", "℃")
        this.getPointMap["mo_jienengqichukouwendu(shui_"]=byteFieldObj.init(new mockField(), "mo_jienengqichukouwendu(shui_", 833, 2, "节能器出口温度(水）", "℃")
        this.getPointMap["mo_jienengqijinkouwendu(shui_"]=byteFieldObj.init(new mockField(), "mo_jienengqijinkouwendu(shui_", 835, 2, "节能器进口温度(水）", "℃")
        this.getPointMap["mo_jishuiwendu"]=byteFieldObj.init(new mockField(), "mo_jishuiwendu", 837, 2, "给水温度", "℃")
        this.getPointMap["mo_lutangwendu"]=byteFieldObj.init(new mockField(), "mo_lutangwendu", 839, 2, "炉膛温度", "℃")
        this.getPointMap["mo_lutangchukouwendu"]=byteFieldObj.init(new mockField(), "mo_lutangchukouwendu", 841, 2, "炉膛出口温度", "℃")
        this.getPointMap["mo_lubiwendu"]=byteFieldObj.init(new mockField(), "mo_lubiwendu", 843, 2, "炉壁温度", "℃")
        this.getPointMap["mo_ranliaowendu"]=byteFieldObj.init(new mockField(), "mo_ranliaowendu", 845, 2, "燃料温度", "℃")
        this.getPointMap["mo_refengwendu_kongyuqichukou_"]=byteFieldObj.init(new mockField(), "mo_refengwendu_kongyuqichukou_", 847, 2, "热风温度（空预器出口）", "℃")
        this.getPointMap["mo_fuyazhengqiwendu"]=byteFieldObj.init(new mockField(), "mo_fuyazhengqiwendu", 849, 2, "负压蒸汽温度", "℃")
        this.getPointMap["mo_guorezhengqiwendu"]=byteFieldObj.init(new mockField(), "mo_guorezhengqiwendu", 851, 2, "过热蒸汽温度", "℃")
        this.getPointMap["mo_huilu1wendu"]=byteFieldObj.init(new mockField(), "mo_huilu1wendu", 853, 2, "回路1温度", "℃")
        this.getPointMap["mo_huilu2wendu"]=byteFieldObj.init(new mockField(), "mo_huilu2wendu", 855, 2, "回路2温度", "℃")
        this.getPointMap["mo_huilu3wendu"]=byteFieldObj.init(new mockField(), "mo_huilu3wendu", 857, 2, "回路3温度", "℃")
        this.getPointMap["mo_huilu4wendu"]=byteFieldObj.init(new mockField(), "mo_huilu4wendu", 859, 2, "回路4温度", "℃")
        this.getPointMap["mo_huilu5wendu"]=byteFieldObj.init(new mockField(), "mo_huilu5wendu", 861, 2, "回路5温度", "℃")
        this.getPointMap["mo_shiwaiwendu"]=byteFieldObj.init(new mockField(), "mo_shiwaiwendu", 863, 2, "室外温度", "℃")
        this.getPointMap["mo_zhengqiyali"]=byteFieldObj.init(new mockField(), "mo_zhengqiyali", 865, 2, "蒸汽压力", "MPa", 100)
        this.getPointMap["mo_jishuiyali"]=byteFieldObj.init(new mockField(), "mo_jishuiyali", 867, 2, "给水压力", "MPa", 100)
        this.getPointMap["mo_chukouyali"]=byteFieldObj.init(new mockField(), "mo_chukouyali", 869, 2, "出口压力", "MPa", 100)
        this.getPointMap["mo_jinkouyali"]=byteFieldObj.init(new mockField(), "mo_jinkouyali", 871, 2, "进口压力", "MPa", 100)
        this.getPointMap["mo_lutangyali"]=byteFieldObj.init(new mockField(), "mo_lutangyali", 873, 2, "炉膛压力", "Pa")
        this.getPointMap["mo_lutangchukouyali"]=byteFieldObj.init(new mockField(), "mo_lutangchukouyali", 875, 2, "炉膛出口压力", "Pa")
        this.getPointMap["mo_ranqiyali"]=byteFieldObj.init(new mockField(), "mo_ranqiyali", 877, 2, "燃气压力", "KPa")
        this.getPointMap["mo_yicifengya"]=byteFieldObj.init(new mockField(), "mo_yicifengya", 879, 2, "一次风压", "KPa")
        this.getPointMap["mo_ecifengya"]=byteFieldObj.init(new mockField(), "mo_ecifengya", 881, 2, "二次风压", "KPa")
        this.getPointMap["mo_ranliaoliang_shunshizhi_"]=byteFieldObj.init(new mockField(), "mo_ranliaoliang_shunshizhi_", 883, 2, "燃料量（瞬时值）")
        this.getPointMap["mo_zhengqiliuliang_shunshizhi_"]=byteFieldObj.init(new mockField(), "mo_zhengqiliuliang_shunshizhi_", 885, 2, "蒸汽流量（瞬时值）")
        this.getPointMap["mo_jishuiliuliang_shunshizhi_"]=byteFieldObj.init(new mockField(), "mo_jishuiliuliang_shunshizhi_", 887, 2, "给水流量（瞬时值）")
        this.getPointMap["mo_xunhuanliuliang_shunshizhi_"]=byteFieldObj.init(new mockField(), "mo_xunhuanliuliang_shunshizhi_", 889, 2, "循环流量（瞬时值）")
        this.getPointMap["mo_bushuiliuliang_shunshizhi_"]=byteFieldObj.init(new mockField(), "mo_bushuiliuliang_shunshizhi_", 891, 2, "补水流量（瞬时值）")
        this.getPointMap["mo_guoluyewei"]=byteFieldObj.init(new mockField(), "mo_guoluyewei", 893, 2, "锅炉液位", "mm")
        this.getPointMap["mo_shuixiangyewei"]=byteFieldObj.init(new mockField(), "mo_shuixiangyewei", 895, 2, "水箱液位", "mm")
        this.getPointMap["mo_paiyanyanghanliang"]=byteFieldObj.init(new mockField(), "mo_paiyanyanghanliang", 897, 2, "排烟氧含量", "%", 10)
        this.getPointMap["mo_lupaisudufankui"]=byteFieldObj.init(new mockField(), "mo_lupaisudufankui", 899, 2, "炉排速度反馈", "%")
        this.getPointMap["mo_yinfengshuchufankui"]=byteFieldObj.init(new mockField(), "mo_yinfengshuchufankui", 901, 2, "引风输出反馈", "%")
        this.getPointMap["mo_gufengshuchufankui"]=byteFieldObj.init(new mockField(), "mo_gufengshuchufankui", 903, 2, "鼓风输出反馈", "%")
        this.getPointMap["mo_jishuishuchufankui"]=byteFieldObj.init(new mockField(), "mo_jishuishuchufankui", 905, 2, "给水输出反馈", "%")
        this.getPointMap["mo_meishuiwendu"]=byteFieldObj.init(new mockField(), "mo_meishuiwendu", 907, 2, "媒水温度", "℃")
        this.getPointMap["mo_shuixiangwendu"]=byteFieldObj.init(new mockField(), "mo_shuixiangwendu", 909, 2, "水箱温度", "℃")
        this.getPointMap["mo_pengzhangguanyewei"]=byteFieldObj.init(new mockField(), "mo_pengzhangguanyewei", 911, 2, "膨胀罐液位", "mm")
        this.getPointMap["mo_shanzhengguanyewei"]=byteFieldObj.init(new mockField(), "mo_shanzhengguanyewei", 913, 2, "闪蒸罐液位", "mm")
        this.getPointMap["mo_lengningyeguanyewei"]=byteFieldObj.init(new mockField(), "mo_lengningyeguanyewei", 915, 2, "冷凝液罐液位", "mm")
        this.getPointMap["mo_chuguanyewei"]=byteFieldObj.init(new mockField(), "mo_chuguanyewei", 917, 2, "储罐液位", "mm")
        this.getPointMap["mo_pengzhangguanwendu"]=byteFieldObj.init(new mockField(), "mo_pengzhangguanwendu", 919, 2, "膨胀罐温度", "℃")
        this.getPointMap["mo_shanzhengguanwendu"]=byteFieldObj.init(new mockField(), "mo_shanzhengguanwendu", 921, 2, "闪蒸罐温度", "℃")
        this.getPointMap["mo_lengningyeguanwendu"]=byteFieldObj.init(new mockField(), "mo_lengningyeguanwendu", 923, 2, "冷凝液罐温度", "℃")
        this.getPointMap["mo_chuguanwendu"]=byteFieldObj.init(new mockField(), "mo_chuguanwendu", 925, 2, "储罐温度", "℃")
        this.getPointMap["mo_xitongyali_yongyuchengyareshuiguolu_"]=byteFieldObj.init(new mockField(), "mo_xitongyali_yongyuchengyareshuiguolu_", 927, 2, "系统压力（用于承压热水锅炉）", "MPa", 100)
        this.getPointMap["mo_guorezhengqiyali"]=byteFieldObj.init(new mockField(), "mo_guorezhengqiyali", 929, 2, "过热蒸汽压力", "MPa", 100)
        this.getPointMap["mo_paiyanchuyali"]=byteFieldObj.init(new mockField(), "mo_paiyanchuyali", 931, 2, "排烟处压力", "Pa")
        this.getPointMap["mo_fengshifengya"]=byteFieldObj.init(new mockField(), "mo_fengshifengya", 933, 2, "风室风压", "KPa")
        this.getPointMap["mo_yinfengjidianliu"]=byteFieldObj.init(new mockField(), "mo_yinfengjidianliu", 935, 2, "引风机电流", "A")
        this.getPointMap["mo_gufengjidianliu"]=byteFieldObj.init(new mockField(), "mo_gufengjidianliu", 937, 2, "鼓风机电流", "A")
        this.getPointMap["mo_jiliaojisudufankui"]=byteFieldObj.init(new mockField(), "mo_jiliaojisudufankui", 939, 2, "给料机速度反馈", "%")
        this.getPointMap["mo_panguan1wendu"]=byteFieldObj.init(new mockField(), "mo_panguan1wendu", 941, 2, "盘管1温度", "℃")
        this.getPointMap["mo_panguan2wendu"]=byteFieldObj.init(new mockField(), "mo_panguan2wendu", 943, 2, "盘管2温度", "℃")
        this.getPointMap["mo_panguan3wendu"]=byteFieldObj.init(new mockField(), "mo_panguan3wendu", 945, 2, "盘管3温度", "℃")
        this.getPointMap["mo_panguan4wendu"]=byteFieldObj.init(new mockField(), "mo_panguan4wendu", 947, 2, "盘管4温度", "℃")
        this.getPointMap["mo_panguan5wendu"]=byteFieldObj.init(new mockField(), "mo_panguan5wendu", 949, 2, "盘管5温度", "℃")
        this.getPointMap["mo_panguan6wendu"]=byteFieldObj.init(new mockField(), "mo_panguan6wendu", 951, 2, "盘管6温度", "℃")
        this.getPointMap["mo_panguan7wendu"]=byteFieldObj.init(new mockField(), "mo_panguan7wendu", 953, 2, "盘管7温度", "℃")
        this.getPointMap["mo_panguan8wendu"]=byteFieldObj.init(new mockField(), "mo_panguan8wendu", 955, 2, "盘管8温度", "℃")
        this.getPointMap["mo_panguan9wendu"]=byteFieldObj.init(new mockField(), "mo_panguan9wendu", 957, 2, "盘管9温度", "℃")
        this.getPointMap["mo_panguan10wendu"]=byteFieldObj.init(new mockField(), "mo_panguan10wendu", 959, 2, "盘管10温度", "℃")
        this.getPointMap["mo_cainuanchukouwendu"]=byteFieldObj.init(new mockField(), "mo_cainuanchukouwendu", 961, 2, "采暖出口温度", "℃")
        this.getPointMap["mo_reshuichukouwendu"]=byteFieldObj.init(new mockField(), "mo_reshuichukouwendu", 963, 2, "热水出口温度", "℃")
        this.getPointMap["mo_jinchukouyacha"]=byteFieldObj.init(new mockField(), "mo_jinchukouyacha", 965, 2, "进出口压差", "MPa", 100)
        this.getPointMap["mo_1#chukouwendu"]=byteFieldObj.init(new mockField(), "mo_1#chukouwendu", 967, 2, "1#出口温度", "℃")
        this.getPointMap["mo_2#chukouwendu"]=byteFieldObj.init(new mockField(), "mo_2#chukouwendu", 969, 2, "2#出口温度", "℃")
        this.getPointMap["mo_jienengqichukouyanwen"]=byteFieldObj.init(new mockField(), "mo_jienengqichukouyanwen", 971, 2, "节能器出口烟温", "℃")
        this.getPointMap["mo_jienengqijinkouyanwen"]=byteFieldObj.init(new mockField(), "mo_jienengqijinkouyanwen", 973, 2, "节能器进口烟温", "℃")
        this.getPointMap["mo_lengningqichukouwendu_shui_"]=byteFieldObj.init(new mockField(), "mo_lengningqichukouwendu_shui_", 975, 2, "冷凝器出口温度（水）", "℃")
        this.getPointMap["mo_lengningqijinkouwendu_shui_"]=byteFieldObj.init(new mockField(), "mo_lengningqijinkouwendu_shui_", 977, 2, "冷凝器进口温度（水）", "℃")
        this.getPointMap["mo_lengningqichukouyanwen"]=byteFieldObj.init(new mockField(), "mo_lengningqichukouyanwen", 979, 2, "冷凝器出口烟温", "℃")
        this.getPointMap["mo_lengningqijinkouyanwen"]=byteFieldObj.init(new mockField(), "mo_lengningqijinkouyanwen", 981, 2, "冷凝器进口烟温", "℃")
        this.getPointMap["mo_cainuanjinkouwendu"]=byteFieldObj.init(new mockField(), "mo_cainuanjinkouwendu", 983, 2, "采暖进口温度", "℃")
        this.getPointMap["mo_reshuijinkouwendu"]=byteFieldObj.init(new mockField(), "mo_reshuijinkouwendu", 985, 2, "热水进口温度", "℃")
        this.getPointMap["mo_kongzhixiangwendu"]=byteFieldObj.init(new mockField(), "mo_kongzhixiangwendu", 987, 2, "控制箱温度", "℃")
        this.getPointMap["mo_zhenkongyali"]=byteFieldObj.init(new mockField(), "mo_zhenkongyali", 989, 2, "真空压力", "KPa")
        this.getPointMap["mo_chushuiwendu"]=byteFieldObj.init(new mockField(), "mo_chushuiwendu", 991, 2, "出水温度", "℃")
        this.getPointMap["mo_jinshuiwendu"]=byteFieldObj.init(new mockField(), "mo_jinshuiwendu", 993, 2, "进水温度", "℃")
        this.getPointMap["mo_youwenjiance"]=byteFieldObj.init(new mockField(), "mo_youwenjiance", 995, 2, "油温检测", "℃")
        this.getPointMap["mo_gaowenbaohu"]=byteFieldObj.init(new mockField(), "mo_gaowenbaohu", 997, 2, "高温保护", "℃")
        this.getPointMap["mo_chukouyouwen"]=byteFieldObj.init(new mockField(), "mo_chukouyouwen", 999, 2, "出口油温", "℃")
        this.getPointMap["mo_jinkouyouwen"]=byteFieldObj.init(new mockField(), "mo_jinkouyouwen", 1001, 2, "进口油温", "℃")
        this.getPointMap["mo_huanrewendu"]=byteFieldObj.init(new mockField(), "mo_huanrewendu", 1003, 2, "换热温度", "℃")
        this.getPointMap["mo_xitongwendu"]=byteFieldObj.init(new mockField(), "mo_xitongwendu", 1005, 2, "系统温度", "℃")
        this.getPointMap["mo_nengliangshezhiwendu"]=byteFieldObj.init(new mockField(), "mo_nengliangshezhiwendu", 1007, 2, "能量设置温度", "℃")
        this.getPointMap["mo_zhengqiwendu"]=byteFieldObj.init(new mockField(), "mo_zhengqiwendu", 1009, 2, "蒸汽温度", "℃")
        this.getPointMap["mo_shineiwendu"]=byteFieldObj.init(new mockField(), "mo_shineiwendu", 1011, 2, "室内温度", "℃")
        this.getPointMap["mo_1#dianliufankui"]=byteFieldObj.init(new mockField(), "mo_1#dianliufankui", 1013, 2, "1#电流反馈", "A")

        this.getPointMap["mo_2#dianliufankui"]=byteFieldObj.init(new mockField(), "mo_2#dianliufankui", 1015, 2, "2#电流反馈", "A")

        this.getPointMap["mo_3#dianliufankui"]=byteFieldObj.init(new mockField(), "mo_3#dianliufankui", 1017, 2, "3#电流反馈", "A")

        this.getPointMap["mo_4#dianliufankui"]=byteFieldObj.init(new mockField(), "mo_4#dianliufankui", 1019, 2, "4#电流反馈", "A")

        this.getPointMap["mo_5#dianliufankui"]=byteFieldObj.init(new mockField(), "mo_5#dianliufankui", 1021, 2, "5#电流反馈", "A")

        this.getPointMap["mo_jiezhiwendu"]=byteFieldObj.init(new mockField(), "mo_jiezhiwendu", 1023, 2, "介质温度", "℃")

        this.getPointMap["mo_xiyuwendu"]=byteFieldObj.init(new mockField(), "mo_xiyuwendu", 1025, 2, "洗浴温度", "℃")

        this.getPointMap["mo_huanjingwendu"]=byteFieldObj.init(new mockField(), "mo_huanjingwendu", 1027, 2, "环境温度", "℃")

        this.getPointMap["mo_jiezhiyali"]=byteFieldObj.init(new mockField(), "mo_jiezhiyali", 1029, 2, "介质压力", "KPa")

        //
		    this.getPointMap["se_jiarezushu"]=byteFieldObj.init(new settingField(),"se_jiarezushu", 1114, 2, "加热组数","组",Commands_Key_Parameters_Setting,"0517",1,15)
        this.getPointMap["se_paiyanbaojingwendu"]=byteFieldObj.init(new settingField(),"se_paiyanbaojingwendu", 1068, 2, "排烟报警温度", "℃", Commands_Key_Parameters_Setting, "0500", 50, 300)
        this.getPointMap["se_baojingwendu"]=byteFieldObj.init(new settingField(),"se_baojingwendu", 1070, 2, "报警温度", "℃", Commands_Key_Parameters_Setting, "0501", 0, 200)
        this.getPointMap["se_tingluwendu"]=byteFieldObj.init(new settingField(),"se_tingluwendu", 1072, 2, "停炉温度", "℃", Commands_Key_Parameters_Setting, "0502", 30, 200)
        this.getPointMap["se_mubiaowendu"]=byteFieldObj.init(new settingField(),"se_mubiaowendu", 1074, 2, "目标温度", "℃", Commands_Key_Parameters_Setting, "0503", 30, 200)
        this.getPointMap["se_qiluwendu"]=byteFieldObj.init(new settingField(),"se_qiluwendu", 1076, 2, "启炉温度", "℃", Commands_Key_Parameters_Setting, "0504", 0, 200)
        this.getPointMap["se_zhuanhuohuicha"]=byteFieldObj.init(new settingField(),"se_zhuanhuohuicha", 1078, 2, "转火回差", "℃")
        this.getPointMap["se_qiluhuicha"]=byteFieldObj.init(new settingField(),"se_qiluhuicha", 1080, 2, "启炉回差", "℃", Commands_Key_Parameters_Setting, "0506", 1, 100)
        this.getPointMap["se_kaibengwendu"]=byteFieldObj.init(new settingField(),"se_kaibengwendu", 1082, 2, "开泵温度", "℃", Commands_Key_Parameters_Setting, "0507", 0, 200)
        this.getPointMap["se_guanbengwendu"]=byteFieldObj.init(new settingField(),"se_guanbengwendu", 1084, 2, "关泵温度", "℃", Commands_Key_Parameters_Setting, "0508", 0, 200)
        this.getPointMap["se_baojingyali"]=byteFieldObj.init(new settingField(),"se_baojingyali", 1086, 2, "报警压力", "MPa", 100)
        this.getPointMap["se_tingluyali"]=byteFieldObj.init(new settingField(),"se_tingluyali", 1088, 2, "停炉压力", "MPa", 100)
        this.getPointMap["se_mubiaoyali"]=byteFieldObj.init(new settingField(),"se_mubiaoyali", 1090, 2, "目标压力", "MPa", 100)
        this.getPointMap["se_qiluyali"]=byteFieldObj.init(new settingField(),"se_qiluyali", 1092, 2, "启炉压力", "MPa", 100)
        this.getPointMap["se_zhuanhuohuicha_yali_"]=byteFieldObj.init(new settingField(),"se_zhuanhuohuicha_yali_", 1094, 2, "转火回差（压力）", "MPa", 100)
        this.getPointMap["se_qiluhuicha_yali_"]=byteFieldObj.init(new settingField(),"se_qiluhuicha_yali_", 1096, 2, "启炉回差（压力）", "MPa", 100)
        this.getPointMap["se_qianyanshi"]=byteFieldObj.init(new settingField(),"se_qianyanshi", 1098, 2, "前延时", "s")
        this.getPointMap["se_houyanshi"]=byteFieldObj.init(new settingField(),"se_houyanshi", 1100, 2, "后延时", "s")
        this.getPointMap["se_qianchuisao"]=byteFieldObj.init(new settingField(),"se_qianchuisao", 1102, 2, "前吹扫", "s")
        this.getPointMap["se_houchuisao"]=byteFieldObj.init(new settingField(),"se_houchuisao", 1104, 2, "后吹扫", "s")
        this.getPointMap["se_lubibaojingwendu"]=byteFieldObj.init(new settingField(),"se_lubibaojingwendu", 1106, 2, "炉壁报警温度", "℃")
        this.getPointMap["se_lutangchukouwendu"]=byteFieldObj.init(new settingField(),"se_lutangchukouwendu", 1108, 2, "炉膛出口温度", "℃")
        this.getPointMap["se_baohuwendu"]=byteFieldObj.init(new settingField(),"se_baohuwendu", 1110, 2, "保护温度", "℃")
        this.getPointMap["se_bentipaiyanwendu"]=byteFieldObj.init(new settingField(),"se_bentipaiyanwendu", 1112, 2, "本体排烟温度", "℃")
        this.getPointMap["se_jiarezushu"]=byteFieldObj.init(new settingField(),"se_jiarezushu", 1114, 2, "加热组数","组",Commands_Key_Parameters_Setting,"0517",1,15)
        this.getPointMap["se_jianceyalishijian"]=byteFieldObj.init(new settingField(),"se_jianceyalishijian", 1116, 2, "检测压力时间", "s")
        this.getPointMap["se_houyanshi"]=byteFieldObj.init(new settingField(),"se_houyanshi", 1118, 2, "后延时", "m")
        this.getPointMap["se_shedingwendu"]=byteFieldObj.init(new settingField(),"se_shedingwendu", 1120, 2, "设定温度", "℃")
        this.getPointMap["se_mokuailutaishu"]=byteFieldObj.init(new settingField(),"se_mokuailutaishu", 1122, 2, "模块炉台数", "台")
        this.getPointMap["se_gufenghouyanshi"]=byteFieldObj.init(new settingField(),"se_gufenghouyanshi", 1124, 2, "鼓风后延时", "s")
        this.getPointMap["se_yinfenghouyanshi"]=byteFieldObj.init(new settingField(),"se_yinfenghouyanshi", 1126, 2, "引风后延时", "s")
        this.getPointMap["se_shuixiangkaibengwendu"]=byteFieldObj.init(new settingField(),"se_shuixiangkaibengwendu", 1128, 2, "水箱开泵温度", "℃")
        this.getPointMap["se_shuixiangguanbengwendu"]=byteFieldObj.init(new settingField(),"se_shuixiangguanbengwendu", 1130, 2, "水箱关泵温度", "℃")
        this.getPointMap["se_lushuibaojingwendu"]=byteFieldObj.init(new settingField(),"se_lushuibaojingwendu", 1132, 2, "炉水报警温度", "℃")
        this.getPointMap["se_buchangxishu"]=byteFieldObj.init(new settingField(),"se_buchangxishu", 1134, 2, "补偿系数", "%")
        this.getPointMap["se_cankaowendu"]=byteFieldObj.init(new settingField(),"se_cankaowendu", 1136, 2, "参考温度", "℃")
        this.getPointMap["se_tingluzuidazhi"]=byteFieldObj.init(new settingField(),"se_tingluzuidazhi", 1138, 2, "停炉最大值", "℃")
        this.getPointMap["se_qiluzuixiaozhi"]=byteFieldObj.init(new settingField(),"se_qiluzuixiaozhi", 1140, 2, "启炉最小值", "℃")
        this.getPointMap["se_cankaohuicha"]=byteFieldObj.init(new settingField(),"se_cankaohuicha", 1142, 2, "参考回差", "℃")
        this.getPointMap["se_tingluwendu1"]=byteFieldObj.init(new settingField(),"se_tingluwendu1", 1144, 2, "停炉温度1", "℃")
        this.getPointMap["se_qiluwendu1"]=byteFieldObj.init(new settingField(),"se_qiluwendu1", 1146, 2, "启炉温度1", "℃")
        this.getPointMap["se_tingluwendu2"]=byteFieldObj.init(new settingField(),"se_tingluwendu2", 1148, 2, "停炉温度2", "℃")
        this.getPointMap["se_qiluwendu2"]=byteFieldObj.init(new settingField(),"se_qiluwendu2", 1150, 2, "启炉温度2", "℃")
        this.getPointMap["se_yusongliaoshijian"]=byteFieldObj.init(new settingField(),"se_yusongliaoshijian", 1152, 2, "预送料时间", "s")
        this.getPointMap["se_dianhuoshijian"]=byteFieldObj.init(new settingField(),"se_dianhuoshijian", 1154, 2, "点火时间", "s")
        this.getPointMap["se_songliaoqidongshijian"]=byteFieldObj.init(new settingField(),"se_songliaoqidongshijian", 1156, 2, "送料启动时间", "s")
        this.getPointMap["se_songliaotingzhishijian"]=byteFieldObj.init(new settingField(),"se_songliaotingzhishijian", 1158, 2, "送料停止时间", "s")
        this.getPointMap["se_dianhuojiange"]=byteFieldObj.init(new settingField(),"se_dianhuojiange", 1160, 2, "点火间隔", "min")
        this.getPointMap["se_dianhuochenggongwendu"]=byteFieldObj.init(new settingField(),"se_dianhuochenggongwendu", 1162, 2, "点火成功温度", "℃")
        this.getPointMap["se_lushuitingluwendu"]=byteFieldObj.init(new settingField(),"se_lushuitingluwendu", 1164, 2, "炉水停炉温度", "℃")
        this.getPointMap["se_lushuiqiluwendu"]=byteFieldObj.init(new settingField(),"se_lushuiqiluwendu", 1166, 2, "炉水启炉温度", "℃")
        this.getPointMap["se_meishuibaojingwendu"]=byteFieldObj.init(new settingField(),"se_meishuibaojingwendu", 1168, 2, "媒水报警温度", "℃")
        this.getPointMap["se_meishuitingluwendu"]=byteFieldObj.init(new settingField(),"se_meishuitingluwendu", 1170, 2, "媒水停炉温度", "℃")
        this.getPointMap["se_meishuiqiluwendu"]=byteFieldObj.init(new settingField(),"se_meishuiqiluwendu", 1172, 2, "媒水启炉温度", "℃")
        this.getPointMap["se_kaibengyali_yongyudingyakongzhi_"]=byteFieldObj.init(new settingField(),"se_kaibengyali_yongyudingyakongzhi_", 1174, 2, "开泵压力（用于定压控制）", "MPa", 100)
        this.getPointMap["se_guanbengyali_yongyudingyakongzhi_"]=byteFieldObj.init(new settingField(),"se_guanbengyali_yongyudingyakongzhi_", 1176, 2, "关泵压力（用于定压控制）", "MPa", 100)
        this.getPointMap["se_panguanbaojingwendu"]=byteFieldObj.init(new settingField(),"se_panguanbaojingwendu", 1178, 2, "盘管报警温度", "℃")
        this.getPointMap["se_huilu1baojingwendu"]=byteFieldObj.init(new settingField(),"se_huilu1baojingwendu", 1180, 2, "回路1报警温度", "℃")
        this.getPointMap["se_huilu1kaibengwendu"]=byteFieldObj.init(new settingField(),"se_huilu1kaibengwendu", 1182, 2, "回路1开泵温度", "℃")
        this.getPointMap["se_huilu1guanbengwendu"]=byteFieldObj.init(new settingField(),"se_huilu1guanbengwendu", 1184, 2, "回路1关泵温度", "℃")
        this.getPointMap["se_huilu2baojingwendu"]=byteFieldObj.init(new settingField(),"se_huilu2baojingwendu", 1186, 2, "回路2报警温度", "℃")
        this.getPointMap["se_huilu2kaibengwendu"]=byteFieldObj.init(new settingField(),"se_huilu2kaibengwendu", 1188, 2, "回路2开泵温度", "℃")
        this.getPointMap["se_huilu2guanbengwendu"]=byteFieldObj.init(new settingField(),"se_huilu2guanbengwendu", 1190, 2, "回路2关泵温度", "℃")
        this.getPointMap["se_huilu3baojingwendu"]=byteFieldObj.init(new settingField(),"se_huilu3baojingwendu", 1192, 2, "回路3报警温度", "℃")
        this.getPointMap["se_huilu3kaibengwendu"]=byteFieldObj.init(new settingField(),"se_huilu3kaibengwendu", 1194, 2, "回路3开泵温度", "℃")
        this.getPointMap["se_huilu3guanbengwendu"]=byteFieldObj.init(new settingField(),"se_huilu3guanbengwendu", 1196, 2, "回路3关泵温度", "℃")
        this.getPointMap["se_huilu4baojingwendu"]=byteFieldObj.init(new settingField(),"se_huilu4baojingwendu", 1198, 2, "回路4报警温度", "℃")
        this.getPointMap["se_huilu4kaibengwendu"]=byteFieldObj.init(new settingField(),"se_huilu4kaibengwendu", 1200, 2, "回路4开泵温度", "℃")
        this.getPointMap["se_huilu4guanbengwendu"]=byteFieldObj.init(new settingField(),"se_huilu4guanbengwendu", 1202, 2, "回路4关泵温度", "℃")
        this.getPointMap["se_huilu5baojingwendu"]=byteFieldObj.init(new settingField(),"se_huilu5baojingwendu", 1204, 2, "回路5报警温度", "℃")
        this.getPointMap["se_huilu5kaibengwendu"]=byteFieldObj.init(new settingField(),"se_huilu5kaibengwendu", 1206, 2, "回路5开泵温度", "℃")
        this.getPointMap["se_huilu5guanbengwendu"]=byteFieldObj.init(new settingField(),"se_huilu5guanbengwendu", 1208, 2, "回路5关泵温度", "℃")
        this.getPointMap["se_touqieshijian_jiarezuyong_"]=byteFieldObj.init(new settingField(),"se_touqieshijian_jiarezuyong_", 1210, 2, "投切时间（加热组用）", "s", Commands_Key_Parameters_Setting, "0547", 1, 10)
        this.getPointMap["se_diaojieshijian_jiarezuyong_"]=byteFieldObj.init(new settingField(),"se_diaojieshijian_jiarezuyong_", 1212, 2, "调节时间（加热组用）", "m", Commands_Key_Parameters_Setting, "0548", 1, 10)
        this.getPointMap["se_chukouchaoyabaojing"]=byteFieldObj.init(new settingField(),"se_chukouchaoyabaojing", 1214, 2, "出口超压报警", "MPa", 100)
        this.getPointMap["se_jinkouchaoyabaojing"]=byteFieldObj.init(new settingField(),"se_jinkouchaoyabaojing", 1216, 2, "进口超压报警", "MPa", 100)
        this.getPointMap["se_cainuanbaojingwendu"]=byteFieldObj.init(new settingField(),"se_cainuanbaojingwendu", 1218, 2, "采暖报警温度", "℃")
        this.getPointMap["se_cainuankaibengwendu"]=byteFieldObj.init(new settingField(),"se_cainuankaibengwendu", 1220, 2, "采暖开泵温度", "℃")
        this.getPointMap["se_cainuanguanbengwendu"]=byteFieldObj.init(new settingField(),"se_cainuanguanbengwendu", 1222, 2, "采暖关泵温度", "℃")
        this.getPointMap["se_reshuibaojingwendu"]=byteFieldObj.init(new settingField(),"se_reshuibaojingwendu", 1224, 2, "热水报警温度", "℃")
        this.getPointMap["se_reshuikaibengwendu"]=byteFieldObj.init(new settingField(),"se_reshuikaibengwendu", 1226, 2, "热水开泵温度", "℃")
        this.getPointMap["se_reshuiguanbengwendu"]=byteFieldObj.init(new settingField(),"se_reshuiguanbengwendu", 1228, 2, "热水关泵温度", "℃")
        this.getPointMap["se_meishuimubiaowendu"]=byteFieldObj.init(new settingField(),"se_meishuimubiaowendu", 1230, 2, "媒水目标温度", "℃")
        this.getPointMap["se_meishuiqiluhuicha"]=byteFieldObj.init(new settingField(),"se_meishuiqiluhuicha", 1232, 2, "媒水启炉回差", "℃")
        this.getPointMap["se_chukoudiyabaojing"]=byteFieldObj.init(new settingField(),"se_chukoudiyabaojing", 1234, 2, "出口低压报警", "℃")
        this.getPointMap["se_jinchukouyachagao"]=byteFieldObj.init(new settingField(),"se_jinchukouyachagao", 1236, 2, "进出口压差高", "℃")
        this.getPointMap["se_jinchukouyachadi"]=byteFieldObj.init(new settingField(),"se_jinchukouyachadi", 1238, 2, "进出口压差低", "℃")
        this.getPointMap["se_jinkoudiyabaojing"]=byteFieldObj.init(new settingField(),"se_jinkoudiyabaojing", 1240, 2, "进口低压报警", "℃")
        this.getPointMap["se_jinkouchaowenbaojing"]=byteFieldObj.init(new settingField(),"se_jinkouchaowenbaojing", 1242, 2, "进口超温报警", "℃")
        this.getPointMap["se_jinkoudiwenbaojing"]=byteFieldObj.init(new settingField(),"se_jinkoudiwenbaojing", 1244, 2, "进口低温报警", "℃")
        this.getPointMap["se_chukoudiwenbaojing"]=byteFieldObj.init(new settingField(),"se_chukoudiwenbaojing", 1246, 2, "出口低温报警", "℃")
        this.getPointMap["se_pengzhangguanchaowen"]=byteFieldObj.init(new settingField(),"se_pengzhangguanchaowen", 1248, 2, "膨胀罐超温", "℃")
        this.getPointMap["se_mubiaoyewei"]=byteFieldObj.init(new settingField(),"se_mubiaoyewei", 1250, 2, "目标液位", "mm")
        this.getPointMap["se_kaibengyewei"]=byteFieldObj.init(new settingField(),"se_kaibengyewei", 1252, 2, "开泵液位", "mm")
        this.getPointMap["se_guanbengyewei"]=byteFieldObj.init(new settingField(),"se_guanbengyewei", 1254, 2, "关泵液位", "mm")
        this.getPointMap["se_kongbengmubiao"]=byteFieldObj.init(new settingField(),"se_kongbengmubiao", 1256, 2, "控泵目标", "℃")
        this.getPointMap["se_lengningqianyanshi"]=byteFieldObj.init(new settingField(),"se_lengningqianyanshi", 1258, 2, "冷凝前延时", "s")
        this.getPointMap["se_lengninghouyanshi"]=byteFieldObj.init(new settingField(),"se_lengninghouyanshi", 1260, 2, "冷凝后延时", "s")
        this.getPointMap["se_xieyashangxian"]=byteFieldObj.init(new settingField(),"se_xieyashangxian", 1262, 2, "泄压上限", "MPa", 100)
        this.getPointMap["se_xieyaxiaxian"]=byteFieldObj.init(new settingField(),"se_xieyaxiaxian", 1264, 2, "泄压下限", "MPa", 100)
        this.getPointMap["se_jishuibaojingyali"]=byteFieldObj.init(new settingField(),"se_jishuibaojingyali", 1266, 2, "给水报警压力", "MPa", 100)
        this.getPointMap["se_zhenkongbaojingyali"]=byteFieldObj.init(new settingField(),"se_zhenkongbaojingyali", 1268, 2, "真空报警压力", "KPa")
        this.getPointMap["se_zhenkongyalishangxian"]=byteFieldObj.init(new settingField(),"se_zhenkongyalishangxian", 1270, 2, "真空压力上限", "KPa")
        this.getPointMap["se_zhenkongyalixiaxian"]=byteFieldObj.init(new settingField(),"se_zhenkongyalixiaxian", 1272, 2, "真空压力下限", "KPa")
        this.getPointMap["se_jinchukoumubiaoyacha"]=byteFieldObj.init(new settingField(),"se_jinchukoumubiaoyacha", 1274, 2, "进出口目标压差", "MPa", 100)
        this.getPointMap["se_jienengqichuyanchaowen"]=byteFieldObj.init(new settingField(),"se_jienengqichuyanchaowen", 1276, 2, "节能器出烟超温", "℃")
        this.getPointMap["se_lengningqichuyanchaowen"]=byteFieldObj.init(new settingField(),"se_lengningqichuyanchaowen", 1278, 2, "冷凝器出烟超温", "℃")
        this.getPointMap["se_jinshuitingluwendu"]=byteFieldObj.init(new settingField(),"se_jinshuitingluwendu", 1280, 2, "进水停炉温度", "℃")
        this.getPointMap["se_youwenbaohuwendu"]=byteFieldObj.init(new settingField(),"se_youwenbaohuwendu", 1282, 2, "油温保护温度", "℃")
        this.getPointMap["se_youwenshangxianwendu"]=byteFieldObj.init(new settingField(),"se_youwenshangxianwendu", 1284, 2, "油温上限温度", "℃")
        this.getPointMap["se_youwenzhongxianwendu"]=byteFieldObj.init(new settingField(),"se_youwenzhongxianwendu", 1286, 2, "油温中限温度", "℃")
        this.getPointMap["se_gaowenbaohuwendu"]=byteFieldObj.init(new settingField(),"se_gaowenbaohuwendu", 1288, 2, "高温保护温度", "℃")
        this.getPointMap["se_wenchabaohuwendu"]=byteFieldObj.init(new settingField(),"se_wenchabaohuwendu", 1290, 2, "温差保护温度", "℃")
        this.getPointMap["se_jinkoutingluwendu"]=byteFieldObj.init(new settingField(),"se_jinkoutingluwendu", 1292, 2, "进口停炉温度", "℃")
        this.getPointMap["se_jinkoumubiaowendu"]=byteFieldObj.init(new settingField(),"se_jinkoumubiaowendu", 1294, 2, "进口目标温度", "℃")
        this.getPointMap["se_jinkouqiluhuicha"]=byteFieldObj.init(new settingField(),"se_jinkouqiluhuicha", 1296, 2, "进口启炉回差", "℃")
        this.getPointMap["se_youwenxiaxianwendu"]=byteFieldObj.init(new settingField(),"se_youwenxiaxianwendu", 1298, 2, "油温下限温度", "℃")
        this.getPointMap["se_huanrekaibengwendu"]=byteFieldObj.init(new settingField(),"se_huanrekaibengwendu", 1300, 2, "换热开泵温度", "℃")
        this.getPointMap["se_huanreguanbengwendu"]=byteFieldObj.init(new settingField(),"se_huanreguanbengwendu", 1302, 2, "换热关泵温度", "℃")
        this.getPointMap["se_xitongkaibengwendu"]=byteFieldObj.init(new settingField(),"se_xitongkaibengwendu", 1304, 2, "系统开泵温度", "℃")
        this.getPointMap["se_xitongguanbengwendu"]=byteFieldObj.init(new settingField(),"se_xitongguanbengwendu", 1306, 2, "系统关泵温度", "℃")
        //
        this.getPointMap["se_zhengqihuicha"]=byteFieldObj.init(new settingField(),"se_zhengqihuicha", 1313, 2, "蒸汽回差", "℃")
        this.getPointMap["se_dibaojingyewei"]=byteFieldObj.init(new settingField(),"se_dibaojingyewei", 1315, 2, "低报警液位", "mm")
        this.getPointMap["se_gaobaojingyewei"]=byteFieldObj.init(new settingField(),"se_gaobaojingyewei", 1317, 2, "高报警液位", "mm")
        this.getPointMap["se_cainuantingluwendu"]=byteFieldObj.init(new settingField(),"se_cainuantingluwendu", 1319, 2, "采暖停炉温度", "mm")
        this.getPointMap["se_cainuanqiluwendu"]=byteFieldObj.init(new settingField(),"se_cainuanqiluwendu", 1321, 2, "采暖启炉温度", "mm")
        //
        this.getPointMap["st_qidongshijian1_shifen_"]=byteFieldObj.init(new startStopField(),"st_qidongshijian1_shifen_", 1558, 2, "启动时间1（时 分）")
        this.getPointMap["st_tingzhishijian1_shifen_"]=byteFieldObj.init(new startStopField(),"st_tingzhishijian1_shifen_", 1560, 2, "停止时间1（时 分）")
        this.getPointMap["st_qidongshijian2_shifen_"]=byteFieldObj.init(new startStopField(),"st_qidongshijian2_shifen_", 1562, 2, "启动时间2（时 分）")
        this.getPointMap["st_tingzhishijian2_shifen_"]=byteFieldObj.init(new startStopField(),"st_tingzhishijian2_shifen_", 1564, 2, "停止时间2（时 分）")
        this.getPointMap["st_qidongshijian3_shifen_"]=byteFieldObj.init(new startStopField(),"st_qidongshijian3_shifen_", 1566, 2, "启动时间3（时 分）")
        this.getPointMap["st_tingzhishijian3_shifen_"]=byteFieldObj.init(new startStopField(),"st_tingzhishijian3_shifen_", 1568, 2, "停止时间3（时 分）")
        this.getPointMap["st_qidongshijian4_shifen_"]=byteFieldObj.init(new startStopField(),"st_qidongshijian4_shifen_", 1570, 2, "启动时间4（时 分）")
        this.getPointMap["st_tingzhishijian4_shifen_"]=byteFieldObj.init(new startStopField(),"st_tingzhishijian4_shifen_", 1572, 2, "停止时间4（时 分）")
        this.getPointMap["st_qidongshijian5_shifen_"]=byteFieldObj.init(new startStopField(),"st_qidongshijian5_shifen_", 1574, 2, "启动时间5（时 分）")
        this.getPointMap["st_tingzhishijian5_shifen_"]=byteFieldObj.init(new startStopField(),"st_tingzhishijian5_shifen_", 1576, 2, "停止时间5（时 分）")
        this.getPointMap["st_qidongshijian6_shifen_"]=byteFieldObj.init(new startStopField(),"st_qidongshijian6_shifen_", 1578, 2, "启动时间6（时 分）")
        this.getPointMap["st_tingzhishijian6_shifen_"]=byteFieldObj.init(new startStopField(),"st_tingzhishijian6_shifen_", 1580, 2, "停止时间6（时 分）")
        //
        this.getPointMap["de_ranshaoqi"]=byteFieldObj.init(new deviceField(),"de_ranshaoqi", 1587, 2, "燃烧器", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_jiarezu"]=byteFieldObj.init(new deviceField(),"de_jiarezu", 1589, 2, "加热组", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_bushui_beng"]=byteFieldObj.init(new deviceField(),"de_bushui_beng", 1591, 2, "补水泵", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_jishui_beng"]=byteFieldObj.init(new deviceField(),"de_jishui_beng", 1593, 2, "给水泵", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_buyou_beng"]=byteFieldObj.init(new deviceField(),"de_buyou_beng", 1595, 2, "补油泵", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_xunhuan_beng"]=byteFieldObj.init(new deviceField(),"de_xunhuan_beng", 1597, 2, "循环泵", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_lengning_beng"]=byteFieldObj.init(new deviceField(),"de_lengning_beng", 1599, 2, "冷凝泵", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_reshui_beng"]=byteFieldObj.init(new deviceField(),"de_reshui_beng", 1601, 2, "热水泵", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_zhenkong_beng"]=byteFieldObj.init(new deviceField(),"de_zhenkong_beng", 1603, 2, "真空泵", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_ecixunhuan_beng"]=byteFieldObj.init(new deviceField(),"de_ecixunhuan_beng", 1605, 2, "二次循环泵", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_yinfengji_fan"]=byteFieldObj.init(new deviceField(),"de_yinfengji_fan", 1607, 2, "引风机", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_gufengji_fan"]=byteFieldObj.init(new deviceField(),"de_gufengji_fan", 1609, 2, "鼓风机", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_lupai_fan"]=byteFieldObj.init(new deviceField(),"de_lupai_fan", 1611, 2, "炉排", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_chuzhaji_fan"]=byteFieldObj.init(new deviceField(),"de_chuzhaji_fan", 1613, 2, "出渣机", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_ecigufengji_fan"]=byteFieldObj.init(new deviceField(),"de_ecigufengji_fan", 1615, 2, "二次鼓风机", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_dianhuoqi"]=byteFieldObj.init(new deviceField(),"de_dianhuoqi", 1617, 2, "点火器", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_shangmeiji_fan"]=byteFieldObj.init(new deviceField(),"de_shangmeiji_fan", 1619, 2, "上煤机", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_songliaoji"]=byteFieldObj.init(new deviceField(),"de_songliaoji", 1621, 2, "送料机", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_jiayao_beng"]=byteFieldObj.init(new deviceField(),"de_jiayao_beng", 1623, 2, "加药泵", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_paiwufa"]=byteFieldObj.init(new deviceField(),"de_paiwufa", 1625, 2, "排污阀", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_huilu1xunhuan_beng"]=byteFieldObj.init(new deviceField(),"de_huilu1xunhuan_beng", 1627, 2, "回路1循环泵", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_huilu2xunhuan_beng"]=byteFieldObj.init(new deviceField(),"de_huilu2xunhuan_beng", 1629, 2, "回路2循环泵", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_huilu3xunhuan_beng"]=byteFieldObj.init(new deviceField(),"de_huilu3xunhuan_beng", 1631, 2, "回路3循环泵", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_huilu4xunhuan_beng"]=byteFieldObj.init(new deviceField(),"de_huilu4xunhuan_beng", 1633, 2, "回路4循环泵", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_huilu5xunhuan_beng"]=byteFieldObj.init(new deviceField(),"de_huilu5xunhuan_beng", 1635, 2, "回路5循环泵", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_cainuanxunhuan_beng"]=byteFieldObj.init(new deviceField(),"de_cainuanxunhuan_beng", 1637, 2, "采暖循环泵", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_reshuixunhuan_beng"]=byteFieldObj.init(new deviceField(),"de_reshuixunhuan_beng", 1639, 2, "热水循环泵", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_paiqifa"]=byteFieldObj.init(new deviceField(),"de_paiqifa", 1641, 2, "排汽阀", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_xieyafa"]=byteFieldObj.init(new deviceField(),"de_xieyafa", 1643, 2, "泄压阀", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_zhenkongfa"]=byteFieldObj.init(new deviceField(),"de_zhenkongfa", 1645, 2, "真空阀", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_pangtongfa"]=byteFieldObj.init(new deviceField(),"de_pangtongfa", 1647, 2, "旁通阀", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_churexunhuan_beng"]=byteFieldObj.init(new deviceField(),"de_churexunhuan_beng", 1649, 2, "储热循环泵", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_huanrexunhuan_beng"]=byteFieldObj.init(new deviceField(),"de_huanrexunhuan_beng", 1651, 2, "换热循环泵", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_xitongxunhuan_beng"]=byteFieldObj.init(new deviceField(),"de_xitongxunhuan_beng", 1653, 2, "系统循环泵", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_churebushui_beng"]=byteFieldObj.init(new deviceField(),"de_churebushui_beng", 1655, 2, "储热补水泵", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_yandaodiefa"]=byteFieldObj.init(new deviceField(),"de_yandaodiefa", 1657, 2, "烟道蝶阀", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_huishui_beng"]=byteFieldObj.init(new deviceField(),"de_huishui_beng", 1659, 2, "回水泵", ctl_njzj_common_valueMap.coms_device)
        this.getPointMap["de_santongfa"]=byteFieldObj.init(new deviceField(),"de_santongfa", 1661, 2, "三通阀", ctl_njzj_common_valueMap.coms_device)
    }
}
