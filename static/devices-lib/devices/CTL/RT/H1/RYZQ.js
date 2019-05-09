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
var RT_1 = require("../RT");
module.exports = (_a = /** @class */ (function (_super) {
        __extends(CTL_RT_H1_RYZQ, _super);
        function CTL_RT_H1_RYZQ() {
            var _this = _super.call(this) || this;
            _this.BYTE_ARRAY_LENGTH = 151;
            return _this;
        }
        CTL_RT_H1_RYZQ.prototype.addFocusFields = function (list) {
            var map = this.getMockFields();
            list.push(map.getItem("mo_zhengqiyali"));
        };
        CTL_RT_H1_RYZQ.prototype.getPowerInfo = function () {
            return 0;
        };
        return CTL_RT_H1_RYZQ;
    }(RT_1.CTL_RT)),
    _a.KEY_POINT_RAN_SHAO_QI_STATUS = "oc_ranshaoqifuhediaojie/zengdadiaojie",
    _a);
