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
var _6J_1 = require("./6J");
var CountShowField_1 = require("../../../../../../../meta/CountShowField");
var Map_CTL_RT_T2_RYZQ_6JKZ = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_T2_RYZQ_6JKZ, _super);
    function Map_CTL_RT_T2_RYZQ_6JKZ() {
        var _this = _super.call(this) || this;
        _this.addPoint(new CountShowField_1.CountShowField(Map_CTL_RT_T2_RYZQ_6JKZ.KEY_BASE, Map_CTL_RT_T2_RYZQ_6JKZ.KEY_POINT_YA_LI_STATUS, "压力状态", '', false, Map_CTL_RT_T2_RYZQ_6JKZ.KZQ_YaLiStatus));
        _this.addPoint(new meta_1.OpenCloseField("oc_ranshaoqifuhe_zengda", 9, 2, "燃烧器负荷增大调节", 1, Map_CTL_RT_T2_RYZQ_6JKZ.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_fuhetiaojie", 5, 2, "负荷调节", 7, Map_CTL_RT_T2_RYZQ_6JKZ.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_qitingkongzhi", 5, 2, "启停控制", 8, Map_CTL_RT_T2_RYZQ_6JKZ.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_dishuiweibaojingdianji_6dianjiteyou_", 5, 2, "低水位报警电极（6电极特有）", 1, Map_CTL_RT_T2_RYZQ_6JKZ.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_zhongshuiweidianji_6dianjiteyou_", 5, 2, "中水位电极（6 电极特有）", 3, Map_CTL_RT_T2_RYZQ_6JKZ.coms_open_close));
        return _this;
    }
    //6电极压力控制器2端火
    Map_CTL_RT_T2_RYZQ_6JKZ.KEY_POINT_YA_LI_STATUS = 'ba_yali_status';
    Map_CTL_RT_T2_RYZQ_6JKZ.KZQ_YaLiStatus = {
        0: '高压',
        1: '中压',
        2: '错误',
        3: '低压'
    };
    return Map_CTL_RT_T2_RYZQ_6JKZ;
}(_6J_1.Map_CTL_RT_T2_RYZQ_6J));
exports.Map_CTL_RT_T2_RYZQ_6JKZ = Map_CTL_RT_T2_RYZQ_6JKZ;
