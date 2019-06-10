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
var _4J_BS_1 = require("./4J_BS");
var CTL_RT_T2_RYZQ_4JBS2 = /** @class */ (function (_super) {
    __extends(CTL_RT_T2_RYZQ_4JBS2, _super);
    function CTL_RT_T2_RYZQ_4JBS2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //4电极压力变送器2段火
    CTL_RT_T2_RYZQ_4JBS2.prototype.getPowerInfo2 = function () {
        var map = this.getDeviceFields();
        if (map.getItem(CTL_RT_T2_RYZQ_4JBS2.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue() > 0) {
            if (this.getOpenCloseFields().getItem('oc_ranshaoqifuhe_zengda').getValue() > 0)
                return 2;
            return 1;
        }
        else
            return 0;
    };
    return CTL_RT_T2_RYZQ_4JBS2;
}(_4J_BS_1.CTL_RT_T2_RYZQ_4JBS));
exports.CTL_RT_T2_RYZQ_4JBS2 = CTL_RT_T2_RYZQ_4JBS2;
