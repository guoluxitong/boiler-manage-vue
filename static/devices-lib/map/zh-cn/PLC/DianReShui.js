"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseMap_1 = require("./BaseMap");
var BaseDevice_1 = require("../../../devices/PLC/BaseDevice");
var CountField_1 = require("../../../meta/CountField");
var meta_1 = require("../../../meta/PLC/meta");
var SdcSoftDevice_1 = require("../../../devices/SdcSoftDevice");
var FixedValueField_1 = require("../../../meta/FixedValueField");
var CountShowField_1 = require("../../../meta/CountShowField");
module.exports = /** @class */ (function (_super) {
    __extends(Map_PLC_DianReShui, _super);
    //static readonly Key = 'PLC_DianReShui'
    //static readonly Commands_Key_Parameters_Setting = '参数设置'
    //static readonly Commands_Key_System_Ctl = '系统控制'
    function Map_PLC_DianReShui() {
        var _this = _super.call(this) || this;
        //this.addCommandGroup(PLC_Map.Commands_Key_Parameters_Setting)
        //this.addCommandGroup(PLC_Map.Commands_Key_System_Ctl)
        /**
         * 计算属性（不显示）
         */
        _this.addPoint(new CountField_1.CountField(BaseDevice_1.PLC.KEY_POINT_Add_SHUI_BENG, '补水泵'));
        _this.addPoint(new CountField_1.CountField(BaseDevice_1.PLC.KEY_POINT_XUN_HUAN_BENG, '循环泵'));
        _this.addPoint(new meta_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, '运行小时数', '时'));
        _this.addPoint(new meta_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, '运行天数', '天'));
        _this.addPoint(new meta_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, '系统状态', '', BaseMap_1.Map_PLC.coms_status));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_POWER, '燃料', 1, Map_PLC_DianReShui.coms_power));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_MEDIA, '介质', 0, Map_PLC_DianReShui.coms_media));
        _this.addPoint(new CountShowField_1.CountShowField(Map_PLC_DianReShui.KEY_BASE, SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_JIA_RE_ZU, '投入加热组', ''));
        _this.addPoint(new meta_1.BaseInfoField('ba_shuiweizhuangtai', 19, 2, '水位状态', '', Map_PLC_DianReShui.coms_level));
        _this.addPoint(new meta_1.BaseInfoField('ba_ranshaoqizhuangtai', 21, 2, '燃烧器状态', '', BaseMap_1.Map_PLC.coms_ranshaoqi_status));
        _this.addPoint(new meta_1.MockField('mo_chushuiwendu', 35, 4, '出水温度', '℃'));
        _this.addPoint(new meta_1.MockField('mo_huishuiwendu', 39, 4, '回水温度', '℃'));
        _this.addPoint(new meta_1.MockField('mo_chushuiyali', 43, 4, '出水压力', 'Mpa'));
        _this.addPoint(new meta_1.MockField('mo_huishuiyali', 47, 4, '回水压力', 'Mpa'));
        _this.addPoint(new meta_1.MockField('mo_qidongjiarezushu', 79, 4, '启动加热组数', '组'));
        _this.addPoint(new meta_1.MockField('mo_qidongjiarezushubaifenbi', 83, 4, '启动加热组数百分比', '%'));
        _this.addPoint(new meta_1.SettingField('se_chaowenbaojingsheding', 127, 4, '超温报警设定', '℃', 0, Map_PLC_DianReShui.Commands_Key_Parameters_Setting, '003E', 10, 200));
        _this.addPoint(new meta_1.SettingField('se_shiyongjiarezushusheding', 131, 4, '使用加热组数设定', '组'));
        _this.addPoint(new meta_1.SettingField('se_touqiejiangeshijiansheding', 135, 4, '投切间隔时间设定', 'S'));
        _this.addPoint(new meta_1.SettingField('se_kuaiqiejiangeshijiansheding', 139, 4, '快切间隔时间设定', 'S'));
        _this.addPoint(new meta_1.SettingField('se_tingluwendusheding', 143, 4, '停炉温度设定', '℃'));
        _this.addPoint(new meta_1.SettingField('se_shiyongwendusheding', 147, 4, '使用温度设定', '℃'));
        _this.addPoint(new meta_1.SettingField('se_qiluwendusheding', 151, 4, '启炉温度设定', '℃'));
        _this.addPoint(new meta_1.SettingField('se_yalidibaojingsheding', 155, 4, '压力低报警设定', 'Mpa'));
        _this.addPoint(new meta_1.SettingField('se_yaligaobaojingsheding', 159, 4, '压力高报警设定', 'Mpa'));
        _this.addPoint(new meta_1.SettingField('se_qibengyalisheding', 163, 4, '启泵压力设定', 'Mpa'));
        _this.addPoint(new meta_1.SettingField('se_tingbengyalisheding', 167, 4, '停泵压力设定', 'Mpa'));
        _this.addPoint(new meta_1.SettingField('se_xunhuanbengshangxianwendusheding', 171, 4, '循环泵上限温度设定', '℃'));
        _this.addPoint(new meta_1.SettingField('se_xunhuanbengxiaxianwendusheding', 175, 4, '循环泵下限温度设定', '℃'));
        _this.addPoint(new meta_1.DeviceField('de_1_addshuibeng_auto', 199, 2, '1#补水泵', BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_Add_SHUI_BENG_1, 201, 2, '1#补水泵', Map_PLC_DianReShui.coms_start_stop));
        _this.addPoint(new meta_1.DeviceField('de_2_addshuibeng_auto', 203, 2, '2#补水泵', BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_Add_SHUI_BENG_2, 205, 2, '2#补水泵', BaseMap_1.Map_PLC.coms_start_stop));
        _this.addPoint(new meta_1.DeviceField('de_baojingshuchuzhishi', 207, 2, '报警输出指示', Map_PLC_DianReShui.coms_open_close));
        _this.addPoint(new meta_1.DeviceField('de_1_xunhuanbeng_auto', 209, 2, '1#循环泵', BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_XUN_HUAN_BENG_1, 211, 2, '1#循环泵', BaseMap_1.Map_PLC.coms_start_stop));
        _this.addPoint(new meta_1.DeviceField('de_2_xunhuanbeng_auto', 213, 2, '2#循环泵', BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_XUN_HUAN_BENG_2, 215, 2, '2#循环泵', BaseMap_1.Map_PLC.coms_start_stop));
        _this.addPoint(new meta_1.ExceptionField('ex_shuiweijidibaojing（dianji）', 233, 2, '水位极低报警（电极）', 8));
        _this.addPoint(new meta_1.ExceptionField('ex_xitongchaoyabaojing（shedingzhi）', 233, 2, '系统超压报警（设定值）', 9));
        _this.addPoint(new meta_1.ExceptionField('ex_xitongyalidibaojing（shedingzhi）', 233, 2, '系统压力低报警（设定值）', 10));
        _this.addPoint(new meta_1.ExceptionField('ex_xitongchaoyabaojing（dianjiedianyalibiao）', 233, 2, '系统超压报警（电接点压力表）', 11));
        _this.addPoint(new meta_1.ExceptionField('ex_xitongyalidibaojing（dianjiedianyalibiao）', 233, 2, '系统压力低报警（电接点压力表）', 12));
        _this.addPoint(new meta_1.ExceptionField('ex_chushuiwenduchuanganqiguzhang', 233, 2, '出水温度传感器故障', 13));
        _this.addPoint(new meta_1.ExceptionField('ex_huishuiwenduchuanganqiguzhang）', 233, 2, '回水温度传感器故障', 14));
        _this.addPoint(new meta_1.ExceptionField('ex_chushuiyalibiansongqiguzhang', 233, 2, '出水压力变送器故障', 15));
        _this.addPoint(new meta_1.ExceptionField('ex_huishuiyalibiansongqiguzhang', 233, 2, '回水压力变送器故障', 0));
        _this.addPoint(new meta_1.ExceptionField('ex_lubichaowenbaojing', 233, 2, '炉壁超温报警', 1));
        _this.addPoint(new meta_1.ExceptionField('ex_waibuliansuoduankaibaojing', 233, 2, '外部连锁断开报警', 2));
        _this.addPoint(new meta_1.ExceptionField('ex_xunhuanbengliansuoduankaibaojing', 233, 2, '循环泵连锁断开报警', 3));
        _this.addPoint(new meta_1.ExceptionField('ex_loudianbaojing', 233, 2, '漏电报警', 4));
        _this.addPoint(new meta_1.ExceptionField('ex_qianyabaojing', 233, 2, '欠压报警', 5));
        _this.addPoint(new meta_1.ExceptionField('ex_chushuichaowenbaojing', 233, 2, '出水超温报警', 6));
        _this.addPoint(new meta_1.ExceptionField('ex_wendushedingcuowubaojing', 233, 2, '温度设定错误报警', 7));
        _this.addPoint(new meta_1.ExceptionField('ex_Axiangguoliubaojing', 235, 2, 'A相过流报警', 8));
        _this.addPoint(new meta_1.ExceptionField('ex_Bxiangguoliubaojing', 235, 2, 'B相过流报警', 9));
        _this.addPoint(new meta_1.ExceptionField('ex_Cxiangguoliubaojing', 235, 2, 'C相过流报警', 10));
        _this.addPoint(new meta_1.OpenCloseField('oc_1#jiarezu', 237, 2, '1#加热组反馈', 0));
        _this.addPoint(new meta_1.OpenCloseField('oc_2#jiarezu', 237, 2, '2#加热组反馈', 1));
        _this.addPoint(new meta_1.OpenCloseField('oc_3#jiarezu', 237, 2, '3#加热组反馈', 2));
        _this.addPoint(new meta_1.OpenCloseField('oc_4#jiarezu', 237, 2, '4#加热组反馈', 3));
        _this.addPoint(new meta_1.OpenCloseField('oc_5#jiarezu', 237, 2, '5#加热组反馈', 4));
        _this.addPoint(new meta_1.OpenCloseField('oc_6#jiarezu', 237, 2, '6#加热组反馈', 5));
        _this.addPoint(new meta_1.OpenCloseField('oc_7#jiarezu', 237, 2, '7#加热组反馈', 6));
        _this.addPoint(new meta_1.OpenCloseField('oc_8#jiarezu', 237, 2, '8#加热组反馈', 7));
        _this.addPoint(new meta_1.OpenCloseField('oc_9#jiarezu', 237, 2, '9#加热组反馈', 8));
        _this.addPoint(new meta_1.OpenCloseField('oc_10#jiarezu', 237, 2, '10#加热组反馈', 9));
        _this.addPoint(new meta_1.OpenCloseField('oc_11#jiarezu', 237, 2, '11#加热组反馈', 10));
        _this.addPoint(new meta_1.OpenCloseField('oc_12#jiarezu', 237, 2, '12#加热组反馈', 11));
        _this.addPoint(new meta_1.OpenCloseField('oc_13#jiarezu', 237, 2, '13#加热组反馈', 12));
        _this.addPoint(new meta_1.OpenCloseField('oc_14#jiarezu', 237, 2, '14#加热组反馈', 13));
        _this.addPoint(new meta_1.OpenCloseField('oc_15#jiarezu', 237, 2, '15#加热组反馈', 14));
        _this.addPoint(new meta_1.OpenCloseField('oc_16#jiarezu', 237, 2, '16#加热组反馈', 15));
        _this.addPoint(new meta_1.OpenCloseField('oc_17#jiarezu', 239, 2, '17#加热组反馈', 16));
        _this.addPoint(new meta_1.OpenCloseField('oc_18#jiarezu', 239, 2, '18#加热组反馈', 17));
        _this.addPoint(new meta_1.OpenCloseField('oc_19#jiarezu', 239, 2, '19#加热组反馈', 18));
        _this.addPoint(new meta_1.OpenCloseField('oc_20#jiarezu', 239, 2, '20#加热组反馈', 19));
        _this.addPoint(new meta_1.OpenCloseField('oc_21#jiarezu', 239, 2, '21#加热组反馈', 20));
        _this.addPoint(new meta_1.OpenCloseField('oc_22#jiarezu', 239, 2, '22#加热组反馈', 21));
        _this.addPoint(new meta_1.OpenCloseField('oc_23#jiarezu', 239, 2, '23#加热组反馈', 22));
        _this.addPoint(new meta_1.OpenCloseField('oc_24#jiarezu', 239, 2, '24#加热组反馈', 23));
        _this.addPoint(new meta_1.OpenCloseField('oc_25#jiarezu', 239, 2, '25#加热组反馈', 24));
        _this.addPoint(new meta_1.OpenCloseField('oc_26#jiarezu', 239, 2, '26#加热组反馈', 25));
        _this.addPoint(new meta_1.OpenCloseField('oc_27#jiarezu', 239, 2, '27#加热组反馈', 26));
        _this.addPoint(new meta_1.OpenCloseField('oc_28#jiarezu', 239, 2, '28#加热组反馈', 27));
        _this.addPoint(new meta_1.OpenCloseField('oc_29#jiarezu', 239, 2, '29#加热组反馈', 28));
        _this.addPoint(new meta_1.OpenCloseField('oc_30#jiarezu', 239, 2, '30#加热组反馈', 29));
        _this.addPoint(new meta_1.OpenCloseField('oc_31#jiarezu', 239, 2, '31#加热组反馈', 30));
        _this.addPoint(new meta_1.OpenCloseField('oc_32#jiarezu', 239, 2, '32#加热组反馈', 31));
        return _this;
    }
    return Map_PLC_DianReShui;
}(BaseMap_1.Map_PLC));
