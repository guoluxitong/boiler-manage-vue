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
var meta_1 = require("../../../../../../meta/RT/meta");
var RS_1 = require("./RS");
var CountShowField_1 = require("../../../../../../meta/CountShowField");
//3电极或电接点
var Map_CTL_RT_X1_3JDJD = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_X1_3JDJD, _super);
    function Map_CTL_RT_X1_3JDJD() {
        var _this = _super.call(this) || this;
        _this.addPoint(new CountShowField_1.CountShowField(Map_CTL_RT_X1_3JDJD.KEY_BASE, 'ba_yalizhuangtai', '压力状态', '', false, Map_CTL_RT_X1_3JDJD.DJD_YaLiStatus));
        _this.addPoint(new meta_1.OpenCloseField('oc_jixiandishuiweidianji', 5, 2, '极限低水位电极', 0, Map_CTL_RT_X1_3JDJD.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField('oc_didianji/dianjiedianyalibiaodizhen', 5, 2, '低位电极/电接点压力表低针', 1, Map_CTL_RT_X1_3JDJD.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField('oc_gaodianji/dianjiedianyalibiaogaozhen', 5, 2, '高位电极/电接点压力表高针', 2, Map_CTL_RT_X1_3JDJD.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField('oc_bushuibengkongzhixinhao', 5, 2, '补水泵控制信号', 3, Map_CTL_RT_X1_3JDJD.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField('oc_lubiwendukaiguan', 5, 2, '炉壁温度开关', 4, Map_CTL_RT_X1_3JDJD.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField('oc_waibuliansuobaohu', 5, 2, '外部联锁保护', 5, Map_CTL_RT_X1_3JDJD.coms_open_close));
        _this.addPoint(new meta_1.OpenCloseField('oc_chaoyabaojing', 5, 2, '超压报警', 6, Map_CTL_RT_X1_3JDJD.coms_open_close));
        _this.addPoint(new meta_1.ExceptionField('ex_shuiweichuanganqiguzhang', 45, 2, '水位传感器故障', 3));
        _this.addPoint(new meta_1.ExceptionField('ex_chaoyabaojing', 45, 2, '超压报警', 4));
        _this.addPoint(new meta_1.ExceptionField('ex_lubichaowenbaojing', 45, 2, '炉壁超温报警', 5));
        return _this;
    }
    Map_CTL_RT_X1_3JDJD.DJD_YaLiStatus = {
        0: '中压',
        1: '高压',
        2: '低压',
        3: '错误'
    };
    return Map_CTL_RT_X1_3JDJD;
}(RS_1.Map_CTL_RT_X1_ReShui));
exports.Map_CTL_RT_X1_3JDJD = Map_CTL_RT_X1_3JDJD;
