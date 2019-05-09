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
var BaseDevice_1 = require("./BaseDevice");
var PLC_YuRe = /** @class */ (function (_super) {
    __extends(PLC_YuRe, _super);
    function PLC_YuRe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PLC_YuRe.prototype.getPowerInfo = function () {
        return 0;
    };
    return PLC_YuRe;
}(BaseDevice_1.PLC));
exports.PLC_YuRe = PLC_YuRe;
