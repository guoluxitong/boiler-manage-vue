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
var SdcSoftDevice_1 = require("../../SdcSoftDevice");
var Collections_1 = require("../../../entities/Collections");
var Element_1 = require("../../../entities/Element");
module.exports = /** @class */ (function (_super) {
    __extends(CTL_HNWE_485, _super);
    function CTL_HNWE_485() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CTL_HNWE_485.prototype.handleByteField = function (field, bytes) {
        //let view = new DataView(bytes)
        switch (field.getBytesLength()) {
            case 2:
                if (field.haveValue(bytes[field.getStartIndex()], bytes[field.getStartIndex() + 1])) {
                    this.addField(field);
                }
                break;
            default:
                if (field.haveValue(bytes[field.getStartIndex()])) {
                    this.addField(field);
                }
                break;
        }
    };
    CTL_HNWE_485.prototype.handleDeviceNo = function (bytes) {
        return '';
    };
    CTL_HNWE_485.prototype.getDeviceFocusFields = function () {
        var map = this.getBaseInfoFields();
        var map2 = this.getMockFields();
        var list = new Collections_1.List();
        var item = map.getItem(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_DAYS);
        item.setValueString('不支持');
        list.push(item);
        item = map.getItem(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_HOURS);
        item.setValueString('不支持');
        list.push(item);
        list.push(map2.getItem('mo_CHgongshuiwendu'));
        list.push(map2.getItem('mo_CHhuishuiwendu'));
        list.push(map2.getItem('mo_OTCwendu'));
        return list.toArray();
    };
    CTL_HNWE_485.prototype.getMode = function () {
        return 0;
    };
    CTL_HNWE_485.prototype.getPowerInfo = function () {
        var value = this.getOpenCloseFields().getItem('oc_huoyan');
        return value.getValue();
    };
    CTL_HNWE_485.prototype.getBeng = function () {
        var list = [];
        var value = this.getOpenCloseFields().getItem('oc_shuibeng');
        var element = new Element_1.Element();
        element.setTitle(value.getTitle());
        element.setPrefix(Element_1.Element.Prefix_Beng);
        var v = value.getValue();
        if (1 == v) {
            element.SetValues(1, 1, 1);
        }
        else {
            element.SetValues(1, 1, 0);
        }
        list.push(element);
        return list;
    };
    CTL_HNWE_485.prototype.getFan = function () {
        var list = [];
        var value = this.getOpenCloseFields().getItem('oc_fengji');
        var element = new Element_1.Element();
        element.setTitle(value.getTitle());
        element.setPrefix(Element_1.Element.Prefix_Fan);
        var v = value.getValue();
        if (1 == v) {
            element.SetValues(1, 1, 1);
        }
        else {
            element.SetValues(1, 1, 0);
        }
        list.push(element);
        return list;
    };
    return CTL_HNWE_485;
}(SdcSoftDevice_1.SdcSoftDevice));
