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
    __extends(CTL_RT_X1_RYZQDJD, _super);
    function CTL_RT_X1_RYZQDJD() {
        var _this = _super.call(this) || this;
        _this.BYTE_ARRAY_LENGTH = 111;
        return _this;
    }
    CTL_RT_X1_RYZQDJD.prototype.getPowerInfo = function () {
        var map = this.getOpenCloseFields();
        if (map.getItem(RT_1.CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue() > 0) {
            if (map.getItem('oc_ranshaoqifuhetiaojie').getValue() > 0)
                return 2;
            return 1;
        }
        else
            return 0;
    };
    CTL_RT_X1_RYZQDJD.prototype.addFocusFields = function (list) {
        var map = this.getBaseInfoFields();
        var field = map.getItem('ba_yalizhuangtai');
        var map2 = this.getOpenCloseFields();
        var n1 = map2.getItem('oc_dianjiedianyalibiaodizhen').getValue() == 1 ? 2 : 0;
        var n2 = map2.getItem('oc_dianjiedianyalibiaogaozhen').getValue() == 1 ? 1 : 0;
        field.setValueString(X1_1.CTL_RT_X1_Ts.coms_djd_yl_status[n1 + n2]);
        var map3 = this.getMockFields();
        list.push(map3.getItem('mo_paiyanwendu'));
    };
    return CTL_RT_X1_RYZQDJD;
}(RT_1.CTL_RT));
