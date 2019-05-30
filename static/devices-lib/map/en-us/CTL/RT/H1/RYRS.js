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
var _a;
"use strict";
var CountField_1 = require("../../../../../meta/CountField");
var meta_1 = require("../../../../../meta/RT/meta");
var SdcSoftDevice_1 = require("../../../../../devices/SdcSoftDevice");
var FixedValueField_1 = require("../../../../../meta/FixedValueField");
var RT_1 = require("../../../../../devices/CTL/RT/RT");
var CountShowField_1 = require("../../../../../meta/CountShowField");
var H1_1 = require("../AScript/H1");
module.exports = (_a = /** @class */ (function (_super) {
        __extends(Map_CTL_RT_H1_RYRS, _super);
        function Map_CTL_RT_H1_RYRS() {
            var _this = _super.call(this) || this;
            //this.warningMsg=''
            /*计算属性（不显示）*/
            _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG, "补水泵"));
            _this.addPoint(new CountField_1.CountField(RT_1.CTL_RT.KEY_POINT_LENG_NING_BENG, "循环泵"));
            //this.addPoint(new CountField(CTL_RT_RY.KEY_POINT_RAN_SHAO_QI, "燃烧器"))
            _this.addPoint(new meta_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 3, 2, "工作状态", '', Map_CTL_RT_H1_RYRS.coms_status));
            _this.addPoint(new meta_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_LIFE, 53, 2, "累计燃烧时间", "时"));
            _this.addPoint(new CountShowField_1.CountShowField(Map_CTL_RT_H1_RYRS.KEY_BASE, SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_DAYS, "运行天数", "天"));
            _this.addPoint(new CountShowField_1.CountShowField(Map_CTL_RT_H1_RYRS.KEY_BASE, SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_HOURS, "运行小时数", "时"));
            _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_POWER, "燃料类型", 0, Map_CTL_RT_H1_RYRS.coms_power));
            _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_MEDIA, "介质类型", 0, Map_CTL_RT_H1_RYRS.coms_media));
            _this.addPoint(new meta_1.OpenCloseField("oc_queshuidianji", 5, 2, "缺水电极", 0, Map_CTL_RT_H1_RYRS.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField("oc_dishuiweidianji", 5, 2, "低水位电极", 1, Map_CTL_RT_H1_RYRS.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField("oc_gaoshuiweidianji", 5, 2, "高水位电极", 2, Map_CTL_RT_H1_RYRS.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField("oc_gaoshuiweibaojingdianji", 5, 2, "高水位报警电极", 3, Map_CTL_RT_H1_RYRS.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField("oc_dianjiedianyalibiaodizhen", 5, 2, "电接点压力表低针", 4, Map_CTL_RT_H1_RYRS.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField("oc_dianjiedianyalibiaogaozhen", 5, 2, "电接点压力表高针", 5, Map_CTL_RT_H1_RYRS.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField("oc_xunhuanbengliansuoxinhao", 5, 2, "循环泵联锁信号", 8, Map_CTL_RT_H1_RYRS.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField("oc_chaoyabaojingxinhao", 5, 2, "超压报警信号", 9, Map_CTL_RT_H1_RYRS.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField("oc_ranshaoqiguzhangxinhao", 5, 2, "燃烧器故障信号", 10, Map_CTL_RT_H1_RYRS.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField("oc_ranqiyalidibaojingxinhao", 5, 2, "燃气压力低报警信号", 11, Map_CTL_RT_H1_RYRS.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField("oc_ranqixieloubaojingxinhao", 5, 2, "燃气泄漏报警信号", 12, Map_CTL_RT_H1_RYRS.coms_open_close));
            _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, "燃烧器启停控制", 0, Map_CTL_RT_H1_RYRS.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField("oc_ranshaoqibilijianda", 9, 2, "燃烧器比例增加", 1, Map_CTL_RT_H1_RYRS.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField("oc_ranshaoqibilijianxiao", 9, 2, "燃烧器比例减小", 2, Map_CTL_RT_H1_RYRS.coms_open_close));
            _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG_1, 9, 2, "补水泵主控制", 3, Map_CTL_RT_H1_RYRS.coms_open_close));
            _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_Add_SHUI_BENG_2, 9, 2, "补水泵备控制", 4, Map_CTL_RT_H1_RYRS.coms_open_close));
            _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_LENG_NING_BENG_1, 9, 2, "循环泵主控制", 5, Map_CTL_RT_H1_RYRS.coms_open_close));
            _this.addPoint(new meta_1.DeviceField(RT_1.CTL_RT.KEY_POINT_LENG_NING_BENG_2, 9, 2, "循环泵备控制", 6, Map_CTL_RT_H1_RYRS.coms_open_close));
            _this.addPoint(new meta_1.MockField("mo_chushuiwendu", 13, 2, "出水温度", "℃"));
            _this.addPoint(new meta_1.MockField("mo_huishuiwendu", 15, 2, "回水温度", "℃"));
            _this.addPoint(new meta_1.MockField("mo_paiyanwendu", 19, 2, "排烟温度", "℃"));
            _this.addPoint(new meta_1.ExceptionField("ex_jixiandishuiweibaojing", 45, 2, "极限低水位报警", 0));
            _this.addPoint(new meta_1.ExceptionField("ex_chushuiwenduchuanganqiduanlu", 45, 2, "出水温度传感器断路", 1));
            _this.addPoint(new meta_1.ExceptionField("ex_chushuiwenduchuanganqiduanlu", 45, 2, "出水温度传感器短路", 2));
            _this.addPoint(new meta_1.ExceptionField("ex_huishuiwenduchuanganqiduanlu", 45, 2, "回水温度传感器断路", 3));
            _this.addPoint(new meta_1.ExceptionField("ex_chushuiwendugaobaojing", 45, 2, "出水温度高报警", 4));
            _this.addPoint(new meta_1.ExceptionField("ex_paiyanwendugaobaojing", 45, 2, "排烟温度高报警", 5));
            _this.addPoint(new meta_1.ExceptionField("ex_chaoyabaojing", 45, 2, "超压报警", 6));
            _this.addPoint(new meta_1.ExceptionField("ex_ranshaoqiguzhang", 45, 2, "燃烧器故障", 7));
            _this.addPoint(new meta_1.ExceptionField("ex_ranqiyalidibaojing", 45, 2, "燃气压力低报警", 8));
            _this.addPoint(new meta_1.ExceptionField("ex_ranqixieloubaojing", 45, 2, "燃气泄漏报警", 9));
            _this.addPoint(new meta_1.ExceptionField("ex_dianjiedianyalibiaoduanlu", 45, 2, "电接点压力表短路", 11));
            _this.addPoint(new meta_1.ExceptionField("ex_shuiweidianjiluojicuo", 45, 2, "水位电极逻辑错", 12));
            _this.addPoint(new meta_1.ExceptionField("ex_gaoshuiweibaojing", 45, 2, "高水位报警", 13));
            _this.addPoint(new meta_1.ExceptionField("ex_xunhuanbengguzhang", 45, 2, "循环泵故障", 14));
            _this.addPoint(new meta_1.DeviceField("de_bushuibengzhubei", 49, 2, "补水泵", 0, Map_CTL_RT_H1_RYRS.coms_master));
            _this.addPoint(new meta_1.DeviceField("de_bushuibengshoudongzidong", 49, 2, "补水泵", 1, Map_CTL_RT_H1_RYRS.coms_auto));
            _this.addPoint(new meta_1.DeviceField("de_xunhuanbengzhubei", 49, 2, "循环泵", 2, Map_CTL_RT_H1_RYRS.coms_master));
            _this.addPoint(new meta_1.DeviceField("de_xunhuanbengshoudongzidong", 49, 2, "循环泵", 3, Map_CTL_RT_H1_RYRS.coms_auto));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan1qidongshi", 61, 2, "模式一时段1启动时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan1qidongfen", 63, 2, "模式一时段1启动分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan1tingzhishi", 65, 2, "模式一时段1停止时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan1tingzhifen", 67, 2, "模式一时段1停止分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan1tingluwendu", 69, 2, "模式一时段1停炉温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan1shiyongwendu", 71, 2, "模式一时段1使用温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan1mubiaowendu", 73, 2, "模式一时段1目标温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan1guanbengwendu", 75, 2, "模式一时段1关泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan1kaibengwendu", 77, 2, "模式一时段1开泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan1zhuanhuowendu", 79, 2, "模式一时段1转火温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan2qidongshi", 81, 2, "模式一时段2启动时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan2qidongfen", 83, 2, "模式一时段2启动分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan2tingzhishi", 85, 2, "模式一时段2停止时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan2tingzhifen", 87, 2, "模式一时段2停止分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan2tingluwendu", 89, 2, "模式一时段2停炉温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan2shiyongwendu", 91, 2, "模式一时段2使用温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan2mubiaowendu", 93, 2, "模式一时段2目标温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan2guanbengwendu", 95, 2, "模式一时段2关泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan2kaibengwendu", 97, 2, "模式一时段2开泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan2zhuanhuowendu", 99, 2, "模式一时段2转火温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan3qidongshi", 101, 2, "模式一时段3启动时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan3qidongfen", 103, 2, "模式一时段3启动分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan3tingzhishi", 105, 2, "模式一时段3停止时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan3tingzhifen", 107, 2, "模式一时段3停止分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan3tingluwendu", 109, 2, "模式一时段3停炉温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan3shiyongwendu", 111, 2, "模式一时段3使用温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan3mubiaowendu", 113, 2, "模式一时段3目标温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan3guanbengwendu", 115, 2, "模式一时段3关泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan3kaibengwendu", 117, 2, "模式一时段3开泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan3zhuanhuowendu", 119, 2, "模式一时段3转火温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan4qidongshi", 121, 2, "模式一时段4启动时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan4qidongfen", 123, 2, "模式一时段4启动分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan4tingzhishi", 125, 2, "模式一时段4停止时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan4tingzhifen", 127, 2, "模式一时段4停止分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan4tingluwendu", 129, 2, "模式一时段4停炉温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan4shiyongwendu", 131, 2, "模式一时段4使用温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan4mubiaowendu", 133, 2, "模式一时段4目标温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan4guanbengwendu", 135, 2, "模式一时段4关泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan4kaibengwendu", 137, 2, "模式一时段4开泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshiyishiduan4zhuanhuowendu", 139, 2, "模式一时段4转火温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan1qidongshi", 141, 2, "模式二时段1启动时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan1qidongfen", 143, 2, "模式二时段1启动分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan1tingzhishi", 145, 2, "模式二时段1停止时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan1tingzhifen", 147, 2, "模式二时段1停止分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan1tingluwendu", 149, 2, "模式二时段1停炉温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan1shiyongwendu", 151, 2, "模式二时段1使用温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan1mubiaowendu", 153, 2, "模式二时段1目标温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan1guanbengwendu", 155, 2, "模式二时段1关泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan1kaibengwendu", 157, 2, "模式二时段1开泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan1zhuanhuowendu", 159, 2, "模式二时段1转火温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan2qidongshi", 161, 2, "模式二时段2启动时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan2qidongfen", 163, 2, "模式二时段2启动分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan2tingzhishi", 165, 2, "模式二时段2停止时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan2tingzhifen", 167, 2, "模式二时段2停止分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan2tingluwendu", 169, 2, "模式二时段2停炉温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan2shiyongwendu", 171, 2, "模式二时段2使用温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan2mubiaowendu", 173, 2, "模式二时段2目标温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan2guanbengwendu", 175, 2, "模式二时段2关泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan2kaibengwendu", 177, 2, "模式二时段2开泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan2zhuanhuowendu", 179, 2, "模式二时段2转火温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan3qidongshi", 192, 2, "模式二时段3启动时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan3qidongfen", 194, 2, "模式二时段3启动分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan3tingzhishi", 196, 2, "模式二时段3停止时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan3tingzhifen", 198, 2, "模式二时段3停止分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan3tingluwendu", 200, 2, "模式二时段3停炉温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan3shiyongwendu", 202, 2, "模式二时段3使用温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan3mubiaowendu", 204, 2, "模式二时段3目标温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan3guanbengwendu", 206, 2, "模式二时段3关泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan3kaibengwendu", 208, 2, "模式二时段3开泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan3zhuanhuowendu", 210, 2, "模式二时段3转火温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan4qidongshi", 212, 2, "模式二时段4启动时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan4qidongfen", 214, 2, "模式二时段4启动分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan4tingzhishi", 216, 2, "模式二时段4停止时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan4tingzhifen", 218, 2, "模式二时段4停止分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan4tingluwendu", 220, 2, "模式二时段4停炉温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan4shiyongwendu", 222, 2, "模式二时段4使用温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan4mubiaowendu", 224, 2, "模式二时段4目标温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan4guanbengwendu", 226, 2, "模式二时段4关泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan4kaibengwendu", 228, 2, "模式二时段4开泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshieshiduan4zhuanhuowendu", 230, 2, "模式二时段4转火温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan1qidongshi", 232, 2, "模式三时段1启动时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan1qidongfen", 234, 2, "模式三时段1启动分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan1tingzhishi", 236, 2, "模式三时段1停止时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan1tingzhifen", 238, 2, "模式三时段1停止分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan1tingluwendu", 240, 2, "模式三时段1停炉温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan1shiyongwendu", 242, 2, "模式三时段1使用温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan1mubiaowendu", 244, 2, "模式三时段1目标温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan1guanbengwendu", 246, 2, "模式三时段1关泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan1kaibengwendu", 248, 2, "模式三时段1开泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan1zhuanhuowendu", 250, 2, "模式三时段1转火温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan2qidongshi", 252, 2, "模式三时段2启动时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan2qidongfen", 254, 2, "模式三时段2启动分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan2tingzhishi", 256, 2, "模式三时段2停止时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan2tingzhifen", 258, 2, "模式三时段2停止分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan2tingluwendu", 260, 2, "模式三时段2停炉温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan2shiyongwendu", 262, 2, "模式三时段2使用温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan2mubiaowendu", 264, 2, "模式三时段2目标温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan2guanbengwendu", 266, 2, "模式三时段2关泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan2kaibengwendu", 268, 2, "模式三时段2开泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan2zhuanhuowendu", 270, 2, "模式三时段2转火温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan3qidongshi", 272, 2, "模式三时段3启动时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan3qidongfen", 274, 2, "模式三时段3启动分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan3tingzhishi", 276, 2, "模式三时段3停止时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan3tingzhifen", 278, 2, "模式三时段3停止分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan3tingluwendu", 280, 2, "模式三时段3停炉温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan3shiyongwendu", 282, 2, "模式三时段3使用温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan3mubiaowendu", 284, 2, "模式三时段3目标温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan3guanbengwendu", 286, 2, "模式三时段3关泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan3kaibengwendu", 288, 2, "模式三时段3开泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan3zhuanhuowendu", 290, 2, "模式三时段3转火温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan4qidongshi", 292, 2, "模式三时段4启动时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan4qidongfen", 294, 2, "模式三时段4启动分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan4tingzhishi", 296, 2, "模式三时段4停止时", "时"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan4tingzhifen", 298, 2, "模式三时段4停止分", "分"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan4tingluwendu", 300, 2, "模式三时段4停炉温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan4shiyongwendu", 302, 2, "模式三时段4使用温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan4mubiaowendu", 304, 2, "模式三时段4目标温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan4guanbengwendu", 306, 2, "模式三时段4关泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan4kaibengwendu", 308, 2, "模式三时段4开泵温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_moshisanshiduan4zhuanhuowendu", 310, 2, "模式三时段4转火温度", "℃"));
            _this.addPoint(new meta_1.BaseInfoField("se_zhouyigongzuomoshi", 312, 2, "周一工作模式", '', Map_CTL_RT_H1_RYRS.coms_moshi));
            _this.addPoint(new meta_1.BaseInfoField("se_zhouegongzuomoshi", 314, 2, "周二工作模式", '', Map_CTL_RT_H1_RYRS.coms_moshi));
            _this.addPoint(new meta_1.BaseInfoField("se_zhousangongzuomoshi", 316, 2, "周三工作模式", '', Map_CTL_RT_H1_RYRS.coms_moshi));
            _this.addPoint(new meta_1.BaseInfoField("se_zhousigongzuomoshi", 318, 2, "周四工作模式", '', Map_CTL_RT_H1_RYRS.coms_moshi));
            _this.addPoint(new meta_1.BaseInfoField("se_zhouwugongzuomoshi", 320, 2, "周五工作模式", '', Map_CTL_RT_H1_RYRS.coms_moshi));
            _this.addPoint(new meta_1.BaseInfoField("se_zhouliugongzuomoshi", 322, 2, "周六工作模式", '', Map_CTL_RT_H1_RYRS.coms_moshi));
            _this.addPoint(new meta_1.BaseInfoField("se_zhourigongzuomoshi", 324, 2, "周日工作模式", '', Map_CTL_RT_H1_RYRS.coms_moshi));
            _this.addPoint(new meta_1.SettingField("se_chushuichaowenshezhizhi", 326, 2, "出水超温设置值", "℃"));
            _this.addPoint(new meta_1.SettingField("se_paiyanchaowenshezhizhi", 328, 2, "排烟超温设置值", "℃"));
            _this.addPoint(new meta_1.SettingField("se_bushuibengmoshishezhizhi", 330, 2, "补水泵模式设置值"));
            _this.addPoint(new meta_1.SettingField("se_xunhuanbengmoshishezhizhi", 332, 2, "循环泵模式设置值"));
            _this.addPoint(new meta_1.SettingField("se_xunhuanbenghouyanshishezhizhi", 334, 2, "循环泵后延时设置值", "min"));
            _this.addPoint(new meta_1.SettingField("se_ranshaofangshishezhizhi", 336, 2, "燃烧方式设置值"));
            _this.addPoint(new meta_1.SettingField("se_xunhuanbengqianyanshishezhizhi", 338, 2, "循环泵前延时设置值", "S"));
            _this.addPoint(new meta_1.SettingField("se_zhouqi", 340, 2, "周期"));
            _this.addPoint(new meta_1.SettingField("se_P", 342, 2, "P"));
            _this.addPoint(new meta_1.SettingField("se_I", 344, 2, "I"));
            _this.addPoint(new meta_1.SettingField("se_D", 346, 2, "D"));
            _this.addPoint(new meta_1.SettingField("se_xingcheng", 348, 2, "行程"));
            _this.addPoint(new meta_1.SettingField("se_fangdongshangxianwendu", 352, 2, "防冻上限温度", "℃"));
            _this.addPoint(new meta_1.SettingField("se_fangdongxiaxianwendu", 354, 2, "防冻下限温度", "℃"));
            return _this;
        }
        return Map_CTL_RT_H1_RYRS;
    }(H1_1.Map_CTL_RT_H1_Ts)),
    _a.coms_status = {
        0: "待命",
        1: "报警",
        2: "定时",
        3: "启1",
        4: "停1",
        5: "启2",
        6: "停2",
        7: "启3",
        8: "停3",
        9: "启4",
        10: "停4",
        11: "防冻",
    },
    _a.coms_moshi = {
        0: "模式一",
        1: "模式二",
        2: "模式三",
    },
    _a);
