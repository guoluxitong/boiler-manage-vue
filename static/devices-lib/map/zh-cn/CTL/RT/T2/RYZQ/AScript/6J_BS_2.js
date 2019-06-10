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
var _6J_BS_1 = require("./6J_BS");
var Map_CTL_RT_T2_RYZQ_6JBS2 = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_T2_RYZQ_6JBS2, _super);
    //6电极压力变送器2段火
    function Map_CTL_RT_T2_RYZQ_6JBS2() {
        var _this = _super.call(this) || this;
        _this.addPoint(new meta_1.OpenCloseField("oc_ranshaoqifuhe_zengda", 9, 2, "燃烧器负荷增大调节", 1, Map_CTL_RT_T2_RYZQ_6JBS2.coms_open_close));
        return _this;
    }
    return Map_CTL_RT_T2_RYZQ_6JBS2;
}(_6J_BS_1.Map_CTL_RT_T2_RYZQ_6JBS));
exports.Map_CTL_RT_T2_RYZQ_6JBS2 = Map_CTL_RT_T2_RYZQ_6JBS2;
