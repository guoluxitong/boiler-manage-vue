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
var ExceptionField_1 = require("../ExceptionField");
var Collections_1 = require("../../entities/Collections");
var map_1 = require("../../map/map");
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
        if (valueMap) {
            _this.valueMap = new Collections_1.NumberHashMap(valueMap);
        }
        return _this;
    }
    OpenCloseField.prototype.haveValue = function () {
        var bytes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bytes[_i] = arguments[_i];
        }
        this.value = bytes[0] << 8 | bytes[1];
        var i = 1 << this.bit;
        //console.log(this.title+' i:='+i.toString()+' value:='+this.value.toString() )
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
var DeviceField = /** @class */ (function (_super) {
    __extends(DeviceField, _super);
    function DeviceField(name, startIndex, bytesLength, title, bit, valueMap) {
        return _super.call(this, name, startIndex, bytesLength, title, bit, valueMap) || this;
    }
    DeviceField.prototype.setDeviceFieldForUIKey = function (fieldForUI) {
        fieldForUI.setKey(map_1.map.KEY_DEVICE);
    };
    return DeviceField;
}(OpenCloseField));
exports.DeviceField = DeviceField;
/*
export class ExceptionField extends OpenCloseField {
    constructor(name: string, startIndex: number, bytesLength: number, title: string,bit:number) {
        super(name,startIndex,bytesLength,title,bit,null)
    }
    haveValue(...bytes: number[]): boolean {
        this.value = bytes[0]<<8|bytes[1]
        let i = 1 << this.bit
        //console.log(this.title+' i:='+i.toString()+' value:='+this.value.toString() )
        if ((i & this.value) == i) {
            this.value = 1
            return true
        } else {
            this.value = 0
            return false
        }
        
    }
    setDeviceFieldForUIKey(fieldForUI:DeviceFieldForUI) {
        fieldForUI.setKey(map.KEY_EXCEPTION)
    }
    getValueString(): string {
        return ''
    }
}
*/
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
        this.value = bytes[0] << 8 | bytes[1];
        var i = 1 << this.bit;
        //console.log(this.title+' i:='+i.toString()+' value:='+this.value.toString() )
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
        //console.log(this.title+' basenumber:='+this.getBaseNumber()+' value:='+i.toString() )
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
var SettingField = /** @class */ (function (_super) {
    __extends(SettingField, _super);
    function SettingField(name, startIndex, bytesLength, title, unit, baseNumber) {
        return _super.call(this, name, startIndex, bytesLength, title, unit, baseNumber) || this;
    }
    SettingField.prototype.setDeviceFieldForUIKey = function (fieldForUI) {
        fieldForUI.setKey(map_1.map.KEY_SETTING);
    };
    return SettingField;
}(MockField));
exports.SettingField = SettingField;
