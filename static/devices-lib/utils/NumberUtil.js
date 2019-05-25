"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberUtil = /** @class */ (function () {
    function NumberUtil() {
    }
    NumberUtil.NumberToString = function (x, stringType, length) {
        if (stringType === void 0) { stringType = 10; }
        if (length === void 0) { length = 10; }
        var str = x.toString(stringType);
        for (var i = str.length; i < length; i++) {
            str = ('0' + str);
        }
        return str;
    };
    return NumberUtil;
}());
exports.NumberUtil = NumberUtil;
