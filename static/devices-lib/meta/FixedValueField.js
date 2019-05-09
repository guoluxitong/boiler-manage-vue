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
var BaseInfoField_1 = require("./BaseInfoField");
var Collections_1 = require("../entities/Collections");
//namespace DevicesLib.meta {
var FixedValueField = /** @class */ (function (_super) {
    __extends(FixedValueField, _super);
    function FixedValueField(name, title, value, valueMap) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.title = title;
        _this.value = value;
        if (valueMap) {
            _this.valueMap = new Collections_1.NumberHashMap(valueMap);
        }
        return _this;
    }
    FixedValueField.prototype.setValue = function (value) {
        this.value = value;
    };
    FixedValueField.prototype.haveValue = function () {
        var bytes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bytes[_i] = arguments[_i];
        }
        return true;
    };
    FixedValueField.prototype.getValueString = function () {
        if (this.valueMap)
            return this.valueMap.getItem(this.value);
        return _super.prototype.getValueString.call(this);
    };
    return FixedValueField;
}(BaseInfoField_1.BaseInfoField));
exports.FixedValueField = FixedValueField;
//}
