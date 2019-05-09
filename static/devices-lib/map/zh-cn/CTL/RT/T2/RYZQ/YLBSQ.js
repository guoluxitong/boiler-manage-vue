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
var ZH_CN_1 = require("../../../../ZH_CN");
var meta_1 = require("../../../../../../meta/RT/meta");
var YLBSQ_1 = require("../../../../../../devices/CTL/RT/T2/RYZQ/YLBSQ/AScropt/YLBSQ");
var RYZQ_1 = require("../AScript/RYZQ");
var CTL_RT_T2_RYZQ_YLBSQ = /** @class */ (function (_super) {
    __extends(CTL_RT_T2_RYZQ_YLBSQ, _super);
    function CTL_RT_T2_RYZQ_YLBSQ() {
        var _this = _super.call(this) || this;
        _this.addPoint(new meta_1.OpenCloseField(YLBSQ_1.CTL_RT_T2_RYZQ_YLBSQ_Ts.KEY_POINT_RAN_SHAO_QI_STATUS, 9, 2, "燃烧器负荷增大调节", 1, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_jianxiaodiaojie", 9, 2, "减小调节", 2, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.MockField("mo_zhengqiyali", 17, 2, "蒸汽压力", "Mpa", 100));
        _this.addPoint(new meta_1.ExceptionField("ex_yalibiansongqiduanlu1", 45, 2, "压力变送器断路", 0));
        _this.addPoint(new meta_1.ExceptionField("ex_yalibiansongqiduanlu", 45, 2, "压力变送器短路", 1));
        return _this;
    }
    return CTL_RT_T2_RYZQ_YLBSQ;
}(RYZQ_1.CTL_RT_T2_RYZQ_Ts));
exports.CTL_RT_T2_RYZQ_YLBSQ = CTL_RT_T2_RYZQ_YLBSQ;
