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
var _6J_1 = require("./6J");
var CountShowField_1 = require("../../../../../../../meta/CountShowField");
var _6J_KZ_1 = require("../../../../../../../devices/CTL/RT/T2/RYZQ/AScript/6J_KZ");
var Map_CTL_RT_T2_RYZQ_6JKZ = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_T2_RYZQ_6JKZ, _super);
    function Map_CTL_RT_T2_RYZQ_6JKZ() {
        var _this = _super.call(this) || this;
        _this.addPoint(new CountShowField_1.CountShowField(Map_CTL_RT_T2_RYZQ_6JKZ.KEY_BASE, _6J_KZ_1.CTL_RT_T2_RYZQ_6JKZ.KEY_POINT_YA_LI_STATUS, "Pressure state", ''));
        _this.addPoint(new meta_1.OpenCloseField("oc_ranshaoqifuhe_zengda", 9, 2, "Burner Load Increase Regulation", 1, EN_US_1.Map_EN_US.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_fuhetiaojie", 5, 2, "Load regulation", 7, EN_US_1.Map_EN_US.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_qitingkongzhi", 5, 2, "Start stop control", 8, EN_US_1.Map_EN_US.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_dishuiweibaojingdianji_6dianjiteyou_", 5, 2, "Low Water Level Alarm Electrode (6 Electrodes Specific)", 1, EN_US_1.Map_EN_US.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_zhongshuiweidianji_6dianjiteyou_", 5, 2, "Medium Water Level Electrode (6 Electrode Specific)", 3, EN_US_1.Map_EN_US.coms_open_close));
        return _this;
    }
    //6电极压力控制器2端火
    Map_CTL_RT_T2_RYZQ_6JKZ.KZQ_YaLiStatus = {
        0: 'High pressure',
        1: 'Medium voltage',
        2: 'Error',
        3: 'Low pressure'
    };
    return Map_CTL_RT_T2_RYZQ_6JKZ;
}(_6J_1.Map_CTL_RT_T2_RYZQ_6J));
exports.Map_CTL_RT_T2_RYZQ_6JKZ = Map_CTL_RT_T2_RYZQ_6JKZ;
