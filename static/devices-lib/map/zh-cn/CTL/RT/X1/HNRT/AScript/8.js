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
var RS_1 = require("../../AScript/RS");
//燃油开水3电极
var Map_CTL_RT_X1_HNRT_RYRS_8 = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_X1_HNRT_RYRS_8, _super);
    function Map_CTL_RT_X1_HNRT_RYRS_8() {
        var _this = _super.call(this) || this;
        //this.addPoint(new CountField(CTL_RT.KEY_POINT_RAN_SHAO_QI, '燃烧器'))
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_LENG_NING_BENG, '出水泵'));
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG, '补水泵'));
        // this.addPoint(new CountShowField(Map_CTL_RT_X1_HNRT_RYRS_8.KEY_BASE, 'ba_yalizhuangtai', '压力状态', ''))
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, '燃烧器', 0, Map_CTL_RT_X1_HNRT_RYRS_8.coms_open_close));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG_1, 9, 2, '补水泵', 1, Map_CTL_RT_X1_HNRT_RYRS_8.coms_open_close));
        _this.addPoint(new meta_1.DeviceField('de_bushuibeng_shoudong/zidong_', 49, 2, '补水泵 手/自', 1, Map_CTL_RT_X1_HNRT_RYRS_8.coms_auto));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_LENG_NING_BENG_1, 9, 2, '出水泵', 2, Map_CTL_RT_X1_HNRT_RYRS_8.coms_open_close));
        _this.addPoint(new meta_1.DeviceField('de_xunhuanbeng_zidong/shoudong_', 49, 2, '出水泵 手/自', 3, Map_CTL_RT_X1_HNRT_RYRS_8.coms_auto));
        _this.addPoint(new meta_1.ExceptionField('ex_shuiweichuanganqiguzhang', 45, 2, '水位传感器故障', 1));
        _this.addPoint(new meta_1.ExceptionField('ex_chushuiwenduchuanganqiguzhang', 45, 2, '出水温度传感器故障', 2));
        _this.addPoint(new meta_1.ExceptionField('ex_chushuiwendugaobaojing', 45, 2, '出水温度高报警', 3));
        _this.addPoint(new meta_1.ExceptionField('ex_lubichaowenbaojing', 45, 2, '炉壁超温报警', 4));
        _this.addPoint(new meta_1.ExceptionField('ex_ranshaoqiguzhangbaojing', 45, 2, '燃烧器故障报警', 5));
        _this.addPoint(new meta_1.OpenCloseField('oc_jixiandishuiweidianji', 5, 2, '极限低水位电极', 0, Map_CTL_RT_X1_HNRT_RYRS_8.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField('oc_didianji', 5, 2, '低位电极', 1, Map_CTL_RT_X1_HNRT_RYRS_8.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField('oc_gaodianji', 5, 2, '高位电极', 2, Map_CTL_RT_X1_HNRT_RYRS_8.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField('oc_lubiwendukaiguan', 5, 2, '炉壁温度开关', 4, Map_CTL_RT_X1_HNRT_RYRS_8.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField('oc_shuixiangdiweidianji', 5, 2, '水箱低位电极', 5, Map_CTL_RT_X1_HNRT_RYRS_8.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField('oc_shuixianggaoweidianji', 5, 2, '水箱高位电极', 6, Map_CTL_RT_X1_HNRT_RYRS_8.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField('oc_ranshaoqiguzhang', 5, 2, '燃烧器故障', 7, Map_CTL_RT_X1_HNRT_RYRS_8.coms_open_close));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG_1, 9, 2, '补水泵控制', 1, Map_CTL_RT_X1_HNRT_RYRS_8.coms_open_close));
        return _this;
    }
    return Map_CTL_RT_X1_HNRT_RYRS_8;
}(RS_1.Map_CTL_RT_X1_ReShui));
exports.Map_CTL_RT_X1_HNRT_RYRS_8 = Map_CTL_RT_X1_HNRT_RYRS_8;
