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
var meta_1 = require("../../../../../../meta/RT/meta");
var FixedValueField_1 = require("../../../../../../meta/FixedValueField");
var SdcSoftDevice_1 = require("../../../../../../devices/SdcSoftDevice");
var X1_1 = require("./X1");
var Map_CTL_RT_X1_ZhengQi = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_X1_ZhengQi, _super);
    function Map_CTL_RT_X1_ZhengQi() {
        var _this = _super.call(this) || this;
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_MEDIA, "介质类型", 1, Map_CTL_RT_X1_ZhengQi.coms_media));
        _this.addPoint(new meta_1.ExceptionField('ex_jixiandishuiweibaojing', 45, 2, '极限低水位报警', 0));
        _this.addPoint(new meta_1.ExceptionField('ex_gaoshuiweibaojing', 45, 2, '高水位报警', 1));
        _this.addPoint(new meta_1.ExceptionField('ex_shuiweichuanganqiguzhang', 45, 2, '水位传感器故障', 2));
        _this.addPoint(new meta_1.OpenCloseField('oc_jixiandishuiweidianji', 5, 2, '极限低水位电极', 0, Map_CTL_RT_X1_ZhengQi.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField('oc_didianji', 5, 2, '低位电极', 1, Map_CTL_RT_X1_ZhengQi.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField('oc_gaodianji', 5, 2, '高位电极', 2, Map_CTL_RT_X1_ZhengQi.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField('oc_gaobaojingdianji', 5, 2, '高报警电极', 3, Map_CTL_RT_X1_ZhengQi.coms_open_close));
        return _this;
    }
    Map_CTL_RT_X1_ZhengQi.DJD_YaLiStatus = {
        0: '中压',
        1: '高压',
        2: '低压',
        3: '错误'
    };
    Map_CTL_RT_X1_ZhengQi.KZQ_YaLiStatus = {
        0: "高压",
        1: "中压",
        2: '错误',
        3: "低压"
    };
    return Map_CTL_RT_X1_ZhengQi;
}(X1_1.Map_CTL_RT_X1_Base));
exports.Map_CTL_RT_X1_ZhengQi = Map_CTL_RT_X1_ZhengQi;
