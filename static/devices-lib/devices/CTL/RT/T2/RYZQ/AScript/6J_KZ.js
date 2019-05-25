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
var CTL_RT_T2_RYZQ_6JKZ = /** @class */ (function (_super) {
    __extends(CTL_RT_T2_RYZQ_6JKZ, _super);
    function CTL_RT_T2_RYZQ_6JKZ() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CTL_RT_T2_RYZQ_6JKZ.prototype.addFocusFields = function (list) {
        _super.prototype.addFocusFields.call(this, list);
        var f = this.getBaseInfoFields().getItem(CTL_RT_T2_RYZQ_6JKZ.KEY_POINT_YA_LI_STATUS);
        var map = this.getOpenCloseFields();
        var a = map.getItem('oc_fuhetiaojie').getValue() > 0 ? 2 : 0;
        var b = map.getItem('oc_qitingkongzhi').getValue();
        var c = a | b;
        f.setValue(c);
        list.push(f);
    };
    CTL_RT_T2_RYZQ_6JKZ.prototype.getPowerInfo = function () {
        var map = this.getDeviceFields();
        if (map.getItem(CTL_RT_T2_RYZQ_6JKZ.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue() > 0) {
            return this.getOpenCloseFields().getItem('oc_ranshaoqifuhe_zengda').getValue() ? 2 : 1;
        }
        return 0;
    };
    CTL_RT_T2_RYZQ_6JKZ.KEY_POINT_YA_LI_STATUS = 'ba_yali_status';
    return CTL_RT_T2_RYZQ_6JKZ;
}(_6J_1.CTL_RT_T2_RYZQ_6J));
exports.CTL_RT_T2_RYZQ_6JKZ = CTL_RT_T2_RYZQ_6JKZ;
