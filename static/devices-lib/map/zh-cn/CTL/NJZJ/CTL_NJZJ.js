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
var ZH_CN_1 = require("../../ZH_CN");
var Map_CTL_NJZJ = /** @class */ (function (_super) {
    __extends(Map_CTL_NJZJ, _super);
    function Map_CTL_NJZJ() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Map_CTL_NJZJ.coms_status = {
        0: '关机',
        1: '待机',
        2: '运行',
        3: '报警',
    };
    Map_CTL_NJZJ.coms_ranshaoqi_status = {
        0: '停',
        1: '小火',
        2: '大火',
    };
    Map_CTL_NJZJ.coms_yalistatus = {
        0: '常压',
        1: '低压',
        2: '中压',
        3: '高压',
        4: '超压',
    };
    Map_CTL_NJZJ.coms_device = {
        0xC0: '手',
        0x3F: '自',
        0x30: '备',
        0xCF: '主',
        0x0F: '启',
        0xF0: '停',
    };
    return Map_CTL_NJZJ;
}(ZH_CN_1.Map_ZH_CN));
exports.Map_CTL_NJZJ = Map_CTL_NJZJ;
