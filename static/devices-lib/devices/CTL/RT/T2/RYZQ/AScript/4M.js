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
var RYZQ_1 = require("../../AScript/RYZQ");
var CTL_RT_T2_RYZQ_4M = /** @class */ (function (_super) {
    __extends(CTL_RT_T2_RYZQ_4M, _super);
    function CTL_RT_T2_RYZQ_4M() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //4-20MA
    CTL_RT_T2_RYZQ_4M.prototype.addFocusFields = function (list) {
        var map = this.getMockFields();
        list.push(map.getItem('mo_shuiweixinhao'));
    };
    return CTL_RT_T2_RYZQ_4M;
}(RYZQ_1.CTL_RT_T2_RYZQ_Ts));
exports.CTL_RT_T2_RYZQ_4M = CTL_RT_T2_RYZQ_4M;
