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
var FixedValueField_1 = require("../../../../../../../meta/FixedValueField");
var SdcSoftDevice_1 = require("../../../../../../../devices/SdcSoftDevice");
var RS_3J_DJD_1 = require("../../AScript/RS_3J_DJD");
//点热水
var Map_CTL_RT_X1_HNRT_DRS_4 = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_X1_HNRT_DRS_4, _super);
    function Map_CTL_RT_X1_HNRT_DRS_4() {
        var _this = _super.call(this) || this;
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_RAN_SHAO_QI, "加热组"));
        _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_LENG_NING_BENG, "热水泵"));
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_POWER, "燃料类型", 1, Map_CTL_RT_X1_HNRT_DRS_4.coms_power));
        _this.addPoint(new meta_1.DeviceField("oc_jiarezu1kongzhi", 9, 2, "加热组1", 0, Map_CTL_RT_X1_HNRT_DRS_4.coms_open_close));
        _this.addPoint(new meta_1.DeviceField("oc_jiarezu2kongzhi", 9, 2, "加热组2", 1, Map_CTL_RT_X1_HNRT_DRS_4.coms_open_close));
        _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_LENG_NING_BENG_1, 9, 2, "热水泵", 2, Map_CTL_RT_X1_HNRT_DRS_4.coms_open_close));
        _this.addPoint(new meta_1.DeviceField("de_xunhuanbeng_zidong/shoudong_", 49, 2, "热水泵 手/自", 3, Map_CTL_RT_X1_HNRT_DRS_4.coms_auto));
        return _this;
    }
    return Map_CTL_RT_X1_HNRT_DRS_4;
}(RS_3J_DJD_1.Map_CTL_RT_X1_3JDJD));
exports.Map_CTL_RT_X1_HNRT_DRS_4 = Map_CTL_RT_X1_HNRT_DRS_4;
