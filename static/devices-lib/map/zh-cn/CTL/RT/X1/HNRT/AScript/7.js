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
var CountShowField_1 = require("../../../../../../../meta/CountShowField");
//电蒸汽电接点压力表
var Map_CTL_RT_X1_HNRT_DZQ_7 = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_X1_HNRT_DZQ_7, _super);
    function Map_CTL_RT_X1_HNRT_DZQ_7() {
        var _this = _super.call(this) || this;
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_RAN_SHAO_QI, '加热组'));
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG, '给水泵'));
        _this.addPoint(new CountShowField_1.CountShowField(Map_CTL_RT_X1_HNRT_DZQ_7.KEY_BASE, 'ba_yalizhuangtai', '压力状态', '', false, Map_CTL_RT_X1_HNRT_DZQ_7.DJD_YaLiStatus));
        _this.addPoint(new meta_1.DeviceField('oc_jiarezu1kongzhi', 9, 2, '加热组1', 0, Map_CTL_RT_X1_HNRT_DZQ_7.coms_open_close));
        _this.addPoint(new meta_1.DeviceField('oc_jiarezu2kongzhi', 9, 2, '加热组2', 1, Map_CTL_RT_X1_HNRT_DZQ_7.coms_open_close));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG_1, 9, 2, '给水泵', 2, Map_CTL_RT_X1_HNRT_DZQ_7.coms_open_close));
        _this.addPoint(new meta_1.DeviceField('de_bushuibeng_shoudong/zidong_', 49, 2, '给水泵 手/自', 1, Map_CTL_RT_X1_HNRT_DZQ_7.coms_auto));
        _this.addPoint(new meta_1.ExceptionField('ex_chaoyabaojing', 45, 2, '超压报警', 3));
        _this.addPoint(new meta_1.OpenCloseField('oc_dianjiedianyalibiaodizhen', 5, 2, '电接点压力低针', 4, Map_CTL_RT_X1_HNRT_DZQ_7.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField('oc_dianjiedianyalibiaogaozhen', 5, 2, '电接点压力高针', 5, Map_CTL_RT_X1_HNRT_DZQ_7.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField('oc_chaoyabaojing', 5, 2, '超压报警', 6, Map_CTL_RT_X1_HNRT_DZQ_7.coms_open_close));
        return _this;
    }
    return Map_CTL_RT_X1_HNRT_DZQ_7;
}(ZQ_1.Map_CTL_RT_X1_ZhengQi));
exports.Map_CTL_RT_X1_HNRT_DZQ_7 = Map_CTL_RT_X1_HNRT_DZQ_7;
