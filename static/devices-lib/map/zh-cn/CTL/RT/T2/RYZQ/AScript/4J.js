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
var CountShowField_1 = require("../../../../../../../meta/CountShowField");
var _4J_1 = require("../../../../../../../devices/CTL/RT/T2/RYZQ/AScript/4J");
var Map_CTL_RT_T2_RYZQ_4J = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_T2_RYZQ_4J, _super);
    //4电极
    function Map_CTL_RT_T2_RYZQ_4J() {
        var _this = _super.call(this) || this;
        _this.addPoint(new CountShowField_1.CountShowField(Map_CTL_RT_T2_RYZQ_4J.KEY_BASE, _4J_1.CTL_RT_T2_RYZQ_4J.KEY_POINT_SHUI_WEI_STATUS, "水位", '', false, Map_CTL_RT_T2_RYZQ_4J.ShuiWeiStatus));
        _this.addPoint(new meta_1.OpenCloseField("oc_queshuidianji", 5, 2, "缺水电极", 0, Map_CTL_RT_T2_RYZQ_4J.coms_open_close));
        //this.addPoint(new OpenCloseField("oc_dishuiweibaojingdianji_6dianjiteyou_", 5, 2, "低水位报警电极（6电极特有）", 1, Map_CTL_RT_T2_RYZQ_4J.coms_open_close))
        _this.addPoint(new meta_1.OpenCloseField("oc_dishuiweidianji", 5, 2, "低水位电极", 2, Map_CTL_RT_T2_RYZQ_4J.coms_open_close));
        //this.addPoint(new OpenCloseField("oc_zhongshuiweidianji_6dianjiteyou_", 5, 2, "中水位电极（6 电极特有）", 3, Map_CTL_RT_T2_RYZQ_4J.coms_open_close))
        _this.addPoint(new meta_1.OpenCloseField("oc_gaoshuiweidianji", 5, 2, "高水位电极", 4, Map_CTL_RT_T2_RYZQ_4J.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_gaoshuiweibaojingdianji", 5, 2, "高水位报警电极", 5, Map_CTL_RT_T2_RYZQ_4J.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_queshuidianji2", 5, 2, "缺水电极2", 7, Map_CTL_RT_T2_RYZQ_4J.coms_open_close));
        _this.addPoint(new meta_1.ExceptionField("ex_chaoyabaojing", 45, 2, "超压报警", 2));
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
        _this.addPoint(new meta_1.SettingField("se_ranshaozhouqi", 121, 2, "燃烧周期"));
        _this.addPoint(new meta_1.SettingField("se_ranshaoP", 123, 2, "燃烧P"));
        _this.addPoint(new meta_1.SettingField("se_ranshaoI", 125, 2, "燃烧I"));
        _this.addPoint(new meta_1.SettingField("se_ranshaoD", 127, 2, "燃烧D"));
        _this.addPoint(new meta_1.SettingField("se_xingcheng", 129, 2, "行程"));
        _this.addPoint(new meta_1.SettingField("se_gaobaojing", 131, 2, "高报警", "%"));
        _this.addPoint(new meta_1.SettingField("se_gaoshuiwei", 133, 2, "高水位", "%"));
        _this.addPoint(new meta_1.SettingField("se_dishuiwei", 135, 2, "低水位", "%"));
        _this.addPoint(new meta_1.SettingField("se_mubiaoshuiwei", 137, 2, "目标水位", "%"));
        _this.addPoint(new meta_1.SettingField("se_queshuishuiwei", 139, 2, "缺水水位", "%"));
        _this.addPoint(new meta_1.SettingField("se_shuiweizhouqi", 141, 2, "水位周期"));
        _this.addPoint(new meta_1.SettingField("se_shuiweip", 143, 2, "水位P"));
        _this.addPoint(new meta_1.SettingField("se_shuiweiI", 145, 2, "水位I"));
        _this.addPoint(new meta_1.SettingField("se_shuiweiD", 147, 2, "水位D"));
        _this.addPoint(new meta_1.SettingField("se_chongxiyanshi", 157, 2, "冲洗延时", "S"));
        _this.addPoint(new meta_1.SettingField("se_zhuanhuohuicha", 159, 2, "转火回差", "Mpa", 100));
        return _this;
    }
    Map_CTL_RT_T2_RYZQ_4J.KEY_POINT_SHUI_WEI_STATUS = 'ba_shuiwei_status';
    Map_CTL_RT_T2_RYZQ_4J.ShuiWeiStatus = {
        0: '缺水',
        1: '低位',
        2: '中位',
        3: '高位',
        4: '超高'
    };
    return Map_CTL_RT_T2_RYZQ_4J;
}(RYZQ_Base_1.Map_CTL_RT_T2_RYZQ_Ts));
exports.Map_CTL_RT_T2_RYZQ_4J = Map_CTL_RT_T2_RYZQ_4J;
