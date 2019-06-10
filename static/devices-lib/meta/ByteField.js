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
        _this.value = 0;
        //传递valueMap到UI
        _this.tranValueMapToUi = false;
        /**
         * 485内存地址
         */
        _this.address = '';
        _this.maxValue = 100;
        _this.minValue = 0;
        return _this;
    }
    ByteField.prototype.getTranValueMapFlag = function () {
        return this.tranValueMapToUi;
    };
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
        var cmd = new Command_1.IntCommand(this.title, this.address, this.maxValue, this.minValue);
        cmd.initValue(this.getValue());
        return cmd;
    };
    ByteField.prototype.getValueBitString = function () {
        return this.getValue().toString(10);
    };
    ByteField.prototype.getValueString = function () {
        // if (this.bytesLength > 0) {//bytesLength>0表示点位在数据中真实存储
        //     return this.getValueBitString() + this.getUnit()
        // }
        // return this.getUnit()
        return this.value + this.getUnit();
    };
    ByteField.prototype.getDeviceFieldForUI = function (value) {
        var fieldForUI;
        if (this.tranValueMapToUi) {
            fieldForUI = new DeviceFieldForUI_1.DeviceFieldForUI(this.valueMap);
        }
        else {
            fieldForUI = new DeviceFieldForUI_1.DeviceFieldForUI();
        }
        this.setDeviceFieldForUIKey(fieldForUI);
        fieldForUI.setName(this.getName());
        fieldForUI.setTitle(this.getTitle());
        fieldForUI.setValueString(this.getValueString());
        //fieldForUI.setNeedFormat(this.needFormat)
        fieldForUI.setUnit(this.getUnit());
        if (value) {
            fieldForUI.setValue(value);
        }
        else {
            fieldForUI.setValue(this.value);
        }
        return fieldForUI;
    };
    return ByteField;
}(CommandField_1.CommandField));
exports.ByteField = ByteField;
//}
