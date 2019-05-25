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
    __extends(Map_PLC_RanYouReShui, _super);
    function Map_PLC_RanYouReShui() {
        var _this = _super.call(this) || this;
        _this.addPoint(new CountField_1.CountField(BaseDevice_1.PLC.KEY_POINT_Add_SHUI_BENG, '补水泵'));
        _this.addPoint(new CountField_1.CountField(BaseDevice_1.PLC.KEY_POINT_XUN_HUAN_BENG, '循环泵'));
        _this.addPoint(new _485_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, '运行小时数', '时'));
        _this.addPoint(new _485_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, '运行天数', '天'));
        _this.addPoint(new _485_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, '系统状态', '', BaseMap_1.Map_PLC.coms_status));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_POWER, '燃料', 0, Map_PLC_RanYouReShui.coms_power));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_MEDIA, '介质', 0, Map_PLC_RanYouReShui.coms_media));
        _this.addPoint(new _485_1.BaseInfoField('ba_shuiweizhuangtai', 19, 2, '水位状态', '', Map_PLC_RanYouReShui.coms_level));
        _this.addPoint(new _485_1.BaseInfoField('ba_ranshaoqizhuangtai', 21, 2, '燃烧器状态', '', BaseMap_1.Map_PLC.coms_ranshaoqi_status));
        _this.addPoint(new meta_1.MockField('mo_chushuiwendu', 35, 4, '出水温度', '℃'));
        _this.addPoint(new meta_1.MockField('mo_huishuiwendu', 39, 4, '回水温度', '℃'));
        _this.addPoint(new meta_1.MockField('mo_paiyanwendu', 43, 4, '排烟温度', '℃'));
        _this.addPoint(new meta_1.MockField('mo_chushuiyali', 47, 4, '出水压力', 'Mpa'));
        _this.addPoint(new meta_1.MockField('mo_huishuiyali', 51, 4, '回水压力', 'Mpa'));
        _this.addPoint(new meta_1.MockField('mo_yacha', 55, 4, '压差', 'Mpa'));
        _this.addPoint(new meta_1.MockField('mo_lengningqijinyanwendu', 59, 4, '冷凝器进烟温度', '℃'));
        _this.addPoint(new meta_1.MockField('mo_lengningqijinyanyali', 63, 4, '冷凝器进烟压力', 'Pa'));
        _this.addPoint(new meta_1.MockField('mo_jienengqijinyanwendu', 67, 4, '节能器进烟温度', '℃'));
        _this.addPoint(new meta_1.MockField('mo_jienengqijinyanyali', 71, 4, '节能器进烟压力', 'Pa'));
        _this.addPoint(new meta_1.MockField('mo_lutangwendu', 75, 4, '炉膛温度', '℃'));
        _this.addPoint(new meta_1.MockField('mo_lutangyali', 79, 4, '炉膛压力', 'Pa'));
        _this.addPoint(new meta_1.MockField('mo_kongyuqijinyanwendu', 83, 4, '空预器进烟温度', '℃'));
        _this.addPoint(new meta_1.MockField('mo_kongyuqijinyanyali', 87, 4, '空预器进烟压力', 'Pa'));
        _this.addPoint(new meta_1.MockField('mo_kongyuqijinfengwendu', 91, 4, '空预器进风温度', '℃'));
        _this.addPoint(new meta_1.MockField('mo_kongyuqijinfengyali', 95, 4, '空预器进风压力', 'Kpa'));
        _this.addPoint(new meta_1.MockField('mo_kongyuqichufengwendu', 99, 4, '空预器出风温度', '℃'));
        _this.addPoint(new meta_1.MockField('mo_zhufengjipinlüfankui', 103, 4, '主风机频率反馈', 'Hz'));
        _this.addPoint(new meta_1.MockField('mo_xunhuanfengjipinlüfankui', 107, 4, '循环风机频率反馈', 'Hz'));
        _this.addPoint(new meta_1.MockField('mo_addshuibengpinlüfankui', 111, 4, '补水泵频率反馈', 'Hz'));
        _this.addPoint(new meta_1.MockField('mo_shiwaiwendu', 115, 4, '室外温度', '℃'));
        _this.addPoint(new meta_1.MockField('mo_xunhuanbeng1pinlüfankui', 119, 4, '循环泵1频率反馈', 'Hz'));
        _this.addPoint(new meta_1.MockField('mo_xunhuanbeng2pinlüfankui', 123, 4, '循环泵2频率反馈', 'Hz'));
        _this.addPoint(new meta_1.SettingField('se_qiluwendusheding', 248, 4, '启炉温度设定', '℃'));
        _this.addPoint(new meta_1.SettingField('se_mubiaowendusheding', 252, 4, '目标温度设定', '℃'));
        _this.addPoint(new meta_1.SettingField('se_tingluwendusheding', 256, 4, '停炉温度设定', '℃'));
        _this.addPoint(new meta_1.SettingField('se_yalidisheding', 260, 4, '压力低设定', 'Mpa'));
        _this.addPoint(new meta_1.SettingField('se_yaligaosheding', 264, 4, '压力高设定', 'Mpa'));
        _this.addPoint(new meta_1.SettingField('se_paiyanwenduchaogaobaojingsheding', 268, 4, '排烟温度超高报警设定', '℃'));
        _this.addPoint(new meta_1.SettingField('se_chukouwenduchaogaobaojingsheding', 272, 4, '出口温度超高报警设定', '℃'));
        _this.addPoint(new meta_1.SettingField('se_yalichaogaobaojingsheding', 276, 4, '压力超高报警设定', 'Mpa'));
        _this.addPoint(new meta_1.SettingField('se_yalichaodibaojingsheding', 280, 4, '压力超低报警设定', 'Mpa'));
        _this.addPoint(new meta_1.DeviceField('de_ranshaoqiqiting', 368, 2, '燃烧器', BaseMap_1.Map_PLC.coms_ranshaoqi_status));
        _this.addPoint(new meta_1.DeviceField('de_1_addshuibeng_auto', 370, 2, '1#补水泵', BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_Add_SHUI_BENG_1, 372, 2, '1#补水泵', Map_PLC_RanYouReShui.coms_start_stop));
        _this.addPoint(new meta_1.DeviceField('de_2_addshuibeng_auto', 374, 2, '2#补水泵', BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_Add_SHUI_BENG_2, 376, 2, '2#补水泵', Map_PLC_RanYouReShui.coms_start_stop));
        _this.addPoint(new meta_1.DeviceField('de_1_xunhuanbeng_auto', 378, 2, '1#循环泵', BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_XUN_HUAN_BENG_1, 380, 2, '1#循环泵', Map_PLC_RanYouReShui.coms_start_stop));
        _this.addPoint(new meta_1.DeviceField('de_2_xunhuanbeng_auto', 382, 2, '2#循环泵', BaseMap_1.Map_PLC.coms_atuo));
        _this.addPoint(new meta_1.DeviceField(BaseDevice_1.PLC.KEY_POINT_XUN_HUAN_BENG_2, 384, 2, '2#循环泵', Map_PLC_RanYouReShui.coms_start_stop));
        _this.addPoint(new meta_1.ExceptionField('ex_lubichaowenbaojing', 448, 2, '炉壁超温报警', 0));
        _this.addPoint(new meta_1.ExceptionField('ex_chushuiwenduchuanganqiguzhang', 448, 2, '出水温度传感器故障', 1));
        _this.addPoint(new meta_1.ExceptionField('ex_huishuiwenduchuanganqiguzhang', 448, 2, '回水温度传感器故障', 2));
        _this.addPoint(new meta_1.ExceptionField('ex_paiyanwenduchuanganqiguzhang', 448, 2, '排烟温度传感器故障', 3));
        _this.addPoint(new meta_1.ExceptionField('ex_wendushedingcuowubaojing', 448, 2, '温度设定错误报警', 4));
        _this.addPoint(new meta_1.ExceptionField('ex_xunhuanbengliansuoduankaibaojing', 448, 2, '循环泵连锁断开报警', 5));
        _this.addPoint(new meta_1.ExceptionField('ex_waibuliansuoduankaibaojing', 448, 2, '外部连锁断开报警', 6));
        _this.addPoint(new meta_1.ExceptionField('ex_chushuiyalibiansongqiguzhang', 448, 2, '出水压力变送器故障', 7));
        _this.addPoint(new meta_1.ExceptionField('ex_ranshaojiguzhang', 448, 2, '燃烧器故障', 8));
        _this.addPoint(new meta_1.ExceptionField('ex_ranqixielou', 448, 2, '燃气泄漏', 9));
        _this.addPoint(new meta_1.ExceptionField('ex_ranqiyaliyichang', 448, 2, '燃气压力异常', 10));
        _this.addPoint(new meta_1.ExceptionField('ex_yalichaogaobaojing', 448, 2, '压力超高报警', 11));
        _this.addPoint(new meta_1.ExceptionField('ex_yalichaodibaojing', 448, 2, '压力超低报警', 12));
        _this.addPoint(new meta_1.ExceptionField('ex_paiyanwenduchaogaobaojing', 448, 2, '排烟温度超高报警', 13));
        _this.addPoint(new meta_1.ExceptionField('ex_chushuiwenduchaogaobaojing', 448, 2, '出水温度超高报警', 14));
        _this.addPoint(new meta_1.ExceptionField('ex_queshuibaohubaojing', 448, 2, '缺水保护报警', 15));
        _this.addPoint(new meta_1.ExceptionField('ex_huishuiyalibiansongqiguzhang', 450, 2, '回水压力变送器故障', 8));
        return _this;
    }
    return Map_PLC_RanYouReShui;
}(BaseMap_1.Map_PLC));
