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
Object.defineProperty(exports, "__esModule", { value: true });
var CountField_1 = require("../../../../../meta/CountField");
var meta_1 = require("../../../../../meta/RT/meta");
var SdcSoftDevice_1 = require("../../../../../devices/SdcSoftDevice");
var CountShowField_1 = require("../../../../../meta/CountShowField");
var FixedValueField_1 = require("../../../../../meta/FixedValueField");
var RT_1 = require("../../../../../devices/CTL/RT/RT");
var T2_1 = require("../AScript/T2");
var Map_CTL_RT_T2_RYRS_Ts = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_T2_RYRS_Ts, _super);
    function Map_CTL_RT_T2_RYRS_Ts() {
        var _this = _super.call(this) || this;
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG, "Water Feeding Pump"));
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_LENG_NING_BENG, "Circulating Pump"));
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_RAN_SHAO_QI, "Burner"));
        _this.addPoint(new meta_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 3, 2, "System State", '', Map_CTL_RT_T2_RYRS_Ts.coms_status));
        _this.addPoint(new meta_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_LIFE, 53, 2, "Running Time", "Hour"));
        _this.addPoint(new CountShowField_1.CountShowField(Map_CTL_RT_T2_RYRS_Ts.KEY_BASE, SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_DAYS, "Running Days", "Days"));
        _this.addPoint(new CountShowField_1.CountShowField(Map_CTL_RT_T2_RYRS_Ts.KEY_BASE, SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_HOURS, "Running Hours", "Hour"));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_POWER, "Fuel Type", 0, Map_CTL_RT_T2_RYRS_Ts.coms_power));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_MEDIA, "Medium Type", 0, Map_CTL_RT_T2_RYRS_Ts.coms_media));
        _this.addPoint(new meta_1.OpenCloseField("oc_queshuidianji", 5, 2, "Lack Of Water Electrode", 0, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_dishuiweidianji", 5, 2, "Low Water Level Electrode", 1, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_gaoshuiweidianji", 5, 2, "High Water Level Electrode", 2, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_gaoshuiweibaojingdianji", 5, 2, "High Water Level Alarm Electrode", 3, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_dianjiedianyalibiaodizhen", 5, 2, "Electric Contact Pressure Gauge Lower Needle", 4, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_dianjiedianyalibiaogaozhen", 5, 2, "Electric Contact Pressure Gauge High Needle", 5, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_chaoyabaojingxinhao", 5, 2, "Overpressure Alarm", 9, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_ranshaoqiguzhangxinhao", 5, 2, "Burner fault signal", 10, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_ranqiyalidibaojingxinhao", 5, 2, "Gas pressure low alarm signal", 12, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_ranqixieloubaojingxinhao", 5, 2, "Gas Leakage Alarm Signal", 11, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, "Burner on-off Control", 0, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_ranshaoqifuhediaojie/zengdadiaojie", 9, 2, "Burner Load Adjustment", 1, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_ranshaoqibilijianxiao", 9, 2, "Reduction of Burner Proportion", 2, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.DeviceField("de_bushuibengzhubei", 49, 2, "Water replenishing pump", 0, Map_CTL_RT_T2_RYRS_Ts.coms_master));
        _this.addPoint(new meta_1.DeviceField("de_bushuibengshoudongzidong", 49, 2, "Water replenishing pump", 1, Map_CTL_RT_T2_RYRS_Ts.coms_auto));
        _this.addPoint(new meta_1.DeviceField("de_xunhuanbengzhubei", 49, 2, "Circulating pump", 2, Map_CTL_RT_T2_RYRS_Ts.coms_master));
        _this.addPoint(new meta_1.DeviceField("de_xunhuanbengshoudongzidong", 49, 2, "Circulating pump", 3, Map_CTL_RT_T2_RYRS_Ts.coms_auto));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG_1, 9, 2, "Water Feeding Pump(On Duty)Control", 3, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG_2, 9, 2, "Water Feeding Pump(Back-up)Control", 4, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_LENG_NING_BENG_1, 9, 2, "Main Control of Circulating Pump", 5, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_LENG_NING_BENG_2, 9, 2, "Standby Control of Circulating Pump", 6, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.MockField("mo_chushuiwendu", 13, 2, "Effluent temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_huishuiwendu", 15, 2, "Backwater temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_paiyanwendu", 21, 2, "Discharged Flue Gas Temperature", "℃"));
        _this.addPoint(new meta_1.ExceptionField("ex_chushuiwenduchuanganqiduanlu1", 45, 2, "Outflow Temperature Sensor Break Circuit", 0));
        _this.addPoint(new meta_1.ExceptionField("ex_chushuiwenduchuanganqiduanlu", 45, 2, "Short Circuit of Outlet Temperature Sensor", 1));
        _this.addPoint(new meta_1.ExceptionField("ex_chushuiwendugaobaojing_", 45, 2, "High temperature alarm of effluent", 2));
        _this.addPoint(new meta_1.ExceptionField("ex_chushuiwendugaobaojing_", 45, 2, "Circuit Break of Backwater Temperature Sensor", 3));
        _this.addPoint(new meta_1.ExceptionField("ex_paiyanwendugaobaojing", 45, 2, "High Discharged Flue Gas Temperature Alarm", 4));
        _this.addPoint(new meta_1.ExceptionField("ex_jixiandishuiweibaojing", 45, 2, "Extreme Low Water Level Alarm", 5));
        _this.addPoint(new meta_1.ExceptionField("ex_shuiweidianjiluojicuo", 45, 2, "Water-level Electrode Logic Error", 6));
        _this.addPoint(new meta_1.ExceptionField("ex_gaoshuiweibaojing", 45, 2, "High Water Level Alarm", 7));
        _this.addPoint(new meta_1.ExceptionField("ex_dianjiedianyalibiaoduanlu", 45, 2, "Short Circuit of Electric Contact Pressure Gauge", 8));
        _this.addPoint(new meta_1.ExceptionField("ex_chaoyabaojing_kongzhiqi_", 45, 2, "Overvoltage alarm (controller)", 9));
        _this.addPoint(new meta_1.ExceptionField("ex_ranqiyalidibaojing", 45, 2, "Low Gas Pressure Alarm", 10));
        _this.addPoint(new meta_1.ExceptionField("ex_ranqixieloubaojing", 47, 2, "Gas Leakage Alarm", 11));
        _this.addPoint(new meta_1.ExceptionField("ex_ranshaoqiguzhang", 47, 2, "Burner Failure", 12));
        _this.addPoint(new meta_1.SettingField("se_paiyanchaowen", 67, 2, "Over temperature of exhaust gas", "℃"));
        _this.addPoint(new meta_1.SettingField("se_lushuichaowen", 69, 2, "Over temperature of boiler water", "℃"));
        _this.addPoint(new meta_1.SettingField("se_kaibengwendu", 71, 2, "Pump temperature", "℃"));
        _this.addPoint(new meta_1.SettingField("se_guanbengwendu", 73, 2, "Shut off pump temperature", "℃"));
        _this.addPoint(new meta_1.SettingField("se_xunhuanbenghouyanshi", 75, 2, "Circulating Pump Delay", "分钟"));
        _this.addPoint(new meta_1.SettingField("se_ranshaozhouqi", 77, 2, "Combustion cycle"));
        _this.addPoint(new meta_1.SettingField("se_ranshaoP", 79, 2, "Burning  P"));
        _this.addPoint(new meta_1.SettingField("se_ranshaoI", 81, 2, "Burning  I"));
        _this.addPoint(new meta_1.SettingField("se_ranshaoD", 83, 2, "Burning  D"));
        _this.addPoint(new meta_1.SettingField("se_xingcheng", 85, 2, "Trip"));
        _this.addPoint(new meta_1.BaseInfoField("o_guoluleixing", 87, 2, "Boiler type", '', Map_CTL_RT_T2_RYRS_Ts.coms_guolu));
        _this.addPoint(new meta_1.BaseInfoField("o_ranshaoqigongzuofangshi", 89, 2, "Burner working mode", '', Map_CTL_RT_T2_RYRS_Ts.coms_ranshaoqi));
        _this.addPoint(new meta_1.BaseInfoField("o_bushuibengkongzhifangshi", 91, 2, "Control Mode of Supplementary Pump", '', Map_CTL_RT_T2_RYRS_Ts.coms_bushuibeng));
        _this.addPoint(new meta_1.BaseInfoField("o_xunhuanbengkongzhifangshi", 93, 2, "Control mode of circulating pump", '', Map_CTL_RT_T2_RYRS_Ts.coms_xunhuanbeng));
        return _this;
    }
    Map_CTL_RT_T2_RYRS_Ts.coms_guolu = {
        0: "Ordinary Pressure",
        1: "Pressure-bearing",
    };
    Map_CTL_RT_T2_RYRS_Ts.coms_ranshaoqi = {
        0: "Built-in Than Tuning",
        1: "Two Pieces Of Fire",
    };
    Map_CTL_RT_T2_RYRS_Ts.coms_bushuibeng = {
        0: "4 Electrode",
        1: "Electric Contact Pressure Gauge",
    };
    Map_CTL_RT_T2_RYRS_Ts.coms_xunhuanbeng = {
        0: "The Water Temperature",
        1: "The Return Water Temperature",
        2: "Burner",
    };
    return Map_CTL_RT_T2_RYRS_Ts;
}(T2_1.Map_CTL_RT_T2_Ts));
exports.Map_CTL_RT_T2_RYRS_Ts = Map_CTL_RT_T2_RYRS_Ts;
