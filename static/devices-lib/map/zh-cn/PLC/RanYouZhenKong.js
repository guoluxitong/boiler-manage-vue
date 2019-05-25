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
var SdcSoftDevice_1 = require("../../../devices/SdcSoftDevice");
var FixedValueField_1 = require("../../../meta/FixedValueField");
module.exports = /** @class */ (function (_super) {
    __extends(Map_PLC_RanYouZhenKong, _super);
    function Map_PLC_RanYouZhenKong() {
        var _this = _super.call(this) || this;
        _this.addPoint(new CountField_1.CountField(BaseDevice_1.PLC.KEY_POINT_Add_SHUI_BENG, '给水泵'));
        _this.addPoint(new CountField_1.CountField(BaseDevice_1.PLC.KEY_POINT_XUN_HUAN_BENG, '循环泵'));
        _this.addPoint(new CountField_1.CountField(BaseDevice_1.PLC.KEY_POINT_ZHEN_KONG_BENG, '真空泵'));
        _this.addPoint(new _485_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, '运行小时数', '时'));
        _this.addPoint(new _485_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, '运行天数', '天'));
        _this.addPoint(new _485_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, '系统状态', '', BaseMap_1.Map_PLC.coms_status));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_POWER, '燃料', 0, Map_PLC_RanYouZhenKong.coms_power));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_MEDIA, '介质', 4, Map_PLC_RanYouZhenKong.coms_media));
        _this.addPoint(new _485_1.BaseInfoField('ba_shuiweizhuangtai', 19, 2, '水位状态', '', Map_PLC_RanYouZhenKong.coms_level));
        _this.addPoint(new _485_1.BaseInfoField('ba_ranshaoqizhuangtai', 21, 2, '燃烧器状态', '', BaseMap_1.Map_PLC.coms_ranshaoqi_status));
        _this.addPoint(new meta_1.MockField('mo_remeishuiwendu', 35, 4, '热媒水温度', '℃'));
        _this.addPoint(new meta_1.MockField('mo_zhenkongyali', 39, 4, '真空压力', 'Kpa'));
        _this.addPoint(new meta_1.MockField('mo_jinyanwendu', 43, 4, '进烟温度', '℃'));
        _this.addPoint(new meta_1.MockField('mo_paiyanwendu', 47, 4, '排烟温度', '℃'));
        _this.addPoint(new meta_1.MockField('mo_shiwaiwendu', 51, 4, '室外温度', '℃'));
        _this.addPoint(new meta_1.MockField('mo_cainuanchushuiwendu', 55, 4, '采暖出水温度', '℃'));
        _this.addPoint(new meta_1.MockField('mo_cainuanhuishuiwendu', 59, 4, '采暖回水温度', '℃'));
        _this.addPoint(new meta_1.MockField('mo_cainuanchushuiyali', 63, 4, '采暖出水压力', 'Mpa'));
        _this.addPoint(new meta_1.MockField('mo_cainuanhuishuiyali', 67, 4, '采暖回水压力', 'Mpa'));
        _this.addPoint(new meta_1.MockField('mo_shenghuochushuiwendu', 71, 4, '生活出水温度', '℃'));
        _this.addPoint(new meta_1.MockField('mo_shenghuohuishuiwendu', 75, 4, '生活回水温度', '℃'));
        _this.addPoint(new meta_1.MockField('mo_shenghuochushuiyali', 79, 4, '生活出水压力', 'Mpa'));
        _this.addPoint(new meta_1.MockField('mo_shenghuohuishuiyali', 83, 4, '生活回水压力', 'Mpa'));
        _this.addPoint(new meta_1.SettingField('se_qiluwendusheding', 111, 4, '启炉温度设定', '℃'));
        _this.addPoint(new meta_1.SettingField('se_mubiaowendusheding', 115, 4, '目标温度设定', '℃'));
        _this.addPoint(new meta_1.SettingField('se_tingluwendusheding', 119, 4, '停炉温度设定', '℃'));
        _this.addPoint(new meta_1.SettingField('se_zhenkongyalidisheding', 123, 4, '真空压力低设定', 'KPa'));
        _this.addPoint(new meta_1.SettingField('se_zhenkongyaligaosheding', 127, 4, '真空压力高设定', 'KPa'));
        _this.addPoint(new meta_1.SettingField('se_paiyanwenduchaogaobaojingsheding', 131, 4, '排烟温度超高报警设定', '℃'));
        _this.addPoint(new meta_1.SettingField('se_chukouwenduchaogaobaojingsheding', 135, 4, '出口温度超高报警设定', '℃'));
        _this.addPoint(new meta_1.SettingField('se_zhenkongyalichaogaobaojingsheding', 139, 4, '真空压力超高报警设定', 'KPa'));
        _this.addPoint(new meta_1.DeviceField('de_ranshaojiqiting', 163, 2, '燃烧器', BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField('de_1_xunhuanbeng_auto', 165, 2, '1#循环泵', BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_XUN_HUAN_BENG_1, 167, 2, '1#循环泵', Map_PLC_RanYouZhenKong.coms_start_stop));
        _this.addPoint(new meta_1.DeviceField('de_2_xunhuanbeng_auto', 169, 2, '2#循环泵', BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_XUN_HUAN_BENG_2, 171, 2, '2#循环泵', Map_PLC_RanYouZhenKong.coms_start_stop));
        _this.addPoint(new meta_1.DeviceField('de_1_addshuibeng_auto', 173, 2, '1#补水泵', BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_Add_SHUI_BENG_1, 175, 2, '1#补水泵', Map_PLC_RanYouZhenKong.coms_start_stop));
        _this.addPoint(new meta_1.DeviceField('de_2_addshuibeng_auto', 177, 2, '2#补水泵', BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_Add_SHUI_BENG_2, 179, 2, '2#补水泵', Map_PLC_RanYouZhenKong.coms_start_stop));
        _this.addPoint(new meta_1.DeviceField('de_zhenkongbeng_auto', 181, 2, '真空泵', BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_ZHEN_KONG_BENG_1, 183, 2, '真空泵', Map_PLC_RanYouZhenKong.coms_start_stop));
        _this.addPoint(new meta_1.ExceptionField('ex_lubichaowenbaojing', 203, 2, '炉壁超温报警', 0));
        _this.addPoint(new meta_1.ExceptionField('ex_remeishuiwenduchuanganqiguzhang', 203, 2, '热媒水温度传感器故障', 1));
        _this.addPoint(new meta_1.ExceptionField('ex_paiyanwenduchuanganqiguzhang', 203, 2, '排烟温度传感器故障', 2));
        _this.addPoint(new meta_1.ExceptionField('ex_cainuanchushuiwenduchuanganqiguzhang', 203, 2, '采暖出水温度传感器故障', 3));
        _this.addPoint(new meta_1.ExceptionField('ex_shenghuochushuiwenduchuanganqiguzhang', 203, 2, '生活出水温度传感器故障', 4));
        _this.addPoint(new meta_1.ExceptionField('ex_wendushedingcuowubaojing', 203, 2, '温度设定错误报警', 5));
        _this.addPoint(new meta_1.ExceptionField('ex_xunhuanbengliansuoduankaibaojing', 203, 2, '循环泵连锁断开报警', 6));
        _this.addPoint(new meta_1.ExceptionField('ex_waibuliansuoduankaibaojing', 203, 2, '外部连锁断开报警', 7));
        _this.addPoint(new meta_1.ExceptionField('ex_ranshaojiguzhang', 203, 2, '燃烧器故障', 8));
        _this.addPoint(new meta_1.ExceptionField('ex_ranqixielou', 203, 2, '燃气泄漏', 9));
        _this.addPoint(new meta_1.ExceptionField('ex_ranqiyaliyichang', 203, 2, '燃气压力异常', 10));
        _this.addPoint(new meta_1.ExceptionField('ex_luneiyaligaobaojingshedingzhi', 203, 2, '炉内压力高报警（设定值）', 11));
        _this.addPoint(new meta_1.ExceptionField('ex_luneiyaligaobaojingyalikaiguan', 203, 2, '炉内压力高报警（压力开关）', 12));
        _this.addPoint(new meta_1.ExceptionField('ex_paiyanwenduchaogaobaojing', 203, 2, '排烟温度超高报警', 13));
        _this.addPoint(new meta_1.ExceptionField('ex_remeishuiwenduchaogaobaojing', 203, 2, '热媒水温度超高报警', 14));
        _this.addPoint(new meta_1.ExceptionField('ex_queshuibaohubaojing', 203, 2, '缺水保护报警', 15));
        return _this;
    }
    return Map_PLC_RanYouZhenKong;
}(BaseMap_1.Map_PLC));
