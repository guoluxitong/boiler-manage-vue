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
var FixedValueField_1 = require("../../../../../../meta/FixedValueField");
var SdcSoftDevice_1 = require("../../../../../../devices/SdcSoftDevice");
var X1_1 = require("./X1");
var Map_CTL_RT_X1_ReShui = /** @class */ (function (_super) {
    __extends(Map_CTL_RT_X1_ReShui, _super);
    function Map_CTL_RT_X1_ReShui() {
        var _this = _super.call(this) || this;
        _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_MEDIA, "介质类型", 0, Map_CTL_RT_X1_ReShui.coms_media));
        _this.addPoint(new meta_1.ExceptionField('ex_jixiandishuiweibaojing', 45, 2, '极限低水位报警', 0));
        _this.addPoint(new meta_1.ExceptionField('ex_chushuiwenduchuanganqiguzhang', 45, 2, '出水温度传感器故障', 1));
        _this.addPoint(new meta_1.ExceptionField('ex_chushuiwendugaobaojing', 45, 2, '出水温度高报警', 2));
        _this.addPoint(new meta_1.MockField("mo_chushuiwendu", 13, 2, "出水温度", "℃"));
        _this.addPoint(new meta_1.SettingField("se_baojingwendu", 57, 2, "报警温度", "℃"));
        _this.addPoint(new meta_1.SettingField("se_shangxianwendu", 59, 2, "上限温度", "℃"));
        _this.addPoint(new meta_1.SettingField("se_xiaxianwendu", 61, 2, "下限温度", "℃"));
        _this.addPoint(new meta_1.SettingField("se_kaibengwendu", 63, 2, "开泵温度", "℃"));
        _this.addPoint(new meta_1.SettingField("se_guanbengwendu", 65, 2, "关泵温度", "℃"));
        // this.addPoint(new SettingField("se_NC1", 67, 2, "NC"))
        // this.addPoint(new SettingField("se_NC2", 69, 2, "NC"))
        // this.addPoint(new SettingField("se_NC3", 71, 2, "NC"))
        // this.addPoint(new SettingField("se_NC4", 73, 2, "NC"))
        // this.addPoint(new SettingField("se_NC5", 75, 2, "NC"))
        _this.addPoint(new meta_1.SettingField("se_qidongshiduans1", 77, 2, "启动时段1", "时"));
        _this.addPoint(new meta_1.SettingField("se_qidongshiduan1", 79, 2, "启动时段1", "分"));
        _this.addPoint(new meta_1.SettingField("se_tingzhishiduans1", 81, 2, "停止时段1", "时"));
        _this.addPoint(new meta_1.SettingField("se_tingzhishiduan1", 83, 2, "停止时段1", "分"));
        _this.addPoint(new meta_1.SettingField("se_qidongshiduans2", 85, 2, "启动时段2", "时"));
        _this.addPoint(new meta_1.SettingField("se_qidongshiduan2", 87, 2, "启动时段2", "分"));
        _this.addPoint(new meta_1.SettingField("se_tingzhishiduans2", 89, 2, "停止时段2", "时"));
        _this.addPoint(new meta_1.SettingField("se_tingzhishiduan2", 91, 2, "停止时段2", "分"));
        _this.addPoint(new meta_1.SettingField("se_qidongshiduans3", 93, 2, "启动时段3", "时"));
        _this.addPoint(new meta_1.SettingField("se_qidongshiduan3", 95, 2, "启动时段3", "分"));
        _this.addPoint(new meta_1.SettingField("se_tingzhishiduans3", 97, 2, "停止时段3", "时"));
        _this.addPoint(new meta_1.SettingField("se_tingzhishiduan3", 99, 2, "停止时段3", "分"));
        _this.addPoint(new meta_1.SettingField("se_qidongshiduans4", 101, 2, "启动时段4", "时"));
        _this.addPoint(new meta_1.SettingField("se_qidongshiduan4", 103, 2, "启动时段4", "分"));
        _this.addPoint(new meta_1.SettingField("se_tingzhishiduans4", 105, 2, "停止时段4", "时"));
        _this.addPoint(new meta_1.SettingField("se_tingzhishiduan4", 107, 2, "停止时段4", "分"));
        return _this;
    }
    return Map_CTL_RT_X1_ReShui;
}(X1_1.Map_CTL_RT_X1_Base));
exports.Map_CTL_RT_X1_ReShui = Map_CTL_RT_X1_ReShui;
