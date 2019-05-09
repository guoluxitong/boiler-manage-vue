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
//namespace DevicesLib.meta {
var WriteField = /** @class */ (function (_super) {
    __extends(WriteField, _super);
    function WriteField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WriteField.prototype.setDeviceFieldForUIKey = function (fieldForUI) {
    };
    WriteField.prototype.getDeviceFieldForUI = function () {
        return null;
    };
    WriteField.prototype.getValue = function () {
        return 0;
    };
    WriteField.prototype.haveValue = function () {
        var bytes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bytes[_i] = arguments[_i];
        }
        return true;
    };
    return WriteField;
}(ByteField_1.ByteField));
exports.WriteField = WriteField;
//}
