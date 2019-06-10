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
var meta_1 = require("../../../../../../meta/RT/meta");
var RT_1 = require("../../../../../../devices/CTL/RT/RT");
var RYZQ_1 = require("../AScript/RYZQ");
module.exports = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_T3_RYZQ_YLBSQ, _super);
    function Map_CTL_RT_T3_RYZQ_YLBSQ() {
        var _this = _super.call(this) || this;
        // this.warningMsg=''
        _this.addPoint(new meta_1.OpenCloseField(RT_1.CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, "燃烧器启停控制", 0, Map_CTL_RT_T3_RYZQ_YLBSQ.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_ranshaoqifuhediaojie/zengdadiaojie", 9, 2, "燃烧器负荷增大调节", 1, Map_CTL_RT_T3_RYZQ_YLBSQ.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_jianxiaodiaojie", 9, 2, "减小调节", 2, Map_CTL_RT_T3_RYZQ_YLBSQ.coms_open_close));
        _this.addPoint(new meta_1.MockField("mo_zhengqiyali", 17, 2, "蒸汽压力", "Mpa", 100));
        _this.addPoint(new meta_1.ExceptionField("ex_yalibiansongqiduanlu1", 45, 2, "压力变送器断路", 0));
        _this.addPoint(new meta_1.ExceptionField("ex_yalibiansongqiduanlu", 45, 2, "压力变送器短路", 1));
        _this.addPoint(new meta_1.ExceptionField("ex_chaoyabaojing_biansongqi_", 45, 2, "超压报警（变送器）", 2));
        return _this;
    }
    return Map_CTL_RT_T3_RYZQ_YLBSQ;
}(RYZQ_1.Map_CTL_RT_T3_RYZQ_Ts));
