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
var X1_1 = require("../../AScript/X1");
module.exports = /** @class */ (function (_super) {
    __extends(CTL_RT_X1_HNRT_8, _super);
    function CTL_RT_X1_HNRT_8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CTL_RT_X1_HNRT_8.prototype.getPowerInfo = function () {
        return this.getDeviceFields().getItem(CTL_RT_X1_HNRT_8.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue();
    };
    CTL_RT_X1_HNRT_8.prototype.addFocusFields = function (list) {
        _super.prototype.addFocusFields.call(this, list);
        var map = this.getBaseInfoFields();
        var f = map.getItem('ba_shuiweizhuangtai');
        var values = f.getValueMap();
        if (values) {
            var map2 = this.getOpenCloseFields();
            var a = map2.getItem('oc_jixiandishuiweidianji').getValue();
            var b = map2.getItem('oc_didianji').getValue();
            var c = map2.getItem('oc_gaodianji').getValue();
            f.setValueString(values.getItem(1 << 2 | (a + b + c)));
            list.push(f);
        }
        map = this.getMockFields();
        list.push(map.getItem('mo_chushuiwendu'));
    };
    return CTL_RT_X1_HNRT_8;
}(X1_1.CTL_RT_X1_Ts));
