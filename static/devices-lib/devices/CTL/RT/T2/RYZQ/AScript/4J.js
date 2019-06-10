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
var RYZQ_1 = require("../../AScript/RYZQ");
var CTL_RT_T2_RYZQ_4J = /** @class */ (function (_super) {
    __extends(CTL_RT_T2_RYZQ_4J, _super);
    function CTL_RT_T2_RYZQ_4J() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //4电极
    CTL_RT_T2_RYZQ_4J.prototype.addFocusFields = function (list) {
        var f = this.getBaseInfoFields().getItem(CTL_RT_T2_RYZQ_4J.KEY_POINT_SHUI_WEI_STATUS);
        var values = f.getValueMap();
        //console.log(values)
        if (values) {
            var map = this.getOpenCloseFields();
            var a = map.getItem('oc_queshuidianji').getValue();
            var b = map.getItem('oc_dishuiweidianji').getValue();
            var c = map.getItem('oc_gaoshuiweidianji').getValue();
            var d = map.getItem('oc_gaoshuiweibaojingdianji').getValue();
            f.setValueString(values.getItem(a + b + c + d));
            list.push(f);
        }
    };
    CTL_RT_T2_RYZQ_4J.KEY_POINT_SHUI_WEI_STATUS = 'ba_shuiwei_status';
    return CTL_RT_T2_RYZQ_4J;
}(RYZQ_1.CTL_RT_T2_RYZQ_Ts));
exports.CTL_RT_T2_RYZQ_4J = CTL_RT_T2_RYZQ_4J;
