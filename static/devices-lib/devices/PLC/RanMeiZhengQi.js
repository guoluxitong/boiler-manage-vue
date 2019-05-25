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
var BaseDevice_1 = require("./BaseDevice");
var SdcSoftDevice_1 = require("../SdcSoftDevice");
var Collections_1 = require("../../entities/Collections");
module.exports = /** @class */ (function (_super) {
    __extends(PLC_RanMeiZhengQi, _super);
    function PLC_RanMeiZhengQi() {
        var _this = _super.call(this) || this;
        _this.BYTE_ARRAY_LENGTH = 490;
        return _this;
    }
    PLC_RanMeiZhengQi.prototype.getDeviceFocusFields = function () {
        var map = this.getBaseInfoFields();
        var list = new Collections_1.List();
        list.push(map.getItem(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_DAYS));
        list.push(map.getItem(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_HOURS));
        var map2 = this.getMockFields();
        list.push(map2.getItem('mo_qidongjiarezushu'));
        list.push(map2.getItem('ba_shuiweizhuangtai'));
        if (map.containsKey('ba_guoluyalizhuangtai')) {
            list.push(map.getItem('ba_guoluyalizhuangtai'));
        }
        else {
            list.push(map2.getItem('mo_zhengqiyali'));
        }
        list.push(map2.getItem('mo_zuizhongpaiyanwendu'));
        list.push(map.getItem('ba_shuiweizhuangtai'));
        return list.toArray();
    };
    PLC_RanMeiZhengQi.prototype.getPowerInfo = function () {
        return this.getDeviceFields().getItem(BaseDevice_1.PLC.KEY_POINT_YIN_FENG_FAN_1).getValue() > 0x7F ? 1 : 0;
    };
    return PLC_RanMeiZhengQi;
}(BaseDevice_1.PLC));
