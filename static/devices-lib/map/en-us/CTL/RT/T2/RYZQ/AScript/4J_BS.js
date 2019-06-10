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
var Map_CTL_RT_T2_RYZQ_4JBS = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_T2_RYZQ_4JBS, _super);
    //4电极压力变送器内置比调
    function Map_CTL_RT_T2_RYZQ_4JBS() {
        var _this = _super.call(this) || this;
        _this.addPoint(new meta_1.MockField("mo_zhengqiyali", 17, 2, "Steam pressure", "MPa", 100));
        _this.addPoint(new meta_1.ExceptionField("ex_yalibiansongqiduanlu", 45, 2, "Breaking of Pressure Transmitter", 0));
        _this.addPoint(new meta_1.ExceptionField("ex_yalibiansongqiduanlu1", 45, 2, "Short Circuit of Pressure Transmitter", 1));
        return _this;
    }
    return Map_CTL_RT_T2_RYZQ_4JBS;
}(_4J_1.Map_CTL_RT_T2_RYZQ_4J));
exports.Map_CTL_RT_T2_RYZQ_4JBS = Map_CTL_RT_T2_RYZQ_4JBS;
