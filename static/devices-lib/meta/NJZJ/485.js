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
        this.value = bytes[1] & 0xFF | (bytes[0] & 0xFF) << 8;
        return 0x7FFF != this.value;
    };
    BaseInfoField.prototype.getValueString = function () {
        if (this.valueMap)
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
        //        if('循环泵'== this.getTitle()){
        //            System.out.println('')
        //        }
        if (0x7FFF == this.value)
            return false;
        this.value = 0;
        if (this.valueMap) {
            var v = (bytes[0] & 0xFF) | 0x3F;
            if (0xC0 == (v & 0xC0)) {
                this.sb += this.valueMap.getItem(0xC0);
            }
            else {
                this.sb += this.valueMap.getItem(0x3F);
            }
            this.sb += '/';
            v = (bytes[0] & 0xFF) | 0xCF;
            if (0x30 == (v & 0x30)) {
                this.sb += this.valueMap.getItem(0x30);
            }
            else {
                this.sb += this.valueMap.getItem(0xCF);
            }
            this.sb += '/';
            v = (bytes[0] & 0xFF) | 0xF0;
            if (0x0F == (v & 0x0F)) {
                this.sb += this.valueMap.getItem(0x0F);
                this.value = (bytes[1] | 0x80) & 0xFF; //最高位补1，表示设备为运行状态
            }
            else {
                this.sb += this.valueMap.getItem(0xF0);
                this.value = bytes[1] & 0xFF;
            }
        }
        return true;
    };
    DeviceField.prototype.getValueString = function () {
        return this.sb;
    };
    return DeviceField;
}(DeviceField_1.DeviceField));
exports.DeviceField = DeviceField;
var ExceptionField_1 = require("../ExceptionField");
var ExceptionField = /** @class */ (function (_super) {
    __extends(ExceptionField, _super);
    function ExceptionField(name, startIndex, bytesLength, title, level) {
        if (level === void 0) { level = ExceptionField.Exception_Waring; }
        var _this = _super.call(this) || this;
        _this.level = level;
        _this.name = name;
        _this.startIndex = startIndex;
        _this.bytesLength = bytesLength;
        _this.title = title;
        return _this;
    }
    ExceptionField.prototype.haveValue = function () {
        var bytes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bytes[_i] = arguments[_i];
        }
        this.value = bytes[1] & 0xFF | (bytes[0] & 0xFF) << 8;
        //        if(this.getTitle().equals('关键参数异常')){
        //            System.out.println('')
        //        }
        if (0x7FFF == this.value)
            return false;
        return 0x5555 != this.value;
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
        // if(this.title == '后延时'){
        //     console.log(i)
        // }
        if (0x7FFF == i)
            return false;
        //let buf = new ArrayBuffer(4)
        //let view  = new Uint8Array(buf)
        // for(let i =0i< bytes.lengthi++){
        //     view[i]=bytes[i]
        // }
        var dv = new DataView(new ArrayBuffer(2));
        dv.setInt16(0, i);
        i = dv.getInt16(0);
        this.value = i;
        if (this.getBaseNumber()) {
            this.value = i / this.getBaseNumber();
        }
        return true;
    };
    return MockField;
}(MockField_1.MockField));
exports.MockField = MockField;
var RanShaoQiField = /** @class */ (function (_super) {
    __extends(RanShaoQiField, _super);
    function RanShaoQiField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RanShaoQiField.prototype.haveValue = function () {
        var bytes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bytes[_i] = arguments[_i];
        }
        this.value = bytes[1] & 0xFF | (bytes[0] & 0xFF) << 8;
        if (0x7FFF != this.value) {
            this.value = bytes[1] & 0xFF;
            return true;
        }
        return false;
    };
    RanShaoQiField.prototype.getValueString = function () {
        if (this.valueMap)
            return this.valueMap.getItem(this.value);
        return _super.prototype.getValueString.call(this);
    };
    return RanShaoQiField;
}(DeviceField));
exports.RanShaoQiField = RanShaoQiField;
var RunDaysField = /** @class */ (function (_super) {
    __extends(RunDaysField, _super);
    function RunDaysField(name, startIndex, bytesLength, title, unit) {
        return _super.call(this, name, startIndex, bytesLength, title, unit) || this;
    }
    RunDaysField.prototype.haveValue = function () {
        var bytes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bytes[_i] = arguments[_i];
        }
        return true;
    };
    return RunDaysField;
}(BaseInfoField));
exports.RunDaysField = RunDaysField;
var map_1 = require("../../map/map");
var SettingField = /** @class */ (function (_super) {
    __extends(SettingField, _super);
    function SettingField(name, startIndex, bytesLength, title, unit, baseNumber, cmdGroupKey, address, minValue, maxValue) {
        if (unit === void 0) { unit = ''; }
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
    return SettingField;
}(MockField));
exports.SettingField = SettingField;
var StartStopField_1 = require("../StartStopField");
var Command_1 = require("../../command/Command");
var StartStopField = /** @class */ (function (_super) {
    __extends(StartStopField, _super);
    function StartStopField(name, startIndex, bytesLength, title, cmdGroupKey, address, minValue, maxValue) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.startIndex = startIndex;
        _this.bytesLength = bytesLength;
        _this.title = title;
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
    StartStopField.prototype.haveValue = function () {
        var bytes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bytes[_i] = arguments[_i];
        }
        this.value = bytes[1] << 8 | bytes[0];
        return 0x7FFF != this.value;
    };
    StartStopField.prototype.getValueString = function () {
        var h = (this.value / 60).toString();
        if (2 > h.length)
            h = '0' + h;
        var m = (this.value % 60).toString();
        if (2 > m.length)
            m = '0' + m;
        return h + ':' + m;
    };
    StartStopField.prototype.getCommand = function () {
        if (this.address) {
            var cmd = new Command_1.TimeCommand(this.title, this.address);
            cmd.setAddress(this.address);
            cmd.setMaxValue(this.maxValue);
            cmd.setMinValue(this.minValue);
            cmd.initValue(this.value / 60, this.value % 60);
            cmd.setTitle(this.getTitle());
            return cmd;
        }
        return null;
    };
    return StartStopField;
}(StartStopField_1.StartStopField));
exports.StartStopField = StartStopField;
var SystemStatusField = /** @class */ (function (_super) {
    __extends(SystemStatusField, _super);
    function SystemStatusField(name, startIndex, bytesLength, title, valueMap, cmdGroupKey, address, minValue, maxValue) {
        var _this = _super.call(this, name, startIndex, bytesLength, title, '') || this;
        _this.valueMap = new Collections_1.NumberHashMap(valueMap);
        _this.commandGroupKey = cmdGroupKey;
        _this.address = address;
        _this.minValue = minValue;
        _this.maxValue = maxValue;
        return _this;
    }
    SystemStatusField.prototype.getCommand = function () {
        var cmd = new Command_1.SystemCommand(this.title, this.address, this.maxValue, this.minValue);
        cmd.initValue(this.value);
        cmd.setTitle(this.getTitle());
        return cmd;
    };
    return SystemStatusField;
}(BaseInfoField));
exports.SystemStatusField = SystemStatusField;
