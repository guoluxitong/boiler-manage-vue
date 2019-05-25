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
var X1_1 = require("../../AScript/X1");
var CTL_RT_X1_ZhengQi = /** @class */ (function (_super) {
    __extends(CTL_RT_X1_ZhengQi, _super);
    function CTL_RT_X1_ZhengQi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CTL_RT_X1_ZhengQi.prototype.addFocusFields = function (list) {
        _super.prototype.addFocusFields.call(this, list);
        var map = this.getBaseInfoFields();
        var f = map.getItem('ba_shuiweizhuangtai');
        var values = f.getValueMap();
        if (values) {
            var map2 = this.getOpenCloseFields();
            var a = map2.getItem('oc_jixiandishuiweidianji').getValue();
            var b = map2.getItem('oc_didianji').getValue();
            var c = map2.getItem('oc_gaodianji').getValue();
            var d = map2.getItem('oc_gaobaojingdianji').getValue();
            var v = (1 << 3) | (a + b + c + d);
            f.setValueString(values.getItem(v));
            list.push(f);
        }
    };
    return CTL_RT_X1_ZhengQi;
}(X1_1.CTL_RT_X1_Ts));
exports.CTL_RT_X1_ZhengQi = CTL_RT_X1_ZhengQi;
