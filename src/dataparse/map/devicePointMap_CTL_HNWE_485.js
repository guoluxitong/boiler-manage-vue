import map from './map'
import {commandsMap} from './map'

import {
    coms_media,
    coms_power,
    coms_open_close,
    ctl_njrt_common_valueMap
} from './commonValueMap'
import {deviceModel} from '../model/sdcSoftDevice'
import byteField from '../meta/byteField'
import baseInfoField from '../meta/ctl_hnwe/baseInfoField'
import exceptionField from '../meta/ctl_hnwe/exceptionField'
import mockField from '../meta/ctl_hnwe/mockField'
import openCloseField from '../meta/ctl_hnwe/openCloseField'
import powerField from '../meta/ctl_hnwe/powerField'
import mediaField from '../meta/ctl_hnwe/mediaField'
import deviceField from "../meta/ctl_hnwe/deviceField";
import settingField from "../meta/ctl_hnwe/settingField";

export default class devicePointMap_CTL_HNWE_485 extends map{
    constructor(){
        super()

      const commands_key_parameters_setting = "设置参数";
      const commands_key_system_ctl = "系统控制";

        const byteFieldObj =new byteField()
        const coms_status = {
            0: "待机",
            1: "Test mode 测试模式",
            2: "DHW/CH init",
            3: "DHW/CH 模式",
            4: "DHW/CH cool 模式",
            5: "DHW/CH防冻模式",
            6: "DHW初始化",
            7: "DHW模式",
            8: "DHW cool 模式",
            9: "CH init",
            10: "CH 模式",
            11: "CH cool",
            12: "防冻模式",
        }
        const coms_error = {
            0: "Esys控制器",
            1: "显示板",
        }
        const coms_biaozhi = {
            0:"阻塞",
            1:"锁定"
        }
        const coms_xuqiu = {
            0:"检测到CH或测试的加热需求",
            1:"没有CH或测试的加热需求"
        }
        const coms_ExceptionField = {
            1:"点火失败",
            2:"假火焰信号",
            3:"温度超上限",
            4:"APS错误",
            5:"没有收到风机的的转速信号",
            6:"APS错误",
            7:"TTB（排放保护）激活",
            8:"火检电路错误",
            9:"阀门驱动电路错误",
            12: "内部控制错误",
            13: "远程复位错误",
            15: "漂移测试错误",
            16: "供水传感器的固定错误",
            17: "回水传感器的固定错误",
            18: "传感器损坏测试",
            21: "内部控制错误",
            25: "内部控制错误",
            30: "CH传感器短路",
            31: "CH传感器开路",
            32: "DHW传感器短路",
            33: "DHW传感器开路",
            34: "供电过低",
            37: "水压过低",
            43: "CH回水传感器短路",
            44: "CH回水传感器开路",
            45: "TTB传感器短路",
            46: "TTB传感器开路",
            47: "水压传感器未接或损坏",
            76: "外部限制断开",
            77: "虹吸管输入错误",
            80: "供水-回水传感器接反",
            81: "漂移测试警告",
            82: "热交换器传感器短路",
            83: "热交换器传感器开路",
            84: "热交换器上限",
            87: "超温错误",
            89: "不正确的参数设置",
            90: "DSP和Maxsys的固件不匹配",
            91: "级联传感器短路",
            92: "级联传感器开路",
            93: "室外温度传感器短路",
            94: "DSP内部错误",
            95: "级联CH供水传感器错误",
            96: "室外温度传感器开路",
            97: "级联结构不匹配",
            98: "DSP之间的通讯错误",
            99: "DSP与Msxsys之间的通讯错误",
        }
        this.getPointMap[deviceModel.key_point_power]=byteFieldObj.init(new powerField(), deviceModel.key_point_power,0,0, "燃料类型",  coms_power)
        this.getPointMap[deviceModel.key_point_media]=byteFieldObj.init(new mediaField(), deviceModel.key_point_media,0,0, "介质类型",  coms_media)
 
        this.getPointMap[deviceModel.key_point_system_status]=byteFieldObj.init(new baseInfoField(), deviceModel.key_point_system_status, 9, 2, "工作状态",coms_status)
 
        this.getPointMap["mo_cuowuyuan"]=byteFieldObj.init(new baseInfoField(), "mo_cuowuyuan", 7, 2, "错误源",coms_error)
 
        this.getPointMap["oc_CHmoshi1"]=byteFieldObj.init(new openCloseField(), "oc_CHmoshi1", 3, 1, "CH模式",0,coms_open_close)
        this.getPointMap["oc_DHWmoshi1"]=byteFieldObj.init(new openCloseField(), "oc_DHWmoshi1", 3, 1, "DHW模式",1,coms_open_close)
        this.getPointMap["oc_ceshimoshi1"]=byteFieldObj.init(new openCloseField(), "oc_ceshimoshi1", 3, 1, "测试模式",2,coms_open_close)
        this.getPointMap["oc_huoyan1"]=byteFieldObj.init(new openCloseField(), "oc_huoyan1", 3, 1, "火焰",3,coms_open_close)
        this.getPointMap["oc_cuowu"]=byteFieldObj.init(new openCloseField(), "oc_cuowu", 4, 1, "错误",0,coms_open_close)
        this.getPointMap["oc_fa1"]=byteFieldObj.init(new openCloseField(), "oc_fa1", 4, 1, "阀1",1,coms_open_close)
        this.getPointMap["oc_fa2"]=byteFieldObj.init(new openCloseField(), "oc_fa2", 4, 1, "阀2",2,coms_open_close)
        this.getPointMap["oc_APS"]=byteFieldObj.init(new openCloseField(), "oc_APS", 4, 1, "APS",3,coms_open_close)
        this.getPointMap["oc_fengji"]=byteFieldObj.init(new openCloseField(), "oc_fengji", 4, 1, "风机",4,coms_open_close)
        this.getPointMap["oc_shuibeng"]=byteFieldObj.init(new openCloseField(), "oc_shuibeng", 4, 1, "水泵",5,coms_open_close)
        this.getPointMap["oc_suoding"]=byteFieldObj.init(new openCloseField(), "oc_suoding", 5, 1, "错误标志",1,coms_biaozhi)
 //
        this.getPointMap["oc_OEMcuowuhao"]=byteFieldObj.init(new exceptionField(), "oc_OEMcuowuhao", 6, 1, "报警",coms_ExceptionField)
 //
        this.getPointMap["mo_jiarexuqiu"]=byteFieldObj.init(new baseInfoField(),"mo_jiarexuqiu", 19, 1, "加热需求",coms_xuqiu)
 
        this.getPointMap["mo_shedingzhi"]=byteFieldObj.init(new settingField(), "mo_shedingzhi", 22, 2, "设定值","",commands_key_parameters_setting, "0202", 10, 95)
        this.getPointMap["mo_CHgongshuiwendu"]=byteFieldObj.init(new mockField(), "mo_CHgongshuiwendu", 29, 2, "CH供水温度","℃",10)
        this.getPointMap["mo_CHhuishuiwendu"]=byteFieldObj.init(new mockField(), "mo_CHhuishuiwendu", 31, 2, "CH回水温度","℃")
        this.getPointMap["de_yanwen"]=byteFieldObj.init(new mockField(), "de_yanwen", 35, 2, "烟温","℃")
        this.getPointMap["de_yanwenchuanganqi"]=byteFieldObj.init(new deviceField(), "de_yanwenchuanganqi", 35, 2, "烟温传感器",coms_open_close)
        this.getPointMap["mo_OTCwendu"]=byteFieldObj.init(new mockField(),"mo_OTCwendu", 37, 2, "OTC温度","℃")
        this.getPointMap["mo_huoyandianliu"]=byteFieldObj.init(new mockField(),"mo_huoyandianliu", 41, 2, "火焰电流","uA")
        this.getPointMap["mo_diaojieshuiping"]=byteFieldObj.init(new mockField(), "mo_diaojieshuiping", 43, 2, "调节水平","")
        this.getPointMap["mo_jisuanhoudeshedingzhi"]=byteFieldObj.init(new mockField(), "mo_jisuanhoudeshedingzhi", 45, 2, "计算后的设定值")
        this.getPointMap["mo_CHzuidashedingzhi"]=byteFieldObj.init(new settingField(), "mo_CHzuidashedingzhi", 52, 2, "CH最大设定值","",commands_key_parameters_setting, "0500", 20, 95)
 
        this.getPointMap["oc_ceshimoshi"]=byteFieldObj.init(new openCloseField(), "oc_ceshimoshi", 12, 1, "测试模式",coms_open_close)
        this.getPointMap["oc_CHmoshi"]=byteFieldObj.init(new openCloseField(), "oc_CHmoshi", 12, 1, "CH模式",2,coms_open_close)
        this.getPointMap["oc_fangdongmoshi"]=byteFieldObj.init(new openCloseField(), "oc_fangdongmoshi", 12, 1, "防冻模式",3,coms_open_close)
        this.getPointMap["oc_huoyan"]=byteFieldObj.init(new openCloseField(), "oc_huoyan", 12, 1, "火焰",4,coms_open_close)
        this.getPointMap["oc_CHbeng"]=byteFieldObj.init(new openCloseField(), "oc_CHbeng", 12, 1, "CH泵",5,coms_open_close)
        this.getPointMap["oc_jilianbeng"]=byteFieldObj.init(new openCloseField(), "oc_jilianbeng", 12, 1, "级联泵",7,coms_open_close)
 
    }
}
