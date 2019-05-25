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
var _4J_1 = require("./4J");
var CountShowField_1 = require("../../../../../../../meta/CountShowField");
var Map_CTL_RT_T2_RYZQ_6J = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_T2_RYZQ_6J, _super);
    //4电极压力变送器内置比调
    function Map_CTL_RT_T2_RYZQ_6J() {
        var _this = _super.call(this) || this;
        _this.addPoint(new CountShowField_1.CountShowField(_4J_1.Map_CTL_RT_T2_RYZQ_4J.KEY_BASE, Map_CTL_RT_T2_RYZQ_6J.KEY_POINT_SHUI_WEI_STATUS, "水位", '', false, Map_CTL_RT_T2_RYZQ_6J.ShuiWeiStatus));
        _this.addPoint(new meta_1.OpenCloseField("oc_dishuiweibaojingdianji_6dianjiteyou_", 5, 2, "低水位报警电极", 1, Map_CTL_RT_T2_RYZQ_6J.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_zhongshuiweidianji_6dianjiteyou_", 5, 2, "中水位电极", 3, Map_CTL_RT_T2_RYZQ_6J.coms_open_close));
        return _this;
    }
    Map_CTL_RT_T2_RYZQ_6J.ShuiWeiStatus = {
        0: '缺水',
        1: '低位报警',
        2: '低位',
        3: '中低位',
        4: '中位',
        5: '高位',
        6: '超高报警'
    };
    return Map_CTL_RT_T2_RYZQ_6J;
}(_4J_1.Map_CTL_RT_T2_RYZQ_4J));
exports.Map_CTL_RT_T2_RYZQ_6J = Map_CTL_RT_T2_RYZQ_6J;
