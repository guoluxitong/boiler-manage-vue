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
var meta_1 = require("../../../../../../../meta/RT/meta");
var RYZQ_1 = require("../../AScript/RYZQ");
var ZH_CN_1 = require("../../../../../ZH_CN");
module.exports = /** @class */ (function (_super) {
    __extends(CTL_RT_T2_RYZQ_YLKZQ_CK, _super);
    function CTL_RT_T2_RYZQ_YLKZQ_CK() {
        var _this = _super.call(this) || this;
        // this.warningMsg='';
        _this.addPoint(new meta_1.OpenCloseField("oc_ranshaoqifuhetiaojie", 9, 2, "燃烧器负荷增大调节", 1, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.ExceptionField("ex_ranqiyaligaobaojing", 45, 2, "燃气压力高报警", 15));
        _this.addPoint(new meta_1.ExceptionField("ex_ranqixieloubaojing", 47, 2, "燃气泄漏报警", 0));
        _this.addPoint(new meta_1.ExceptionField("ex_ranshaoqiguzhang", 47, 2, "燃烧器故障", 1));
        _this.addPoint(new meta_1.ExceptionField("ex_jixiandishuiweibaojing2", 47, 2, "极限低水位报警2", 4));
        _this.addPoint(new meta_1.SettingField("se_paiyanchaowen", 107, 2, "排烟超温", "℃"));
        _this.addPoint(new meta_1.SettingField("se_chaoyabaojing", 109, 2, "超压报警", "Mpa", 100));
        _this.addPoint(new meta_1.SettingField("se_tingluyali", 111, 2, "停炉压力", "Mpa", 100));
        _this.addPoint(new meta_1.SettingField("se_qiluyali", 115, 2, "启炉压力", "Mpa", 100));
        _this.addPoint(new meta_1.SettingField("se_zuanhuoyali", 113, 2, "转火压力", "Mpa", 100));
        _this.addPoint(new meta_1.SettingField("se_shuchushangxian", 117, 2, "输出上限", "%"));
        _this.addPoint(new meta_1.SettingField("se_shuchuxiaxian", 119, 2, "输出下限", "%"));
        _this.addPoint(new meta_1.SettingField("se_ranshaozhouqi", 121, 2, "燃烧  周期"));
        _this.addPoint(new meta_1.SettingField("se_ranshaoP", 123, 2, "燃烧  P", ""));
        _this.addPoint(new meta_1.SettingField("se_ranshaoI", 125, 2, "燃烧  I"));
        _this.addPoint(new meta_1.SettingField("se_ranshaoD", 127, 2, "燃烧  D"));
        _this.addPoint(new meta_1.SettingField("se_xingcheng", 129, 2, "行程"));
        _this.addPoint(new meta_1.SettingField("se_gaobaojing", 131, 2, "高报警", "%"));
        _this.addPoint(new meta_1.SettingField("se_gaoshuiwei", 133, 2, "高水位", "%"));
        _this.addPoint(new meta_1.SettingField("se_dishuiwei", 135, 2, "低水位", "%"));
        _this.addPoint(new meta_1.SettingField("se_mubiaoshuiwei", 137, 2, "目标水位", "%"));
        _this.addPoint(new meta_1.SettingField("se_queshuishuiwei", 139, 2, "缺水水位", "%"));
        _this.addPoint(new meta_1.SettingField("se_shuiweizhouqi", 141, 2, "水位  周期"));
        _this.addPoint(new meta_1.SettingField("se_shuiweip", 143, 2, "水位  p"));
        _this.addPoint(new meta_1.SettingField("se_shuiweiI", 145, 2, "水位  I"));
        _this.addPoint(new meta_1.SettingField("se_shuiweiD", 147, 2, "水位  D"));
        _this.addPoint(new meta_1.SettingField("se_chongxiyanshi", 157, 2, "冲洗延时", "S"));
        _this.addPoint(new meta_1.SettingField("se_zhuanhuohuicha", 159, 2, "转火回差", "Mpa", 100));
        return _this;
    }
    return CTL_RT_T2_RYZQ_YLKZQ_CK;
}(RYZQ_1.CTL_RT_T2_RYZQ_Ts));
