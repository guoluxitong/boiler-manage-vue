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
var EN_US_1 = require("../../../../../EN_US");
var _4J_1 = require("./4J");
var Map_CTL_RT_T2_RYZQ_6J = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_T2_RYZQ_6J, _super);
    //4电极压力变送器内置比调
    function Map_CTL_RT_T2_RYZQ_6J() {
        var _this = _super.call(this) || this;
        _this.addPoint(new meta_1.OpenCloseField("oc_dishuiweibaojingdianji_6dianjiteyou_", 5, 2, "Low Water Level Alarm Electrode", 1, EN_US_1.Map_EN_US.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_zhongshuiweidianji_6dianjiteyou_", 5, 2, "Medium water level electrode", 3, EN_US_1.Map_EN_US.coms_open_close));
        return _this;
    }
    Map_CTL_RT_T2_RYZQ_6J.ShuiWeiStatus = {
        0: 'Water shortage',
        1: 'Low level alarm',
        2: 'Low position',
        3: 'Middle low position',
        4: 'Median position',
        5: 'High position',
        6: 'Super high alarm'
    };
    return Map_CTL_RT_T2_RYZQ_6J;
}(_4J_1.Map_CTL_RT_T2_RYZQ_4J));
exports.Map_CTL_RT_T2_RYZQ_6J = Map_CTL_RT_T2_RYZQ_6J;
