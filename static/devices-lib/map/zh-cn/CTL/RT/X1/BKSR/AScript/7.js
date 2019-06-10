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
var meta_1 = require("../../../../../../../meta/RT/meta");
var _6_1 = require("../../HNRT/AScript/6");
//电蒸汽
var Map_CTL_RT_X1_BKSR_RYZQ_7 = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_X1_BKSR_RYZQ_7, _super);
    function Map_CTL_RT_X1_BKSR_RYZQ_7() {
        var _this = _super.call(this) || this;
        _this.pointMap.remove('oc_ranshaoqiguzhang');
        _this.addPoint(new meta_1.ExceptionField("ex_paiyanwenduchuanganqiguzhang", 45, 2, "排烟温度传感器故障", 1));
        _this.addPoint(new meta_1.ExceptionField("ex_paiyanwendugao", 45, 2, "排烟温度高", 2));
        _this.addPoint(new meta_1.ExceptionField("ex_gaoshuiweibaojing", 45, 2, "高水位报警", 3));
        _this.addPoint(new meta_1.ExceptionField("ex_shuiweichuanganqiguzhang", 45, 2, "水位传感器故障", 4));
        return _this;
    }
    return Map_CTL_RT_X1_BKSR_RYZQ_7;
}(_6_1.Map_CTL_RT_X1_HNRT_RYZQ_6));
exports.Map_CTL_RT_X1_BKSR_RYZQ_7 = Map_CTL_RT_X1_BKSR_RYZQ_7;
