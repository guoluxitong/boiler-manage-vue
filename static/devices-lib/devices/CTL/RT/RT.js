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
var SdcSoftDevice_1 = require("../../SdcSoftDevice");
var Element_1 = require("../../../entities/Element");
var DeviceFieldForUI_1 = require("../../../meta/DeviceFieldForUI");
var Collections_1 = require("../../../entities/Collections");
var CTL_RT = /** @class */ (function (_super) {
    __extends(CTL_RT, _super);
    function CTL_RT() {
        var _this = _super.call(this) || this;
        _this.BYTE_ARRAY_LENGTH = 55;
        return _this;
    }
    CTL_RT.prototype.getPowerInfo = function () {
        return 0;
    };
    CTL_RT.prototype.handleByteField = function (field, bytes) {
        //let view = new DataView(bytes)
        switch (field.getBytesLength()) {
            case 0:
                if (field.haveValue()) {
                    this.addField(field);
                }
                break;
            case 2:
                if (field.haveValue(bytes[field.getStartIndex()], bytes[field.getStartIndex() + 1])) {
                    this.addField(field);
                }
                break;
        }
    };
    CTL_RT.prototype.handleDeviceNo = function (bytes) {
        return '';
    };
    CTL_RT.prototype.addFocusFields = function (list) {
    };
    CTL_RT.prototype.handleCountShowFields = function () {
        var map = this.getBaseInfoFields();
    };
    CTL_RT.prototype.getDeviceFocusFields = function () {
        var map = this.getBaseInfoFields();
        var list = new Collections_1.List();
        var i = map.getItem(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_LIFE).getValue();
        var field = map.getItem(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_DAYS);
        field.setValue(Math.floor(i / 24));
        field.setValueString(field.getValue() + field.getUnit());
        list.push(field);
        field = map.getItem(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_HOURS);
        field.setValue(i % 24);
        field.setValueString(field.getValue() + field.getUnit());
        list.push(field);
        this.addFocusFields(list);
        return list.toArray();
    };
    CTL_RT.prototype.getBeng = function () {
        var list = [];
        var map = this.getCountFields();
        var map2 = this.getDeviceFields();
        if (map.containsKey(CTL_RT.KEY_POINT_Add_SHUI_BENG)) {
            var deviceFieldForUI = map.getItem(CTL_RT.KEY_POINT_Add_SHUI_BENG);
            var element = new Element_1.Element();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(Element_1.Element.Prefix_Beng);
            var d1 = deviceFieldForUI;
            var d2 = d1;
            var count = 0;
            if (map2.containsKey(CTL_RT.KEY_POINT_Add_SHUI_BENG_1)) {
                d1 = map2.getItem(CTL_RT.KEY_POINT_Add_SHUI_BENG_1);
                count = 1;
            }
            if (map2.containsKey(CTL_RT.KEY_POINT_Add_SHUI_BENG_2)) {
                d2 = map2.getItem(CTL_RT.KEY_POINT_Add_SHUI_BENG_2);
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
        if (map.containsKey(CTL_RT.KEY_POINT_LENG_NING_BENG)) {
            var deviceFieldForUI = map.getItem(CTL_RT.KEY_POINT_LENG_NING_BENG);
            var element = new Element_1.Element();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(Element_1.Element.Prefix_Beng);
            var d1 = deviceFieldForUI, d2 = deviceFieldForUI;
            var count = 0;
            if (map2.containsKey(CTL_RT.KEY_POINT_LENG_NING_BENG_1)) {
                d1 = map2.getItem(CTL_RT.KEY_POINT_LENG_NING_BENG_1);
                count = 1;
            }
            if (map2.containsKey(CTL_RT.KEY_POINT_LENG_NING_BENG_2)) {
                d2 = map2.getItem(CTL_RT.KEY_POINT_LENG_NING_BENG_2);
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
        return list;
    };
    CTL_RT.prototype.getFan = function () {
        var list = [];
        if (this.getCountFields().containsKey(CTL_RT.KEY_POINT_GU_FENG_FAN)) {
            var deviceFieldForUI = this.getCountFields().getItem(CTL_RT.KEY_POINT_GU_FENG_FAN);
            var element = new Element_1.Element();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(Element_1.Element.Prefix_Fan);
            var d1 = new DeviceFieldForUI_1.DeviceFieldForUI();
            var count = 0;
            if (this.getDeviceFields().containsKey(CTL_RT.KEY_POINT_GU_FENG_FAN_1)) {
                d1 = this.getDeviceFields().getItem(CTL_RT.KEY_POINT_GU_FENG_FAN_1);
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
        if (this.getCountFields().containsKey(CTL_RT.KEY_POINT_YIN_FENG_FAN)) {
            var deviceFieldForUI = this.getCountFields().getItem(CTL_RT.KEY_POINT_YIN_FENG_FAN);
            var element = new Element_1.Element();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(Element_1.Element.Prefix_Fan);
            var d1 = new DeviceFieldForUI_1.DeviceFieldForUI();
            var count = 0;
            if (this.getDeviceFields().containsKey(CTL_RT.KEY_POINT_YIN_FENG_FAN_1)) {
                d1 = this.getDeviceFields().getItem(CTL_RT.KEY_POINT_YIN_FENG_FAN_1);
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
        if (this.getCountFields().containsKey(CTL_RT.KEY_POINT_ZHAO_QI_FAN)) {
            var deviceFieldForUI = this.getCountFields().getItem(CTL_RT.KEY_POINT_ZHAO_QI_FAN);
            var element = new Element_1.Element();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(Element_1.Element.Prefix_Fan);
            var d1 = new DeviceFieldForUI_1.DeviceFieldForUI();
            var d2 = d1;
            var count = 0;
            if (this.getDeviceFields().containsKey(CTL_RT.KEY_POINT_ZHAO_QI_FAN_1)) {
                d1 = this.getDeviceFields().getItem(CTL_RT.KEY_POINT_ZHAO_QI_FAN_1);
                count = 1;
            }
            if (this.getDeviceFields().containsKey(CTL_RT.KEY_POINT_ZHAO_QI_FAN_2)) {
                d2 = this.getDeviceFields().getItem(CTL_RT.KEY_POINT_ZHAO_QI_FAN_2);
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
        if (this.getCountFields().containsKey(CTL_RT.KEY_POINT_LU_PAI_FAN)) {
            var deviceFieldForUI = this.getCountFields().getItem(CTL_RT.KEY_POINT_LU_PAI_FAN);
            var element = new Element_1.Element();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(Element_1.Element.Prefix_Fan);
            var d1 = new DeviceFieldForUI_1.DeviceFieldForUI();
            var count = 0;
            if (this.getDeviceFields().containsKey(CTL_RT.KEY_POINT_LU_PAI_FAN_1)) {
                d1 = this.getDeviceFields().getItem(CTL_RT.KEY_POINT_LU_PAI_FAN_1);
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
        if (this.getCountFields().containsKey(CTL_RT.KEY_POINT_CHU_ZHA_FAN)) {
            var deviceFieldForUI = this.getCountFields().getItem(CTL_RT.KEY_POINT_CHU_ZHA_FAN);
            var element = new Element_1.Element();
            element.setTitle(deviceFieldForUI.getTitle());
            element.setPrefix(Element_1.Element.Prefix_Fan);
            var d1 = new DeviceFieldForUI_1.DeviceFieldForUI();
            var count = 0;
            if (this.getDeviceFields().containsKey(CTL_RT.KEY_POINT_CHU_ZHA_FAN_1)) {
                d1 = this.getDeviceFields().getItem(CTL_RT.KEY_POINT_CHU_ZHA_FAN_1);
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
    CTL_RT.KEY_POINT_RAN_SHAO_QI = '_ranshaoqi';
    CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI = 'oc_ranshaoqiqitingkongzhi';
    CTL_RT.KEY_POINT_Add_SHUI_BENG = '_addshuibeng';
    CTL_RT.KEY_POINT_Add_SHUI_BENG_1 = 'oc_1_addshuibeng_start_stop';
    CTL_RT.KEY_POINT_Add_SHUI_BENG_2 = 'oc_2_addshuibeng_start_stop';
    CTL_RT.KEY_POINT_LENG_NING_BENG = '_lengningbeng';
    CTL_RT.KEY_POINT_LENG_NING_BENG_1 = 'oc_1_lengningxunhuanbeng_start_stop';
    CTL_RT.KEY_POINT_LENG_NING_BENG_2 = 'oc_2_lengningxunhuanbeng_start_stop';
    CTL_RT.KEY_POINT_GU_FENG_FAN = '_gufengfan';
    CTL_RT.KEY_POINT_GU_FENG_FAN_1 = 'de_1_gufengji_start_stop';
    CTL_RT.KEY_POINT_YIN_FENG_FAN = '_yinfengfan';
    CTL_RT.KEY_POINT_YIN_FENG_FAN_1 = 'de_1_yinfengji_start_stop';
    CTL_RT.KEY_POINT_LU_PAI_FAN = '_lupaifan';
    CTL_RT.KEY_POINT_LU_PAI_FAN_1 = 'de_lupai_start_stop';
    CTL_RT.KEY_POINT_ZHAO_QI_FAN = '_zhaoqifan';
    CTL_RT.KEY_POINT_ZHAO_QI_FAN_1 = 'de_1_zhaoqifengji_start_stop';
    CTL_RT.KEY_POINT_ZHAO_QI_FAN_2 = 'de_2_zhaoqifengji_start_stop';
    CTL_RT.KEY_POINT_CHU_ZHA_FAN = '_chuzhafan';
    CTL_RT.KEY_POINT_CHU_ZHA_FAN_1 = 'de_chuzha_start_stop';
    return CTL_RT;
}(SdcSoftDevice_1.SdcSoftDevice));
exports.CTL_RT = CTL_RT;
