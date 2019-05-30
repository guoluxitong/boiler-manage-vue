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
var _4J_BS_2_1 = require("./4J_BS_2");
var _4J_1 = require("../../../../../../../devices/CTL/RT/T2/RYZQ/AScript/4J");
var Map_CTL_RT_T2_RYZQ_4MBS2 = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_T2_RYZQ_4MBS2, _super);
    //4-20mA压力变送器2段火
    function Map_CTL_RT_T2_RYZQ_4MBS2() {
        var _this = _super.call(this) || this;
        _this.pointMap.remove(_4J_1.CTL_RT_T2_RYZQ_4J.KEY_POINT_SHUI_WEI_STATUS);
        _this.addPoint(new meta_1.OpenCloseField("oc_ranshaoqifuhe_zengda", 9, 2, "Burner Load Increase Regulation", 1, EN_US_1.Map_EN_US.coms_open_close));
        _this.addPoint(new meta_1.MockField("mo_shuiweixinhao", 19, 2, "Water Level", "%"));
        return _this;
    }
    return Map_CTL_RT_T2_RYZQ_4MBS2;
}(_4J_BS_2_1.Map_CTL_RT_T2_RYZQ_4JBS2));
exports.Map_CTL_RT_T2_RYZQ_4MBS2 = Map_CTL_RT_T2_RYZQ_4MBS2;
