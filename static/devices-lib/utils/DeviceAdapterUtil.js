"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SdcSoftDevice_1 = require("../devices/SdcSoftDevice");
var DeviceAdapter = /** @class */ (function () {
    function DeviceAdapter(createDeviceFunc, createMapFunc) {
        this.lang = 'zh-cn';
        this.createDeviceFunc = createDeviceFunc;
        this.createMapFunc = createMapFunc;
    }
    /**
     * 获取子类别设备对象
     */
    DeviceAdapter.prototype.getSubDevice = function (type, sub, data) {
        var t = type + '_' + sub;
        console.log('t:=' + t);
        var device = this.createDeviceFunc(t);
        var map = this.createMapFunc(this.lang, t);
        if (device.validateFalse(data.byteLength)) {
            return null;
        }
        map.getPointMap().each(function (key, value) {
            device.handleByteField(value, data);
        });
        return device;
    };
    DeviceAdapter.prototype.getSdcSoftDevice = function (lang, type, data, power, media) {
        if (power === void 0) { power = SdcSoftDevice_1.SdcSoftDevice.POWER_MEDIA_VALUE_NULL; }
        if (media === void 0) { media = SdcSoftDevice_1.SdcSoftDevice.POWER_MEDIA_VALUE_NULL; }
        this.lang = lang;
        var device = this.createDeviceFunc(type);
        var map = this.createMapFunc(lang, type);
        if (device.validateFalse(data.byteLength)) {
            return null;
        }
        /*用户确认设备类型时的逻辑
        *设置设备警告信息
        device.setWarningMsg(map.getwarningMsg())
        *设置子类设备信息
        device.setSubTypes(map.getSubTypes())
         */
        map.getPointMap().each(function (key, value) {
            /*
            if (key == SdcSoftDevice.KEY_POINT_RUN_DAYS) {
                console.log('hhhhhhh')
            }*/
            device.handleByteField(value, data);
        });
        device.handleCommandFields(map.getCommandsMap());
        //自动进行子类型确认
        if (device.getSubDeviceType() != SdcSoftDevice_1.SdcSoftDevice.NO_SUB_DEVICE_TYPE) {
            var subDevice = this.getSubDevice(type, device.getSubDeviceType(), data);
            if (null == subDevice)
                return null;
            device = subDevice;
        }
        var powerUI = device.getBaseInfoFields().getItem(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_POWER);
        var mediaUI = device.getBaseInfoFields().getItem(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_MEDIA);
        if (powerUI && mediaUI) {
            if (power != SdcSoftDevice_1.SdcSoftDevice.POWER_MEDIA_VALUE_NULL &&
                media != SdcSoftDevice_1.SdcSoftDevice.POWER_MEDIA_VALUE_NULL) {
                //设备中需要显示的点位都必须出现在点位表中，即使通过header传递的点位也必需在点位表中设置。
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
        }
        else {
            device.setPower(0);
            device.setMedia(0);
        }
        return device;
    };
    return DeviceAdapter;
}());
/*
export class Web_DeviceAdapterUtil {
    private static adapter: DeviceAdapter = new DeviceAdapter((type) => {
        let strs = type.split('_')
        let path = '../devices/' + strs.join('/')
        let deviceType = require(path)
        let d = new deviceType()
        return d
    }, (type, lang) => {
        let strs = type.split('_')
        let path = '../map/' + lang + '/' + strs.join('/')
        let mapType = require(path)
        let d = new mapType()
        return d
    })


    static getSdcSoftDevice(type: string, data: Buffer, power: number = SdcSoftDevice.POWER_MEDIA_VALUE_NULL, media: number = SdcSoftDevice.POWER_MEDIA_VALUE_NULL, lang: Language = 'zh-cn'): SdcSoftDevice | null {
        return this.adapter.getSdcSoftDevice(type, data, power, media, lang)
    }
}
*/
var Wx_DeviceAdapterUtil = /** @class */ (function () {
    function Wx_DeviceAdapterUtil() {
    }
    Wx_DeviceAdapterUtil.InjectFunc = function (createDeviceFunc, createMapFunc) {
        this.adapter = new DeviceAdapter(createDeviceFunc, createMapFunc);
    };
    Wx_DeviceAdapterUtil.getSdcSoftDevice = function (lang, type, data, power, media) {
        if (power === void 0) { power = SdcSoftDevice_1.SdcSoftDevice.POWER_MEDIA_VALUE_NULL; }
        if (media === void 0) { media = SdcSoftDevice_1.SdcSoftDevice.POWER_MEDIA_VALUE_NULL; }
        if (null != this.adapter) {
            return this.adapter.getSdcSoftDevice(lang, type, data, power, media);
        }
        return null;
    };
    return Wx_DeviceAdapterUtil;
}());
exports.Wx_DeviceAdapterUtil = Wx_DeviceAdapterUtil;
