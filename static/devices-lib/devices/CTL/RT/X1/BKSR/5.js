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
var RS_3J_DJD_1 = require("../AScript/RS_3J_DJD");
module.exports = /** @class */ (function (_super) {
    __extends(CTL_RT_X1_BKSR_5, _super);
    function CTL_RT_X1_BKSR_5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CTL_RT_X1_BKSR_5.prototype.getPowerInfo = function () {
        return this.getDeviceFields().getItem(CTL_RT_X1_BKSR_5.KEY_POINT_YIN_FENG_FAN_1).getValue();
    };
    return CTL_RT_X1_BKSR_5;
}(RS_3J_DJD_1.CTL_RT_X1_RS3JDJD));
