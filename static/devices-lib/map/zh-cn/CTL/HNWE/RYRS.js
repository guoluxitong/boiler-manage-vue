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
var ZH_CN_1 = require("../../ZH_CN");
var FixedValueField_1 = require("../../../../meta/FixedValueField");
var meta_1 = require("../../../../meta/HNWE/meta");
var CountShowField_1 = require("../../../../meta/CountShowField");
var SdcSoftDevice_1 = require("../../../../devices/SdcSoftDevice");
module.exports = (_a = /** @class */ (function (_super) {
        __extends(Map_CTL_HNWR_485, _super);
        function Map_CTL_HNWR_485() {
            var _this = _super.call(this) || this;
            _this.addPoint(new CountShowField_1.CountShowField(Map_CTL_HNWR_485.KEY_BASE, SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_DAYS, '运行天数', '天'));
            _this.addPoint(new CountShowField_1.CountShowField(Map_CTL_HNWR_485.KEY_BASE, SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_RUN_HOURS, '运行小时数', '时'));
            _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_POWER, '燃料类型', 0, Map_CTL_HNWR_485.coms_power));
            _this.addPoint(new FixedValueField_1.FixedValueField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_MEDIA, '介质类型', 0, Map_CTL_HNWR_485.coms_media));
            _this.addPoint(new meta_1.BaseInfoField(SdcSoftDevice_1.SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 9, 2, '工作状态', '', Map_CTL_HNWR_485.coms_status));
            _this.addPoint(new meta_1.BaseInfoField('mo_cuowuyuan', 7, 2, '错误源', '', Map_CTL_HNWR_485.coms_error));
            _this.addPoint(new meta_1.OpenCloseField('oc_CHmoshi1', 3, 1, 'CH模式', 0, Map_CTL_HNWR_485.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField('oc_DHWmoshi1', 3, 1, 'DHW模式', 1, Map_CTL_HNWR_485.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField('oc_ceshimoshi1', 3, 1, '测试模式', 2, Map_CTL_HNWR_485.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField('oc_huoyan1', 3, 1, '火焰', 3, Map_CTL_HNWR_485.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField('oc_cuowu', 4, 1, '错误', 0, Map_CTL_HNWR_485.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField('oc_fa1', 4, 1, '阀1', 1, Map_CTL_HNWR_485.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField('oc_fa2', 4, 1, '阀2', 2, Map_CTL_HNWR_485.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField('oc_APS', 4, 1, 'APS', 3, Map_CTL_HNWR_485.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField('oc_fengji', 4, 1, '风机', 4, Map_CTL_HNWR_485.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField('oc_shuibeng', 4, 1, '水泵', 5, Map_CTL_HNWR_485.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField('oc_suoding', 5, 1, '错误标志', 1, Map_CTL_HNWR_485.coms_biaozhi));
            //
            _this.addPoint(new meta_1.ExceptionField('ex_OEMcuowuhao', 6, 1, '报警', Map_CTL_HNWR_485.coms_ExceptionField));
            //
            _this.addPoint(new meta_1.DemandField('mo_jiarexuqiu', 19, 1, '加热需求', '', Map_CTL_HNWR_485.coms_xuqiu));
            _this.addPoint(new meta_1.SettingField('mo_shedingzhi', 22, 2, '设定值'));
            _this.addPoint(new meta_1.MockField('mo_CHgongshuiwendu', 29, 2, 'CH供水温度', '℃', 10));
            _this.addPoint(new meta_1.MockField('mo_CHhuishuiwendu', 31, 2, 'CH回水温度', '℃'));
            _this.addPoint(new meta_1.MockField('de_yanwen', 35, 2, '烟温', '℃'));
            _this.addPoint(new meta_1.DeviceField('de_yanwenchuanganqi', 35, 2, '烟温传感器', Map_CTL_HNWR_485.coms_open_close));
            _this.addPoint(new meta_1.MockField('mo_OTCwendu', 37, 2, 'OTC温度', '℃'));
            _this.addPoint(new meta_1.MockField('mo_huoyandianliu', 41, 2, '火焰电流', 'uA'));
            _this.addPoint(new meta_1.MockField('mo_diaojieshuiping', 43, 2, '调节水平'));
            _this.addPoint(new meta_1.MockField('mo_jisuanhoudeshedingzhi', 45, 2, '计算后的设定值'));
            _this.addPoint(new meta_1.SettingField('mo_CHzuidashedingzhi', 52, 2, 'CH最大设定值'));
            _this.addPoint(new meta_1.OpenCloseField('oc_ceshimoshi', 12, 1, '测试模式', 0, Map_CTL_HNWR_485.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField('oc_CHmoshi', 12, 1, 'CH模式', 2, Map_CTL_HNWR_485.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField('oc_fangdongmoshi', 12, 1, '防冻模式', 3, Map_CTL_HNWR_485.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField('oc_huoyan', 12, 1, '火焰', 4, Map_CTL_HNWR_485.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField('oc_CHbeng', 12, 1, 'CH泵', 5, Map_CTL_HNWR_485.coms_open_close));
            _this.addPoint(new meta_1.OpenCloseField('oc_jilianbeng', 12, 1, '级联泵', 7, Map_CTL_HNWR_485.coms_open_close));
            return _this;
        }
        return Map_CTL_HNWR_485;
    }(ZH_CN_1.Map_ZH_CN)),
    _a.coms_status = {
        0: '待机',
        1: 'Test mode 测试模式',
        2: 'DHW/CH init',
        3: 'DHW/CH 模式',
        4: 'DHW/CH cool 模式',
        5: 'DHW/CH防冻模式',
        6: 'DHW初始化',
        7: 'DHW模式',
        8: 'DHW cool 模式',
        9: 'CH init',
        10: 'CH 模式',
        11: 'CH cool',
        12: '防冻模式',
    },
    _a.coms_error = {
        0: 'Esys控制器',
        1: '显示板',
    },
    _a.coms_biaozhi = {
        0: '阻塞',
        1: '锁定',
    },
    _a.coms_xuqiu = {
        0: '检测到CH或测试的加热需求',
        1: '没有CH或测试的加热需求',
    },
    _a.coms_ExceptionField = {
        1: '点火失败',
        2: '假火焰信号',
        3: '温度超上限',
        4: 'APS错误',
        5: '没有收到风机的的转速信号',
        6: 'APS错误',
        7: 'TTB（排放保护）激活',
        8: '火检电路错误',
        9: '阀门驱动电路错误',
        12: '内部控制错误',
        13: '远程复位错误',
        15: '漂移测试错误',
        16: '供水传感器的固定错误',
        17: '回水传感器的固定错误',
        18: '传感器损坏测试',
        21: '内部控制错误',
        25: '内部控制错误',
        30: 'CH传感器短路',
        31: 'CH传感器开路',
        32: 'DHW传感器短路',
        33: 'DHW传感器开路',
        34: '供电过低',
        37: '水压过低',
        43: 'CH回水传感器短路',
        44: 'CH回水传感器开路',
        45: 'TTB传感器短路',
        46: 'TTB传感器开路',
        47: '水压传感器未接或损坏',
        76: '外部限制断开',
        77: '虹吸管输入错误',
        80: '供水-回水传感器接反',
        81: '漂移测试警告',
        82: '热交换器传感器短路',
        83: '热交换器传感器开路',
        84: '热交换器上限',
        87: '超温错误',
        89: '不正确的参数设置',
        90: 'DSP和Maxsys的固件不匹配',
        91: '级联传感器短路',
        92: '级联传感器开路',
        93: '室外温度传感器短路',
        94: 'DSP内部错误',
        95: '级联CH供水传感器错误',
        96: '室外温度传感器开路',
        97: '级联结构不匹配',
        98: 'DSP之间的通讯错误',
        99: 'DSP与Msxsys之间的通讯错误',
    },
    _a);
