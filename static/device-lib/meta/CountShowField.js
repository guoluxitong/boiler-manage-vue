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
var CountShowField = /** @class */ (function (_super) {
    __extends(CountShowField, _super);
    function CountShowField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 分组Key
         */
        _this.groupKey = '';
        return _this;
    }
    CountShowField.prototype.setGroupKey = function (groupKey) {
        this.groupKey = groupKey;
    };
    CountShowField.prototype.getValue = function () {
        return 0;
    };
    CountShowField.prototype.haveValue = function (bytes) {
        return true;
    };
    CountShowField.prototype.setDeviceFieldForUIKey = function (fieldForUI) {
        fieldForUI.setKey(this.groupKey);
    };
    return CountShowField;
}(ByteField_1.ByteField));
exports.CountShowField = CountShowField;
//}
