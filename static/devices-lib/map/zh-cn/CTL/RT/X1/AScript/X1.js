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
var X1_1 = require("../../AScript/X1");
var meta_1 = require("../../../../../../meta/RT/meta");
var SdcSoftDevice_1 = require("../../../../../../devices/SdcSoftDevice");
var CountShowField_1 = require("../../../../../../meta/CountShowField");
var Map_CTL_RT_X1_Base = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_X1_Base, _super);
    function Map_CTL_RT_X1_Base() {
        var _this = _super.call(this) || this;
        _this.addPoint(new meta_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 3, 2, "控制器状态", '', X1_1.Map_CTL_RT_X1_Ts.coms_status));
        _this.addPoint(new meta_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_LIFE, 53, 2, "运行时间", "时"));
        _this.addPoint(new CountShowField_1.CountShowField(X1_1.Map_CTL_RT_X1_Ts.KEY_BASE, SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_DAYS, "运行天数", "天"));
        _this.addPoint(new CountShowField_1.CountShowField(X1_1.Map_CTL_RT_X1_Ts.KEY_BASE, SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_HOURS, "运行小时数", "时"));
        //this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "介质类型", 0, xyxy.coms_media))
        //this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "燃料类型", 0, xyxy.coms_power))
        _this.addPoint(new CountShowField_1.CountShowField(X1_1.Map_CTL_RT_X1_Ts.KEY_BASE, 'ba_shuiweizhuangtai', "水位", '', false, Map_CTL_RT_X1_Base.ShuiWeiStatus));
        return _this;
    }
    Map_CTL_RT_X1_Base.ShuiWeiStatus = {
        0x0: '缺水', 0x1: '正常',
        0x4: '缺水', 0x5: '低位', 0x6: '中位', 0x7: '高位',
        0x8: '缺水', 0x9: '低位', 0xA: '中位', 0xB: '高位', 0xC: '超高'
    };
    return Map_CTL_RT_X1_Base;
}(X1_1.Map_CTL_RT_X1_Ts));
exports.Map_CTL_RT_X1_Base = Map_CTL_RT_X1_Base;
