import map from './map'
import {coms_media, coms_power, ctl_njrt_common_valueMap, media, power} from './commonValueMap'
import {deviceModel} from '../model/sdcSoftDevice'
import byteField from '../meta/byteField'
import baseInfoField from '../meta/ctl_njrt/baseInfoField'
import exceptionField from '../meta/ctl_njrt/exceptionField'
import mockField from '../meta/ctl_njrt/mockField'
import openCloseField from '../meta/ctl_njrt/openCloseField'
import powerField from "../meta/ctl_njrt/e3/powerField";
import mediaField from "../meta/ctl_njrt/e3/mediaField";

export default class devicePointMap_CTL_NJRT_E3_DianReShui extends map {
    constructor() {
        super();
        const byteFieldObj =new byteField();
        /*************start 计算属性（不显示）****************/
        this.getPointMap["_jiarezu"]=byteFieldObj.init(new baseInfoField(),"_jiarezu", 0, 0, "加热组", false)
        this.getPointMap["_addshuibeng"]=byteFieldObj.init(new baseInfoField(),"_addshuibeng", 0, 0, "给水泵", false)
        /*************end 计算属性（不显示）****************/

        this.getPointMap[deviceModel.key_point_system_status]=byteFieldObj.init(new baseInfoField(),deviceModel.key_point_system_status,3,2,"系统状态",ctl_njrt_common_valueMap.coms_status)
        this.getPointMap[deviceModel.key_point_run_life]=byteFieldObj.init(new baseInfoField(),deviceModel.key_point_run_life,53,2,"运行时间")
        this.getPointMap[deviceModel.key_point_run_days]=byteFieldObj.init(new baseInfoField(),deviceModel.key_point_run_days,0,0,"运行天数","天")
        this.getPointMap[deviceModel.key_point_run_hours]=byteFieldObj.init(new baseInfoField(),deviceModel.key_point_run_hours,0,0,"运行小时数","时")
        this.getPointMap[deviceModel.key_point_power]=byteFieldObj.init(new powerField(),deviceModel.key_point_power,power.Dian,0,"燃料类型",coms_power)
        this.getPointMap[deviceModel.key_point_media]=byteFieldObj.init(new mediaField(),deviceModel.key_point_media,media.ReShui,0,"介质类型",coms_media)

        this.getPointMap["oc_jixiandishuiweidianji"]=byteFieldObj.init(new openCloseField(),"oc_jixiandishuiweidianji", 4, 2, "极限低水位电极", coms_open_close,0)
        this.getPointMap["oc_dishuiweidianji"]=byteFieldObj.init(new openCloseField(),"oc_dishuiweidianji", 4, 2, "低水位电极", coms_open_close,1)
        this.getPointMap["oc_gaoshuiweidianji"]=byteFieldObj.init(new openCloseField(),"oc_gaoshuiweidianji", 4, 2, "高水位电极", coms_open_close,2)
        this.getPointMap["oc_lubichaowenkaiguan"]=byteFieldObj.init(new openCloseField(),"oc_lubichaowenkaiguan", 4, 2, "炉壁超温开关",coms_open_close,6)
        this.getPointMap["oc_chaoyabaojing"]=byteFieldObj.init(new openCloseField(),"oc_chaoyabaojing", 5, 2, "超压报警", coms_open_close,1)
        this.getPointMap["oc_baojingshuchu"]=byteFieldObj.init(new openCloseField(),"oc_baojingshuchu", 6, 2, "报警输出",coms_open_close,0)
        this.getPointMap["oc_bushuibengkongzhi"]=byteFieldObj.init(new openCloseField(),"oc_bushuibengkongzhi", 6, 2, "补水泵控制",coms_open_close,1)
        this.getPointMap["oc_xunhuanbengkongzhi"]=byteFieldObj.init(new openCloseField(),"oc_xunhuanbengkongzhi", 6, 2, "循环泵控制",coms_open_close,2)
        this.getPointMap["oc_jiarezu1kongzhi"]=byteFieldObj.init(new openCloseField(),"oc_jiarezu1kongzhi", 6, 2, "加热组1控制",coms_open_close,3)
        this.getPointMap["oc_jiarezu2kongzhi"]=byteFieldObj.init(new openCloseField(),"oc_jiarezu2kongzhi", 6, 2, "加热组2控制",coms_open_close,4)
        this.getPointMap["oc_jiarezu3kongzhi"]=byteFieldObj.init(new openCloseField(),"oc_jiarezu3kongzhi", 6, 2, "加热组3控制",coms_open_close,5)
        this.getPointMap["oc_jiarezu4kongzhi"]=byteFieldObj.init(new openCloseField(),"oc_jiarezu4kongzhi", 6, 2, "加热组4控制",coms_open_close,6)
        this.getPointMap["oc_jiarezu5kongzhi"]=byteFieldObj.init(new openCloseField(),"oc_jiarezu5kongzhi", 6, 2, "加热组5控制",coms_open_close,7)
        this.getPointMap["oc_jiarezu6kongzhi"]=byteFieldObj.init(new openCloseField(),"oc_jiarezu6kongzhi", 6, 2, "加热组6控制",coms_open_close,0)
        this.getPointMap["oc_jiarezu7kongzhi"]=byteFieldObj.init(new openCloseField(),"oc_jiarezu7kongzhi", 6, 2, "加热组7控制",coms_open_close,1)
        this.getPointMap["oc_jiarezu8kongzhi"]=byteFieldObj.init(new openCloseField(),"oc_jiarezu8kongzhi", 6, 2, "加热组8控制",coms_open_close,2)
        this.getPointMap["oc_jiarezu9kongzhi"]=byteFieldObj.init(new openCloseField(),"oc_jiarezu9kongzhi", 6, 2, "加热组9控制",coms_open_close,3)
        this.getPointMap["oc_jiarezu10kongzhi"]=byteFieldObj.init(new openCloseField(),"oc_jiarezu10kongzhi", 6, 2, "加热组10控制",coms_open_close,4)
        this.getPointMap["oc_jiarezu11kongzhi"]=byteFieldObj.init(new openCloseField(),"oc_jiarezu11kongzhi", 6, 2, "加热组11控制",coms_open_close,5)
        this.getPointMap["oc_jiarezu12kongzhi"]=byteFieldObj.init(new openCloseField(),"oc_jiarezu12kongzhi", 6, 2, "加热组12控制",coms_open_close,6)

        this.getPointMap["mo_chushuiwendu"]=byteFieldObj.init(new mockField(),"mo_chushuiwendu", 8, 2, "出水温度", "℃")
        this.getPointMap["mo_huishuiwendu"]=byteFieldObj.init(new mockField(),"mo_huishuiwendu", 9, 2, "回水温度", "℃")

        this.getPointMap["ex_chushuiwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_chushuiwenduchuanganqiguzhang", 24, 2, "出水温度传感器故障", 0)
        this.getPointMap["ex_chushuiwendugaobaojing"]=byteFieldObj.init(new exceptionField(),"ex_chushuiwendugaobaojing", 24, 2, "出水温度高报警", 1)
        this.getPointMap["ex_huishuiwenduchuanganqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_huishuiwenduchuanganqiguzhang", 24, 2, "回水温度传感器故障", 2)
        this.getPointMap["ex_jixiandishuiweibaojing"]=byteFieldObj.init(new exceptionField(),"ex_jixiandishuiweibaojing", 24, 2, "极限低水位报警", 3)
        this.getPointMap["ex_shuiweichuanganqiguzhang"]=byteFieldObj.init(new exceptionField(),"ex_shuiweichuanganqiguzhang", 24, 2, "水位传感器故障", 4)
        this.getPointMap["ex_chaoyabaojing"]=byteFieldObj.init(new exceptionField(),"ex_chaoyabaojing", 24, 2, "超压报警", 5)
        this.getPointMap["ex_lubichaowenbaojing"]=byteFieldObj.init(new exceptionField(),"ex_lubichaowenbaojing", 24, 2, "炉壁超温报警", 6)
        this.getPointMap["ex_xitongguzhang"]=byteFieldObj.init(new exceptionField(),"ex_xitongguzhang", 24, 2, "系统故障", 7)
    }
}
