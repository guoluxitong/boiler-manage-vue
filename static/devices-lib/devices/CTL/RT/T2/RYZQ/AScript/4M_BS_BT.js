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
var _4M_BS_1 = require("./4M_BS");
var CTL_RT_T2_RYZQ_4MBSBT = /** @class */ (function (_super) {
    __extends(CTL_RT_T2_RYZQ_4MBSBT, _super);
    function CTL_RT_T2_RYZQ_4MBSBT() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //4-20mA压力变送器内置比调
    CTL_RT_T2_RYZQ_4MBSBT.prototype.getPowerInfo = function () {
        return this.getDeviceFields().getItem(CTL_RT_T2_RYZQ_4MBSBT.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue();
    };
    return CTL_RT_T2_RYZQ_4MBSBT;
}(_4M_BS_1.CTL_RT_T2_RYZQ_4MBS));
exports.CTL_RT_T2_RYZQ_4MBSBT = CTL_RT_T2_RYZQ_4MBSBT;
