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
var CountField_1 = require("../../../../../../../meta/CountField");
var meta_1 = require("../../../../../../../meta/RT/meta");
var RT_1 = require("../../../../../../../devices/CTL/RT/RT");
var ZQ_1 = require("../../AScript/ZQ");
var FixedValueField_1 = require("../../../../../../../meta/FixedValueField");
var SdcSoftDevice_1 = require("../../../../../../../devices/SdcSoftDevice");
var CountShowField_1 = require("../../../../../../../meta/CountShowField");
//燃煤蒸汽
var Map_CTL_RT_X1_BKSR_RMZQ_9 = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_X1_BKSR_RMZQ_9, _super);
    function Map_CTL_RT_X1_BKSR_RMZQ_9() {
        var _this = _super.call(this) || this;
        //this.addPoint(new CountField(CTL_RT.KEY_POINT_RAN_SHAO_QI, '燃烧器'))
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_LENG_NING_BENG, '循环泵'));
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_GU_FENG_FAN, "鼓风机"));
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_YIN_FENG_FAN, "引风机"));
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG, "给水泵"));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_POWER, "燃料类型", 2, Map_CTL_RT_X1_BKSR_RMZQ_9.coms_power));
        _this.addPoint(new CountShowField_1.CountShowField(Map_CTL_RT_X1_BKSR_RMZQ_9.KEY_BASE, 'ba_yalizhuangtai', '压力状态', '', false, Map_CTL_RT_X1_BKSR_RMZQ_9.DJD_YaLiStatus));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_LENG_NING_BENG_1, 9, 2, '给水泵', 2, Map_CTL_RT_X1_BKSR_RMZQ_9.coms_open_close));
        _this.addPoint(new meta_1.DeviceField('de_xunhuanbeng_zidong/shoudong_', 49, 2, '给水泵 手/自', 3, Map_CTL_RT_X1_BKSR_RMZQ_9.coms_auto));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_YIN_FENG_FAN_1, 9, 2, "引风机", 0, Map_CTL_RT_X1_BKSR_RMZQ_9.coms_open_close));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_GU_FENG_FAN_1, 9, 2, "鼓风机", 1, Map_CTL_RT_X1_BKSR_RMZQ_9.coms_open_close));
        _this.addPoint(new meta_1.MockField("mo_paiyanwendu", 13, 2, "排烟温度", "℃"));
        _this.addPoint(new meta_1.ExceptionField("ex_paiyanwenduchuanganqiguzhang", 45, 2, "排烟温度传感器故障", 1));
        _this.addPoint(new meta_1.ExceptionField("ex_paiyanwendugao", 45, 2, "排烟温度高", 2));
        _this.addPoint(new meta_1.ExceptionField("ex_gaoshuiweibaojing", 45, 2, "高水位报警", 3));
        _this.addPoint(new meta_1.ExceptionField("ex_shuiweichuanganqiguzhang", 45, 2, "水位传感器故障", 4));
        _this.addPoint(new meta_1.ExceptionField("ex_chaoyabaojing", 45, 2, "超压报警", 5));
        _this.addPoint(new meta_1.OpenCloseField("oc_dianjiedianyalibiaodizhen", 5, 2, "电接点压力低针", 4, Map_CTL_RT_X1_BKSR_RMZQ_9.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_dianjiedianyalibiaogaozhen", 5, 2, "电接点压力高针", 5, Map_CTL_RT_X1_BKSR_RMZQ_9.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_chaoyabaojing", 5, 2, "超压报警", 6, Map_CTL_RT_X1_BKSR_RMZQ_9.coms_open_close));
        _this.addPoint(new meta_1.SettingField("se_paiyanchaowen", 57, 2, "排烟超温", "℃"));
        _this.addPoint(new meta_1.SettingField("se_gufengyanshi", 59, 2, "鼓风延时", "s"));
        _this.addPoint(new meta_1.SettingField("se_yinfengyanshi", 61, 2, "引风延时", 's'));
        return _this;
        //this.addPoint(new OpenCloseField("oc_ranshaoqiguzhang", 5, 2, "燃烧器故障",7,null))
    }
    return Map_CTL_RT_X1_BKSR_RMZQ_9;
}(ZQ_1.Map_CTL_RT_X1_ZhengQi));
exports.Map_CTL_RT_X1_BKSR_RMZQ_9 = Map_CTL_RT_X1_BKSR_RMZQ_9;
