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
var RYZQ_Base_1 = require("../../RYZQ_Base");
var meta_1 = require("../../../../../../../meta/RT/meta");
var EN_US_1 = require("../../../../../EN_US");
var CountShowField_1 = require("../../../../../../../meta/CountShowField");
var _4J_1 = require("../../../../../../../devices/CTL/RT/T2/RYZQ/AScript/4J");
var Map_CTL_RT_T2_RYZQ_4J = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_T2_RYZQ_4J, _super);
    //4电极
    function Map_CTL_RT_T2_RYZQ_4J() {
        var _this = _super.call(this) || this;
        _this.addPoint(new CountShowField_1.CountShowField(Map_CTL_RT_T2_RYZQ_4J.KEY_BASE, _4J_1.CTL_RT_T2_RYZQ_4J.KEY_POINT_SHUI_WEI_STATUS, "Water Leval", ''));
        _this.addPoint(new meta_1.OpenCloseField("oc_queshuidianji", 5, 2, "Water deficient electrode", 0, EN_US_1.Map_EN_US.coms_open_close));
        //this.addPoint(new OpenCloseField("oc_dishuiweibaojingdianji_6dianjiteyou_", 5, 2, "Low Water Level Alarm Electrode (6 Electrodes)", 1, Map_ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_dishuiweidianji", 5, 2, "Low Water Level Electrode", 2, EN_US_1.Map_EN_US.coms_open_close));
        //this.addPoint(new OpenCloseField("oc_zhongshuiweidianji_6dianjiteyou_", 5, 2, "Medium Water Level Electrode (6 Electrode)", 3, Map_ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_gaoshuiweidianji", 5, 2, "High Water Level Electrode", 4, EN_US_1.Map_EN_US.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_gaoshuiweibaojingdianji", 5, 2, "High Water Level Alarm Electrode", 5, EN_US_1.Map_EN_US.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_queshuidianji2", 5, 2, "Water deficiency electrode 2", 7, EN_US_1.Map_EN_US.coms_open_close));
        _this.addPoint(new meta_1.ExceptionField("ex_chaoyabaojing", 45, 2, "Overpressure alarm", 2));
        _this.addPoint(new meta_1.ExceptionField("ex_ranqiyaligaobaojing", 45, 2, "High Gas Pressure Alarm", 15));
        _this.addPoint(new meta_1.ExceptionField("ex_ranqixieloubaojing", 47, 2, "Gas Leakage Alarm", 0));
        _this.addPoint(new meta_1.ExceptionField("ex_ranshaoqiguzhang", 47, 2, "Burner Failure", 1));
        _this.addPoint(new meta_1.ExceptionField("ex_jixiandishuiweibaojing2", 47, 2, "Limit low water level alarm 2", 4));
        _this.addPoint(new meta_1.SettingField("se_paiyanchaowen", 107, 2, "Over temperature of exhaust gas", "℃"));
        _this.addPoint(new meta_1.SettingField("se_chaoyabaojing", 109, 2, "Overpressure alarm", "Mpa", 100));
        _this.addPoint(new meta_1.SettingField("se_tingluyali", 111, 2, "Shutdown pressure", "Mpa", 100));
        _this.addPoint(new meta_1.SettingField("se_qiluyali", 115, 2, "Starting pressure", "Mpa", 100));
        _this.addPoint(new meta_1.SettingField("se_zuanhuoyali", 113, 2, "Fire pressure", "Mpa", 100));
        _this.addPoint(new meta_1.SettingField("se_shuchushangxian", 117, 2, "Upper limit of output", "%"));
        _this.addPoint(new meta_1.SettingField("se_shuchuxiaxian", 119, 2, "Lower limit of output", "%"));
        _this.addPoint(new meta_1.SettingField("se_ranshaozhouqi", 121, 2, "Combustion cycle"));
        _this.addPoint(new meta_1.SettingField("se_ranshaoP", 123, 2, "Burning P"));
        _this.addPoint(new meta_1.SettingField("se_ranshaoI", 125, 2, "Burning I"));
        _this.addPoint(new meta_1.SettingField("se_ranshaoD", 127, 2, "Burning D"));
        _this.addPoint(new meta_1.SettingField("se_xingcheng", 129, 2, "Trip"));
        _this.addPoint(new meta_1.SettingField("se_gaobaojing", 131, 2, "High alarm", "%"));
        _this.addPoint(new meta_1.SettingField("se_gaoshuiwei", 133, 2, "High water level", "%"));
        _this.addPoint(new meta_1.SettingField("se_dishuiwei", 135, 2, "Low water level", "%"));
        _this.addPoint(new meta_1.SettingField("se_mubiaoshuiwei", 137, 2, "Target water level", "%"));
        _this.addPoint(new meta_1.SettingField("se_queshuishuiwei", 139, 2, "Water deficient stage", "%"));
        _this.addPoint(new meta_1.SettingField("se_shuiweizhouqi", 141, 2, "Water level cycle"));
        _this.addPoint(new meta_1.SettingField("se_shuiweip", 143, 2, "Water level P"));
        _this.addPoint(new meta_1.SettingField("se_shuiweiI", 145, 2, "Water level I"));
        _this.addPoint(new meta_1.SettingField("se_shuiweiD", 147, 2, "Water level D"));
        _this.addPoint(new meta_1.SettingField("se_chongxiyanshi", 157, 2, "Flushing delay", "S"));
        _this.addPoint(new meta_1.SettingField("se_zhuanhuohuicha", 159, 2, "Return to fire", "Mpa", 100));
        return _this;
    }
    Map_CTL_RT_T2_RYZQ_4J.KEY_POINT_SHUI_WEI_STATUS = 'ba_shuiwei_status';
    Map_CTL_RT_T2_RYZQ_4J.ShuiWeiStatus = {
        0: 'Water shortage',
        1: 'Low position',
        2: 'Median position',
        3: 'High position',
        4: 'Super high'
    };
    return Map_CTL_RT_T2_RYZQ_4J;
}(RYZQ_Base_1.Map_CTL_RT_T2_RYZQ_Ts));
exports.Map_CTL_RT_T2_RYZQ_4J = Map_CTL_RT_T2_RYZQ_4J;
