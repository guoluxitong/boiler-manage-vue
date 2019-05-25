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
var CTL_NJZJ_IP_485_1 = require("../CTL_NJZJ_IP_485");
var _485_1 = require("../../../../../meta/NJZJ/485");
module.exports = /** @class */ (function (_super) {
    __extends(Map_CTL_NJZJ_IPT2_485, _super);
    function Map_CTL_NJZJ_IPT2_485() {
        var _this = _super.call(this) || this;
        _this.addPoint(new _485_1.SettingField('se_jiarezushu', 1114, 2, '加热组数', '组', 0, CTL_NJZJ_IP_485_1.Map_CTL_NJZJ_IP_485.Commands_Key_Parameters_Setting, '0517', 1, 30));
        return _this;
    }
    return Map_CTL_NJZJ_IPT2_485;
}(CTL_NJZJ_IP_485_1.Map_CTL_NJZJ_IP_485));
