"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SdcSoftDevice_1 = require("../devices/SdcSoftDevice");
var DeviceAdapter = /** @class */ (function () {
    function DeviceAdapter(createDeviceFunc, createMapFunc) {
        this.createDeviceFunc = createDeviceFunc;
        this.createMapFunc = createMapFunc;
    }
    /**
     * 获取子类别设备对象
     */
    DeviceAdapter.prototype.getSubDevice = function (type, sub, data, lang) {
        if (lang === void 0) { lang = 'zh-cn'; }
        var t = type + '/' + sub;
        var device = this.createDeviceFunc(t);
        var map = this.createMapFunc(t, lang);
        if (device.validateFalse(data.byteLength)) {
            return null;
        }
        map.getPointMap().each(function (key, value) {
            device.handleByteField(value, data);
        });
        return device;
    };
    DeviceAdapter.prototype.getSdcSoftDevice = function (type, data, power, media, lang) {
        if (power === void 0) { power = SdcSoftDevice_1.SdcSoftDevice.POWER_MEDIA_VALUE_NULL; }
        if (media === void 0) { media = SdcSoftDevice_1.SdcSoftDevice.POWER_MEDIA_VALUE_NULL; }
        if (lang === void 0) { lang = 'zh-cn'; }
        var device = this.createDeviceFunc(type);
        var map = this.createMapFunc(type, lang);
        if (device.validateFalse(data.byteLength)) {
            return null;
        }
        map.getPointMap().each(function (key, value) {
            /*
            if (key == SdcSoftDevice.KEY_POINT_RUN_DAYS) {
                console.log('hhhhhhh');
            }*/
            device.handleByteField(value, data);
        });
        //需要进行子类型确认
        if (device.getSubDeviceType() > SdcSoftDevice_1.SdcSoftDevice.NO_SUB_DEVICE_TYPE) {
            var subDevice = this.getSubDevice(type, device.getSubDeviceType.toString(), data, lang);
            if (null == subDevice)
                return null;
            device = subDevice;
        }
        var powerUI = device.getBaseInfoFields().getItem(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_POWER);
        var mediaUI = device.getBaseInfoFields().getItem(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_MEDIA);
        if (power != SdcSoftDevice_1.SdcSoftDevice.POWER_MEDIA_VALUE_NULL &&
            media != SdcSoftDevice_1.SdcSoftDevice.POWER_MEDIA_VALUE_NULL) {
            //设备中需要显示的点位都必须出现在点位表中，即使同过header传递的点位也必需在点位表中设置。
            //只有出现在点位表中的点位才能进行多语言转换，如燃料。如果“燃料”不在点位表中添加，则“燃料”
            // 的多语言翻译无法在程序中确认。
            powerUI.setValue(power);
            powerUI.setValueString(map.getPowerString(power));
            mediaUI.setValue(media);
            mediaUI.setValueString(map.getMediaString(media));
        }
        else {
            device.setPower(powerUI.getValue());
            device.setMedia(mediaUI.getValue());
        }
        return device;
    };
    return DeviceAdapter;
}());
var Web_DeviceAdapterUtil = /** @class */ (function () {
    function Web_DeviceAdapterUtil() {
    }
    Web_DeviceAdapterUtil.getSdcSoftDevice = function (type, data, power, media, lang) {
        if (power === void 0) { power = SdcSoftDevice_1.SdcSoftDevice.POWER_MEDIA_VALUE_NULL; }
        if (media === void 0) { media = SdcSoftDevice_1.SdcSoftDevice.POWER_MEDIA_VALUE_NULL; }
        if (lang === void 0) { lang = 'zh-cn'; }
        return this.adapter.getSdcSoftDevice(type, data, power, media, lang);
    };
    Web_DeviceAdapterUtil.adapter = new DeviceAdapter(function (type) {
        var deviceType = require("../devices/" + type);
        var d = new deviceType();
        return d;
    }, function (type, lang) {
        var mapType = require("../map/" + lang + '/' + type);
        var d = new mapType();
        return d;
    });
    return Web_DeviceAdapterUtil;
}());
exports.Web_DeviceAdapterUtil = Web_DeviceAdapterUtil;
var Wx_DeviceAdapterUtil = /** @class */ (function () {
    function Wx_DeviceAdapterUtil() {
    }
    Wx_DeviceAdapterUtil.InjectFunc = function (createDeviceFunc, createMapFunc) {
        this.adapter = new DeviceAdapter(createDeviceFunc, createMapFunc);
    };
    Wx_DeviceAdapterUtil.getSdcSoftDevice = function (type, data, power, media, lang) {
        if (power === void 0) { power = SdcSoftDevice_1.SdcSoftDevice.POWER_MEDIA_VALUE_NULL; }
        if (media === void 0) { media = SdcSoftDevice_1.SdcSoftDevice.POWER_MEDIA_VALUE_NULL; }
        if (lang === void 0) { lang = 'zh-cn'; }
        if (null != this.adapter) {
            return this.adapter.getSdcSoftDevice(type, data, power, media, lang);
        }
        return null;
    };
    return Wx_DeviceAdapterUtil;
}());
exports.Wx_DeviceAdapterUtil = Wx_DeviceAdapterUtil;
