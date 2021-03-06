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
var CommandField_1 = require("./CommandField");
var DeviceFieldForUI_1 = require("./DeviceFieldForUI");
var Command_1 = require("../command/Command");
//namespace DevicesLib.meta {
var ByteField = /** @class */ (function (_super) {
    __extends(ByteField, _super);
    function ByteField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startIndex = 0;
        _this.bytesLength = 0;
        _this.baseNumber = 0;
        _this.bit = 0;
        _this.needFormat = false;
        _this.valueMap = null;
        _this.value = 0;
        /**
         * 485内存地址
         */
        _this.address = '';
        _this.maxValue = 100;
        _this.minValue = 0;
        return _this;
    }
    ByteField.prototype.getValue = function () {
        return this.value;
    };
    ByteField.prototype.getAddress = function () {
        return this.address;
    };
    ByteField.prototype.setAddress = function (address) {
        this.address = address;
    };
    ByteField.prototype.getStartIndex = function () {
        return this.startIndex;
    };
    ByteField.prototype.setStartIndex = function (startIndex) {
        this.startIndex = startIndex;
    };
    ByteField.prototype.getBytesLength = function () {
        return this.bytesLength;
    };
    ByteField.prototype.setBytesLength = function (bytesLength) {
        this.bytesLength = bytesLength;
    };
    ByteField.prototype.getBaseNumber = function () {
        return this.baseNumber;
    };
    ByteField.prototype.setBaseNumber = function (baseNumber) {
        this.baseNumber = baseNumber;
    };
    ByteField.prototype.setBit = function (bit) {
        this.bit = bit;
    };
    ByteField.prototype.setValueMap = function (valueMap) {
        this.valueMap = valueMap;
    };
    ByteField.prototype.createCommandAndInitValue = function () {
        var cmd = new Command_1.IntCommand();
        cmd.initValue(this.getValue());
        return cmd;
    };
    ByteField.prototype.getValueBitString = function () {
        return this.getValue().toString(10);
    };
    ByteField.prototype.getValueString = function () {
        if (this.bytesLength > 0) { //bytesLength>0表示点位在数据中真实存储
            return this.getValueBitString() + this.getUnit();
        }
        //点位并不真实存在，而又其他点位计算而来。如NJRT_T2的运行天数和小时数 由运行总时间计算得出
        this.needFormat = true;
        return this.getUnit();
    };
    ByteField.prototype.getDeviceFieldForUI = function (value) {
        var fieldForUI = new DeviceFieldForUI_1.DeviceFieldForUI();
        this.setDeviceFieldForUIKey(fieldForUI);
        fieldForUI.setName(this.getName());
        fieldForUI.setTitle(this.getTitle());
        fieldForUI.setValueString(this.getValueString());
        fieldForUI.setNeedFormat(this.needFormat);
        fieldForUI.setUnit(this.getUnit());
        if (value) {
            fieldForUI.setValue(value);
        }
        return fieldForUI;
    };
    return ByteField;
}(CommandField_1.CommandField));
exports.ByteField = ByteField;
//}
