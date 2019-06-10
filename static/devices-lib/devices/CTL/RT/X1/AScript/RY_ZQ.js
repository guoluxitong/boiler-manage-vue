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
var ZQ_1 = require("./ZQ");
//燃油蒸汽电接点压力表
var CTL_RT_X1_RY_ZhengQi = /** @class */ (function (_super) {
    __extends(CTL_RT_X1_RY_ZhengQi, _super);
    function CTL_RT_X1_RY_ZhengQi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CTL_RT_X1_RY_ZhengQi.prototype.getPowerInfo = function () {
        var map = this.getDeviceFields();
        if (map.getItem(CTL_RT_X1_RY_ZhengQi.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue() > 0) {
            if (this.getOpenCloseFields().getItem('oc_ranshaoqifuhetiaojie').getValue() > 0)
                return 2;
            return 1;
        }
        else
            return 0;
    };
    return CTL_RT_X1_RY_ZhengQi;
}(ZQ_1.CTL_RT_X1_ZhengQi));
exports.CTL_RT_X1_RY_ZhengQi = CTL_RT_X1_RY_ZhengQi;
