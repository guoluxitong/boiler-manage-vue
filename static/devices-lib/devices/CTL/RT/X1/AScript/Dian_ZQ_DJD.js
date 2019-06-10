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
var ZQ_1 = require("./ZQ");
var CTL_RT_X1_Dian_ZhengQi_DJD = /** @class */ (function (_super) {
    __extends(CTL_RT_X1_Dian_ZhengQi_DJD, _super);
    function CTL_RT_X1_Dian_ZhengQi_DJD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CTL_RT_X1_Dian_ZhengQi_DJD.prototype.getPowerInfo = function () {
        return 0;
    };
    CTL_RT_X1_Dian_ZhengQi_DJD.prototype.addFocusFields = function (list) {
        _super.prototype.addFocusFields.call(this, list);
        var map = this.getCountFields();
        var f = map.getItem(CTL_RT_X1_Dian_ZhengQi_DJD.KEY_POINT_RAN_SHAO_QI);
        var count = 0;
        var map2 = this.getDeviceFields();
        count += map2.getItem('oc_jiarezu1kongzhi').getValue();
        count += map2.getItem('oc_jiarezu2kongzhi').getValue();
        f.setValue(count);
        list.insert(2, f);
        map = this.getBaseInfoFields();
        f = map.getItem('ba_yalizhuangtai');
        map2 = this.getOpenCloseFields();
        var a = map2.getItem('oc_dianjiedianyalibiaodizhen').getValue() == 1 ? 2 : 0;
        var b = map2.getItem('oc_dianjiedianyalibiaogaozhen').getValue() == 1 ? 1 : 0;
        f.setValue(a | b);
        list.push(f);
    };
    return CTL_RT_X1_Dian_ZhengQi_DJD;
}(ZQ_1.CTL_RT_X1_ZhengQi));
exports.CTL_RT_X1_Dian_ZhengQi_DJD = CTL_RT_X1_Dian_ZhengQi_DJD;
