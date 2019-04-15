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
var SdcSoftDevice_1 = require("./SdcSoftDevice");
var Element_1 = require("../entities/Element");
var Collections_1 = require("../entities/Collections");
var IP = /** @class */ (function (_super) {
    __extends(IP, _super);
    function IP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IP.prototype.handleByteField = function (field, bytes) {
        var view = new DataView(bytes);
        switch (field.getBytesLength()) {
            case 0:
            case 2:
                //if (field.haveValue(bytes[field.getStartIndex() + 1], bytes[field.getStartIndex()])) {
                if (field.haveValue(view.getUint8(field.getStartIndex() + 1), view.getUint8(field.getStartIndex()))) {
                    this.addField(field);
                }
                break;
            default:
                if (field.haveValue(view.getUint8(field.getStartIndex() + 1), view.getUint8(field.getStartIndex()))) {
                    this.addField(field);
                }
                break;
        }
    };
    IP.prototype.getDeviceFocusFields = function () {
        var map = this.getBaseInfoFields();
        var list = new Collections_1.List();
        list.push(this.getBaseInfoFields().getItem(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_DAYS));
        list.push(this.getBaseInfoFields().getItem(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_HOURS));
        if (this.power == SdcSoftDevice_1.Power.Dian) {
            list.push(this.getSettingFields().getItem("se_jiarezushu"));
            if (this.media == SdcSoftDevice_1.Media.ReShui) {
                list.push(this.getMockFields().getItem("mo_chukouwendu"));
                list.push(this.getMockFields().getItem("mo_rukouwendu"));
                list.push(this.getBaseInfoFields().getItem("ba_shuixiangshuiweizhuangtai"));
                list.push(this.getBaseInfoFields().getItem("ba_guolushuiweizhuangtai"));
            }
            else if (this.media == SdcSoftDevice_1.Media.DaoReYou) {
            }
            else if (this.media == SdcSoftDevice_1.Media.ReFeng) {
            }
            else if (this.media == SdcSoftDevice_1.Media.ZhengQi) {
                list.push(this.getBaseInfoFields().getItem("ba_guolushuiweizhuangtai"));
                var item = this.getBaseInfoFields().getItem("ba_guoluyalizhuangtai");
                if (item) {
                    list.push(item);
                }
                else {
                    list.push(this.getMockFields().getItem("mo_zhengqiyali"));
                }
            }
            else if (this.media == SdcSoftDevice_1.Media.ZhenKong) {
            }
        }
        else if (this.power == SdcSoftDevice_1.Power.Mei) {
            if (this.media == SdcSoftDevice_1.Media.ReShui) {
                list.push(this.getMockFields().getItem("mo_paiyanwendu"));
                list.push(this.getMockFields().getItem("mo_chukouwendu"));
                list.push(this.getMockFields().getItem("mo_rukouwendu"));
                var item = this.getBaseInfoFields().getItem("ba_guoluyalizhuangtai");
                if (item) {
                    list.push(item);
                }
                else {
                    list.push(this.getMockFields().getItem("mo_zhengqiyali"));
                }
            }
            else if (this.media == SdcSoftDevice_1.Media.DaoReYou) {
                list.push(this.getMockFields().getItem("mo_paiyanwendu"));
                list.push(this.getMockFields().getItem("mo_chukouwendu"));
                list.push(this.getMockFields().getItem("mo_rukouwendu"));
                var item = this.getBaseInfoFields().getItem("ba_guoluyalizhuangtai");
                if (item) {
                    list.push(item);
                }
                else {
                    list.push(this.getMockFields().getItem("mo_zhengqiyali"));
                }
            }
            else if (this.media == SdcSoftDevice_1.Media.ReFeng) {
            }
            else if (this.media == SdcSoftDevice_1.Media.ZhengQi) {
                var item = this.getBaseInfoFields().getItem("ba_guoluyalizhuangtai");
                if (item) {
                    list.push(item);
                }
                else {
                    list.push(this.getMockFields().getItem("mo_zhengqiyali"));
                }
                list.push(this.getMockFields().getItem("mo_paiyanwendu"));
                list.push(this.getBaseInfoFields().getItem("ba_guolushuiweizhuangtai"));
            }
            else if (this.media == SdcSoftDevice_1.Media.ZhenKong) {
            }
        }
        else if (this.power == SdcSoftDevice_1.Power.ShengWuZhi) {
            if (this.media == SdcSoftDevice_1.Media.ReShui) {
            }
            else if (this.media == SdcSoftDevice_1.Media.DaoReYou) {
            }
            else if (this.media == SdcSoftDevice_1.Media.ReFeng) {
            }
            else if (this.media == SdcSoftDevice_1.Media.ZhengQi) {
            }
            else if (this.media == SdcSoftDevice_1.Media.ZhenKong) {
            }
        }
        else if (this.power == SdcSoftDevice_1.Power.YouQi) {
            if (this.media == SdcSoftDevice_1.Media.ReShui) {
                list.push(this.getMockFields().getItem("mo_paiyanwendu"));
                list.push(this.getMockFields().getItem("mo_chukouwendu"));
                list.push(this.getMockFields().getItem("mo_jinkouwendu"));
                list.push(this.getBaseInfoFields().getItem("ba_guolushuiweizhuangtai"));
                list.push(this.getBaseInfoFields().getItem("ba_shuixiangshuiweizhuangtai"));
            }
            else if (this.media == SdcSoftDevice_1.Media.DaoReYou) {
                list.push(this.getMockFields().getItem("mo_paiyanwendu"));
                list.push(this.getMockFields().getItem("mo_chukouwendu"));
                list.push(this.getMockFields().getItem("mo_rukouwendu"));
            }
            else if (this.media == SdcSoftDevice_1.Media.ReFeng) {
                list.push(this.getMockFields().getItem("mo_chukouwendu"));
                list.push(this.getDeviceFields().getItem("de_ranshaoqi"));
                list.push(this.getDeviceFields().getItem("de_yinfengji"));
            }
            else if (this.media == SdcSoftDevice_1.Media.ZhengQi) {
                list.push(this.getBaseInfoFields().getItem("ba_guolushuiweizhuangtai"));
                list.push(this.getMockFields().getItem("mo_paiyanwendu"));
                var item = this.getBaseInfoFields().getItem("ba_guoluyalizhuangtai");
                if (item) {
                    list.push(item);
                }
                else {
                    list.push(this.getMockFields().getItem("mo_zhengqiyali"));
                }
            }
            else if (this.media == SdcSoftDevice_1.Media.ZhenKong) {
                list.push(this.getMockFields().getItem("mo_paiyanwendu"));
                list.push(this.getMockFields().getItem("mo_chukouwendu"));
                list.push(this.getMockFields().getItem("mo_meishuiwendu"));
                list.push(this.getBaseInfoFields().getItem("ba_guolushuiweizhuangtai"));
                var item = this.getBaseInfoFields().getItem("ba_guoluyalizhuangtai");
                if (item) {
                    list.push(item);
                }
                else {
                    list.push(this.getMockFields().getItem("mo_zhengqiyali"));
                }
            }
        }
        return list.toArray();
    };
    IP.prototype.getPowerInfo = function () {
        if (this.power == SdcSoftDevice_1.Power.Dian) {
            return this.getSettingFields().getItem(IP.KEY_POINT_JIA_RE_ZU).getValue() > 0 ? 1 : 0;
        }
        else if (this.power == SdcSoftDevice_1.Power.Mei) {
            return this.getDeviceFields().getItem(IP.KEY_POINT_YIN_FENG_JI).getValue() > 0x7F ? 1 : 0;
        }
        return this.getDeviceFields().getItem(IP.KEY_POINT_RAN_SHAO_QI).getValue() > 0x7F ? 1 : 0;
    };
    IP.prototype.getBeng = function () {
        return this.getElements(IP.Device_Suffix_Beng, Element_1.Element.Prefix_Beng, Element_1.Element.Index_Beng_Count);
    };
    IP.prototype.getFan = function () {
        return this.getElements(IP.Device_Suffix_Fan, Element_1.Element.Prefix_Fan, Element_1.Element.Index_Fan_Count);
    };
    IP.prototype.getElements = function (deviceSuffix, elementPrefix, valueIndex) {
        var list = [];
        this.getDeviceFields().each(function (key, value) {
            if (value.getName().indexOf(deviceSuffix) > -1) {
                var element = new Element_1.Element();
                element.setTitle(value.getTitle());
                element.setPrefix(elementPrefix);
                var v = value.getValue() & 0x80;
                if (0x80 == v) {
                    element.SetValues(valueIndex, 1, 1);
                }
                else {
                    element.SetValues(valueIndex, 1, 0);
                }
                list.push(element);
            }
        });
        return list;
    };
    IP.Device_Suffix_Beng = "_beng";
    IP.Device_Suffix_Fan = "_fan";
    IP.KEY_POINT_RAN_SHAO_QI = "de_ranshaoqi";
    IP.KEY_POINT_JIA_RE_ZU = "se_jiarezushu";
    IP.KEY_POINT_YIN_FENG_JI = "de_yinfengji_fan";
    return IP;
}(SdcSoftDevice_1.SdcSoftDevice));
exports.IP = IP;
