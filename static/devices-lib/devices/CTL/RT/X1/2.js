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
    __extends(CTL_RT_X1_RYRS2, _super);
    function CTL_RT_X1_RYRS2() {
        var _this = _super.call(this) || this;
        _this.BYTE_ARRAY_LENGTH = 111;
        return _this;
    }
    CTL_RT_X1_RYRS2.prototype.getPowerInfo = function () {
        var map = this.getOpenCloseFields();
        if (map.getItem(RT_1.CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue() > 0) {
            if (map.getItem('oc_ranshaoqifuhetiaojie').getValue() > 0)
                return 2;
            return 1;
        }
        else
            return 0;
    };
    CTL_RT_X1_RYRS2.prototype.addFocusFields = function (list) {
        var map = this.getMockFields();
        list.push(map.getItem('mo_chushuiwendu'));
    };
    return CTL_RT_X1_RYRS2;
}(RT_1.CTL_RT));
