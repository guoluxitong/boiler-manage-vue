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
var X1_1 = require("../AScript/X1");
var CountField_1 = require("../../../../../meta/CountField");
var meta_1 = require("../../../../../meta/RT/meta");
var SdcSoftDevice_1 = require("../../../../../devices/SdcSoftDevice");
var RT_1 = require("../../../../../devices/CTL/RT/RT");
var ZH_CN_1 = require("../../../ZH_CN");
var CountShowField_1 = require("../../../../../meta/CountShowField");
var FixedValueField_1 = require("../../../../../meta/FixedValueField");
module.exports = /** @class */ (function (_super) {
    __extends(CTL_RT_X1_DZQ, _super);
    function CTL_RT_X1_DZQ() {
        var _this = _super.call(this) || this;
        _this.addPoint(new CountShowField_1.CountShowField(CTL_RT_X1_DZQ.KEY_BASE, RT_1.CTL_RT.KEY_POINT_RAN_SHAO_QI, "加热组", ''));
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG, "给水泵"));
        _this.addPoint(new meta_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 3, 2, "控制器状态", '', CTL_RT_X1_DZQ.coms_status));
        _this.addPoint(new meta_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_LIFE, 53, 2, "运行时间", "时"));
        _this.addPoint(new CountShowField_1.CountShowField(CTL_RT_X1_DZQ.KEY_BASE, SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_DAYS, "运行天数", "天"));
        _this.addPoint(new CountShowField_1.CountShowField(CTL_RT_X1_DZQ.KEY_BASE, SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_HOURS, "运行小时数", "时"));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_POWER, "燃料类型", 1, ZH_CN_1.ZH_CN.coms_power));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_MEDIA, "介质类型", 1, ZH_CN_1.ZH_CN.coms_media));
        _this.addPoint(new meta_1.DeviceField("de_bushuibeng_shoudong/zidong_", 49, 2, "给水泵", 1, CTL_RT_X1_DZQ.coms_auto));
        _this.addPoint(new meta_1.ExceptionField("ex_jixiandishuiweibaojing", 45, 2, "极限低水位报警", 0));
        _this.addPoint(new meta_1.ExceptionField("ex_gaoshuiweibaojing", 45, 2, "高水位报警", 1));
        _this.addPoint(new meta_1.ExceptionField("ex_shuiweichuanganqiguzhang", 45, 2, "水位传感器故障", 2));
        _this.addPoint(new meta_1.ExceptionField("ex_chaoyabaojing", 45, 2, "超压报警", 3));
        _this.addPoint(new meta_1.OpenCloseField("oc_jixiandishuiweidianji", 5, 2, "极限低水位电极", 0, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_didianji", 5, 2, "低位电极", 1, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_gaodianji", 5, 2, "高位电极", 2, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_gaobaojingdianji", 5, 2, "高报警电极", 3, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_dianjiedianyalibiaodizhen", 5, 2, "电接点压力低针", 4, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_dianjiedianyalibiaogaozhen", 5, 2, "电接点压力高针", 5, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_chaoyabaojing", 5, 2, "超压报警", 6, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_jiarezu1kongzhi", 9, 2, "加热组1控制", 0, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_jiarezu2kongzhi", 9, 2, "加热组2控制", 1, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG_1, 9, 2, "给水泵控制", 2, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.SettingField("se_dangqianmoshi", 55, 2, "当前模式"));
        return _this;
    }
    return CTL_RT_X1_DZQ;
}(X1_1.CTL_RT_X1_Ts));
