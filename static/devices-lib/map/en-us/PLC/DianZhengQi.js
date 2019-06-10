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
var BaseMap_1 = require("./BaseMap");
var BaseDevice_1 = require("../../../devices/PLC/BaseDevice");
var CountField_1 = require("../../../meta/CountField");
var meta_1 = require("../../../meta/PLC/meta");
var _485_1 = require("../../../meta/NJZJ/485");
var FixedValueField_1 = require("../../../meta/FixedValueField");
var SdcSoftDevice_1 = require("../../../devices/SdcSoftDevice");
var CountShowField_1 = require("../../../meta/CountShowField");
module.exports = /** @class */ (function (_super) {
    __extends(Map_PLC_DianZhengQi, _super);
    //static readonly Key = "PLC_DianReShui";
    function Map_PLC_DianZhengQi() {
        var _this = _super.call(this) || this;
        /**
         * 计算属性（不显示）
         */
        _this.addPoint(new CountField_1.CountField(BaseDevice_1.PLC.KEY_POINT_Add_SHUI_BENG, "Make-up Pump"));
        _this.addPoint(new _485_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, "Running Hours", "Hours"));
        _this.addPoint(new _485_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, "Running Days", "Days"));
        _this.addPoint(new _485_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, "System State", '', BaseMap_1.Map_PLC.coms_status));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_POWER, "Fuel", 1, Map_PLC_DianZhengQi.coms_power));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_MEDIA, "Medium", 1, Map_PLC_DianZhengQi.coms_media));
        _this.addPoint(new CountShowField_1.CountShowField(Map_PLC_DianZhengQi.KEY_BASE, SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_JIA_RE_ZU, "Put into heating group", ''));
        _this.addPoint(new _485_1.BaseInfoField("ba_shuiweizhuangtai", 19, 2, "Water Level State", '', Map_PLC_DianZhengQi.coms_level));
        _this.addPoint(new _485_1.BaseInfoField("ba_ranshaoqizhuangtai", 21, 2, "Burner State", '', BaseMap_1.Map_PLC.coms_ranshaoqi_status));
        _this.addPoint(new meta_1.MockField("mo_zhengqiyali", 35, 4, "Steam Pressure", "MPa"));
        _this.addPoint(new meta_1.MockField("mo_zhengqiwendu", 39, 4, "Steam Temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_guolushuiwei", 43, 4, "Boiler Water Level", "mm"));
        _this.addPoint(new meta_1.MockField("mo_zhengqishunshiliuliang", 47, 4, "Steam Instantaneous Flow Rate", "T/H"));
        _this.addPoint(new meta_1.MockField("mo_bushuishunshiliuliang", 51, 4, "Make-up Water Instantaneous Flow Rate", "T/H"));
        _this.addPoint(new meta_1.MockField("mo_zhengqileijiliuliang", 55, 4, "Steam  Integrated Flow Rate", "T"));
        _this.addPoint(new meta_1.MockField("mo_bushuileijiliuliang", 59, 4, "Make-up Water Integrated Flow Rate", "T"));
        _this.addPoint(new meta_1.MockField("mo_jinshuiwendu", 63, 4, "Inlet Water Temperature", "℃"));
        _this.addPoint(new meta_1.MockField("mo_jinshuiyali", 67, 4, "Inlet Water Pressure", "MPa"));
        _this.addPoint(new meta_1.MockField("mo_addshuibengpinlvfankui", 71, 4, "Make-up Pump Frequency Feedback", "Hz"));
        _this.addPoint(new meta_1.MockField("mo_ruanshuixiangyewei", 75, 4, "Soft Water Tank Water Level", "%"));
        _this.addPoint(new meta_1.MockField("mo_qidongjiarezushu", 79, 4, "Heating Blocks Starting Quantity", "groups"));
        _this.addPoint(new meta_1.MockField("mo_qidongjiarezushubaifenbi", 83, 4, "Heating Blocks Starting Percentage", "%"));
        _this.addPoint(new meta_1.SettingField("se_chaoyabaojingsheding", 127, 4, "Over-pressure Alarm Setting", "MPa"));
        _this.addPoint(new meta_1.SettingField("se_shiyongjiarezushusheding", 131, 4, "Qty of Heating Blocks in Service Setting", "groups"));
        _this.addPoint(new meta_1.SettingField("se_touqiejiangeshijiansheding", 135, 4, "Switching Interval Setting", "S"));
        _this.addPoint(new meta_1.SettingField("se_kuaiqiejiangeshijiansheding", 139, 4, "Quick Switching Interval Setting", "S"));
        _this.addPoint(new meta_1.SettingField("se_tingluyalisheding", 143, 4, "Boiler Shutdown Pressure Setting", "MPa"));
        _this.addPoint(new meta_1.SettingField("se_shiyongyalisheding", 147, 4, "Operation Pressure Setting", "MPa"));
        _this.addPoint(new meta_1.SettingField("se_qiluyalisheding", 151, 4, "Boiler Starting Temperature Setting", "MPa"));
        _this.addPoint(new meta_1.SettingField("se_guolushuiweijidibaojingsheding", 155, 4, "Extreme Low Boiler Water Level Alarm Setting", "mm"));
        _this.addPoint(new meta_1.SettingField("se_geishuibengshoudongpinlvsheding", 159, 4, "Manual Water Feeding Pump Frequency Setting", "Hz"));
        _this.addPoint(new meta_1.SettingField("se_bushuimubiaosheding", 163, 4, "Make-up water Setting", "mm"));
        _this.addPoint(new meta_1.SettingField("se_guolushuiweijigaobaojingsheding", 167, 4, "Extreme High Boiler Water Level Alarm Setting", "mm"));
        _this.addPoint(new meta_1.SettingField("se_qibengyeweisheding", 171, 4, "Water Pump-on Water Level Setting", "mm"));
        _this.addPoint(new meta_1.SettingField("se_tingbengyeweisheding", 175, 4, "Water Pump-off Water Level Setting", "mm"));
        _this.addPoint(new meta_1.DeviceField("de_1_addshuibeng_auto", 199, 2, "1#Make-up Pump Manual/Automatic", BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_Add_SHUI_BENG_1, 201, 2, "1#Make-up Pump Manual/Automatic", BaseMap_1.Map_PLC.coms_start_stop));
        _this.addPoint(new meta_1.DeviceField("de_2_addshuibeng_auto", 203, 2, "2#Make-up Pump Manual/Automatic", BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_Add_SHUI_BENG_2, 205, 2, "2#Make-up Pump Manual/Automatic", BaseMap_1.Map_PLC.coms_start_stop));
        _this.addPoint(new meta_1.DeviceField("de_baojingshuchuzhishi", 207, 2, "Alarm Output Indication", Map_PLC_DianZhengQi.coms_open_close));
        _this.addPoint(new meta_1.ExceptionField("ex_shuidianjiluojicuobaojing", 233, 2, "Water Electrode Logic Error Alarm", 0));
        _this.addPoint(new meta_1.ExceptionField("ex_yalibiansongqiguzhangbaojing", 233, 2, "Pressure Transmitter Failure Alarm", 1));
        _this.addPoint(new meta_1.ExceptionField("ex_shuiweibiansongqiguzhangbaojing", 233, 2, "Water Level Transmitter Failure Alarm", 2));
        _this.addPoint(new meta_1.ExceptionField("ex_geishuibengbianpinqiguzhang", 233, 2, "Water Feeding Pump Frequency Converter Failure", 3));
        _this.addPoint(new meta_1.ExceptionField("ex_loudianbaojing", 233, 2, "Electric Leakage Alarm", 4));
        _this.addPoint(new meta_1.ExceptionField("ex_qianyabaojing", 233, 2, "Undervoltage Alarm", 5));
        _this.addPoint(new meta_1.ExceptionField("ex_shuiweiweidibaojing_dianji", 233, 2, "Dangerous Low Water Level Alarm( Electrode)", 8));
        _this.addPoint(new meta_1.ExceptionField("ex_shuiweijidibaojing_dianji", 233, 2, "Extreme Low Water Level Alarm( Electrode)", 9));
        _this.addPoint(new meta_1.ExceptionField("ex_shuiweijigaobaojing_dianji", 233, 2, "Extreme High Water Level Alarm( Electrode)", 10));
        _this.addPoint(new meta_1.ExceptionField("ex_shuiweijidibaojing_shedingzhi", 233, 2, "Extreme Low Water Level Alarm( Setting Value)", 11));
        _this.addPoint(new meta_1.ExceptionField("ex_shuiweijigaobaojing_shedingzhi", 233, 2, "Extreme High Water Level Alarm( Setting Value)", 12));
        _this.addPoint(new meta_1.ExceptionField("ex_chaoyabaojing_yalikaiguan", 233, 2, "Over-pressure Alarm ( Pressure Switch)", 13));
        _this.addPoint(new meta_1.ExceptionField("ex_chaoyabaojing_shedingzhi", 233, 2, "Over-pressure Alarm ( Setting Value)", 14));
        _this.addPoint(new meta_1.ExceptionField("ex_ruanshuixiangqueshuibaojing", 233, 2, "Soft Water Tank Water Shortage Alarm", 15));
        _this.addPoint(new meta_1.OpenCloseField("oc_1#jiarezu", 237, 2, "1#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_2#jiarezu", 237, 2, "2#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_3#jiarezu", 237, 2, "3#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_4#jiarezu", 237, 2, "4#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_5#jiarezu", 237, 2, "5#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_6#jiarezu", 237, 2, "6#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_7#jiarezu", 237, 2, "7#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_8#jiarezu", 237, 2, "8#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_9#jiarezu", 237, 2, "9#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_10#jiarezu", 237, 2, "10#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_11#jiarezu", 237, 2, "11#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_12#jiarezu", 237, 2, "12#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_13#jiarezu", 237, 2, "13#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_14#jiarezu", 237, 2, "14#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_15#jiarezu", 237, 2, "15#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_16#jiarezu", 237, 2, "16#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_17#jiarezu", 239, 2, "17#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_18#jiarezu", 239, 2, "18#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_19#jiarezu", 239, 2, "19#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_20#jiarezu", 239, 2, "20#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_21#jiarezu", 239, 2, "21#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_22#jiarezu", 239, 2, "22#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_23#jiarezu", 239, 2, "23#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_24#jiarezu", 239, 2, "24#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_25#jiarezu", 239, 2, "25#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_26#jiarezu", 239, 2, "26#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_27#jiarezu", 239, 2, "27#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_28#jiarezu", 239, 2, "28#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_29#jiarezu", 239, 2, "29#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_30#jiarezu", 239, 2, "30#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_31#jiarezu", 239, 2, "31#Heating Block Feedback", 1));
        _this.addPoint(new meta_1.OpenCloseField("oc_32#jiarezu", 239, 2, "32#Heating Block Feedback", 1));
        return _this;
    }
    return Map_PLC_DianZhengQi;
}(BaseMap_1.Map_PLC));
