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
var RT_1 = require("../../RT");
var CTL_RT_T3_RYZQ_Ts = /** @class */ (function (_super) {
    __extends(CTL_RT_T3_RYZQ_Ts, _super);
    function CTL_RT_T3_RYZQ_Ts() {
        var _this = _super.call(this) || this;
        _this.BYTE_ARRAY_LENGTH = 89;
        return _this;
    }
    CTL_RT_T3_RYZQ_Ts.prototype.addFocusFields = function (list) {
        var map = this.getMockFields();
        list.push(map.getItem("mo_lengningqiyanwen"));
        list.push(map.getItem("mo_jishuiwendu"));
        list.push(map.getItem("mo_shuiweixinhao"));
        list.push(map.getItem("mo_paiyanwendu"));
        list.push(map.getItem("mo_jienengqiyanwen"));
    };
    CTL_RT_T3_RYZQ_Ts.prototype.getPowerInfo = function () {
        return 0;
    };
    return CTL_RT_T3_RYZQ_Ts;
}(RT_1.CTL_RT));
exports.CTL_RT_T3_RYZQ_Ts = CTL_RT_T3_RYZQ_Ts;
