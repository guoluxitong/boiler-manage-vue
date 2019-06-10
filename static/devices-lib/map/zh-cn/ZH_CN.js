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
var map_1 = require("../map");
var Map_ZH_CN = /** @class */ (function (_super) {
    __extends(Map_ZH_CN, _super);
    function Map_ZH_CN() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Map_ZH_CN.prototype.getPowerString = function (key) {
        return Map_ZH_CN.coms_power[key];
    };
    Map_ZH_CN.prototype.getMediaString = function (key) {
        return Map_ZH_CN.coms_media[key];
    };
    Map_ZH_CN.coms_media = {
        0: '热水',
        1: '蒸汽',
        2: '导热油',
        3: '热风',
        4: '真空'
    };
    Map_ZH_CN.coms_power = {
        0: '油气',
        1: '电',
        2: '煤',
        3: '生物质',
        30: '余热'
    };
    Map_ZH_CN.coms_open_close = {
        0: '关',
        1: '开'
    };
    Map_ZH_CN.coms_start_stop = {
        0: '停',
        1: '启'
    };
    Map_ZH_CN.coms_level = {
        0: '缺水',
        1: '低报警',
        2: '低位',
        3: '正常',
        4: '高位',
        5: '超高位',
        6: '逻辑错',
    };
    return Map_ZH_CN;
}(map_1.map));
exports.Map_ZH_CN = Map_ZH_CN;
