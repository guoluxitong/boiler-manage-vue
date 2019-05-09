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
var RT_1 = require("../RT");
var meta_1 = require("../../../../../meta/RT/meta");
var CTL_RT_X1_Ts = /** @class */ (function (_super) {
    __extends(CTL_RT_X1_Ts, _super);
    function CTL_RT_X1_Ts() {
        var _this = _super.call(this) || this;
        _this.addPoint(new meta_1.SettingField("se_dangqianmoshi", 55, 2, "当前模式"));
        return _this;
        // this.subTypes.addItem('电热水', 'CTL_RT_X1_DRS');
        // this.subTypes.addItem('电蒸汽', 'CTL_RT_X1_DZQ');
        // this.subTypes.addItem('燃油气热水', 'CTL_RT_X1_RYRS');
        // this.subTypes.addItem('燃油气热水二段火', 'CTL_RT_X1_RYRS2');
        // this.subTypes.addItem('燃油气热水高温二段火', 'CTL_RT_X1_RYRSGW2');
        // this.subTypes.addItem('燃油气开水', 'CTL_RT_X1_RYKS');
        // this.subTypes.addItem('燃油气承压热水二段火', 'CTL_RT_X1_RYCYRS2');
        // this.subTypes.addItem('燃油气蒸汽电接点', 'CTL_RT_X1_RYZQDJD');
        // this.subTypes.addItem('燃油气蒸汽负荷调节', 'CTL_RT_X1_RYZQFHTJ');
    }
    CTL_RT_X1_Ts.coms_status = {
        0: "待命",
        1: "报警",
        2: "运行",
        3: "关机"
    };
    CTL_RT_X1_Ts.coms_djd_yl_status = {
        0: "中压",
        1: "高压",
        2: "低压",
        3: "错误"
    };
    CTL_RT_X1_Ts.coms_fhtj_yl_status = {
        0: "高压",
        1: "中压",
        2: '错误',
        3: "低压"
    };
    CTL_RT_X1_Ts.coms_lv_yl_sw_status = {
        0: "低位",
        2: "正常",
        3: "高位",
        4: '中压',
        5: '高压',
        6: "低压"
    };
    return CTL_RT_X1_Ts;
}(RT_1.CTL_RT));
exports.CTL_RT_X1_Ts = CTL_RT_X1_Ts;
