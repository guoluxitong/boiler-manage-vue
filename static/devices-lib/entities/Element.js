"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Element = /** @class */ (function () {
    function Element() {
        this.values = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
        this.title = '';
        this.prefix = '';
    }
    Element.prototype.getTitle = function () {
        return this.title;
    };
    Element.prototype.setTitle = function (title) {
        this.title = title;
    };
    Element.prototype.getPrefix = function () {
        return this.prefix;
    };
    Element.prototype.setPrefix = function (prefix) {
        this.prefix = prefix;
    };
    Element.prototype.ClearValues = function () {
        for (var i = 0; i < this.values.length; i++) {
            this.values[i] = -1;
        }
    };
    Element.prototype.SetValues = function (index) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        for (var i = index, j = 0; j < data.length; i++, j++) {
            this.values[i] = data[j];
        }
    };
    Element.prototype.getElementPrefixAndValuesString = function (spacerString) {
        if (spacerString === void 0) { spacerString = '-'; }
        var sb = this.prefix;
        for (var i in this.values) {
            if (this.values[i] > -1) {
                sb += spacerString;
                sb += this.values[i].toString();
                continue;
            }
            break;
        }
        if (this.prefix == Element.Prefix_Stove) {
            return sb.substr(0, sb.length - 1) + '0';
        }
        return sb;
    };
    Element.Prefix_Stove = 'a';
    Element.Prefix_Beng = 'b';
    Element.Prefix_Fan = 'c';
    Element.Index_A_Power = 0;
    Element.Index_A_Media = 1;
    Element.Index_A_Status = 2;
    Element.Index_A_Style = 3;
    Element.Index_Beng_Count = 0;
    Element.Index_Beng_Status = 1;
    Element.Index_Fan_Count = 0;
    Element.Index_Fan_Status = 1;
    return Element;
}());
exports.Element = Element;
