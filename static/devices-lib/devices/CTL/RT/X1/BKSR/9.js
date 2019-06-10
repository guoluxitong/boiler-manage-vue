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
var ZQ_1 = require("../AScript/ZQ");
module.exports = /** @class */ (function (_super) {
    __extends(CTL_RT_X1_BKSR_9, _super);
    function CTL_RT_X1_BKSR_9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CTL_RT_X1_BKSR_9.prototype.getPowerInfo = function () {
        return this.getDeviceFields().getItem(CTL_RT_X1_BKSR_9.KEY_POINT_YIN_FENG_FAN_1).getValue();
    };
    CTL_RT_X1_BKSR_9.prototype.addFocusFields = function (list) {
        _super.prototype.addFocusFields.call(this, list);
        var map = this.getBaseInfoFields();
        var f = map.getItem('ba_yalizhuangtai');
        var map2 = this.getOpenCloseFields();
        var a = map2.getItem('oc_dianjiedianyalibiaodizhen').getValue() == 1 ? 2 : 0;
        var b = map2.getItem('oc_dianjiedianyalibiaogaozhen').getValue() == 1 ? 1 : 0;
        console.log('a=' + a + ' b=' + b);
        f.setValue(a | b);
        list.push(f);
        var map3 = this.getMockFields();
        list.push(map3.getItem('mo_paiyanwendu'));
    };
    return CTL_RT_X1_BKSR_9;
}(ZQ_1.CTL_RT_X1_ZhengQi));
