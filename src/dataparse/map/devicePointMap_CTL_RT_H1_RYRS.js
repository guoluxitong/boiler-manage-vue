import map from './map'
import {
  coms_media,
  coms_power,
  coms_open_close,
  ctl_njrt_common_valueMap
} from './commonValueMap'
import { deviceModel } from '../model/sdcSoftDevice'
import byteField from '../meta/byteField'
import baseInfoField from '../meta/ctl_njrt/baseInfoField'
import exceptionField from '../meta/ctl_njrt/exceptionField'
import mediaField from '../meta/ctl_njrt/h1/mediaField'
import mockField from '../meta/ctl_njrt/mockField'
import openCloseField from '../meta/ctl_njrt/openCloseField'
import powerField from '../meta/ctl_njrt/h1/powerField'
import deviceField from "../meta/ctl_njrt/deviceField";
import settingField from "../meta/ctl_njrt/settingField";

export default class devicePointMap_CTL_RT_H1_RYRS extends map {
  constructor() {
    super();
    const byteFieldObj = new byteField();
    this.getPointMap[deviceModel.key_point_power] = byteFieldObj.init(new powerField(), deviceModel.key_point_power, 87, 2, "燃料类型", coms_power)
    this.getPointMap[deviceModel.key_point_media] = byteFieldObj.init(new mediaField(), deviceModel.key_point_media, 89, 2, "介质类型", coms_media)
    this.getPointMap["mo_kongzhiqizhuangtai"] = byteFieldObj.init(new baseInfoField(), "mo_kongzhiqizhuangtai", 3, 2, "控制器状态", ctl_njrt_common_valueMap.coms_zhuangtai)
    this.getPointMap[deviceModel.key_point_run_life] = byteFieldObj.init(new baseInfoField(), deviceModel.key_point_run_life, 53, 2, "累计燃烧时间", "时")
    this.getPointMap[deviceModel.key_point_run_days] = byteFieldObj.init(new baseInfoField(), deviceModel.key_point_run_days, 53, 2, "运行天数", "天")
    this.getPointMap[deviceModel.key_point_run_hours] = byteFieldObj.init(new baseInfoField(), deviceModel.key_point_run_hours, 53, 2, "运行小时数", "时")
    this.getPointMap[deviceModel.key_point_power] = byteFieldObj.init(new powerField(), deviceModel.key_point_power, 0, 0, "燃料类型", coms_power)
    this.getPointMap[deviceModel.key_point_media] = byteFieldObj.init(new mediaField(), deviceModel.key_point_media, 0, 0, "介质类型", coms_media)
    this.getPointMap["mo_bushuibengzhubei"] = byteFieldObj.init(new deviceField(), "mo_bushuibengzhubei", 49, 2, "补水泵主备", ctl_njrt_common_valueMap.coms_master, 0)
    this.getPointMap["mo_bushuibengshoudongzidong"] = byteFieldObj.init(new deviceField(), "mo_bushuibengshoudongzidong", 49, 2, "补水泵手动自动", ctl_njrt_common_valueMap.coms_atuo, 1)
    this.getPointMap["mo_xunhuanbengzhubei"] = byteFieldObj.init(new deviceField(), "mo_xunhuanbengzhubei", 49, 2, "循环泵主备", ctl_njrt_common_valueMap.coms_master, 2)
    this.getPointMap["mo_xunhuanbengshoudongzidong"] = byteFieldObj.init(new deviceField(), "mo_xunhuanbengshoudongzidong", 49, 2, "循环泵手动自动", ctl_njrt_common_valueMap.coms_atuo, 3)

    this.getPointMap["ex_jixiandishuiweibaojing"] = byteFieldObj.init(new exceptionField(), "ex_jixiandishuiweibaojing", 45, 2, "极限低水位报警", 0)
    this.getPointMap["ex_chushuiwenduchuanganqiduanlu"] = byteFieldObj.init(new exceptionField(), "ex_chushuiwenduchuanganqiduanlu", 45, 2, "出水温度传感器断路", 1)
    this.getPointMap["ex_chushuiwenduchuanganqiduanlu1"] = byteFieldObj.init(new exceptionField(), "ex_chushuiwenduchuanganqiduanlu", 45, 2, "出水温度传感器短路", 2)
    this.getPointMap["ex_huishuiwenduchuanganqiduanlu"] = byteFieldObj.init(new exceptionField(), "ex_huishuiwenduchuanganqiduanlu", 45, 2, "回水温度传感器断路", 3)
    this.getPointMap["ex_chushuiwendugaobaojing"] = byteFieldObj.init(new exceptionField(), "ex_chushuiwendugaobaojing", 45, 2, "出水温度高报警", 4)
    this.getPointMap["ex_paiyanwendugaobaojing"] = byteFieldObj.init(new exceptionField(), "ex_paiyanwendugaobaojing", 45, 2, "排烟温度高报警", 5)
    this.getPointMap["ex_chaoyabaojing"] = byteFieldObj.init(new exceptionField(), "ex_chaoyabaojing", 45, 2, "超压报警", 6)
    this.getPointMap["ex_ranshaoqiguzhang"] = byteFieldObj.init(new exceptionField(), "ex_ranshaoqiguzhang", 45, 2, "燃烧器故障", 7)
    this.getPointMap["ex_ranqiyalidibaojing"] = byteFieldObj.init(new exceptionField(), "ex_ranqiyalidibaojing", 45, 2, "燃气压力低报警", 8)
    this.getPointMap["ex_ranqixieloubaojing"] = byteFieldObj.init(new exceptionField(), "ex_ranqixieloubaojing", 45, 2, "燃气泄漏报警", 9)
    this.getPointMap["ex_dianjiedianyalibiaoduanlu"] = byteFieldObj.init(new exceptionField(), "ex_dianjiedianyalibiaoduanlu", 45, 2, "电接点压力表短路", 11)
    this.getPointMap["ex_shuiweidianjiluojicuo"] = byteFieldObj.init(new exceptionField(), "ex_shuiweidianjiluojicuo", 45, 2, "水位电极逻辑错", 12)
    this.getPointMap["ex_gaoshuiweibaojing"] = byteFieldObj.init(new exceptionField(), "ex_gaoshuiweibaojing", 45, 2, "高水位报警", 13)
    this.getPointMap["ex_xunhuanbengguzhang"] = byteFieldObj.init(new exceptionField(), "ex_xunhuanbengguzhang", 45, 2, "循环泵故障", 14)

    this.getPointMap["oc_queshuidianji"] = byteFieldObj.init(new openCloseField(), "oc_queshuidianji", 5, 2, "缺水电极", 0, coms_open_close)
    this.getPointMap["oc_dishuiweidianji"] = byteFieldObj.init(new openCloseField(), "oc_dishuiweidianji", 5, 2, "低水位电极", 1, coms_open_close)
    this.getPointMap["oc_gaoshuiweidianji"] = byteFieldObj.init(new openCloseField(), "oc_gaoshuiweidianji", 5, 2, "高水位电极", 2, coms_open_close)
    this.getPointMap["oc_gaoshuiweibaojingdianji"] = byteFieldObj.init(new openCloseField(), "oc_gaoshuiweibaojingdianji", 5, 2, "高水位报警电极", 3, coms_open_close)
    this.getPointMap["oc_dianjiedianyalibiaodizhen"] = byteFieldObj.init(new openCloseField(), "oc_dianjiedianyalibiaodizhen", 5, 2, "电接点压力表低针", 4, coms_open_close)
    this.getPointMap["oc_dianjiedianyalibiaogaozhen"] = byteFieldObj.init(new openCloseField(), "oc_dianjiedianyalibiaogaozhen", 5, 2, "电接点压力表高针", 5, coms_open_close)
    this.getPointMap["oc_xunhuanbengliansuoxinhao"] = byteFieldObj.init(new openCloseField(), "oc_xunhuanbengliansuoxinhao", 5, 2, "循环泵联锁信号", 8, coms_open_close)
    this.getPointMap["oc_chaoyabaojingxinhao"] = byteFieldObj.init(new openCloseField(), "oc_chaoyabaojingxinhao", 5, 2, "超压报警信号", 9, coms_open_close)
    this.getPointMap["oc_ranshaoqiguzhangxinhao"] = byteFieldObj.init(new openCloseField(), "oc_ranshaoqiguzhangxinhao", 5, 2, "燃烧器故障信号", 10, coms_open_close)
    this.getPointMap["oc_ranqiyalidibaojingxinhao"] = byteFieldObj.init(new openCloseField(), "oc_ranqiyalidibaojingxinhao", 5, 2, "燃气压力低报警信号", 11, coms_open_close)
    this.getPointMap["oc_ranqixieloubaojingxinhao"] = byteFieldObj.init(new openCloseField(), "oc_ranqixieloubaojingxinhao", 5, 2, "燃气泄漏报警信号", 12, coms_open_close)
    this.getPointMap["oc_ranshaoqiqitingkongzhi_ranshaoqidahuo_"] = byteFieldObj.init(new openCloseField(), "oc_ranshaoqiqitingkongzhi_ranshaoqidahuo_", 9, 2, "燃烧器启停控制（燃烧器大火）", coms_open_close, 0)
    this.getPointMap["oc_ranshaoqibilizengda_ranshaoqixiaohuo_"] = byteFieldObj.init(new openCloseField(), "oc_ranshaoqibilizengda_ranshaoqixiaohuo_", 9, 2, "燃烧器比例增大（燃烧器小火）", coms_open_close, 1)
    this.getPointMap["oc_ranshaoqibilijianxiao"] = byteFieldObj.init(new openCloseField(), "oc_ranshaoqibilijianxiao", 9, 2, "燃烧器比例减小", coms_open_close, 2)
    this.getPointMap["oc_bushuibengzhukongzhi"] = byteFieldObj.init(new openCloseField(), "oc_bushuibengzhukongzhi", 9, 2, "补水泵主控制", coms_open_close, 3)
    this.getPointMap["oc_bushuibengbeikongzhi"] = byteFieldObj.init(new openCloseField(), "oc_bushuibengbeikongzhi", 9, 2, "补水泵备控制", coms_open_close, 4)
    this.getPointMap["oc_xunhuanbengzhukongzhi"] = byteFieldObj.init(new openCloseField(), "oc_xunhuanbengzhukongzhi", 9, 2, "循环泵主控制", coms_open_close, 5)
    this.getPointMap["oc_xunhuanbengbeikongzhi"] = byteFieldObj.init(new openCloseField(), "oc_xunhuanbengbeikongzhi", 9, 2, "循环泵备控制", coms_open_close, 6)

    this.getPointMap["se_moshiyishiduan1qidongshi"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan1qidongshi", 61, 2, "模式一时段1启动时", "时")
    this.getPointMap["se_moshiyishiduan1qidongfen"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan1qidongfen", 63, 2, "模式一时段1启动分", "分")
    this.getPointMap["se_moshiyishiduan1tingzhishi"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan1tingzhishi", 65, 2, "模式一时段1停止时", "时")
    this.getPointMap["se_moshiyishiduan1tingzhifen"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan1tingzhifen", 67, 2, "模式一时段1停止分", "分")
    this.getPointMap["se_moshiyishiduan1tingluwendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan1tingluwendu", 69, 2, "模式一时段1停炉温度", "℃")
    this.getPointMap["se_moshiyishiduan1shiyongwendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan1shiyongwendu", 71, 2, "模式一时段1使用温度", "℃")
    this.getPointMap["se_moshiyishiduan1mubiaowendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan1mubiaowendu", 73, 2, "模式一时段1目标温度", "℃")
    this.getPointMap["se_moshiyishiduan1guanbengwendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan1guanbengwendu", 75, 2, "模式一时段1关泵温度", "℃")
    this.getPointMap["se_moshiyishiduan1kaibengwendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan1kaibengwendu", 77, 2, "模式一时段1开泵温度", "℃")
    this.getPointMap["se_moshiyishiduan1zhuanhuowendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan1zhuanhuowendu", 79, 2, "模式一时段1转火温度", "℃")
    this.getPointMap["se_moshiyishiduan2qidongshi"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan2qidongshi", 81, 2, "模式一时段2启动时", "时")
    this.getPointMap["se_moshiyishiduan2qidongfen"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan2qidongfen", 83, 2, "模式一时段2启动分", "分")
    this.getPointMap["se_moshiyishiduan2tingzhishi"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan2tingzhishi", 85, 2, "模式一时段2停止时", "时")
    this.getPointMap["se_moshiyishiduan2tingzhifen"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan2tingzhifen", 87, 2, "模式一时段2停止分", "分")
    this.getPointMap["se_moshiyishiduan2tingluwendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan2tingluwendu", 89, 2, "模式一时段2停炉温度", "℃")
    this.getPointMap["se_moshiyishiduan2shiyongwendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan2shiyongwendu", 91, 2, "模式一时段2使用温度", "℃")
    this.getPointMap["se_moshiyishiduan2mubiaowendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan2mubiaowendu", 93, 2, "模式一时段2目标温度", "℃")
    this.getPointMap["se_moshiyishiduan2guanbengwendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan2guanbengwendu", 95, 2, "模式一时段2关泵温度", "℃")
    this.getPointMap["se_moshiyishiduan2kaibengwendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan2kaibengwendu", 97, 2, "模式一时段2开泵温度", "℃")
    this.getPointMap["se_moshiyishiduan2zhuanhuowendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan2zhuanhuowendu", 99, 2, "模式一时段2转火温度", "℃")
    this.getPointMap["se_moshiyishiduan3qidongshi"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan3qidongshi", 101, 2, "模式一时段3启动时", "时")
    this.getPointMap["se_moshiyishiduan3qidongfen"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan3qidongfen", 103, 2, "模式一时段3启动分", "分")
    this.getPointMap["se_moshiyishiduan3tingzhishi"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan3tingzhishi", 105, 2, "模式一时段3停止时", "时")
    this.getPointMap["se_moshiyishiduan3tingzhifen"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan3tingzhifen", 107, 2, "模式一时段3停止分", "分")
    this.getPointMap["se_moshiyishiduan3tingluwendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan3tingluwendu", 109, 2, "模式一时段3停炉温度", "℃")
    this.getPointMap["se_moshiyishiduan3shiyongwendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan3shiyongwendu", 111, 2, "模式一时段3使用温度", "℃")
    this.getPointMap["se_moshiyishiduan3mubiaowendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan3mubiaowendu", 113, 2, "模式一时段3目标温度", "℃")
    this.getPointMap["se_moshiyishiduan3guanbengwendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan3guanbengwendu", 115, 2, "模式一时段3关泵温度", "℃")
    this.getPointMap["se_moshiyishiduan3kaibengwendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan3kaibengwendu", 117, 2, "模式一时段3开泵温度", "℃")
    this.getPointMap["se_moshiyishiduan3zhuanhuowendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan3zhuanhuowendu", 119, 2, "模式一时段3转火温度", "℃")
    this.getPointMap["se_moshiyishiduan4qidongshi"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan4qidongshi", 121, 2, "模式一时段4启动时", "时")
    this.getPointMap["se_moshiyishiduan4qidongfen"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan4qidongfen", 123, 2, "模式一时段4启动分", "分")
    this.getPointMap["se_moshiyishiduan4tingzhishi"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan4tingzhishi", 125, 2, "模式一时段4停止时", "时")
    this.getPointMap["se_moshiyishiduan4tingzhifen"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan4tingzhifen", 127, 2, "模式一时段4停止分", "分")
    this.getPointMap["se_moshiyishiduan4tingluwendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan4tingluwendu", 129, 2, "模式一时段4停炉温度", "℃")
    this.getPointMap["se_moshiyishiduan4shiyongwendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan4shiyongwendu", 131, 2, "模式一时段4使用温度", "℃")
    this.getPointMap["se_moshiyishiduan4mubiaowendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan4mubiaowendu", 133, 2, "模式一时段4目标温度", "℃")
    this.getPointMap["se_moshiyishiduan4guanbengwendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan4guanbengwendu", 135, 2, "模式一时段4关泵温度", "℃")
    this.getPointMap["se_moshiyishiduan4kaibengwendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan4kaibengwendu", 137, 2, "模式一时段4开泵温度", "℃")
    this.getPointMap["se_moshiyishiduan4zhuanhuowendu"] = byteFieldObj.init(new settingField(), "se_moshiyishiduan4zhuanhuowendu", 139, 2, "模式一时段4转火温度", "℃")
    this.getPointMap["se_moshieshiduan1qidongshi"] = byteFieldObj.init(new settingField(), "se_moshieshiduan1qidongshi", 141, 2, "模式二时段1启动时", "时")
    this.getPointMap["se_moshieshiduan1qidongfen"] = byteFieldObj.init(new settingField(), "se_moshieshiduan1qidongfen", 143, 2, "模式二时段1启动分", "分")
    this.getPointMap["se_moshieshiduan1tingzhishi"] = byteFieldObj.init(new settingField(), "se_moshieshiduan1tingzhishi", 145, 2, "模式二时段1停止时", "时")
    this.getPointMap["se_moshieshiduan1tingzhifen"] = byteFieldObj.init(new settingField(), "se_moshieshiduan1tingzhifen", 147, 2, "模式二时段1停止分", "分")
    this.getPointMap["se_moshieshiduan1tingluwendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan1tingluwendu", 149, 2, "模式二时段1停炉温度", "℃")
    this.getPointMap["se_moshieshiduan1shiyongwendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan1shiyongwendu", 151, 2, "模式二时段1使用温度", "℃")
    this.getPointMap["se_moshieshiduan1mubiaowendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan1mubiaowendu", 153, 2, "模式二时段1目标温度", "℃")
    this.getPointMap["se_moshieshiduan1guanbengwendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan1guanbengwendu", 155, 2, "模式二时段1关泵温度", "℃")
    this.getPointMap["se_moshieshiduan1kaibengwendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan1kaibengwendu", 157, 2, "模式二时段1开泵温度", "℃")
    this.getPointMap["se_moshieshiduan1zhuanhuowendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan1zhuanhuowendu", 159, 2, "模式二时段1转火温度", "℃")
    this.getPointMap["se_moshieshiduan2qidongshi"] = byteFieldObj.init(new settingField(), "se_moshieshiduan2qidongshi", 161, 2, "模式二时段2启动时", "时")
    this.getPointMap["se_moshieshiduan2qidongfen"] = byteFieldObj.init(new settingField(), "se_moshieshiduan2qidongfen", 163, 2, "模式二时段2启动分", "分")
    this.getPointMap["se_moshieshiduan2tingzhishi"] = byteFieldObj.init(new settingField(), "se_moshieshiduan2tingzhishi", 165, 2, "模式二时段2停止时", "时")
    this.getPointMap["se_moshieshiduan2tingzhifen"] = byteFieldObj.init(new settingField(), "se_moshieshiduan2tingzhifen", 167, 2, "模式二时段2停止分", "分")
    this.getPointMap["se_moshieshiduan2tingluwendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan2tingluwendu", 169, 2, "模式二时段2停炉温度", "℃")
    this.getPointMap["se_moshieshiduan2shiyongwendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan2shiyongwendu", 171, 2, "模式二时段2使用温度", "℃")
    this.getPointMap["se_moshieshiduan2mubiaowendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan2mubiaowendu", 173, 2, "模式二时段2目标温度", "℃")
    this.getPointMap["se_moshieshiduan2guanbengwendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan2guanbengwendu", 175, 2, "模式二时段2关泵温度", "℃")
    this.getPointMap["se_moshieshiduan2kaibengwendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan2kaibengwendu", 177, 2, "模式二时段2开泵温度", "℃")
    this.getPointMap["se_moshieshiduan2zhuanhuowendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan2zhuanhuowendu", 179, 2, "模式二时段2转火温度", "℃")
    this.getPointMap["se_moshieshiduan3qidongshi"] = byteFieldObj.init(new settingField(), "se_moshieshiduan3qidongshi", 192, 2, "模式二时段3启动时", "时")
    this.getPointMap["se_moshieshiduan3qidongfen"] = byteFieldObj.init(new settingField(), "se_moshieshiduan3qidongfen", 194, 2, "模式二时段3启动分", "分")
    this.getPointMap["se_moshieshiduan3tingzhishi"] = byteFieldObj.init(new settingField(), "se_moshieshiduan3tingzhishi", 196, 2, "模式二时段3停止时", "时")
    this.getPointMap["se_moshieshiduan3tingzhifen"] = byteFieldObj.init(new settingField(), "se_moshieshiduan3tingzhifen", 198, 2, "模式二时段3停止分", "分")
    this.getPointMap["se_moshieshiduan3tingluwendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan3tingluwendu", 200, 2, "模式二时段3停炉温度", "℃")
    this.getPointMap["se_moshieshiduan3shiyongwendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan3shiyongwendu", 202, 2, "模式二时段3使用温度", "℃")
    this.getPointMap["se_moshieshiduan3mubiaowendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan3mubiaowendu", 204, 2, "模式二时段3目标温度", "℃")
    this.getPointMap["se_moshieshiduan3guanbengwendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan3guanbengwendu", 206, 2, "模式二时段3关泵温度", "℃")
    this.getPointMap["se_moshieshiduan3kaibengwendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan3kaibengwendu", 208, 2, "模式二时段3开泵温度", "℃")
    this.getPointMap["se_moshieshiduan3zhuanhuowendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan3zhuanhuowendu", 210, 2, "模式二时段3转火温度", "℃")
    this.getPointMap["se_moshieshiduan4qidongshi"] = byteFieldObj.init(new settingField(), "se_moshieshiduan4qidongshi", 212, 2, "模式二时段4启动时", "时")
    this.getPointMap["se_moshieshiduan4qidongfen"] = byteFieldObj.init(new settingField(), "se_moshieshiduan4qidongfen", 214, 2, "模式二时段4启动分", "分")
    this.getPointMap["se_moshieshiduan4tingzhishi"] = byteFieldObj.init(new settingField(), "se_moshieshiduan4tingzhishi", 216, 2, "模式二时段4停止时", "时")
    this.getPointMap["se_moshieshiduan4tingzhifen"] = byteFieldObj.init(new settingField(), "se_moshieshiduan4tingzhifen", 218, 2, "模式二时段4停止分", "分")
    this.getPointMap["se_moshieshiduan4tingluwendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan4tingluwendu", 220, 2, "模式二时段4停炉温度", "℃")
    this.getPointMap["se_moshieshiduan4shiyongwendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan4shiyongwendu", 222, 2, "模式二时段4使用温度", "℃")
    this.getPointMap["se_moshieshiduan4mubiaowendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan4mubiaowendu", 224, 2, "模式二时段4目标温度", "℃")
    this.getPointMap["se_moshieshiduan4guanbengwendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan4guanbengwendu", 226, 2, "模式二时段4关泵温度", "℃")
    this.getPointMap["se_moshieshiduan4kaibengwendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan4kaibengwendu", 228, 2, "模式二时段4开泵温度", "℃")
    this.getPointMap["se_moshieshiduan4zhuanhuowendu"] = byteFieldObj.init(new settingField(), "se_moshieshiduan4zhuanhuowendu", 230, 2, "模式二时段4转火温度", "℃")
    this.getPointMap["se_moshisanshiduan1qidongshi"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan1qidongshi", 232, 2, "模式三时段1启动时", "时")
    this.getPointMap["se_moshisanshiduan1qidongfen"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan1qidongfen", 234, 2, "模式三时段1启动分", "分")
    this.getPointMap["se_moshisanshiduan1tingzhishi"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan1tingzhishi", 236, 2, "模式三时段1停止时", "时")
    this.getPointMap["se_moshisanshiduan1tingzhifen"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan1tingzhifen", 238, 2, "模式三时段1停止分", "分")
    this.getPointMap["se_moshisanshiduan1tingluwendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan1tingluwendu", 240, 2, "模式三时段1停炉温度", "℃")
    this.getPointMap["se_moshisanshiduan1shiyongwendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan1shiyongwendu", 242, 2, "模式三时段1使用温度", "℃")
    this.getPointMap["se_moshisanshiduan1mubiaowendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan1mubiaowendu", 244, 2, "模式三时段1目标温度", "℃")
    this.getPointMap["se_moshisanshiduan1guanbengwendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan1guanbengwendu", 246, 2, "模式三时段1关泵温度", "℃")
    this.getPointMap["se_moshisanshiduan1kaibengwendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan1kaibengwendu", 248, 2, "模式三时段1开泵温度", "℃")
    this.getPointMap["se_moshisanshiduan1zhuanhuowendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan1zhuanhuowendu", 250, 2, "模式三时段1转火温度", "℃")
    this.getPointMap["se_moshisanshiduan2qidongshi"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan2qidongshi", 252, 2, "模式三时段2启动时", "时")
    this.getPointMap["se_moshisanshiduan2qidongfen"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan2qidongfen", 254, 2, "模式三时段2启动分", "分")
    this.getPointMap["se_moshisanshiduan2tingzhishi"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan2tingzhishi", 256, 2, "模式三时段2停止时", "时")
    this.getPointMap["se_moshisanshiduan2tingzhifen"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan2tingzhifen", 258, 2, "模式三时段2停止分", "分")
    this.getPointMap["se_moshisanshiduan2tingluwendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan2tingluwendu", 260, 2, "模式三时段2停炉温度", "℃")
    this.getPointMap["se_moshisanshiduan2shiyongwendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan2shiyongwendu", 262, 2, "模式三时段2使用温度", "℃")
    this.getPointMap["se_moshisanshiduan2mubiaowendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan2mubiaowendu", 264, 2, "模式三时段2目标温度", "℃")
    this.getPointMap["se_moshisanshiduan2guanbengwendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan2guanbengwendu", 266, 2, "模式三时段2关泵温度", "℃")
    this.getPointMap["se_moshisanshiduan2kaibengwendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan2kaibengwendu", 268, 2, "模式三时段2开泵温度", "℃")
    this.getPointMap["se_moshisanshiduan2zhuanhuowendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan2zhuanhuowendu", 270, 2, "模式三时段2转火温度", "℃")
    this.getPointMap["se_moshisanshiduan3qidongshi"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan3qidongshi", 272, 2, "模式三时段3启动时", "时")
    this.getPointMap["se_moshisanshiduan3qidongfen"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan3qidongfen", 274, 2, "模式三时段3启动分", "分")
    this.getPointMap["se_moshisanshiduan3tingzhishi"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan3tingzhishi", 276, 2, "模式三时段3停止时", "时")
    this.getPointMap["se_moshisanshiduan3tingzhifen"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan3tingzhifen", 278, 2, "模式三时段3停止分", "分")
    this.getPointMap["se_moshisanshiduan3tingluwendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan3tingluwendu", 280, 2, "模式三时段3停炉温度", "℃")
    this.getPointMap["se_moshisanshiduan3shiyongwendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan3shiyongwendu", 282, 2, "模式三时段3使用温度", "℃")
    this.getPointMap["se_moshisanshiduan3mubiaowendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan3mubiaowendu", 284, 2, "模式三时段3目标温度", "℃")
    this.getPointMap["se_moshisanshiduan3guanbengwendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan3guanbengwendu", 286, 2, "模式三时段3关泵温度", "℃")
    this.getPointMap["se_moshisanshiduan3kaibengwendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan3kaibengwendu", 288, 2, "模式三时段3开泵温度", "℃")
    this.getPointMap["se_moshisanshiduan3zhuanhuowendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan3zhuanhuowendu", 290, 2, "模式三时段3转火温度", "℃")
    this.getPointMap["se_moshisanshiduan4qidongshi"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan4qidongshi", 292, 2, "模式三时段4启动时", "时")
    this.getPointMap["se_moshisanshiduan4qidongfen"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan4qidongfen", 294, 2, "模式三时段4启动分", "分")
    this.getPointMap["se_moshisanshiduan4tingzhishi"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan4tingzhishi", 296, 2, "模式三时段4停止时", "时")
    this.getPointMap["se_moshisanshiduan4tingzhifen"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan4tingzhifen", 298, 2, "模式三时段4停止分", "分")
    this.getPointMap["se_moshisanshiduan4tingluwendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan4tingluwendu", 300, 2, "模式三时段4停炉温度", "℃")
    this.getPointMap["se_moshisanshiduan4shiyongwendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan4shiyongwendu", 302, 2, "模式三时段4使用温度", "℃")
    this.getPointMap["se_moshisanshiduan4mubiaowendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan4mubiaowendu", 304, 2, "模式三时段4目标温度", "℃")
    this.getPointMap["se_moshisanshiduan4guanbengwendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan4guanbengwendu", 306, 2, "模式三时段4关泵温度", "℃")
    this.getPointMap["se_moshisanshiduan4kaibengwendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan4kaibengwendu", 308, 2, "模式三时段4开泵温度", "℃")
    this.getPointMap["se_moshisanshiduan4zhuanhuowendu"] = byteFieldObj.init(new settingField(), "se_moshisanshiduan4zhuanhuowendu", 310, 2, "模式三时段4转火温度", "℃")
    this.getPointMap["se_zhouyigongzuomoshi"] = byteFieldObj.init(new baseInfoField(), "se_zhouyigongzuomoshi", 312, 2, "周一工作模式", ctl_njrt_common_valueMap.coms_moshi)
    this.getPointMap["se_zhouegongzuomoshi"] = byteFieldObj.init(new baseInfoField(), "se_zhouegongzuomoshi", 314, 2, "周二工作模式", ctl_njrt_common_valueMap.coms_moshi)
    this.getPointMap["se_zhousangongzuomoshi"] = byteFieldObj.init(new baseInfoField(), "se_zhousangongzuomoshi", 316, 2, "周三工作模式", ctl_njrt_common_valueMap.coms_moshi)
    this.getPointMap["se_zhousigongzuomoshi"] = byteFieldObj.init(new baseInfoField(), "se_zhousigongzuomoshi", 318, 2, "周四工作模式", ctl_njrt_common_valueMap.coms_moshi)
    this.getPointMap["se_zhouwugongzuomoshi"] = byteFieldObj.init(new baseInfoField(), "se_zhouwugongzuomoshi", 320, 2, "周五工作模式", ctl_njrt_common_valueMap.coms_moshi)
    this.getPointMap["se_zhouliugongzuomoshi"] = byteFieldObj.init(new baseInfoField(), "se_zhouliugongzuomoshi", 322, 2, "周六工作模式", ctl_njrt_common_valueMap.coms_moshi)
    this.getPointMap["se_zhourigongzuomoshi"] = byteFieldObj.init(new baseInfoField(), "se_zhourigongzuomoshi", 324, 2, "周日工作模式", ctl_njrt_common_valueMap.coms_moshi)
    this.getPointMap["se_chushuichaowenshezhizhi"] = byteFieldObj.init(new settingField(), "se_chushuichaowenshezhizhi", 326, 2, "出水超温设置值", "℃")
    this.getPointMap["se_paiyanchaowenshezhizhi"] = byteFieldObj.init(new settingField(), "se_paiyanchaowenshezhizhi", 328, 2, "排烟超温设置值", "℃")
    this.getPointMap["se_bushuibengmoshishezhizhi"] = byteFieldObj.init(new settingField(), "se_bushuibengmoshishezhizhi", 330, 2, "补水泵模式设置值")
    this.getPointMap["se_xunhuanbengmoshishezhizhi"] = byteFieldObj.init(new settingField(), "se_xunhuanbengmoshishezhizhi", 332, 2, "循环泵模式设置值")
    this.getPointMap["se_xunhuanbenghouyanshishezhizhi"] = byteFieldObj.init(new settingField(), "se_xunhuanbenghouyanshishezhizhi", 334, 2, "循环泵后延时设置值")
    this.getPointMap["se_ranshaofangshishezhizhi"] = byteFieldObj.init(new settingField(), "se_ranshaofangshishezhizhi", 336, 2, "燃烧方式设置值")
    this.getPointMap["se_xunhuanbengqianyanshishezhizhi"] = byteFieldObj.init(new settingField(), "se_xunhuanbengqianyanshishezhizhi", 338, 2, "循环泵前延时设置值")
    this.getPointMap["se_zhouqi"] = byteFieldObj.init(new settingField(), "se_zhouqi", 340, 2, "周期")
    this.getPointMap["se_P"] = byteFieldObj.init(new settingField(), "se_P", 342, 2, "P")
    this.getPointMap["se_I"] = byteFieldObj.init(new settingField(), "se_I", 344, 2, "I")
    this.getPointMap["se_D"] = byteFieldObj.init(new settingField(), "se_D", 346, 2, "D")
    this.getPointMap["se_xingcheng"] = byteFieldObj.init(new settingField(), "se_xingcheng", 348, 2, "行程")
    this.getPointMap["se_yuyan"] = byteFieldObj.init(new baseInfoField(), "se_yuyan", 350, 2, "语言", ctl_njrt_common_valueMap.coms_yuyan)
    this.getPointMap["se_fangdongshangxianwendu"] = byteFieldObj.init(new settingField(), "se_fangdongshangxianwendu", 352, 2, "防冻上限温度", "℃")
    this.getPointMap["se_fangdongxiaxianwendu"] = byteFieldObj.init(new settingField(), "se_fangdongxiaxianwendu", 354, 2, "防冻下限温度", "℃")

    this.getPointMap["mo_chushuiwendu"] = byteFieldObj.init(new mockField(), "mo_chushuiwendu", 13, 2, "出水温度", "℃")
    this.getPointMap["mo_huishuiwendu"] = byteFieldObj.init(new mockField(), "mo_huishuiwendu", 15, 2, "回水温度", "℃")
    this.getPointMap["mo_paiyanwendu"] = byteFieldObj.init(new mockField(), "mo_paiyanwendu", 19, 2, "排烟温度", "℃")
  }
}
