"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collections_1 = require("../entities/Collections");
var DeviceFieldForUI_1 = require("../meta/DeviceFieldForUI");
var Element_1 = require("../entities/Element");
var map_1 = require("../map/map");
var ByteField_1 = require("../meta/ByteField");
var CommandField_1 = require("../meta/CommandField");
var Media;
(function (Media) {
    Media[Media["ReShui"] = 0] = "ReShui";
    Media[Media["ZhengQi"] = 1] = "ZhengQi";
    Media[Media["DaoReYou"] = 2] = "DaoReYou";
    Media[Media["ReFeng"] = 3] = "ReFeng";
    Media[Media["ZhenKong"] = 4] = "ZhenKong";
})(Media = exports.Media || (exports.Media = {}));
var Power;
(function (Power) {
    Power[Power["YouQi"] = 0] = "YouQi";
    Power[Power["Dian"] = 1] = "Dian";
    Power[Power["Mei"] = 2] = "Mei";
    Power[Power["ShengWuZhi"] = 3] = "ShengWuZhi";
    Power[Power["YuRe"] = 30] = "YuRe";
})(Power = exports.Power || (exports.Power = {}));
var SdcSoftDevice = /** @class */ (function () {
    function SdcSoftDevice() {
        this.fieldMap = new Collections_1.StringHashMap();
        this.commandMap = new Collections_1.StringHashMap();
        this.modbusNo = 1;
        this.BYTE_ARRAY_LENGTH = 0;
        this.power = SdcSoftDevice.POWER_MEDIA_VALUE_NULL;
        this.media = SdcSoftDevice.POWER_MEDIA_VALUE_NULL;
        this.deviceNo = '';
        this.fieldMap.addItem(map_1.map.KEY_BASE, []);
        this.fieldMap.addItem(map_1.map.KEY_EXCEPTION, []);
        this.fieldMap.addItem(map_1.map.KEY_MOCK, []);
        this.fieldMap.addItem(map_1.map.KEY_SETTING, []);
        this.fieldMap.addItem(map_1.map.KEY_DEVICE, []);
        this.fieldMap.addItem(map_1.map.KEY_START_STOP, []);
        this.fieldMap.addItem(map_1.map.KEY_OPEN_CLOSE, []);
        this.fieldMap.addItem(map_1.map.KEY_Count_Fields, []);
    }
    SdcSoftDevice.prototype.initCommandsMapKeys = function (map) {
        this.commandMap = map;
    };
    SdcSoftDevice.prototype.setPower = function (power) {
        this.power = power;
    };
    SdcSoftDevice.prototype.setMedia = function (media) {
        this.media = media;
    };
    SdcSoftDevice.prototype.setDeviceNo = function (deviceNo) {
        this.deviceNo = deviceNo;
    };
    SdcSoftDevice.prototype.getFieldsMap = function (fieldsGroupKey) {
        var map = new Collections_1.StringHashMap();
        var list = this.fieldMap.getItem(fieldsGroupKey);
        for (var e in list) {
            map.addItem(list[e].getName(), list[e]);
        }
        return map;
    };
    SdcSoftDevice.prototype.getBaseInfoFields = function () {
        return this.getFieldsMap(map_1.map.KEY_BASE);
    };
    SdcSoftDevice.prototype.getDeviceFields = function () {
        return this.getFieldsMap(map_1.map.KEY_DEVICE);
    };
    SdcSoftDevice.prototype.getExceptionFields = function () {
        return this.getFieldsMap(map_1.map.KEY_EXCEPTION);
    };
    SdcSoftDevice.prototype.getMockFields = function () {
        return this.getFieldsMap(map_1.map.KEY_MOCK);
    };
    SdcSoftDevice.prototype.getSettingFields = function () {
        return this.getFieldsMap(map_1.map.KEY_SETTING);
    };
    SdcSoftDevice.prototype.getStartStopFields = function () {
        return this.getFieldsMap(map_1.map.KEY_START_STOP);
    };
    SdcSoftDevice.prototype.getOpenCloseFields = function () {
        return this.getFieldsMap(map_1.map.KEY_OPEN_CLOSE);
    };
    SdcSoftDevice.prototype.getCountFields = function () {
        return this.getFieldsMap(map_1.map.KEY_Count_Fields);
    };
    SdcSoftDevice.prototype.getFieldsByGroupKey = function (key) {
        return this.fieldMap.getItem(key);
    };
    SdcSoftDevice.prototype.getExceptionCount = function () {
        return this.getExceptionFields().count;
    };
    SdcSoftDevice.prototype.getDeviceStatus = function () {
        return this.getBaseInfoFields().getItem(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS);
    };
    SdcSoftDevice.prototype.addCommand = function (cmdGroupKey, cmd) {
        if (this.commandMap.containsKey(cmdGroupKey)) {
            this.commandMap.getItem(cmdGroupKey).push(cmd);
        }
        else {
            var value = [cmd];
            this.commandMap.addItem(cmdGroupKey, value);
        }
    };
    SdcSoftDevice.prototype.addUIField = function (field) {
        if (null == field)
            return;
        if (this.fieldMap.containsKey(field.getKey()))
            this.fieldMap.getItem(field.getKey()).push(field);
    };
    SdcSoftDevice.prototype.addField = function (field) {
        if (field instanceof ByteField_1.ByteField) {
            //需要剔除纯控制程序点位
            var ui = field.getDeviceFieldForUI();
            if (ui) {
                this.addUIField(ui);
            }
            //处理保护执行命令的点位
            var cmd = field.getCommand();
            if (cmd) {
                this.addCommand(field.getCommandGroupKey(), cmd);
            }
            return;
        }
        if (field instanceof CommandField_1.CommandField) {
            var cmd = field.getCommand();
            if (cmd) {
                this.addCommand(field.getCommandGroupKey(), cmd);
            }
            return;
        }
        if (field instanceof DeviceFieldForUI_1.DeviceFieldForUI) {
            this.addUIField(field);
        }
    };
    /**
     * 获取炉子元素信息
     * @returns AElement
     */
    SdcSoftDevice.prototype.getStoveElement = function () {
        var element = new Element_1.Element();
        element.setPrefix(Element_1.Element.Prefix_Stove);
        element.setTitle("锅炉");
        element.SetValues(Element_1.Element.Index_A_Power, this.power, this.media, SdcSoftDevice.Style_Horizontal, this.getPowerInfo());
        return element;
    };
    SdcSoftDevice.prototype.validateFalse = function (bytesLength) {
        return this.BYTE_ARRAY_LENGTH > bytesLength;
    };
    SdcSoftDevice.prototype.getCommands = function () {
        var _this = this;
        this.commandMap.each(function (key, value) {
            for (var index in value) {
                value[index].setModbusNo(_this.modbusNo);
            }
        });
        return this.commandMap;
    };
    SdcSoftDevice.prototype.getDeviceType = function () {
        return '';
    };
    SdcSoftDevice.prototype.getSubDeviceType = function () {
        return SdcSoftDevice.NO_SUB_DEVICE_TYPE;
    };
    /**
     * 没有子设备类型，CTL_RT_X1存在子设备类型
     */
    SdcSoftDevice.NO_SUB_DEVICE_TYPE = -1;
    SdcSoftDevice.POWER_MEDIA_VALUE_NULL = -1;
    SdcSoftDevice.KEY_POINT_SYSTEM_STATUS = "o_system_status";
    SdcSoftDevice.KEY_POINT_POWER = "o_power";
    SdcSoftDevice.KEY_POINT_MEDIA = "o_media";
    SdcSoftDevice.KEY_POINT_RUN_LIFE = "ba_yunxingshijian";
    SdcSoftDevice.KEY_POINT_RUN_DAYS = "ba_yunxingtianshu";
    SdcSoftDevice.KEY_POINT_RUN_HOURS = "ba_yunxingxiaoshishu";
    SdcSoftDevice.Style_Horizontal = 0;
    SdcSoftDevice.Style_Vertical = 1;
    return SdcSoftDevice;
}());
exports.SdcSoftDevice = SdcSoftDevice;
