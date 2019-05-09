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
module.exports = /** @class */ (function (_super) {
    __extends(CTL_NJZJ_IPK2_485, _super);
    /**
     * 485数据读取指令
     */
    function CTL_NJZJ_IPK2_485() {
        var _this = _super.call(this) || this;
        _this.BYTE_ARRAY_LENGTH = 1749;
        return _this;
    }
    return CTL_NJZJ_IPK2_485;
}(CTL_NJZJ_IP_485_1.IP_485));
