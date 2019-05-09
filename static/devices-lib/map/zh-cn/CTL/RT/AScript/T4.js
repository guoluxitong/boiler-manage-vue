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
var RT_1 = require("../RT");
var CTL_RT_T4_Ts = /** @class */ (function (_super) {
    __extends(CTL_RT_T4_Ts, _super);
    function CTL_RT_T4_Ts() {
        return _super.call(this) || this;
        // this.subTypes.addItem('燃油气蒸汽','CTL_RT_T4_RYZQ');
    }
    CTL_RT_T4_Ts.coms_status = {
        0: "待命",
        1: "报警",
        2: "运行",
        3: "关机"
    };
    return CTL_RT_T4_Ts;
}(RT_1.CTL_RT));
exports.CTL_RT_T4_Ts = CTL_RT_T4_Ts;
