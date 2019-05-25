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
var BaseInfoField_1 = require("../BaseInfoField");
var DeviceField_1 = require("../DeviceField");
var Collections_1 = require("../../entities/Collections");
var BaseInfoField = /** @class */ (function (_super) {
    __extends(BaseInfoField, _super);
    function BaseInfoField(name, startIndex, bytesLength, title, unit, valueMap) {
        if (unit === void 0) { unit = ''; }
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.startIndex = startIndex;
        _this.bytesLength = bytesLength;
        _this.title = title;
        _this.unit = unit;
        if (valueMap) {
            _this.valueMap = new Collections_1.NumberHashMap(valueMap);
        }
        return _this;
    }
    BaseInfoField.prototype.haveValue = function () {
        var bytes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bytes[_i] = arguments[_i];
        }
        this.value = (bytes[0] & 0xFF) << 8 | bytes[1] & 0xFF;
        return true;
    };
    BaseInfoField.prototype.getValueString = function () {
        if (this.valueMap)
            return this.valueMap.getItem(this.value);
        return _super.prototype.getValueString.call(this);
    };
    return BaseInfoField;
}(BaseInfoField_1.BaseInfoField));
exports.BaseInfoField = BaseInfoField;
var DemandField = /** @class */ (function (_super) {
    __extends(DemandField, _super);
    function DemandField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DemandField.prototype.haveValue = function () {
        var bytes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bytes[_i] = arguments[_i];
        }
        if (0x7F == bytes[0]) {
            this.value = 1;
        }
        else {
            this.value = 0;
        }
        return true;
    };
    return DemandField;
}(BaseInfoField));
exports.DemandField = DemandField;
var DeviceField = /** @class */ (function (_super) {
    __extends(DeviceField, _super);
    function DeviceField(name, startIndex, bytesLength, title, valueMap) {
        var _this = _super.call(this) || this;
        _this.sb = '';
        _this.name = name;
        _this.startIndex = startIndex;
        _this.bytesLength = bytesLength;
        _this.title = title;
        _this.valueMap = new Collections_1.NumberHashMap(valueMap);
        return _this;
    }
    DeviceField.prototype.haveValue = function () {
        var bytes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bytes[_i] = arguments[_i];
        }
        this.value = bytes[1] & 0xFF | (bytes[0] & 0xFF) << 8;
        if (0x7FFF == this.value) {
            this.value = 1;
        }
        if (0x0000 == this.value) {
            this.value = 0;
        }
        return true;
    };
    DeviceField.prototype.getValueString = function () {
        if (this.valueMap)
            return this.valueMap.getItem(this.value);
        return _super.prototype.getValueString.call(this);
    };
    return DeviceField;
}(DeviceField_1.DeviceField));
exports.DeviceField = DeviceField;
var ExceptionField_1 = require("../ExceptionField");
var ExceptionField = /** @class */ (function (_super) {
    __extends(ExceptionField, _super);
    function ExceptionField(name, startIndex, bytesLength, title, valueMap) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.startIndex = startIndex;
        _this.bytesLength = bytesLength;
        _this.title = title;
        _this.valueMap = new Collections_1.NumberHashMap(valueMap);
        return _this;
    }
    ExceptionField.prototype.haveValue = function () {
        var bytes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bytes[_i] = arguments[_i];
        }
        this.value = bytes[0] & 0xFF;
        if (this.value >= 1 && this.value <= 99) {
            this.title = this.getValueString();
            return true;
        }
        else
            return false;
    };
    return ExceptionField;
}(ExceptionField_1.ExceptionField));
exports.ExceptionField = ExceptionField;
var MockField_1 = require("../MockField");
var MockField = /** @class */ (function (_super) {
    __extends(MockField, _super);
    function MockField(name, startIndex, bytesLength, title, unit, baseNumber) {
        if (unit === void 0) { unit = ''; }
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.startIndex = startIndex;
        _this.bytesLength = bytesLength;
        _this.title = title;
        _this.unit = unit;
        if (baseNumber) {
            _this.baseNumber = baseNumber;
        }
        return _this;
    }
    MockField.prototype.haveValue = function () {
        var bytes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bytes[_i] = arguments[_i];
        }
        var i = bytes[0] << 8 | bytes[1];
        if (0x8000 == i)
            return false;
        this.value = i;
        if (this.getBaseNumber()) {
            this.value = i / this.getBaseNumber();
        }
        return true;
    };
    return MockField;
}(MockField_1.MockField));
exports.MockField = MockField;
var OpenCloseField_1 = require("../OpenCloseField");
var OpenCloseField = /** @class */ (function (_super) {
    __extends(OpenCloseField, _super);
    function OpenCloseField(name, startIndex, bytesLength, title, bit, valueMap) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.startIndex = startIndex;
        _this.bytesLength = bytesLength;
        _this.title = title;
        _this.bit = bit;
        _this.valueMap = new Collections_1.NumberHashMap(valueMap);
        return _this;
    }
    OpenCloseField.prototype.haveValue = function () {
        var bytes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bytes[_i] = arguments[_i];
        }
        this.value = bytes[0];
        var i = 1 << this.bit;
        if ((i & this.value) == i) {
            this.value = 1;
        }
        else {
            this.value = 0;
        }
        return true;
    };
    OpenCloseField.prototype.getValueString = function () {
        if (this.valueMap)
            return this.valueMap.getItem(this.value);
        return _super.prototype.getValueString.call(this);
    };
    return OpenCloseField;
}(OpenCloseField_1.OpenCloseField));
exports.OpenCloseField = OpenCloseField;
var map_1 = require("../../map/map");
var SettingField = /** @class */ (function (_super) {
    __extends(SettingField, _super);
    function SettingField(name, startIndex, bytesLength, title, unit) {
        return _super.call(this, name, startIndex, bytesLength, title, unit, 0) || this;
    }
    SettingField.prototype.setDeviceFieldForUIKey = function (fieldForUI) {
        fieldForUI.setKey(map_1.map.KEY_SETTING);
    };
    return SettingField;
}(MockField));
exports.SettingField = SettingField;
