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
var RT_1 = require("../RT");
var X1_1 = require("../../../../map/zh-cn/CTL/RT/AScript/X1");
module.exports = /** @class */ (function (_super) {
    __extends(CTL_RT_X1_DRS, _super);
    function CTL_RT_X1_DRS() {
        var _this = _super.call(this) || this;
        _this.BYTE_ARRAY_LENGTH = 111;
        return _this;
    }
    CTL_RT_X1_DRS.prototype.getPowerInfo = function () {
        return 0;
    };
    CTL_RT_X1_DRS.prototype.addFocusFields = function (list) {
        var map = this.getBaseInfoFields();
        var field = map.getItem('ba_shuiweioryalizhuangtai');
        var map2 = this.getOpenCloseFields();
        var n1 = map2.getItem('oc_bushuibengkongzhixinhao').getValue() == 1 ? 4 : 0;
        var n2 = map2.getItem('oc_didianji/dianjiedianyalibiaodizhen').getValue() == 1 ? 2 : 0;
        var n3 = map2.getItem('oc_gaodianji/dianjiedianyalibiaogaozhen').getValue() == 1 ? 1 : 0;
        field.setValueString(X1_1.CTL_RT_X1_Ts.coms_lv_yl_sw_status[n1 + n2 + n3]);
        field = map.getItem(CTL_RT_X1_DRS.KEY_POINT_RAN_SHAO_QI);
        var count = 0;
        count += map2.getItem('oc_jiarezu1kongzhi').getValue();
        count += map2.getItem('oc_jiarezu2kongzhi').getValue();
        field.setValue(count);
        list.push(field);
        list.push(map2.getItem("mo_chushuiwendu"));
    };
    return CTL_RT_X1_DRS;
}(RT_1.CTL_RT));
