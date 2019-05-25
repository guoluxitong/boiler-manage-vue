"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//namespace DevicesLib.meta {
var PointField = /** @class */ (function () {
    function PointField() {
        this.name = '';
        this.unit = '';
        this.title = '';
    }
    PointField.prototype.getName = function () {
        return this.name;
    };
    PointField.prototype.setName = function (name) {
        this.name = name;
    };
    PointField.prototype.getUnit = function () {
        return null == this.unit ? '' : this.unit;
    };
    PointField.prototype.setUnit = function (unit) {
        this.unit = unit;
    };
    PointField.prototype.getTitle = function () {
        return this.title;
    };
    PointField.prototype.setTitle = function (title) {
        this.title = title;
    };
    return PointField;
}());
exports.PointField = PointField;
//}
