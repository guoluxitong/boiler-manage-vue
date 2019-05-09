"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//namespace DevicesLib.meta {
var DeviceFieldForUI = /** @class */ (function () {
    function DeviceFieldForUI() {
        this.name = '';
        this.value = 0;
        this.key = '';
        this.title = '';
        this.valueString = '';
        this.unit = '';
        this.needFormat = false;
    }
    DeviceFieldForUI.prototype.getUnit = function () {
        return this.unit;
    };
    DeviceFieldForUI.prototype.setUnit = function (unit) {
        this.unit = unit;
    };
    DeviceFieldForUI.prototype.setNeedFormat = function (needFormat) {
        this.needFormat = needFormat;
    };
    DeviceFieldForUI.prototype.getKey = function () {
        return this.key;
    };
    DeviceFieldForUI.prototype.setKey = function (key) {
        this.key = key;
    };
    DeviceFieldForUI.prototype.getName = function () {
        return this.name;
    };
    DeviceFieldForUI.prototype.setName = function (name) {
        this.name = name;
    };
    DeviceFieldForUI.prototype.getValue = function () {
        return this.value;
    };
    DeviceFieldForUI.prototype.setValue = function (value) {
        this.value = value;
    };
    DeviceFieldForUI.prototype.getTitle = function () {
        return this.title;
    };
    DeviceFieldForUI.prototype.setTitle = function (title) {
        this.title = title;
    };
    DeviceFieldForUI.prototype.getValueString = function () {
        if (this.needFormat)
            return this.valueString.replace("%s", this.value.toString());
        return this.valueString;
    };
    DeviceFieldForUI.prototype.setValueString = function (valueString) {
        this.valueString = valueString;
    };
    return DeviceFieldForUI;
}());
exports.DeviceFieldForUI = DeviceFieldForUI;
//}
