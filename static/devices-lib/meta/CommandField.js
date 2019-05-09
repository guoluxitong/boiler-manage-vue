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
var PointField_1 = require("./PointField");
//namespace DevicesLib.meta {
var CommandField = /** @class */ (function (_super) {
    __extends(CommandField, _super);
    function CommandField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 485内存地址
         */
        _this.address = '';
        _this.maxValue = 100;
        _this.minValue = 0;
        _this.commandGroupKey = '';
        return _this;
    }
    CommandField.prototype.getAddress = function () {
        return this.address;
    };
    CommandField.prototype.setAddress = function (address) {
        this.address = address;
    };
    CommandField.prototype.getMaxValue = function () {
        return this.maxValue;
    };
    CommandField.prototype.setMaxValue = function (maxValue) {
        this.maxValue = maxValue;
    };
    CommandField.prototype.getMinValue = function () {
        return this.minValue;
    };
    CommandField.prototype.setMinValue = function (minValue) {
        this.minValue = minValue;
    };
    CommandField.prototype.getCommandGroupKey = function () {
        return this.commandGroupKey;
    };
    CommandField.prototype.setCommandGroupKey = function (commandGroupKey) {
        this.commandGroupKey = commandGroupKey;
    };
    /**
     * 获取写入命令
     * @return
     */
    CommandField.prototype.getCommand = function () {
        if (null == this.getAddress() || this.getAddress().length < 4)
            return null;
        var cmd = this.createCommandAndInitValue();
        if (cmd) {
            cmd.setAddress(this.getAddress());
            cmd.setUnit(this.getUnit());
            cmd.setTitle(this.getTitle());
            cmd.setMinValue(this.getMinValue());
            cmd.setMaxValue(this.getMaxValue());
        }
        return cmd;
    };
    return CommandField;
}(PointField_1.PointField));
exports.CommandField = CommandField;
//}
