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
module.exports = /** @class */ (function (_super) {
    __extends(CTL_RT_X1_DZQ, _super);
    function CTL_RT_X1_DZQ() {
        var _this = _super.call(this) || this;
        _this.BYTE_ARRAY_LENGTH = 111;
        return _this;
    }
    CTL_RT_X1_DZQ.prototype.getPowerInfo = function () {
        return 0;
    };
    CTL_RT_X1_DZQ.prototype.addFocusFields = function (list) {
        var map = this.getBaseInfoFields();
        var field = map.getItem(CTL_RT_X1_DZQ.KEY_POINT_RAN_SHAO_QI);
        var count = 0;
        var map2 = this.getOpenCloseFields();
        count += map2.getItem('oc_jiarezu1kongzhi').getValue();
        count += map2.getItem('oc_jiarezu2kongzhi').getValue();
        field.setValue(count);
        list.push(field);
    };
    return CTL_RT_X1_DZQ;
}(RT_1.CTL_RT));
