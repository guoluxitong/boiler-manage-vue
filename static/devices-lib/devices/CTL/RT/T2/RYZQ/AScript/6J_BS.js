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
var _6J_1 = require("./6J");
var CTL_RT_T2_RYZQ_6JBS = /** @class */ (function (_super) {
    __extends(CTL_RT_T2_RYZQ_6JBS, _super);
    function CTL_RT_T2_RYZQ_6JBS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CTL_RT_T2_RYZQ_6JBS.prototype.addFocusFields = function (list) {
        _super.prototype.addFocusFields.call(this, list);
        var map = this.getMockFields();
        list.push(map.getItem('mo_zhengqiyali'));
    };
    return CTL_RT_T2_RYZQ_6JBS;
}(_6J_1.CTL_RT_T2_RYZQ_6J));
exports.CTL_RT_T2_RYZQ_6JBS = CTL_RT_T2_RYZQ_6JBS;
