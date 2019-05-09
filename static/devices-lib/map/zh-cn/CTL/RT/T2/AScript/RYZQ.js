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
var T2_1 = require("../../AScript/T2");
var meta_1 = require("../../../../../../meta/RT/meta");
var CountShowField_1 = require("../../../../../../meta/CountShowField");
var FixedValueField_1 = require("../../../../../../meta/FixedValueField");
var CountField_1 = require("../../../../../../meta/CountField");
var RT_1 = require("../../../../../../devices/CTL/RT/RT");
var SdcSoftDevice_1 = require("../../../../../../devices/SdcSoftDevice");
var ZH_CN_1 = require("../../../../ZH_CN");
var CTL_RT_T2_RYZQ_Ts = /** @class */ (function (_super) {
    __extends(CTL_RT_T2_RYZQ_Ts, _super);
    function CTL_RT_T2_RYZQ_Ts() {
        var _this = _super.call(this) || this;
        // this.warningMsg='长按修改类型';
        // this.subTypes.clear();
        // this.subTypes.addItem('压力变送器18','CTL_RT_T2_RYZQ_YLBSQ_18');
        // this.subTypes.addItem('压力变送器19','CTL_RT_T2_RYZQ_YLBSQ_19');
        // this.subTypes.addItem('压力变送器出口','CTL_RT_T2_RYZQ_YLBSQ_CK');
        // this.subTypes.addItem('压力控制器18','CTL_RT_T2_RYZQ_YLBSQ_18');
        // this.subTypes.addItem('压力控制器19','CTL_RT_T2_RYZQ_YLBSQ_19');
        // this.subTypes.addItem('压力控制器出口','CTL_RT_T2_RYZQ_YLBSQ_CK');
        // this.subTypes.addItem('燃油热水','CTL_RT_T2_RYRS');
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_RAN_SHAO_QI, "燃烧器"));
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG, "给水泵"));
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_LENG_NING_BENG, "节能循环泵"));
        _this.addPoint(new meta_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 3, 2, "系统状态", '', CTL_RT_T2_RYZQ_Ts.coms_status));
        _this.addPoint(new meta_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_LIFE, 53, 2, "运行时间", "时"));
        _this.addPoint(new CountShowField_1.CountShowField(CTL_RT_T2_RYZQ_Ts.KEY_BASE, SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_DAYS, "运行天数", "天"));
        _this.addPoint(new CountShowField_1.CountShowField(CTL_RT_T2_RYZQ_Ts.KEY_BASE, SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_HOURS, "运行小时数", "时"));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_POWER, "燃料类型", 0, ZH_CN_1.ZH_CN.coms_power));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_MEDIA, "介质类型", 1, ZH_CN_1.ZH_CN.coms_media));
        _this.addPoint(new meta_1.OpenCloseField("oc_queshuidianji", 5, 2, "缺水电极", 0, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_dishuiweibaojingdianji_6dianjiteyou_", 5, 2, "低水位报警电极（6电极特有）", 1, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_dishuiweidianji", 5, 2, "低水位电极", 2, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_zhongshuiweidianji_6dianjiteyou_", 5, 2, "中水位电极（6 电极特有）", 3, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_gaoshuiweidianji", 5, 2, "高水位电极", 4, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_gaoshuiweibaojingdianji", 5, 2, "高水位报警电极", 5, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_bianpinqiguzhangbaojing", 5, 2, "变频器故障报警", 6, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_chaoyabaojing", 5, 2, "超压报警", 9, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_ranshaoqiguzhang", 5, 2, "燃烧器故障", 10, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_ranqixieloubaojing", 5, 2, "燃气泄漏报警", 11, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_ranqiyalidibaojing", 5, 2, "燃气压力低报警", 12, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_ranqiyaligaobaojing", 5, 2, "燃气压力高报警", 13, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField(RT_1.CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, "燃烧器启停控制", 0, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG_1, 9, 2, "给水泵控制（主）", 3, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG_2, 9, 2, "给水泵控制（备）", 4, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_LENG_NING_BENG_1, 9, 2, "节能循环泵控制", 5, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField("oc_baojingzhuangtaishuchu", 9, 2, "报警状态输出", 6, ZH_CN_1.ZH_CN.coms_open_close));
        _this.addPoint(new meta_1.MockField("mo_lengningqiyanwen", 13, 2, "冷凝器烟温", "℃"));
        _this.addPoint(new meta_1.MockField("mo_jishuiwendu", 15, 2, "给水温度", "℃"));
        _this.addPoint(new meta_1.MockField("mo_shuiweixinhao", 19, 2, "水位信号", "%"));
        _this.addPoint(new meta_1.MockField("mo_paiyanwendu", 21, 2, "排烟温度", "℃"));
        _this.addPoint(new meta_1.MockField("mo_jienengqiyanwen", 23, 2, "节能器烟温", "℃"));
        _this.addPoint(new meta_1.DeviceField("de_jishuibeng_zhu/bei_", 49, 2, "给水泵", 0, CTL_RT_T2_RYZQ_Ts.coms_master));
        _this.addPoint(new meta_1.DeviceField("de_jishuibeng_shoudong/zidong_", 49, 2, "给水泵", 1, CTL_RT_T2_RYZQ_Ts.coms_auto));
        _this.addPoint(new meta_1.DeviceField("de_lengningxunhuanbeng_zidong/shoudong_", 49, 2, "节能循环泵", 3, CTL_RT_T2_RYZQ_Ts.coms_auto));
        //this.addPoint(new ExceptionField("ex_chaoyabaojing_biansongqi_", 45, 2, "超压报警（变送器）", 2));
        _this.addPoint(new meta_1.ExceptionField("ex_shuiweichuanganqiduanlu1", 45, 2, "水位传感器断路", 3));
        _this.addPoint(new meta_1.ExceptionField("ex_shuiweichuanganqiduanlu", 45, 2, "水位传感器短路", 4));
        _this.addPoint(new meta_1.ExceptionField("ex_jixiandishuiweibaojing_dianliu_", 45, 2, "极限低水位报警（电流）", 5));
        _this.addPoint(new meta_1.ExceptionField("ex_gaoshuiweibaojing_dianliu_", 45, 2, "高水位报警（电流）", 6));
        _this.addPoint(new meta_1.ExceptionField("ex_paiyanwendugaobaojing", 45, 2, "排烟温度高报警", 7));
        _this.addPoint(new meta_1.ExceptionField("ex_jixiandishuiweibaojing", 45, 2, "极限低水位报警", 8));
        _this.addPoint(new meta_1.ExceptionField("ex_shuiweidianjiluojicuo", 45, 2, "水位电极逻辑错", 9));
        _this.addPoint(new meta_1.ExceptionField("ex_dishuiweibaojing", 45, 2, "低水位报警", 10));
        _this.addPoint(new meta_1.ExceptionField("ex_gaoshuiweibaojing", 45, 2, "高水位报警", 11));
        _this.addPoint(new meta_1.ExceptionField("ex_bianpinqiguzhang", 45, 2, "变频器故障", 12));
        //this.addPoint(new ExceptionField("ex_chaoyabaojing_kongzhiqi_", 45, 2, "超压报警（控制器）", 13));
        _this.addPoint(new meta_1.ExceptionField("ex_ranqiyalidibaojing", 45, 2, "燃气压力低报警", 14));
        return _this;
    }
    return CTL_RT_T2_RYZQ_Ts;
}(T2_1.CTL_RT_T2_Ts));
exports.CTL_RT_T2_RYZQ_Ts = CTL_RT_T2_RYZQ_Ts;
