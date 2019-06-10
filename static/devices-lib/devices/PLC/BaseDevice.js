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
var NumberUtil_1 = require("../../utils/NumberUtil");
var Element_1 = require("../../entities/Element");
var DeviceFieldForUI_1 = require("../../meta/DeviceFieldForUI");
var SdcSoftDevice_1 = require("../SdcSoftDevice");
var PLC = /** @class */ (function (_super) {
    __extends(PLC, _super);
    function PLC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PLC.prototype.handleByteField = function (field, bytes) {
        //let view = new DataView(bytes)
        switch (field.getBytesLength()) {
            case 0:
            case 2:
                //if (field.haveValue(bytes[field.getStartIndex() + 1], bytes[field.getStartIndex()])) {
                if (field.haveValue(bytes[field.getStartIndex()], bytes[field.getStartIndex() + 1])) {
                    this.addField(field);
                }
                break;
            case 4:
                if (field.haveValue(bytes[field.getStartIndex()], bytes[field.getStartIndex() + 1], bytes[field.getStartIndex() + 2], bytes[field.getStartIndex() + 3])) {
                    this.addField(field);
                }
                break;
        }
    };
    PLC.prototype.handleDeviceNo = function (bytes) {
        var deviceNo = bytes[5] << 24 + bytes[6] << 16 + bytes[7] << 8 + bytes[8];
        //let deviceNo = String.format('%1$010d', new BigInteger(new byte[]{bytes[5], bytes[6], bytes[7], bytes[8]}).intValue())
        var str = NumberUtil_1.NumberUtil.NumberToString(deviceNo, 10, 10);
        this.setDeviceNo(str);
        return str;
    };
    PLC.prototype.getBeng = function () {
        var list = [];
        if (this.getCountFields().containsKey(PLC.KEY_POINT_Add_SHUI_BENG)) {
            var deviceFieldForUI = this.getCountFields().getItem(PLC.KEY_POINT_Add_SHUI_BENG);
            var element = new Element_1.Element();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(Element_1.Element.Prefix_Beng);
            var d1 = new DeviceFieldForUI_1.DeviceFieldForUI();
            var d2 = d1;
            var count = 0;
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_Add_SHUI_BENG_1)) {
                d1 = this.getDeviceFields().getItem(PLC.KEY_POINT_Add_SHUI_BENG_1);
                count = 1;
            }
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_Add_SHUI_BENG_2)) {
                d2 = this.getDeviceFields().getItem(PLC.KEY_POINT_Add_SHUI_BENG_2);
                count += 2;
            }
            var v1 = 0, v2 = 0;
            switch (count) {
                case 1:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    element.SetValues(Element_1.Element.Index_Beng_Count, 1, v1);
                    list.push(element);
                    break;
                case 2:
                    v2 = d2.getValue() > 0 ? 1 : 0;
                    element.SetValues(Element_1.Element.Index_Beng_Count, 1, v2);
                    list.push(element);
                    break;
                case 3:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    v2 = d2.getValue() > 0 ? 2 : 0;
                    element.SetValues(Element_1.Element.Index_Beng_Count, 2, v1 + v2);
                    list.push(element);
                    break;
            }
        }
        if (this.getCountFields().containsKey(PLC.KEY_POINT_XUN_HUAN_BENG)) {
            var deviceFieldForUI = this.getCountFields().getItem(PLC.KEY_POINT_XUN_HUAN_BENG);
            var element = new Element_1.Element();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(Element_1.Element.Prefix_Beng);
            var d1 = new DeviceFieldForUI_1.DeviceFieldForUI();
            var d2 = d1;
            var d3 = d1;
            var count = 0;
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_XUN_HUAN_BENG_1)) {
                d1 = this.getDeviceFields().getItem(PLC.KEY_POINT_XUN_HUAN_BENG_1);
                count = 1;
            }
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_XUN_HUAN_BENG_2)) {
                d2 = this.getDeviceFields().getItem(PLC.KEY_POINT_XUN_HUAN_BENG_2);
                count += 2;
            }
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_XUN_HUAN_BENG_3)) {
                d3 = this.getDeviceFields().getItem(PLC.KEY_POINT_XUN_HUAN_BENG_3);
                count += 4;
            }
            var v1 = 0, v2 = 0, v3 = 0;
            switch (count) {
                case 1:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    element.SetValues(Element_1.Element.Index_Beng_Count, 1, v1);
                    list.push(element);
                    break;
                case 2:
                    v2 = d2.getValue() > 0 ? 1 : 0;
                    element.SetValues(Element_1.Element.Index_Beng_Count, 1, v2);
                    list.push(element);
                    break;
                case 3:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    v2 = d2.getValue() > 0 ? 2 : 0;
                    element.SetValues(Element_1.Element.Index_Beng_Count, 2, v1 + v2);
                    list.push(element);
                    break;
                case 4:
                    v2 = d2.getValue() > 0 ? 1 : 0;
                    element.SetValues(Element_1.Element.Index_Beng_Count, 1, v2);
                    list.push(element);
                    break;
                case 5:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    v3 = d3.getValue() > 0 ? 4 : 0;
                    element.SetValues(Element_1.Element.Index_Beng_Count, 2, v1 + v3);
                    list.push(element);
                    break;
                case 6:
                    v2 = d2.getValue() > 0 ? 2 : 0;
                    v3 = d3.getValue() > 0 ? 4 : 0;
                    element.SetValues(Element_1.Element.Index_Beng_Count, 2, v2 + v3);
                    list.push(element);
                    break;
                case 7:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    v2 = d2.getValue() > 0 ? 2 : 0;
                    v3 = d3.getValue() > 0 ? 4 : 0;
                    element.SetValues(Element_1.Element.Index_Beng_Count, 3, v1 + v2 + v3);
                    list.push(element);
                    break;
            }
        }
        if (this.getCountFields().containsKey(PLC.KEY_POINT_CHU_YANG_BENG)) {
            var deviceFieldForUI = this.getCountFields().getItem(PLC.KEY_POINT_CHU_YANG_BENG);
            var element = new Element_1.Element();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(Element_1.Element.Prefix_Beng);
            var d1 = new DeviceFieldForUI_1.DeviceFieldForUI();
            var d2 = d1;
            var count = 0;
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_CHU_YANG_BENG_1)) {
                d1 = this.getDeviceFields().getItem(PLC.KEY_POINT_CHU_YANG_BENG_1);
                count = 1;
            }
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_CHU_YANG_BENG_2)) {
                d2 = this.getDeviceFields().getItem(PLC.KEY_POINT_CHU_YANG_BENG_2);
                count += 2;
            }
            var v1 = 0, v2 = 0;
            switch (count) {
                case 1:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    element.SetValues(Element_1.Element.Index_Beng_Count, 1, v1);
                    list.push(element);
                    break;
                case 2:
                    v2 = d2.getValue() > 0 ? 1 : 0;
                    element.SetValues(Element_1.Element.Index_Beng_Count, 1, v2);
                    list.push(element);
                    break;
                case 3:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    v2 = d2.getValue() > 0 ? 2 : 0;
                    element.SetValues(Element_1.Element.Index_Beng_Count, 2, v1 + v2);
                    list.push(element);
                    break;
            }
        }
        if (this.getCountFields().containsKey(PLC.KEY_POINT_ZHU_YOU_BENG)) {
            var deviceFieldForUI = this.getCountFields().getItem(PLC.KEY_POINT_ZHU_YOU_BENG);
            var element = new Element_1.Element();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(Element_1.Element.Prefix_Beng);
            var d1 = new DeviceFieldForUI_1.DeviceFieldForUI();
            var count = 0;
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_ZHU_YOU_BENG_1)) {
                d1 = this.getDeviceFields().getItem(PLC.KEY_POINT_ZHU_YOU_BENG_1);
                count = 1;
            }
            var v1 = 0;
            switch (count) {
                case 1:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    element.SetValues(Element_1.Element.Index_Beng_Count, 1, v1);
                    list.push(element);
                    break;
            }
        }
        if (this.getCountFields().containsKey(PLC.KEY_POINT_JIE_NENG_BENG)) {
            var deviceFieldForUI = this.getCountFields().getItem(PLC.KEY_POINT_JIE_NENG_BENG);
            var element = new Element_1.Element();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(Element_1.Element.Prefix_Beng);
            var d1 = new DeviceFieldForUI_1.DeviceFieldForUI();
            var d2 = d1;
            var count = 0;
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_JIE_NENG_BENG_1)) {
                d1 = this.getDeviceFields().getItem(PLC.KEY_POINT_JIE_NENG_BENG_1);
                count = 1;
            }
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_JIE_NENG_BENG_2)) {
                d2 = this.getDeviceFields().getItem(PLC.KEY_POINT_JIE_NENG_BENG_2);
                count += 2;
            }
            var v1 = 0, v2 = 0;
            switch (count) {
                case 1:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    element.SetValues(Element_1.Element.Index_Beng_Count, 1, v1);
                    list.push(element);
                    break;
                case 2:
                    v2 = d2.getValue() > 0 ? 1 : 0;
                    element.SetValues(Element_1.Element.Index_Beng_Count, 1, v2);
                    list.push(element);
                    break;
                case 3:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    v2 = d2.getValue() > 0 ? 2 : 0;
                    element.SetValues(Element_1.Element.Index_Beng_Count, 2, v1 + v2);
                    list.push(element);
                    break;
            }
        }
        if (this.getCountFields().containsKey(PLC.KEY_POINT_ZHEN_KONG_BENG)) {
            var deviceFieldForUI = this.getCountFields().getItem(PLC.KEY_POINT_ZHEN_KONG_BENG);
            var element = new Element_1.Element();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(Element_1.Element.Prefix_Beng);
            var d1 = new DeviceFieldForUI_1.DeviceFieldForUI();
            var count = 0;
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_ZHEN_KONG_BENG_1)) {
                d1 = this.getDeviceFields().getItem(PLC.KEY_POINT_ZHEN_KONG_BENG_1);
                count = 1;
            }
            var v1 = 0;
            switch (count) {
                case 1:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    element.SetValues(Element_1.Element.Index_Beng_Count, 1, v1);
                    list.push(element);
                    break;
            }
        }
        return list;
    };
    PLC.prototype.getFan = function () {
        var list = [];
        if (this.getCountFields().containsKey(PLC.KEY_POINT_GU_FENG_FAN)) {
            var deviceFieldForUI = this.getCountFields().getItem(PLC.KEY_POINT_GU_FENG_FAN);
            var element = new Element_1.Element();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(Element_1.Element.Prefix_Fan);
            var d1 = new DeviceFieldForUI_1.DeviceFieldForUI();
            var count = 0;
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_GU_FENG_FAN_1)) {
                d1 = this.getDeviceFields().getItem(PLC.KEY_POINT_GU_FENG_FAN_1);
                count = 1;
            }
            var v1 = 0;
            switch (count) {
                case 1:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    element.SetValues(Element_1.Element.Index_Fan_Count, 1, v1);
                    list.push(element);
                    break;
            }
        }
        if (this.getCountFields().containsKey(PLC.KEY_POINT_YIN_FENG_FAN)) {
            var deviceFieldForUI = this.getCountFields().getItem(PLC.KEY_POINT_YIN_FENG_FAN);
            var element = new Element_1.Element();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(Element_1.Element.Prefix_Fan);
            var d1 = new DeviceFieldForUI_1.DeviceFieldForUI();
            var count = 0;
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_YIN_FENG_FAN_1)) {
                d1 = this.getDeviceFields().getItem(PLC.KEY_POINT_YIN_FENG_FAN_1);
                count = 1;
            }
            var v1 = 0;
            switch (count) {
                case 1:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    element.SetValues(Element_1.Element.Index_Fan_Count, 1, v1);
                    list.push(element);
                    break;
            }
        }
        if (this.getCountFields().containsKey(PLC.KEY_POINT_ZHAO_QI_FAN)) {
            var deviceFieldForUI = this.getCountFields().getItem(PLC.KEY_POINT_ZHAO_QI_FAN);
            var element = new Element_1.Element();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(Element_1.Element.Prefix_Fan);
            var d1 = new DeviceFieldForUI_1.DeviceFieldForUI();
            var d2 = d1;
            var count = 0;
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_ZHAO_QI_FAN_1)) {
                d1 = this.getDeviceFields().getItem(PLC.KEY_POINT_ZHAO_QI_FAN_1);
                count = 1;
            }
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_ZHAO_QI_FAN_2)) {
                d2 = this.getDeviceFields().getItem(PLC.KEY_POINT_ZHAO_QI_FAN_2);
                count += 2;
            }
            var v1 = 0, v2 = 0;
            switch (count) {
                case 1:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    element.SetValues(Element_1.Element.Index_Fan_Count, 1, v1);
                    list.push(element);
                    break;
                case 2:
                    v2 = d2.getValue() > 0 ? 1 : 0;
                    element.SetValues(Element_1.Element.Index_Fan_Count, 1, v2);
                    list.push(element);
                    break;
                case 3:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    v2 = d2.getValue() > 0 ? 2 : 0;
                    element.SetValues(Element_1.Element.Index_Fan_Count, 2, v1 + v2);
                    list.push(element);
                    break;
            }
        }
        if (this.getCountFields().containsKey(PLC.KEY_POINT_LU_PAI_FAN)) {
            var deviceFieldForUI = this.getCountFields().getItem(PLC.KEY_POINT_LU_PAI_FAN);
            var element = new Element_1.Element();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(Element_1.Element.Prefix_Fan);
            var d1 = new DeviceFieldForUI_1.DeviceFieldForUI();
            var count = 0;
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_LU_PAI_FAN_1)) {
                d1 = this.getDeviceFields().getItem(PLC.KEY_POINT_LU_PAI_FAN_1);
                count = 1;
            }
            var v1 = 0;
            switch (count) {
                case 1:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    element.SetValues(Element_1.Element.Index_Fan_Count, 1, v1);
                    list.push(element);
                    break;
            }
        }
        if (this.getCountFields().containsKey(PLC.KEY_POINT_CHU_ZHA_FAN)) {
            var deviceFieldForUI = this.getCountFields().getItem(PLC.KEY_POINT_CHU_ZHA_FAN);
            var element = new Element_1.Element();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(Element_1.Element.Prefix_Fan);
            var d1 = new DeviceFieldForUI_1.DeviceFieldForUI();
            var count = 0;
            if (this.getDeviceFields().containsKey(PLC.KEY_POINT_CHU_ZHA_FAN_1)) {
                d1 = this.getDeviceFields().getItem(PLC.KEY_POINT_CHU_ZHA_FAN_1);
                count = 1;
            }
            var v1 = 0;
            switch (count) {
                case 1:
                    v1 = d1.getValue() > 0 ? 1 : 0;
                    element.SetValues(Element_1.Element.Index_Fan_Count, 1, v1);
                    list.push(element);
                    break;
            }
        }
        return list;
    };
    PLC.KEY_POINT_Add_SHUI_BENG = '_addshuibeng';
    PLC.KEY_POINT_Add_SHUI_BENG_1 = 'de_1_addshuibeng_start_stop';
    PLC.KEY_POINT_Add_SHUI_BENG_2 = 'de_2_addshuibeng_start_stop';
    PLC.KEY_POINT_XUN_HUAN_BENG = '_xunhuanbeng';
    PLC.KEY_POINT_XUN_HUAN_BENG_1 = 'de_1_xunhuanbeng_start_stop';
    PLC.KEY_POINT_XUN_HUAN_BENG_2 = 'de_2_xunhuanbeng_start_stop';
    PLC.KEY_POINT_XUN_HUAN_BENG_3 = 'de_3_xunhuanbeng_start_stop';
    PLC.KEY_POINT_CHU_YANG_BENG = '_chuanyangbeng';
    PLC.KEY_POINT_CHU_YANG_BENG_1 = 'de_1_chuyangbeng_start_stop';
    PLC.KEY_POINT_CHU_YANG_BENG_2 = 'de_2_chuyangbeng_start_stop';
    PLC.KEY_POINT_ZHU_YOU_BENG = '_zhuyoubeng';
    PLC.KEY_POINT_ZHU_YOU_BENG_1 = 'de_zhuyoubeng_start_stop';
    PLC.KEY_POINT_ZHEN_KONG_BENG = '_zhenkongbeng';
    PLC.KEY_POINT_ZHEN_KONG_BENG_1 = 'de_zhenkongbeng_start_stop';
    PLC.KEY_POINT_JIE_NENG_BENG = '_jienengbeng';
    PLC.KEY_POINT_JIE_NENG_BENG_1 = 'de_1_jienengbeng_start_stop';
    PLC.KEY_POINT_JIE_NENG_BENG_2 = 'de_2_jienengbeng_start_stop';
    PLC.KEY_POINT_ZHAO_QI_FAN = '_zhaoqifan';
    PLC.KEY_POINT_ZHAO_QI_FAN_1 = 'de_1_zhaoqifengji_start_stop';
    PLC.KEY_POINT_ZHAO_QI_FAN_2 = 'de_2_zhaoqifengji_start_stop';
    PLC.KEY_POINT_GU_FENG_FAN = '_gufengfan';
    PLC.KEY_POINT_GU_FENG_FAN_1 = 'de_1_gufengji_start_stop';
    PLC.KEY_POINT_YIN_FENG_FAN = '_yinfengfan';
    PLC.KEY_POINT_YIN_FENG_FAN_1 = 'de_1_yinfengji_start_stop';
    PLC.KEY_POINT_LU_PAI_FAN = '_lupaifan';
    PLC.KEY_POINT_LU_PAI_FAN_1 = 'de_lupai_start_stop';
    PLC.KEY_POINT_CHU_ZHA_FAN = '_chuzhafan';
    PLC.KEY_POINT_CHU_ZHA_FAN_1 = 'de_chuzha_start_stop';
    return PLC;
}(SdcSoftDevice_1.SdcSoftDevice));
exports.PLC = PLC;
