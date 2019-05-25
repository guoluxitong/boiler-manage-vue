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
var CTL_NJZJ_1 = require("./CTL_NJZJ");
var IP_485 = /** @class */ (function (_super) {
    __extends(IP_485, _super);
    /**
     * 485数据读取指令
     */
    function IP_485() {
        var _this = _super.call(this) || this;
        _this.BYTE_ARRAY_LENGTH = 1749;
        return _this;
    }
    IP_485.prototype.handleDeviceNo = function (bytes) {
        return '';
    };
    IP_485.prototype.handleByteField = function (field, bytes) {
        //let view = new DataView(bytes)
        if (field.haveValue(bytes[field.getStartIndex()], bytes[field.getStartIndex() + 1])) {
            /*
            if(field.getName()=='se_baojingwendu'){
                console.log('aaaaaaaa')
            }*/
            this.addField(field);
        }
    };
    IP_485.prototype.getDeviceFocusFields = function () {
        var list = _super.prototype.getDeviceFocusFields.call(this);
        var i = list[1].getValue();
        list[0].setValue(i / 24);
        list[1].setValue(i % 24);
        return list;
    };
    return IP_485;
}(CTL_NJZJ_1.IP));
exports.IP_485 = IP_485;
