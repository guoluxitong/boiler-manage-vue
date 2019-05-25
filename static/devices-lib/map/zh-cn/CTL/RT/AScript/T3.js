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
var Map_CTL_RT_T3_Ts = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_T3_Ts, _super);
    function Map_CTL_RT_T3_Ts() {
        return _super.call(this) || this;
        // this.subTypes.addItem('燃油气蒸汽','CTL_RT_T3_RYZQ')
    }
    Map_CTL_RT_T3_Ts.coms_status = {
        0: '待命',
        1: '报警',
        2: '运行'
    };
    return Map_CTL_RT_T3_Ts;
}(RT_1.Map_CTL_RT));
exports.Map_CTL_RT_T3_Ts = Map_CTL_RT_T3_Ts;
