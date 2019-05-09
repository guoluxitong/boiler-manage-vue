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
var RT_1 = require("../../RT");
var RYZQ_1 = require("../AScript/RYZQ");
module.exports = (_a = /** @class */ (function (_super) {
        __extends(CTL_RT_T3_RYZQ_YLBSQ, _super);
        function CTL_RT_T3_RYZQ_YLBSQ() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CTL_RT_T3_RYZQ_YLBSQ.prototype.addFocusFields = function (list) {
            var map = this.getMockFields();
            list.push(map.getItem("mo_zhengqiyali"));
            list.push(map.getItem("mo_lengningqiyanwen"));
            list.push(map.getItem("mo_jishuiwendu"));
            list.push(map.getItem("mo_shuiweixinhao"));
            list.push(map.getItem("mo_paiyanwendu"));
            list.push(map.getItem("mo_jienengqiyanwen"));
        };
        CTL_RT_T3_RYZQ_YLBSQ.prototype.getPowerInfo = function () {
            var map = this.getOpenCloseFields();
            var i = map.getItem(RT_1.CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue();
            if (i > 0) {
                return map.getItem(CTL_RT_T3_RYZQ_YLBSQ.KEY_POINT_RAN_SHAO_QI_STATUS).getValue() > 0 ? 1 : 0;
            }
            return 0;
        };
        return CTL_RT_T3_RYZQ_YLBSQ;
    }(RYZQ_1.CTL_RT_T3_RYZQ_Ts)),
    _a.KEY_POINT_RAN_SHAO_QI_STATUS = "oc_ranshaoqifuhediaojie/zengdadiaojie",
    _a);
