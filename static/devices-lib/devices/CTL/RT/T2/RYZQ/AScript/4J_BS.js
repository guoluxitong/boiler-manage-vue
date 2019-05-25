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
var _4J_1 = require("./4J");
var CTL_RT_T2_RYZQ_4JBS = /** @class */ (function (_super) {
    __extends(CTL_RT_T2_RYZQ_4JBS, _super);
    function CTL_RT_T2_RYZQ_4JBS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //4电极压力变送器内置比调
    CTL_RT_T2_RYZQ_4JBS.prototype.addFocusFields = function (list) {
        _super.prototype.addFocusFields.call(this, list);
        var map = this.getMockFields();
        list.push(map.getItem('mo_zhengqiyali'));
        _super.prototype.addFocusFields.call(this, list);
    };
    return CTL_RT_T2_RYZQ_4JBS;
}(_4J_1.CTL_RT_T2_RYZQ_4J));
exports.CTL_RT_T2_RYZQ_4JBS = CTL_RT_T2_RYZQ_4JBS;
