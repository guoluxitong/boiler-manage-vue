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
var meta_1 = require("../../../../../../../meta/RT/meta");
var ZH_CN_1 = require("../../../../../ZH_CN");
var YLBSQ_1 = require("../YLBSQ");
module.exports = /** @class */ (function (_super) {
    __extends(CTL_RT_T2_RYZQ_YLBSQ_19, _super);
    function CTL_RT_T2_RYZQ_YLBSQ_19() {
        var _this = _super.call(this) || this;
        // this.warningMsg='';
        _this.addPoint(new meta_1.OpenCloseField("oc_yalikongzhiqi1", 5, 2, "压力控制器（一段火）", 7, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_yalikongzhiqi2", 5, 2, "压力控制器（二段火）", 8, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.ExceptionField("ex_ranqiyaligaobaojing", 47, 2, "燃气压力高报警", 0));
        _this.addPoint(new meta_1.ExceptionField("ex_ranqixieloubaojing", 47, 2, "燃气泄漏报警", 1));
        _this.addPoint(new meta_1.ExceptionField("ex_ranshaoqiguzhang", 47, 2, "燃烧器故障", 2));
        return _this;
    }
    return CTL_RT_T2_RYZQ_YLBSQ_19;
}(YLBSQ_1.CTL_RT_T2_RYZQ_YLBSQ));
