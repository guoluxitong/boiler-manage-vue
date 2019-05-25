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
var YuRe_1 = require("./YuRe");
var SdcSoftDevice_1 = require("../SdcSoftDevice");
var Collections_1 = require("../../entities/Collections");
module.exports = /** @class */ (function (_super) {
    __extends(PLC_YuReZhengQi, _super);
    function PLC_YuReZhengQi() {
        var _this = _super.call(this) || this;
        _this.BYTE_ARRAY_LENGTH = 490;
        return _this;
    }
    PLC_YuReZhengQi.prototype.getDeviceFocusFields = function () {
        var map = this.getBaseInfoFields();
        var list = new Collections_1.List();
        list.push(map.getItem(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_DAYS));
        list.push(map.getItem(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_HOURS));
        list.push(map.getItem('ba_shuiweizhuangtai'));
        var map2 = this.getMockFields();
        if (map.containsKey('ba_guoluyalizhuangtai')) {
            list.push(map.getItem('ba_guoluyalizhuangtai'));
        }
        else {
            list.push(map2.getItem('mo_zhengqiyali'));
        }
        return list.toArray();
    };
    return PLC_YuReZhengQi;
}(YuRe_1.PLC_YuRe));
