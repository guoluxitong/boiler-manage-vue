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
var Map_EN_US = /** @class */ (function (_super) {
    __extends(Map_EN_US, _super);
    function Map_EN_US() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Map_EN_US.prototype.getPowerString = function (key) {
        return Map_EN_US.coms_power[key];
    };
    Map_EN_US.prototype.getMediaString = function (key) {
        return Map_EN_US.coms_media[key];
    };
    Map_EN_US.coms_media = {
        0: "Water",
        1: "Steam",
        2: "Oil",
        3: "Hot Air",
        4: "Vacuum"
    };
    Map_EN_US.coms_power = {
        0: "Oil/Gas",
        1: "Electric",
        2: "Coal",
        3: "Biomass",
        30: "Waste Heat"
    };
    Map_EN_US.coms_open_close = {
        0: "Close",
        1: "Open"
    };
    Map_EN_US.coms_start_stop = {
        0: "Stop",
        1: "Start"
    };
    Map_EN_US.coms_level = {
        0: "Water Shortage",
        1: "Low Alarm",
        2: "Low Position",
        3: "Normal",
        4: "High Position",
        5: "Super High",
        6: "Logic Error",
    };
    return Map_EN_US;
}(map_1.map));
exports.Map_EN_US = Map_EN_US;
