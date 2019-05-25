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
var CTL_RT_T2_RYZQ_6J = /** @class */ (function (_super) {
    __extends(CTL_RT_T2_RYZQ_6J, _super);
    function CTL_RT_T2_RYZQ_6J() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //6电极
    CTL_RT_T2_RYZQ_6J.prototype.addFocusFields = function (list) {
        var f = this.getBaseInfoFields().getItem(CTL_RT_T2_RYZQ_6J.KEY_POINT_SHUI_WEI_STATUS);
        var map = this.getOpenCloseFields();
        var a = map.getItem('oc_queshuidianji').getValue();
        var a1 = map.getItem('oc_dishuiweibaojingdianji_6dianjiteyou_').getValue();
        var b = map.getItem('oc_dishuiweidianji').getValue();
        var b1 = map.getItem('oc_zhongshuiweidianji_6dianjiteyou_').getValue();
        var c = map.getItem('oc_gaoshuiweidianji').getValue();
        var d = map.getItem('oc_gaoshuiweibaojingdianji').getValue();
        var x = a | a1 | b | b1 | c | d;
        f.setValue(x);
        list.push(f);
    };
    CTL_RT_T2_RYZQ_6J.KEY_POINT_SHUI_WEI_STATUS = 'ba_shuiwei_status';
    return CTL_RT_T2_RYZQ_6J;
}(RYZQ_1.CTL_RT_T2_RYZQ_Ts));
exports.CTL_RT_T2_RYZQ_6J = CTL_RT_T2_RYZQ_6J;
