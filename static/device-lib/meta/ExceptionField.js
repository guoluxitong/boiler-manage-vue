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
var ByteField_1 = require("./ByteField");
var map_1 = require("../map/map");
//namespace DevicesLib.meta {
var ExceptionField = /** @class */ (function (_super) {
    __extends(ExceptionField, _super);
    function ExceptionField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExceptionField.prototype.setDeviceFieldForUIKey = function (fieldForUI) {
        fieldForUI.setKey(map_1.map.KEY_EXCEPTION);
    };
    return ExceptionField;
}(ByteField_1.ByteField));
exports.ExceptionField = ExceptionField;
//}
