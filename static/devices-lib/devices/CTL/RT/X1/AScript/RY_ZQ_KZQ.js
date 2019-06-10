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
var RY_ZQ_1 = require("./RY_ZQ");
var CTL_RT_X1_RY_ZhengQi_KZQ = /** @class */ (function (_super) {
    __extends(CTL_RT_X1_RY_ZhengQi_KZQ, _super);
    function CTL_RT_X1_RY_ZhengQi_KZQ() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CTL_RT_X1_RY_ZhengQi_KZQ.prototype.addFocusFields = function (list) {
        _super.prototype.addFocusFields.call(this, list);
        var map = this.getBaseInfoFields();
        var f = map.getItem('ba_yalizhuangtai');
        var map2 = this.getOpenCloseFields();
        var a = map2.getItem('oc_fuhetiaojie').getValue() == 1 ? 2 : 0;
        var b = map2.getItem('oc_qitingkongzhi').getValue() == 1 ? 1 : 0;
        f.setValue(a | b);
        list.push(f);
        var map3 = this.getMockFields();
        list.push(map3.getItem('mo_paiyanwendu'));
    };
    return CTL_RT_X1_RY_ZhengQi_KZQ;
}(RY_ZQ_1.CTL_RT_X1_RY_ZhengQi));
exports.CTL_RT_X1_RY_ZhengQi_KZQ = CTL_RT_X1_RY_ZhengQi_KZQ;
