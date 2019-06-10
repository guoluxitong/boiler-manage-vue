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
var ExceptionField_1 = require("../ExceptionField");
var MockField_1 = require("../MockField");
var OpenCloseField_1 = require("../OpenCloseField");
var map_1 = require("../../map/map");
var Command_1 = require("../../command/Command");
var Collections_1 = require("../../entities/Collections");
var BaseInfoField = /** @class */ (function (_super) {
    __extends(BaseInfoField, _super);
    function BaseInfoField(name, startIndex, bytesLength, title, unit, valueMap) {
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
        this.value = ((bytes[0] & 0xFF) << 8) | (bytes[1] & 0xFF);
        return this.value != 0x7FFF;
    };
    BaseInfoField.prototype.getValueString = function () {
        if (null != this.valueMap)
            return this.valueMap.getItem(this.value);
        return _super.prototype.getValueString.call(this);
    };
    return BaseInfoField;
}(BaseInfoField_1.BaseInfoField));
exports.BaseInfoField = BaseInfoField;
var DeviceField = /** @class */ (function (_super) {
    __extends(DeviceField, _super);
    function DeviceField(name, startIndex, bytesLength, title, valueMap) {
        var _this = _super.call(this) || this;
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
        this.value = ((bytes[0] & 0xFF) << 8) | (bytes[1] & 0xFF);
        return this.value != 0x7FFF;
    };
    DeviceField.prototype.getValueString = function () {
        if (null != this.valueMap)
            return this.valueMap.getItem(this.value);
        return _super.prototype.getValueString.call(this);
    };
    return DeviceField;
}(DeviceField_1.DeviceField));
exports.DeviceField = DeviceField;
var ExceptionField = /** @class */ (function (_super) {
    __extends(ExceptionField, _super);
    function ExceptionField(name, startIndex, bytesLength, title, bit, level) {
        if (level === void 0) { level = ExceptionField.Exception_Waring; }
        var _this = _super.call(this) || this;
        _this.level = level;
        _this.name = name;
        _this.startIndex = startIndex;
        _this.bytesLength = bytesLength;
        _this.title = title;
        _this.bit = bit;
        return _this;
    }
    ExceptionField.prototype.haveValue = function () {
        var bytes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bytes[_i] = arguments[_i];
        }
        this.value = (bytes[0] & 0xFF) << 8 | bytes[1] & 0xFF;
        var i = 1 << this.bit;
        if ((i & this.value) == i) {
            this.value = 1;
            return true;
        }
        else {
            this.value = 0;
            return false;
        }
    };
    return ExceptionField;
}(ExceptionField_1.ExceptionField));
exports.ExceptionField = ExceptionField;
var MockField = /** @class */ (function (_super) {
    __extends(MockField, _super);
    function MockField(name, startIndex, bytesLength, title, unit, baseNumber) {
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
        /*
        if (this.getTitle() == '软水箱液位') {
            console.log('软水箱液位')
        }
        */
        var i = bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3];
        if (0x7FFFFFFF == i) {
            return false;
        }
        var dv = new DataView(new ArrayBuffer(4));
        dv.setInt32(0, i);
        i = dv.getFloat32(0);
        this.value = i;
        if (this.getBaseNumber()) {
            this.value = parseFloat((i / this.getBaseNumber()).toFixed(2));
        }
        else {
            this.value = parseFloat(i.toFixed(2));
        }
        return true;
        // let data = new ArrayBuffer(4)
        // let view = new Uint8Array(data)
        // view[0] = bytes[0]
        // view[1] = bytes[1]
        // view[2] = bytes[2]
        // view[3] = bytes[3]
        // this.value = (new DataView(data)).getFloat32(0)
        // return true
    };
    return MockField;
}(MockField_1.MockField));
exports.MockField = MockField;
var OpenCloseField = /** @class */ (function (_super) {
    __extends(OpenCloseField, _super);
    function OpenCloseField(name, startIndex, bytesLength, title, bit) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.startIndex = startIndex;
        _this.bytesLength = bytesLength;
        _this.title = title;
        _this.bit = bit;
        return _this;
    }
    OpenCloseField.prototype.haveValue = function () {
        var bytes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bytes[_i] = arguments[_i];
        }
        this.value = (bytes[0] & 0xFF) << 8 | bytes[1] & 0xFF;
        var i = 1 << this.bit;
        if ((i & this.value) == i) {
            this.value = 1;
            return true;
        }
        else {
            this.value = 0;
            return false;
        }
    };
    return OpenCloseField;
}(OpenCloseField_1.OpenCloseField));
exports.OpenCloseField = OpenCloseField;
var SettingField = /** @class */ (function (_super) {
    __extends(SettingField, _super);
    function SettingField(name, startIndex, bytesLength, title, unit, baseNumber, cmdGroupKey, address, minValue, maxValue) {
        var _this = _super.call(this, name, startIndex, bytesLength, title, unit, 0) || this;
        if (baseNumber) {
            _this.baseNumber = baseNumber;
        }
        if (cmdGroupKey) {
            _this.commandGroupKey = cmdGroupKey;
            if (address) {
                _this.address = address;
            }
            if (minValue) {
                _this.minValue = minValue;
            }
            if (maxValue) {
                _this.maxValue = maxValue;
            }
        }
        return _this;
    }
    SettingField.prototype.setDeviceFieldForUIKey = function (fieldForUI) {
        fieldForUI.setKey(map_1.map.KEY_SETTING);
    };
    SettingField.prototype.createCommandAndInitValue = function () {
        var cmd = new Command_1.FloatCommand(this.title, this.address, this.maxValue, this.minValue);
        cmd.initValue(this.getValue());
        return cmd;
    };
    return SettingField;
}(MockField));
exports.SettingField = SettingField;
