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
var Map_CTL_RT_T2_RYZQ_6JBS = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_T2_RYZQ_6JBS, _super);
    //6电极压力变送器2段火
    function Map_CTL_RT_T2_RYZQ_6JBS() {
        var _this = _super.call(this) || this;
        _this.addPoint(new meta_1.MockField("mo_zhengqiyali", 17, 2, "Steam pressure", "MPa", 100));
        _this.addPoint(new meta_1.ExceptionField("ex_yalibiansongqiduanlu", 45, 2, "Breaking of Pressure Transmitter", 0));
        _this.addPoint(new meta_1.ExceptionField("ex_yalibiansongqiduanlu1", 45, 2, "Short Circuit of Pressure Transmitter", 1));
        return _this;
    }
    return Map_CTL_RT_T2_RYZQ_6JBS;
}(_6J_1.Map_CTL_RT_T2_RYZQ_6J));
exports.Map_CTL_RT_T2_RYZQ_6JBS = Map_CTL_RT_T2_RYZQ_6JBS;
