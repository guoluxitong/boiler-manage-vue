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
var Dian_1 = require("./Dian");
var SdcSoftDevice_1 = require("../SdcSoftDevice");
var Collections_1 = require("../../entities/Collections");
module.exports = /** @class */ (function (_super) {
    __extends(PLC_DianReShui, _super);
    function PLC_DianReShui() {
        var _this = _super.call(this) || this;
        _this.BYTE_ARRAY_LENGTH = 245;
        return _this;
    }
    PLC_DianReShui.prototype.getDeviceFocusFields = function () {
        var map = this.getBaseInfoFields();
        var list = new Collections_1.List();
        list.push(map.getItem(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_DAYS));
        list.push(map.getItem(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_HOURS));
        var field = map.getItem(PLC_DianReShui.KEY_POINT_JIA_RE_ZU);
        var map2 = this.getMockFields();
        var jiarezu = map2.getItem('mo_qidongjiarezushu');
        if (jiarezu) {
            field.setValue(jiarezu.getValue());
        }
        else {
            field.setValue(0);
        }
        list.push(field);
        list.push(map2.getItem('mo_huishuiwendu'));
        list.push(map.getItem('ba_shuiweizhuangtai'));
        return list.toArray();
    };
    return PLC_DianReShui;
}(Dian_1.PLC_Dian));
