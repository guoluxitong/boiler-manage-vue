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
var ZH_CN_1 = require("../../ZH_CN");
var CountField_1 = require("../../../../meta/CountField");
var meta_1 = require("../../../../meta/RT/meta");
var SdcSoftDevice_1 = require("../../../../devices/SdcSoftDevice");
var FixedValueField_1 = require("../../../../meta/FixedValueField");
var RT_1 = require("../../../../devices/CTL/RT/RT");
var CountShowField_1 = require("../../../../meta/CountShowField");
var Map_CTL_RT = /** @class */ (function (_super) {
    __extends(Map_CTL_RT, _super);
    function Map_CTL_RT() {
        var _this = _super.call(this) || this;
        // this.warningMsg='长按修改类型'
        /*计算属性（不显示）*/
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_RAN_SHAO_QI, '燃烧器'));
        _this.addPoint(new meta_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_LIFE, 53, 2, '累计燃烧时间', '时'));
        _this.addPoint(new CountShowField_1.CountShowField(Map_CTL_RT.KEY_BASE, SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_DAYS, '运行天数', '天'));
        _this.addPoint(new CountShowField_1.CountShowField(Map_CTL_RT.KEY_BASE, SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_HOURS, '运行小时数', '时'));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_POWER, '燃料类型', 0, Map_CTL_RT.coms_power));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_MEDIA, '介质类型', 0, Map_CTL_RT.coms_media));
        return _this;
    }
    Map_CTL_RT.coms_ranshaoqi_status = {
        0: '小火',
        1: '大火'
    };
    Map_CTL_RT.coms_master = {
        0: '主',
        1: '备'
    };
    Map_CTL_RT.coms_auto = {
        0: '自',
        1: '手'
    };
    return Map_CTL_RT;
}(ZH_CN_1.Map_ZH_CN));
exports.Map_CTL_RT = Map_CTL_RT;
