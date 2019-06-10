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
var EN_US_1 = require("../../EN_US");
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
        // this.warningMsg='长按修改类型';
        /*计算属性（不显示）*/
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_RAN_SHAO_QI, "Burner"));
        _this.addPoint(new meta_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_LIFE, 53, 2, "Running Time", "Hour"));
        _this.addPoint(new CountShowField_1.CountShowField(Map_CTL_RT.KEY_BASE, SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_DAYS, "Running Days", "Day"));
        _this.addPoint(new CountShowField_1.CountShowField(Map_CTL_RT.KEY_BASE, SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_HOURS, "Running Hours", "Hour"));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_POWER, "Fuel Type", 0, EN_US_1.Map_EN_US.coms_power));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_MEDIA, "Medium Type", 0, EN_US_1.Map_EN_US.coms_media));
        return _this;
    }
    Map_CTL_RT.coms_ranshaoqi_status = {
        0: "Working",
        1: "Big Fire"
    };
    Map_CTL_RT.coms_master = {
        0: "Main",
        1: "Prepare"
    };
    Map_CTL_RT.coms_auto = {
        0: "Automatic",
        1: "Manual"
    };
    return Map_CTL_RT;
}(EN_US_1.Map_EN_US));
exports.Map_CTL_RT = Map_CTL_RT;
