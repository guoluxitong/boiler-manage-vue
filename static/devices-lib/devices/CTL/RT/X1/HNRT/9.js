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
var X1_1 = require("../../AScript/X1");
module.exports = /** @class */ (function (_super) {
    __extends(CTL_RT_X1_HNRT_9, _super);
    function CTL_RT_X1_HNRT_9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CTL_RT_X1_HNRT_9.prototype.getPowerInfo = function () {
        var map = this.getDeviceFields();
        if (map.getItem(CTL_RT_X1_HNRT_9.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue() > 0) {
            if (this.getOpenCloseFields().getItem('oc_ranshaoqifuhetiaojie').getValue() > 0)
                return 2;
            return 1;
        }
        else
            return 0;
    };
    CTL_RT_X1_HNRT_9.prototype.addFocusFields = function (list) {
        _super.prototype.addFocusFields.call(this, list);
        var map = this.getBaseInfoFields();
        var f = map.getItem('ba_shuiweizhuangtai');
        var values = f.getValueMap();
        if (values) {
            var map2 = this.getOpenCloseFields();
            var a = map2.getItem('oc_jixiandishuiweidianji').getValue();
            f.setValueString(values.getItem(a));
            list.push(f);
        }
        map = this.getMockFields();
        list.push(map.getItem('mo_chushuiwendu'));
    };
    return CTL_RT_X1_HNRT_9;
}(X1_1.CTL_RT_X1_Ts));
