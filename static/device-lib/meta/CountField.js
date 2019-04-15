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
var CountShowField_1 = require("./CountShowField");
var map_1 = require("../map/map");
//namespace DevicesLib.meta {
var CountField = /** @class */ (function (_super) {
    __extends(CountField, _super);
    function CountField(name, title) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.title = title;
        return _this;
    }
    CountField.prototype.setDeviceFieldForUIKey = function (fieldForUI) {
        fieldForUI.setKey(map_1.map.KEY_Count_Fields);
    };
    return CountField;
}(CountShowField_1.CountShowField));
exports.CountField = CountField;
//}
