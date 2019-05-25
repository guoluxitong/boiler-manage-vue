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
var _4M_1 = require("./4M");
var CTL_RT_T2_RYZQ_4MBS = /** @class */ (function (_super) {
    __extends(CTL_RT_T2_RYZQ_4MBS, _super);
    function CTL_RT_T2_RYZQ_4MBS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //4-20mA压力变送器
    CTL_RT_T2_RYZQ_4MBS.prototype.addFocusFields = function (list) {
        _super.prototype.addFocusFields.call(this, list);
        var map = this.getMockFields();
        list.push(map.getItem('mo_zhengqiyali'));
    };
    return CTL_RT_T2_RYZQ_4MBS;
}(_4M_1.CTL_RT_T2_RYZQ_4M));
exports.CTL_RT_T2_RYZQ_4MBS = CTL_RT_T2_RYZQ_4MBS;
