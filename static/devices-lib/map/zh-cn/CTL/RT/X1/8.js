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
    __extends(CTL_RT_X1_RYKS, _super);
    function CTL_RT_X1_RYKS() {
        var _this = _super.call(this) || this;
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_RAN_SHAO_QI, "燃烧器"));
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_LENG_NING_BENG, "出水泵"));
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG, "补水泵"));
        _this.addPoint(new meta_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 3, 2, "控制器状态", '', CTL_RT_X1_RYKS.coms_status));
        _this.addPoint(new meta_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_LIFE, 53, 2, "运行时间", "时"));
        _this.addPoint(new CountShowField_1.CountShowField(CTL_RT_X1_RYKS.KEY_BASE, SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_DAYS, "运行天数", "天"));
        _this.addPoint(new CountShowField_1.CountShowField(CTL_RT_X1_RYKS.KEY_BASE, SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_HOURS, "运行小时数", "时"));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_POWER, "燃料类型", 0, ZH_CN_1.ZH_CN.coms_power));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_MEDIA, "介质类型", 0, ZH_CN_1.ZH_CN.coms_media));
        _this.addPoint(new meta_1.DeviceField("de_bushuibeng_shoudong/zidong_", 49, 2, "补水泵", 1, CTL_RT_X1_RYKS.coms_auto));
        _this.addPoint(new meta_1.DeviceField("de_xunhuanbeng_zidong/shoudong_", 49, 2, "出水泵", 3, CTL_RT_X1_RYKS.coms_auto));
        _this.addPoint(new meta_1.MockField("mo_chushuiwendu", 13, 2, "出水温度", "℃"));
        _this.addPoint(new meta_1.ExceptionField("ex_jixiandishuiweibaojing", 45, 2, "极限低水位报警", 0));
        _this.addPoint(new meta_1.ExceptionField("ex_shuiweichuanganqiguzhang", 45, 2, "水位传感器故障", 1));
        _this.addPoint(new meta_1.ExceptionField("ex_chushuiwenduchuanganqiguzhang", 45, 2, "出水温度传感器故障", 2));
        _this.addPoint(new meta_1.ExceptionField("ex_chushuiwendugaobaojing", 45, 2, "出水温度高报警", 3));
        _this.addPoint(new meta_1.ExceptionField("ex_lubichaowenbaojing", 45, 2, "炉壁超温报警", 4));
        _this.addPoint(new meta_1.ExceptionField("ex_ranshaoqiguzhangbaojing", 45, 2, "燃烧器故障报警", 5));
        _this.addPoint(new meta_1.OpenCloseField("oc_jixiandishuiweidianji", 5, 2, "极限低水位电极", 0, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_didianji/dianjiedianyalibiaodizhen", 5, 2, "低位电极", 1, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_gaodianji/dianjiedianyalibiaogaozhen", 5, 2, "高位电极", 2, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_lubiwendukaiguan", 5, 2, "炉壁温度开关", 4, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_shuixiangdiweidianji", 5, 2, "水箱低位电极", 5, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_shuixianggaoweidianji", 5, 2, "水箱高位电极", 6, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_ranshaoqiguzhang", 5, 2, "燃烧器故障", 7, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField(RT_1.CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, "燃烧器启停控制", 0, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG_1, 9, 2, "补水泵控制", 1, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_LENG_NING_BENG_1, 9, 2, "出水泵控制", 2, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.SettingField("se_dangqianmoshi", 55, 2, "当前模式"));
        _this.addPoint(new meta_1.SettingField("se_baojingwendu", 57, 2, "报警温度", "℃"));
        _this.addPoint(new meta_1.SettingField("se_shangxianwendu", 59, 2, "上限温度", "℃"));
        _this.addPoint(new meta_1.SettingField("se_xiaxianwendu", 61, 2, "下限温度", "℃"));
        _this.addPoint(new meta_1.SettingField("se_NC", 63, 2, "NC"));
        _this.addPoint(new meta_1.SettingField("se_NC6", 65, 2, "NC"));
        _this.addPoint(new meta_1.SettingField("se_NC1", 67, 2, "NC"));
        _this.addPoint(new meta_1.SettingField("se_NC2", 69, 2, "NC"));
        _this.addPoint(new meta_1.SettingField("se_NC3", 71, 2, "NC"));
        _this.addPoint(new meta_1.SettingField("se_NC4", 73, 2, "NC"));
        _this.addPoint(new meta_1.SettingField("se_NC5", 75, 2, "NC"));
        _this.addPoint(new meta_1.SettingField("se_qidongshiduans1", 77, 2, "启动时段1", "时"));
        _this.addPoint(new meta_1.SettingField("se_qidongshiduan1", 79, 2, "启动时段1", "分"));
        _this.addPoint(new meta_1.SettingField("se_tingzhishiduans1", 81, 2, "停止时段1", "时"));
        _this.addPoint(new meta_1.SettingField("se_tingzhishiduan1", 83, 2, "停止时段1", "分"));
        _this.addPoint(new meta_1.SettingField("se_qidongshiduans2", 85, 2, "启动时段2", "时"));
        _this.addPoint(new meta_1.SettingField("se_qidongshiduan2", 87, 2, "启动时段2", "分"));
        _this.addPoint(new meta_1.SettingField("se_tingzhishiduans2", 89, 2, "停止时段2", "时"));
        _this.addPoint(new meta_1.SettingField("se_tingzhishiduan2", 91, 2, "停止时段2", "分"));
        _this.addPoint(new meta_1.SettingField("se_qidongshiduans3", 93, 2, "启动时段3", "时"));
        _this.addPoint(new meta_1.SettingField("se_qidongshiduan3", 95, 2, "启动时段3", "分"));
        _this.addPoint(new meta_1.SettingField("se_tingzhishiduans3", 97, 2, "停止时段3", "时"));
        _this.addPoint(new meta_1.SettingField("se_tingzhishiduan3", 99, 2, "停止时段3", "分"));
        _this.addPoint(new meta_1.SettingField("se_qidongshiduans4", 101, 2, "启动时段4", "时"));
        _this.addPoint(new meta_1.SettingField("se_qidongshiduan4", 103, 2, "启动时段4", "分"));
        _this.addPoint(new meta_1.SettingField("se_tingzhishiduans4", 105, 2, "停止时段4", "时"));
        _this.addPoint(new meta_1.SettingField("se_tingzhishiduan4", 107, 2, "停止时段4", "分"));
        return _this;
    }
    return CTL_RT_X1_RYKS;
}(X1_1.CTL_RT_X1_Ts));
