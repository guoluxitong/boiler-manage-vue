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
var Command_1 = require("../../../../../command/Command");
var Map_CTL_RT_T2_RYRS_Ts = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_T2_RYRS_Ts, _super);
    function Map_CTL_RT_T2_RYRS_Ts() {
        var _this = _super.call(this) || this;
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG, "补水泵"));
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_LENG_NING_BENG, "循环泵"));
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_RAN_SHAO_QI, "燃烧器"));
        _this.addPoint(new meta_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 3, 2, "工作状态", '', Map_CTL_RT_T2_RYRS_Ts.coms_status));
        _this.addPoint(new meta_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_LIFE, 53, 2, "累计燃烧时间", "时"));
        _this.addPoint(new CountShowField_1.CountShowField(Map_CTL_RT_T2_RYRS_Ts.KEY_BASE, SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_DAYS, "运行天数", "天"));
        _this.addPoint(new CountShowField_1.CountShowField(Map_CTL_RT_T2_RYRS_Ts.KEY_BASE, SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_HOURS, "运行小时数", "时"));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_POWER, "燃料类型", 0, Map_CTL_RT_T2_RYRS_Ts.coms_power));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_MEDIA, "介质类型", 0, Map_CTL_RT_T2_RYRS_Ts.coms_media));
        _this.addPoint(new meta_1.OpenCloseField("oc_queshuidianji", 5, 2, "缺水电极", 0, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_dishuiweidianji", 5, 2, "低水位电极", 1, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_gaoshuiweidianji", 5, 2, "高水位电极", 2, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_gaoshuiweibaojingdianji", 5, 2, "高水位报警电极", 3, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_dianjiedianyalibiaodizhen", 5, 2, "电接点压力表低针", 4, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_dianjiedianyalibiaogaozhen", 5, 2, "电接点压力表高针", 5, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_chaoyabaojingxinhao", 5, 2, "超压报警", 9, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_ranshaoqiguzhangxinhao", 5, 2, "燃烧器故障信号", 10, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_ranqiyalidibaojingxinhao", 5, 2, "燃气压力低报警信号", 12, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_ranqixieloubaojingxinhao", 5, 2, "燃气泄漏报警信号", 11, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, "燃烧器启停控制", 0, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_ranshaoqifuhediaojie/zengdadiaojie", 9, 2, "燃烧器负荷增大调节", 1, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_ranshaoqibilijianxiao", 9, 2, "燃烧器比例减小", 2, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.DeviceField("de_bushuibengzhubei", 49, 2, "补水泵", 0, Map_CTL_RT_T2_RYRS_Ts.coms_master));
        _this.addPoint(new meta_1.DeviceField("de_bushuibengshoudongzidong", 49, 2, "补水泵", 1, Map_CTL_RT_T2_RYRS_Ts.coms_auto));
        _this.addPoint(new meta_1.DeviceField("de_xunhuanbengzhubei", 49, 2, "循环泵", 2, Map_CTL_RT_T2_RYRS_Ts.coms_master));
        _this.addPoint(new meta_1.DeviceField("de_xunhuanbengshoudongzidong", 49, 2, "循环泵", 3, Map_CTL_RT_T2_RYRS_Ts.coms_auto));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG_1, 9, 2, "补水泵主控制", 3, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG_2, 9, 2, "补水泵备控制", 4, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_LENG_NING_BENG_1, 9, 2, "循环泵主控制", 5, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_LENG_NING_BENG_2, 9, 2, "循环泵备控制", 6, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        _this.addPoint(new meta_1.MockField("mo_chushuiwendu", 13, 2, "出水温度", "℃"));
        _this.addPoint(new meta_1.MockField("mo_huishuiwendu", 15, 2, "回水温度", "℃"));
        _this.addPoint(new meta_1.MockField("mo_paiyanwendu", 21, 2, "排烟温度", "℃"));
        _this.addPoint(new meta_1.ExceptionField("ex_chushuiwenduchuanganqiduanlu1", 45, 2, "出水温度传感器断路", 0));
        _this.addPoint(new meta_1.ExceptionField("ex_chushuiwenduchuanganqiduanlu", 45, 2, "出水温度传感器短路", 1));
        _this.addPoint(new meta_1.ExceptionField("ex_chushuiwendugaobaojing_", 45, 2, "出水温度高报警", 2));
        _this.addPoint(new meta_1.ExceptionField("ex_huishuiwenduchuanganqiduanlu1", 45, 2, "回水温度传感器断路", 3));
        _this.addPoint(new meta_1.ExceptionField("ex_paiyanwendugaobaojing", 45, 2, "排烟温度高报警", 4));
        _this.addPoint(new meta_1.ExceptionField("ex_jixiandishuiweibaojing", 45, 2, "极限低水位报警", 5));
        _this.addPoint(new meta_1.ExceptionField("ex_shuiweidianjiluojicuo", 45, 2, "水位电极逻辑错", 6));
        _this.addPoint(new meta_1.ExceptionField("ex_gaoshuiweibaojing", 45, 2, "高水位报警", 7));
        _this.addPoint(new meta_1.ExceptionField("ex_dianjiedianyalibiaoduanlu", 45, 2, "电接点压力表短路", 8));
        _this.addPoint(new meta_1.ExceptionField("ex_chaoyabaojing_kongzhiqi_", 45, 2, "超压报警（控制器）", 9));
        _this.addPoint(new meta_1.ExceptionField("ex_ranqiyalidibaojing", 45, 2, "燃气压力低报警", 10));
        _this.addPoint(new meta_1.ExceptionField("ex_ranqixieloubaojing", 47, 2, "燃气泄漏报警", 11));
        _this.addPoint(new meta_1.ExceptionField("ex_ranshaoqiguzhang", 47, 2, "燃烧器故障", 12));
        _this.addPoint(new meta_1.SettingField("se_paiyanchaowen", 67, 2, "排烟超温", "℃"));
        _this.addPoint(new meta_1.SettingField("se_lushuichaowen", 69, 2, "炉水超温", "℃"));
        _this.addPoint(new meta_1.SettingField("se_kaibengwendu", 71, 2, "开泵温度", "℃"));
        _this.addPoint(new meta_1.SettingField("se_guanbengwendu", 73, 2, "关泵温度", "℃"));
        _this.addPoint(new meta_1.SettingField("se_xunhuanbenghouyanshi", 75, 2, "循环泵后延时", "分钟"));
        _this.addPoint(new meta_1.SettingField("se_ranshaozhouqi", 77, 2, "燃烧  周期"));
        _this.addPoint(new meta_1.SettingField("se_ranshaoP", 79, 2, "燃烧  P"));
        _this.addPoint(new meta_1.SettingField("se_ranshaoI", 81, 2, "燃烧  I"));
        _this.addPoint(new meta_1.SettingField("se_ranshaoD", 83, 2, "燃烧  D"));
        _this.addPoint(new meta_1.SettingField("se_xingcheng", 85, 2, "行程"));
        _this.addPoint(new meta_1.BaseInfoField("o_guoluleixing", 87, 2, "锅炉类型", '', Map_CTL_RT_T2_RYRS_Ts.coms_guolu));
        _this.addPoint(new meta_1.BaseInfoField("o_ranshaoqigongzuofangshi", 89, 2, "燃烧器工作方式", '', Map_CTL_RT_T2_RYRS_Ts.coms_ranshaoqi));
        _this.addPoint(new meta_1.BaseInfoField("o_bushuibengkongzhifangshi", 91, 2, "补水泵控制方式", '', Map_CTL_RT_T2_RYRS_Ts.coms_bushuibeng));
        _this.addPoint(new meta_1.BaseInfoField("o_xunhuanbengkongzhifangshi", 93, 2, "循环泵控制方式", '', Map_CTL_RT_T2_RYRS_Ts.coms_xunhuanbeng));
        _this.addCommand('设备控制', new Command_1.OpenCloseCommand('控制器 运行|待命', '00a0', 1, 2));
        return _this;
    }
    Map_CTL_RT_T2_RYRS_Ts.coms_guolu = {
        0: "常压",
        1: "承压",
    };
    Map_CTL_RT_T2_RYRS_Ts.coms_ranshaoqi = {
        0: "内置比调",
        1: "两段火力",
    };
    Map_CTL_RT_T2_RYRS_Ts.coms_bushuibeng = {
        0: "4电极",
        1: "电接点压力表",
    };
    Map_CTL_RT_T2_RYRS_Ts.coms_xunhuanbeng = {
        0: "出水温度",
        1: "回水温度",
        2: "燃烧器",
    };
    return Map_CTL_RT_T2_RYRS_Ts;
}(T2_1.Map_CTL_RT_T2_Ts));
exports.Map_CTL_RT_T2_RYRS_Ts = Map_CTL_RT_T2_RYRS_Ts;
