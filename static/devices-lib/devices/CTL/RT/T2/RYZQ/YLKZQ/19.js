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
var _a;
"use strict";
var RYZQ_1 = require("../../AScript/RYZQ");
module.exports = (_a = /** @class */ (function (_super) {
        __extends(CTL_RT_T2_RYZQ_YLKZQ_19, _super);
        function CTL_RT_T2_RYZQ_YLKZQ_19() {
            var _this = _super.call(this) || this;
            _this.BYTE_ARRAY_LENGTH = 109;
            return _this;
        }
        CTL_RT_T2_RYZQ_YLKZQ_19.prototype.getPowerInfo = function () {
            var map = this.getOpenCloseFields();
            var i = map.getItem(CTL_RT_T2_RYZQ_YLKZQ_19.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue();
            if (i > 0) {
                return map.getItem(CTL_RT_T2_RYZQ_YLKZQ_19.KEY_POINT_RAN_SHAO_QI_STATUS).getValue() > 0 ? 1 : 0;
            }
            return 0;
        };
        return CTL_RT_T2_RYZQ_YLKZQ_19;
    }(RYZQ_1.CTL_RT_T2_RYZQ_Ts)),
    _a.KEY_POINT_RAN_SHAO_QI_STATUS = "oc_ranshaoqifuhediaojie/zengdadiaojie",
    _a);
