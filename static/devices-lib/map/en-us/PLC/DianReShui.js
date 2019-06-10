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
    //static readonly Key = "PLC_DianReShui";
    //static readonly Commands_Key_Parameters_Setting = "参数设置";
    //static readonly Commands_Key_System_Ctl = "系统控制";
    function Map_PLC_DianReShui() {
        var _this = _super.call(this) || this;
        //this.addCommandGroup(PLC_Map.Commands_Key_Parameters_Setting);
        //this.addCommandGroup(PLC_Map.Commands_Key_System_Ctl);
        /**
         * 计算属性（不显示）
         */
        _this.addPoint(new CountField_1.CountField(BaseDevice_1.PLC.KEY_POINT_Add_SHUI_BENG, "Make-up Pump"));
        _this.addPoint(new CountField_1.CountField(BaseDevice_1.PLC.KEY_POINT_XUN_HUAN_BENG, "Circulating Pump"));
        _this.addPoint(new meta_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, "Running Hours", "Hours"));
        _this.addPoint(new meta_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, "Running Days", "Days"));
        _this.addPoint(new meta_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, "System State", '', BaseMap_1.Map_PLC.coms_status));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_POWER, "Fuel", 1, Map_PLC_DianReShui.coms_power));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_MEDIA, "Medium", 0, Map_PLC_DianReShui.coms_media));
        _this.addPoint(new CountShowField_1.CountShowField(Map_PLC_DianReShui.KEY_BASE, SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_JIA_RE_ZU, "Put into heating group", ''));
        _this.addPoint(new meta_1.BaseInfoField("ba_shuiweizhuangtai", 19, 2, "Water Level State", '', Map_PLC_DianReShui.coms_level));
        _this.addPoint(new meta_1.BaseInfoField("ba_ranshaoqizhuangtai", 21, 2, "Burner State", '', BaseMap_1.Map_PLC.coms_ranshaoqi_status));
        _this.addPoint(new meta_1.MockField("mo_chushuiwendu", 35, 4, "Outlet Water Temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_huishuiwendu", 39, 4, "Return Water Temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_chushuiyali", 43, 4, "Outlet Water Pressure", "Mpa"));
        _this.addPoint(new meta_1.MockField("mo_huishuiyali", 47, 4, "Return Water Pressure", "Mpa"));
        _this.addPoint(new meta_1.MockField("mo_qidongjiarezushu", 79, 4, "Heating Blocks Starting Quantity", "groups"));
        _this.addPoint(new meta_1.MockField("mo_qidongjiarezushubaifenbi", 83, 4, "Heating Blocks Starting Percentage", "%"));
        _this.addPoint(new meta_1.SettingField("se_chaowenbaojingsheding", 127, 4, "Over-temperature Alarm Setting", "℃", 0, Map_PLC_DianReShui.Commands_Key_Parameters_Setting, "003E", 10, 200));
        _this.addPoint(new meta_1.SettingField("se_shiyongjiarezushusheding", 131, 4, "Qty of Heating Blocks in Service Setting", "groups"));
        _this.addPoint(new meta_1.SettingField("se_touqiejiangeshijiansheding", 135, 4, "Switching Interval Setting", "S"));
        _this.addPoint(new meta_1.SettingField("se_kuaiqiejiangeshijiansheding", 139, 4, "Quick Switching Interval Setting", "S"));
        _this.addPoint(new meta_1.SettingField("se_tingluwendusheding", 143, 4, "Boiler Shutdown Temperature Setting", "℃"));
        _this.addPoint(new meta_1.SettingField("se_shiyongwendusheding", 147, 4, "Operation Temperature Setting", "℃"));
        _this.addPoint(new meta_1.SettingField("se_qiluwendusheding", 151, 4, "Boiler Starting Temperature Setting", "℃"));
        _this.addPoint(new meta_1.SettingField("se_yalidibaojingsheding", 155, 4, "Low Pressure Alarm Setting", "Mpa"));
        _this.addPoint(new meta_1.SettingField("se_yaligaobaojingsheding", 159, 4, "High Pressure Alarm Setting", "Mpa"));
        _this.addPoint(new meta_1.SettingField("se_qibengyalisheding", 163, 4, "Pump-on Pressure Setting", "Mpa"));
        _this.addPoint(new meta_1.SettingField("se_tingbengyalisheding", 167, 4, "Pump-off Pressure Setting", "Mpa"));
        _this.addPoint(new meta_1.SettingField("se_xunhuanbengshangxianwendusheding", 171, 4, "Circulating Pump Upper Limit Setting", "℃"));
        _this.addPoint(new meta_1.SettingField("se_xunhuanbengxiaxianwendusheding", 175, 4, "Circulating Pump Lower Limit Setting", "℃"));
        _this.addPoint(new meta_1.DeviceField("de_1_addshuibeng_auto", 199, 2, "1#Make-up Pump", BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_Add_SHUI_BENG_1, 201, 2, "1#Make-up Pump", Map_PLC_DianReShui.coms_start_stop));
        _this.addPoint(new meta_1.DeviceField("de_2_addshuibeng_auto", 203, 2, "2#Make-up Pump", BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_Add_SHUI_BENG_2, 205, 2, "2#Make-up Pump", BaseMap_1.Map_PLC.coms_start_stop));
        _this.addPoint(new meta_1.DeviceField("de_baojingshuchuzhishi", 207, 2, "Alarm Output Indication", Map_PLC_DianReShui.coms_open_close));
        _this.addPoint(new meta_1.DeviceField("de_1_xunhuanbeng_auto", 209, 2, "1#Circulating Pump", BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_XUN_HUAN_BENG_1, 211, 2, "1#Circulating Pump On-off", BaseMap_1.Map_PLC.coms_start_stop));
        _this.addPoint(new meta_1.DeviceField("de_2_xunhuanbeng_auto", 213, 2, "2#Circulating Pump ", BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_XUN_HUAN_BENG_2, 215, 2, "2#Circulating Pump On-off", BaseMap_1.Map_PLC.coms_start_stop));
        _this.addPoint(new meta_1.ExceptionField("ex_shuiweijidibaojing（dianji）", 233, 2, "Extrem Low Water Level Alarm( Electrode)", 8));
        _this.addPoint(new meta_1.ExceptionField("ex_xitongchaoyabaojing（shedingzhi）", 233, 2, "System Over-pressure Alarm(Setting Value)", 9));
        _this.addPoint(new meta_1.ExceptionField("ex_xitongyalidibaojing（shedingzhi）", 233, 2, "System Low pressure Alarm ( Setting Value)", 10));
        _this.addPoint(new meta_1.ExceptionField("ex_xitongchaoyabaojing（dianjiedianyalibiao）", 233, 2, "System Over-pressure Alarm( Electro Connecting Pressure Gauge)", 11));
        _this.addPoint(new meta_1.ExceptionField("ex_xitongyalidibaojing（dianjiedianyalibiao）", 233, 2, "SystemLow pressure Alarm( Electro Connecting Pressure Gauge)", 12));
        _this.addPoint(new meta_1.ExceptionField("ex_chushuiwenduchuanganqiguzhang", 233, 2, "Outlet Temperature Sensor Failure", 13));
        _this.addPoint(new meta_1.ExceptionField("ex_huishuiwenduchuanganqiguzhang）", 233, 2, "Return Water Temperature Sensor Failure", 14));
        _this.addPoint(new meta_1.ExceptionField("ex_chushuiyalibiansongqiguzhang", 233, 2, "Outlet Water Pressure Transmitter Failure", 15));
        _this.addPoint(new meta_1.ExceptionField("ex_huishuiyalibiansongqiguzhang", 233, 2, "Return Water Pressure transmitter Failure", 0));
        _this.addPoint(new meta_1.ExceptionField("ex_lubichaowenbaojing", 233, 2, "Furnace Wall Over-temperature Alarm", 1));
        _this.addPoint(new meta_1.ExceptionField("ex_waibuliansuoduankaibaojing", 233, 2, "External Interlock Break Alarm", 2));
        _this.addPoint(new meta_1.ExceptionField("ex_xunhuanbengliansuoduankaibaojing", 233, 2, "Circulating Pump Interlock Break Alarm", 3));
        _this.addPoint(new meta_1.ExceptionField("ex_loudianbaojing", 233, 2, "Electric Leakage Alarm", 4));
        _this.addPoint(new meta_1.ExceptionField("ex_qianyabaojing", 233, 2, "Undervoltage Alarm", 5));
        _this.addPoint(new meta_1.ExceptionField("ex_chushuichaowenbaojing", 233, 2, "Outlet Water Over-temperature Alarm", 6));
        _this.addPoint(new meta_1.ExceptionField("ex_wendushedingcuowubaojing", 233, 2, "Temperature Setting Error Alarm", 7));
        _this.addPoint(new meta_1.ExceptionField("ex_Axiangguoliubaojing", 235, 2, "A Phase Over-current Alarm", 8));
        _this.addPoint(new meta_1.ExceptionField("ex_Bxiangguoliubaojing", 235, 2, "B Phase Over-current Alarm", 9));
        _this.addPoint(new meta_1.ExceptionField("ex_Cxiangguoliubaojing", 235, 2, "C Phase Over-current Alarm", 10));
        _this.addPoint(new meta_1.OpenCloseField("oc_1#jiarezu", 237, 2, "1#Heating Block Feedback", 0));
        _this.addPoint(new meta_1.OpenCloseField("oc_2#jiarezu", 237, 2, "2#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_3#jiarezu", 237, 2, "3#Heating Block Feedback", 2));
        _this.addPoint(new meta_1.OpenCloseField("oc_4#jiarezu", 237, 2, "4#Heating Block Feedback", 3));
        _this.addPoint(new meta_1.OpenCloseField("oc_5#jiarezu", 237, 2, "5#Heating Block Feedback", 4));
        _this.addPoint(new meta_1.OpenCloseField("oc_6#jiarezu", 237, 2, "6#Heating Block Feedback", 5));
        _this.addPoint(new meta_1.OpenCloseField("oc_7#jiarezu", 237, 2, "7#Heating Block Feedback", 6));
        _this.addPoint(new meta_1.OpenCloseField("oc_8#jiarezu", 237, 2, "8#Heating Block Feedback", 7));
        _this.addPoint(new meta_1.OpenCloseField("oc_9#jiarezu", 237, 2, "9#Heating Block Feedback", 8));
        _this.addPoint(new meta_1.OpenCloseField("oc_10#jiarezu", 237, 2, "10#Heating Block Feedback", 9));
        _this.addPoint(new meta_1.OpenCloseField("oc_11#jiarezu", 237, 2, "11#Heating Block Feedback", 10));
        _this.addPoint(new meta_1.OpenCloseField("oc_12#jiarezu", 237, 2, "12#Heating Block Feedback", 11));
        _this.addPoint(new meta_1.OpenCloseField("oc_13#jiarezu", 237, 2, "13#Heating Block Feedback", 12));
        _this.addPoint(new meta_1.OpenCloseField("oc_14#jiarezu", 237, 2, "14#Heating Block Feedback", 13));
        _this.addPoint(new meta_1.OpenCloseField("oc_15#jiarezu", 237, 2, "15#Heating Block Feedback", 14));
        _this.addPoint(new meta_1.OpenCloseField("oc_16#jiarezu", 237, 2, "16#Heating Block Feedback", 15));
        _this.addPoint(new meta_1.OpenCloseField("oc_17#jiarezu", 239, 2, "17#Heating Block Feedback", 16));
        _this.addPoint(new meta_1.OpenCloseField("oc_18#jiarezu", 239, 2, "18#Heating Block Feedback", 17));
        _this.addPoint(new meta_1.OpenCloseField("oc_19#jiarezu", 239, 2, "19#Heating Block Feedback", 18));
        _this.addPoint(new meta_1.OpenCloseField("oc_20#jiarezu", 239, 2, "20#Heating Block Feedback", 19));
        _this.addPoint(new meta_1.OpenCloseField("oc_21#jiarezu", 239, 2, "21#Heating Block Feedback", 20));
        _this.addPoint(new meta_1.OpenCloseField("oc_22#jiarezu", 239, 2, "22#Heating Block Feedback", 21));
        _this.addPoint(new meta_1.OpenCloseField("oc_23#jiarezu", 239, 2, "23#Heating Block Feedback", 22));
        _this.addPoint(new meta_1.OpenCloseField("oc_24#jiarezu", 239, 2, "24#Heating Block Feedback", 23));
        _this.addPoint(new meta_1.OpenCloseField("oc_25#jiarezu", 239, 2, "25#Heating Block Feedback", 24));
        _this.addPoint(new meta_1.OpenCloseField("oc_26#jiarezu", 239, 2, "26#Heating Block Feedback", 25));
        _this.addPoint(new meta_1.OpenCloseField("oc_27#jiarezu", 239, 2, "27#Heating Block Feedback", 26));
        _this.addPoint(new meta_1.OpenCloseField("oc_28#jiarezu", 239, 2, "28#Heating Block Feedback", 27));
        _this.addPoint(new meta_1.OpenCloseField("oc_29#jiarezu", 239, 2, "29#Heating Block Feedback", 28));
        _this.addPoint(new meta_1.OpenCloseField("oc_30#jiarezu", 239, 2, "30#Heating Block Feedback", 29));
        _this.addPoint(new meta_1.OpenCloseField("oc_31#jiarezu", 239, 2, "31#Heating Block Feedback", 30));
        _this.addPoint(new meta_1.OpenCloseField("oc_32#jiarezu", 239, 2, "32#Heating Block Feedback", 31));
        return _this;
    }
    return Map_PLC_DianReShui;
}(BaseMap_1.Map_PLC));
