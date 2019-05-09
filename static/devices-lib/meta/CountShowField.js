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
    //protected valueMap: NumberHashMap<string>|null=null;
    function CountShowField(groupKey, name, title, unit) {
        var _this = _super.call(this) || this;
        /**
         * 分组Key
         */
        _this.groupKey = '';
        _this.groupKey = groupKey;
        _this.name = name;
        _this.title = title;
        _this.unit = unit;
        return _this;
        // if(valueMap){
        //     this.valueMap = new NumberHashMap(valueMap);
        // }
    }
    CountShowField.prototype.getValue = function () {
        return this.value;
    };
    CountShowField.prototype.haveValue = function () {
        var bytes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bytes[_i] = arguments[_i];
        }
        this.value = bytes[0];
        return true;
    };
    CountShowField.prototype.setDeviceFieldForUIKey = function (fieldForUI) {
        fieldForUI.setKey(this.groupKey);
    };
    return CountShowField;
}(ByteField_1.ByteField));
exports.CountShowField = CountShowField;
//}
