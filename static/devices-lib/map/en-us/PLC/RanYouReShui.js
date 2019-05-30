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
var _485_1 = require("../../../meta/NJZJ/485");
var SdcSoftDevice_1 = require("../../../devices/SdcSoftDevice");
var FixedValueField_1 = require("../../../meta/FixedValueField");
module.exports = /** @class */ (function (_super) {
    __extends(Map_PLC_RanYouReShui, _super);
    function Map_PLC_RanYouReShui() {
        var _this = _super.call(this) || this;
        _this.addPoint(new CountField_1.CountField(BaseDevice_1.PLC.KEY_POINT_Add_SHUI_BENG, "Make-up Pump"));
        _this.addPoint(new CountField_1.CountField(BaseDevice_1.PLC.KEY_POINT_XUN_HUAN_BENG, "Circulating Pump"));
        _this.addPoint(new _485_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, "Running Hours", "Hours"));
        _this.addPoint(new _485_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, "Running Days", "Days"));
        _this.addPoint(new _485_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, "System State", '', BaseMap_1.Map_PLC.coms_status));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_POWER, "Fuel", 0, Map_PLC_RanYouReShui.coms_power));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_MEDIA, "Medium", 0, Map_PLC_RanYouReShui.coms_media));
        _this.addPoint(new _485_1.BaseInfoField("ba_shuiweizhuangtai", 19, 2, "Water Level State", '', Map_PLC_RanYouReShui.coms_level));
        _this.addPoint(new _485_1.BaseInfoField("ba_ranshaoqizhuangtai", 21, 2, "Burner State", '', BaseMap_1.Map_PLC.coms_ranshaoqi_status));
        _this.addPoint(new meta_1.MockField("mo_chushuiwendu", 35, 4, "Outlet Water Temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_huishuiwendu", 39, 4, "Return Water Temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_paiyanwendu", 43, 4, "Discharged Flue Gas Temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_chushuiyali", 47, 4, "Outlet Water Pressure", "Mpa"));
        _this.addPoint(new meta_1.MockField("mo_huishuiyali", 51, 4, "Return Water Pressure", "Mpa"));
        _this.addPoint(new meta_1.MockField("mo_yacha", 55, 4, "Differential Pressure", "Mpa"));
        _this.addPoint(new meta_1.MockField("mo_lengningqijinyanwendu", 59, 4, "Condenser Inlet Flue Gas Temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_lengningqijinyanyali", 63, 4, "Condenser Inlet Flue Gas Pressure", "Pa"));
        _this.addPoint(new meta_1.MockField("mo_jienengqijinyanwendu", 67, 4, "Economizer Inlet Flue Gas Temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_jienengqijinyanyali", 71, 4, "Economizser Inlet Flue Gas Pressure", "Pa"));
        _this.addPoint(new meta_1.MockField("mo_lutangwendu", 75, 4, "Furnace Temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_lutangyali", 79, 4, "Furnace Pressure", "Pa"));
        _this.addPoint(new meta_1.MockField("mo_kongyuqijinyanwendu", 83, 4, "Air Pre-heater Inlet Flue Gas Temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_kongyuqijinyanyali", 87, 4, "Air Pre-heater Inlet Flue Gas Pressure", "Pa"));
        _this.addPoint(new meta_1.MockField("mo_kongyuqijinfengwendu", 91, 4, "Air Pre-heater Inlet Air Temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_kongyuqijinfengyali", 95, 4, "Air Pre-heater Inlet Air Pressure", "Kpa"));
        _this.addPoint(new meta_1.MockField("mo_kongyuqichufengwendu", 99, 4, "Air Pre-heater Outlet Air Temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_zhufengjipinlüfankui", 103, 4, "Main Blower Frequency Feedback", "Hz"));
        _this.addPoint(new meta_1.MockField("mo_xunhuanfengjipinlüfankui", 107, 4, "Circulating Blower Frequency Feedback", "Hz"));
        _this.addPoint(new meta_1.MockField("mo_addshuibengpinlüfankui", 111, 4, "Make-up Pump Feedback", "Hz"));
        _this.addPoint(new meta_1.MockField("mo_shiwaiwendu", 115, 4, "Outdoor Temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_xunhuanbeng1pinlüfankui", 119, 4, "Circulating Pump 1 Frequency Feedback", "Hz"));
        _this.addPoint(new meta_1.MockField("mo_xunhuanbeng2pinlüfankui", 123, 4, "Circulating Pump 2 Frequency Feedback", "Hz"));
        _this.addPoint(new meta_1.SettingField("se_qiluwendusheding", 248, 4, "Boiler Start Temperature Setting", "℃"));
        _this.addPoint(new meta_1.SettingField("se_mubiaowendusheding", 252, 4, "Target Temperature Setting", "℃"));
        _this.addPoint(new meta_1.SettingField("se_tingluwendusheding", 256, 4, "Boiler Shutdown Temperature Setting", "℃"));
        _this.addPoint(new meta_1.SettingField("se_yalidisheding", 260, 4, "Low Pressure Setting", "Mpa"));
        _this.addPoint(new meta_1.SettingField("se_yaligaosheding", 264, 4, "High Pressure Setting", "Mpa"));
        _this.addPoint(new meta_1.SettingField("se_paiyanwenduchaogaobaojingsheding", 268, 4, "se_paiyanwenduchaogaobaojingsheding", "℃"));
        _this.addPoint(new meta_1.SettingField("se_chukouwenduchaogaobaojingsheding", 272, 4, "se_chukouwenduchaogaobaojingsheding", "℃"));
        _this.addPoint(new meta_1.SettingField("se_yalichaogaobaojingsheding", 276, 4, "se_yalichaogaobaojingsheding", "Mpa"));
        _this.addPoint(new meta_1.SettingField("se_yalichaodibaojingsheding", 280, 4, "se_yalichaodibaojingsheding", "Mpa"));
        _this.addPoint(new meta_1.DeviceField("de_ranshaoqiqiting", 368, 2, "Burner On-off", BaseMap_1.Map_PLC.coms_ranshaoqi_status));
        _this.addPoint(new meta_1.DeviceField("de_1_addshuibeng_auto", 370, 2, "1#Make-up Pump Manual/Automatic", BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_Add_SHUI_BENG_1, 372, 2, "1#Make-up Pump On/Off", Map_PLC_RanYouReShui.coms_start_stop));
        _this.addPoint(new meta_1.DeviceField("de_2_addshuibeng_auto", 374, 2, "2#Make-up Pump Manual/Automatic", BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_Add_SHUI_BENG_2, 376, 2, "2#Make-up Pump On/Off", Map_PLC_RanYouReShui.coms_start_stop));
        _this.addPoint(new meta_1.DeviceField("de_1_xunhuanbeng_auto", 378, 2, "1#Circulating Pump Manual/Automatic", BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_XUN_HUAN_BENG_1, 380, 2, "1#Circulating Pump On/Off", Map_PLC_RanYouReShui.coms_start_stop));
        _this.addPoint(new meta_1.DeviceField("de_2_xunhuanbeng_auto", 382, 2, "2#Circulating Pump Manual/Automatic", BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_XUN_HUAN_BENG_2, 384, 2, "2#Circulating Pump On/Off", Map_PLC_RanYouReShui.coms_start_stop));
        _this.addPoint(new meta_1.ExceptionField("ex_lubichaowenbaojing", 448, 2, "Furnace Wall Over Temperature Alarm", 0));
        _this.addPoint(new meta_1.ExceptionField("ex_chushuiwenduchuanganqiguzhang", 448, 2, "Outlet Water Temperature Transmitter Failure", 1));
        _this.addPoint(new meta_1.ExceptionField("ex_huishuiwenduchuanganqiguzhang", 448, 2, "Return Water Temperature Transmitter Failure", 2));
        _this.addPoint(new meta_1.ExceptionField("ex_paiyanwenduchuanganqiguzhang", 448, 2, "Discharged Flue Gas Temperature Transmitter Failure", 3));
        _this.addPoint(new meta_1.ExceptionField("ex_wendushedingcuowubaojing", 448, 2, "Temperature Setting Error Alarm", 4));
        _this.addPoint(new meta_1.ExceptionField("ex_xunhuanbengliansuoduankaibaojing", 448, 2, "Circulating Pump Interlock Break Alarm", 5));
        _this.addPoint(new meta_1.ExceptionField("ex_waibuliansuoduankaibaojing", 448, 2, "External Interlock Break Alarm", 6));
        _this.addPoint(new meta_1.ExceptionField("ex_chushuiyalibiansongqiguzhang", 448, 2, "Outlet Water Pressure Transmitter Failure", 7));
        _this.addPoint(new meta_1.ExceptionField("ex_ranshaojiguzhang", 448, 2, "Burner Failure", 8));
        _this.addPoint(new meta_1.ExceptionField("ex_ranqixielou", 448, 2, "Gas Leakage", 9));
        _this.addPoint(new meta_1.ExceptionField("ex_ranqiyaliyichang", 448, 2, "Gas Pressure Abnormity", 10));
        _this.addPoint(new meta_1.ExceptionField("ex_yalichaogaobaojing", 448, 2, "Ultrahigh Pressure Alarm", 11));
        _this.addPoint(new meta_1.ExceptionField("ex_yalichaodibaojing", 448, 2, "Ultralow Pressure Alarm", 12));
        _this.addPoint(new meta_1.ExceptionField("ex_paiyanwenduchaogaobaojing", 448, 2, "Ultrahigh Discharged Flue Gas Temperature Alarm", 13));
        _this.addPoint(new meta_1.ExceptionField("ex_chushuiwenduchaogaobaojing", 448, 2, "Ultrahigh Outlet Water Temperature Alarm", 14));
        _this.addPoint(new meta_1.ExceptionField("ex_queshuibaohubaojing", 448, 2, "Water Shortage Protection Alarm", 15));
        _this.addPoint(new meta_1.ExceptionField("ex_huishuiyalibiansongqiguzhang", 450, 2, "Return Water Pressure Transmitter Failure", 8));
        return _this;
    }
    return Map_PLC_RanYouReShui;
}(BaseMap_1.Map_PLC));
