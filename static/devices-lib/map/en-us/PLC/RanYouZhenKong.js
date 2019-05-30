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
    __extends(Map_PLC_RanYouZhenKong, _super);
    function Map_PLC_RanYouZhenKong() {
        var _this = _super.call(this) || this;
        _this.addPoint(new CountField_1.CountField(BaseDevice_1.PLC.KEY_POINT_Add_SHUI_BENG, "Feed water pump"));
        _this.addPoint(new CountField_1.CountField(BaseDevice_1.PLC.KEY_POINT_XUN_HUAN_BENG, "Circulating Pump"));
        _this.addPoint(new CountField_1.CountField(BaseDevice_1.PLC.KEY_POINT_ZHEN_KONG_BENG, "Vacuum pump"));
        _this.addPoint(new _485_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, "Running Hours", "Hours"));
        _this.addPoint(new _485_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, "Running Days", "Day"));
        _this.addPoint(new _485_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, "System State", '', BaseMap_1.Map_PLC.coms_status));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_POWER, "Fuel", 0, Map_PLC_RanYouZhenKong.coms_power));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_MEDIA, "Medium", 4, Map_PLC_RanYouZhenKong.coms_media));
        _this.addPoint(new _485_1.BaseInfoField("ba_shuiweizhuangtai", 19, 2, "Water Level State", '', Map_PLC_RanYouZhenKong.coms_level));
        _this.addPoint(new _485_1.BaseInfoField("ba_ranshaoqizhuangtai", 21, 2, "Burner State", '', BaseMap_1.Map_PLC.coms_ranshaoqi_status));
        _this.addPoint(new meta_1.MockField("mo_remeishuiwendu", 35, 4, "Hot Medium Water Temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_zhenkongyali", 39, 4, "Vacuum Pressure", "Kpa"));
        _this.addPoint(new meta_1.MockField("mo_jinyanwendu", 43, 4, "Inlet Flue Gas Temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_paiyanwendu", 47, 4, "Discharged Flue Gas Temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_shiwaiwendu", 51, 4, "Outdoor Temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_cainuanchushuiwendu", 55, 4, "Heating Outlet Temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_cainuanhuishuiwendu", 59, 4, "Heating Backwater Temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_cainuanchushuiyali", 63, 4, "Heating effluent pressure", "Mpa"));
        _this.addPoint(new meta_1.MockField("mo_cainuanhuishuiyali", 67, 4, "Heating Return Water Pressure", "Mpa"));
        _this.addPoint(new meta_1.MockField("mo_shenghuochushuiwendu", 71, 4, "Domesic Outlet Water Temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_shenghuohuishuiwendu", 75, 4, "Domestic Return Water Temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_shenghuochushuiyali", 79, 4, "Domestic Outlet Water Pressure", "Mpa"));
        _this.addPoint(new meta_1.MockField("mo_shenghuohuishuiyali", 83, 4, "Domestic Return Water Pressure", "Mpa"));
        _this.addPoint(new meta_1.SettingField("se_qiluwendusheding", 111, 4, "Boiler Start Temperature Setting", "℃"));
        _this.addPoint(new meta_1.SettingField("se_mubiaowendusheding", 115, 4, "Target Temperature Setting", "℃"));
        _this.addPoint(new meta_1.SettingField("se_tingluwendusheding", 119, 4, "Boiler Shutdown Temperature Setting", "℃"));
        _this.addPoint(new meta_1.SettingField("se_zhenkongyalidisheding", 123, 4, "Low Vocuum Pressure Setting", "KPa"));
        _this.addPoint(new meta_1.SettingField("se_zhenkongyaligaosheding", 127, 4, "High Vocuum Pressure Setting ", "KPa"));
        _this.addPoint(new meta_1.SettingField("se_paiyanwenduchaogaobaojingsheding", 131, 4, "Ultrahigh Discharged Flue Gas Temperature Alarm Setting ", "℃"));
        _this.addPoint(new meta_1.SettingField("se_chukouwenduchaogaobaojingsheding", 135, 4, "Ultrahigh Hot Medium Water Temperature Alarm Setting ", "℃"));
        _this.addPoint(new meta_1.SettingField("se_zhenkongyalichaogaobaojingsheding", 139, 4, "Ultrahigh Vocuum Pressure Alarm Setting", "KPa"));
        _this.addPoint(new meta_1.DeviceField("de_ranshaojiqiting", 163, 2, "Burner On-off", BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField("de_1_xunhuanbeng_auto", 165, 2, "1#Circulating Pump Manual/Automatic", BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_XUN_HUAN_BENG_1, 167, 2, "1#Circulating Pump On/Off", Map_PLC_RanYouZhenKong.coms_start_stop));
        _this.addPoint(new meta_1.DeviceField("de_2_xunhuanbeng_auto", 169, 2, "2#Circulating Pump Manual/Automatic", BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_XUN_HUAN_BENG_2, 171, 2, "2#Circulating Pump On/Off", Map_PLC_RanYouZhenKong.coms_start_stop));
        _this.addPoint(new meta_1.DeviceField("de_1_addshuibeng_auto", 173, 2, "1#Make-up Pump Manual/Automatic", BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_Add_SHUI_BENG_1, 175, 2, "1#Make-up Pump On/Off", Map_PLC_RanYouZhenKong.coms_start_stop));
        _this.addPoint(new meta_1.DeviceField("de_2_addshuibeng_auto", 177, 2, "2#Make-up Pump Manual/Automatic", BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_Add_SHUI_BENG_2, 179, 2, "2#Make-up Pump On/Off", Map_PLC_RanYouZhenKong.coms_start_stop));
        _this.addPoint(new meta_1.DeviceField("de_zhenkongbeng_auto", 181, 2, "Vocuum Pump Manual/Automatic", BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_ZHEN_KONG_BENG_1, 183, 2, "Vocuum Pump On/Off", Map_PLC_RanYouZhenKong.coms_start_stop));
        _this.addPoint(new meta_1.ExceptionField("ex_lubichaowenbaojing", 203, 2, "Furnace Wall Over temperature Alarm", 0));
        _this.addPoint(new meta_1.ExceptionField("ex_remeishuiwenduchuanganqiguzhang", 203, 2, "Hot Medium Water Temperature Transmitter Failture", 1));
        _this.addPoint(new meta_1.ExceptionField("ex_paiyanwenduchuanganqiguzhang", 203, 2, "Discharged Flue Gas Temperature Transmitter Failture", 2));
        _this.addPoint(new meta_1.ExceptionField("ex_cainuanchushuiwenduchuanganqiguzhang", 203, 2, "Heating Outlet Water Temperature Transmitter Failure", 3));
        _this.addPoint(new meta_1.ExceptionField("ex_shenghuochushuiwenduchuanganqiguzhang", 203, 2, "Domestic Outlet Water Temperature Transmitter Failure", 4));
        _this.addPoint(new meta_1.ExceptionField("ex_wendushedingcuowubaojing", 203, 2, "Temperature Setting Error Alarm", 5));
        _this.addPoint(new meta_1.ExceptionField("ex_xunhuanbengliansuoduankaibaojing", 203, 2, "Circulating Pump Interlock Break Alarm", 6));
        _this.addPoint(new meta_1.ExceptionField("ex_waibuliansuoduankaibaojing", 203, 2, "External Interlock Break Alarm", 7));
        _this.addPoint(new meta_1.ExceptionField("ex_ranshaojiguzhang", 203, 2, "Burner failure", 8));
        _this.addPoint(new meta_1.ExceptionField("ex_ranqixielou", 203, 2, "Gas Leakage", 9));
        _this.addPoint(new meta_1.ExceptionField("ex_ranqiyaliyichang", 203, 2, "Gas Pressure Abnormity", 10));
        _this.addPoint(new meta_1.ExceptionField("ex_luneiyaligaobaojingshedingzhi", 203, 2, "Alarm of high pressure in furnace (set value)", 11));
        _this.addPoint(new meta_1.ExceptionField("ex_luneiyaligaobaojingyalikaiguan", 203, 2, "High Pressure Alarm in Furnace (Pressure Switch)", 12));
        _this.addPoint(new meta_1.ExceptionField("ex_paiyanwenduchaogaobaojing", 203, 2, "Ultrahigh Temperature Discharged Flue Gas Alarm", 13));
        _this.addPoint(new meta_1.ExceptionField("ex_remeishuiwenduchaogaobaojing", 203, 2, "Ultrahigh Hot Medium Water Temperature Alarm", 14));
        _this.addPoint(new meta_1.ExceptionField("ex_queshuibaohubaojing", 203, 2, "Water Shortage Protection Alarm", 15));
        return _this;
    }
    return Map_PLC_RanYouZhenKong;
}(BaseMap_1.Map_PLC));
