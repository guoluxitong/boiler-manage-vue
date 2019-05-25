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
var RS_3J_DJD_1 = require("./RS_3J_DJD");
var CTL_RT_X1_Dian_RS3JDJD = /** @class */ (function (_super) {
    __extends(CTL_RT_X1_Dian_RS3JDJD, _super);
    function CTL_RT_X1_Dian_RS3JDJD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CTL_RT_X1_Dian_RS3JDJD.prototype.addFocusFields = function (list) {
        _super.prototype.addFocusFields.call(this, list);
        var map = this.getCountFields();
        var map2 = this.getDeviceFields();
        var field = map.getItem(CTL_RT_X1_Dian_RS3JDJD.KEY_POINT_RAN_SHAO_QI);
        var count = 0;
        count += map2.getItem('oc_jiarezu1kongzhi').getValue();
        count += map2.getItem('oc_jiarezu2kongzhi').getValue();
        field.setValue(count);
        list.insert(2, field);
    };
    return CTL_RT_X1_Dian_RS3JDJD;
}(RS_3J_DJD_1.CTL_RT_X1_RS3JDJD));
exports.CTL_RT_X1_Dian_RS3JDJD = CTL_RT_X1_Dian_RS3JDJD;
