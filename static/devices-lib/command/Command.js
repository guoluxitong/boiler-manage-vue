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
var CRC16Util_1 = require("../utils/CRC16Util");
var NumberUtil_1 = require("../utils/NumberUtil");
//namespace DevicesLib.cmd {
var Command = /** @class */ (function () {
    function Command(title, address, maxValue, minValue) {
        //protected name: string = ''
        this.address = '';
        this.valueString = '';
        this.value = '';
        this.modbusNo = 1;
        this.unit = '';
        this.title = '';
        this.action = '06';
        this.valueType = Command.INT_VALUE;
        this.valueIsSet = false;
        this.maxValue = 100;
        this.minValue = 0;
        this.script = '';
        this.title = title;
        this.title = address;
        this.minValue = minValue;
        this.maxValue = maxValue;
    }
    Command.prototype.getValueString = function () {
        return this.valueString;
    };
    Command.prototype.getCommandString = function () {
        if (this.valueIsSet) {
            this.valueIsSet = false;
            var str = this.convertToString();
            this.valueString = '';
            return str.toUpperCase();
        }
        return '';
    };
    Command.prototype.setModbusNo = function (modbusNo) {
        this.modbusNo = modbusNo;
    };
    Command.prototype.getModbusNo = function () {
        return this.modbusNo;
    };
    Command.prototype.setUnit = function (unit) {
        this.unit = unit;
    };
    Command.prototype.setTitle = function (title) {
        this.title = title;
    };
    Command.prototype.setMaxValue = function (maxValue) {
        this.maxValue = maxValue;
    };
    Command.prototype.setMinValue = function (minValue) {
        this.minValue = minValue;
    };
    Command.prototype.setScript = function (script) {
        this.script = script;
    };
    Command.prototype.setAddress = function (address) {
        this.address = address;
    };
    Command.prototype.getValueType = function () {
        return this.valueType;
    };
    Command.prototype.getMaxValue = function () {
        return this.maxValue;
    };
    Command.prototype.getMinValue = function () {
        return this.minValue;
    };
    // public getName() {
    //     return this.name
    // }
    // setName(name: string) {
    //     this.name = name
    // }
    /**
     * 用于呈现数据的初始化，数据初始化不影响命令设置状态
     * @param values
     */
    Command.prototype.initValue = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this.handleValue(values);
    };
    /**
     * 用户设置命令值，影响命令设置状态
     * @param values
     */
    Command.prototype.setValue = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        if (null == values)
            return;
        if (null == values[0])
            return;
        this.handleValue(values);
        this.valueIsSet = true;
    };
    Command.prototype.getValue = function () {
        return this.value;
    };
    Command.prototype.getTitle = function () {
        return this.title;
    };
    Command.prototype.getUnit = function () {
        return this.unit;
    };
    Command.prototype.getCommand = function () {
        if (this.valueIsSet) {
            this.valueIsSet = false;
            var str = this.convertToString();
            this.value = '';
            return str.toUpperCase();
        }
        return '';
    };
    Command.hexStringToBytes = function (str) {
        if (null != str && str.length != 0) {
            var len = str.length / 2;
            var bytes = new ArrayBuffer(len);
            var v = new Uint8Array(bytes);
            for (var i = 0; i < len; i++) {
                v[i] = (parseInt(str.substr(i * 2, 2), 16));
            }
            return v;
        }
        return null;
    };
    Command.toNumbers = function (str) {
        var numbers = [];
        if (null != str && str.length != 0) {
            var len = str.length / 2;
            for (var i = 0; i < len; i++) {
                //console.log(str.substr(i * 2, 2))
                numbers.push(parseInt(str.substr(i * 2, 2), 16));
            }
        }
        return numbers;
    };
    /**
    static intToHexString(x: number, hexLength: number = 4): string {
        let str = x.toString(16)
        for (let i = str.length i < hexLength i++) {
            str += ('0' + str)
        }
        return str
    }
*/
    Command.intToBytes4 = function (n) {
        var b = new ArrayBuffer(4);
        var v = new Uint8Array(b);
        for (var i = 0; i < 4; i++) {
            v[i] = (n >> (24 - i * 8));
        }
        return b;
    };
    Command.prototype.initCommand = function (title, address, maxValue, minValue, value) {
        this.setTitle(title);
        this.setAddress(address);
        this.setMinValue(minValue);
        this.setMaxValue(maxValue);
        this.initValue(value);
    };
    Command.prototype.evalScriptText = function (value) {
    };
    Command.INT_VALUE = 1;
    Command.FLOAT_VALUE = 2;
    Command.FLOAT_MAP_VALUE = 3;
    Command.TIME_VALUE = 4;
    Command.OPEN_CLOSE_VALUE = 5;
    Command.SYSTEM_VALUE = 6;
    return Command;
}());
exports.Command = Command;
var IntCommand = /** @class */ (function (_super) {
    __extends(IntCommand, _super);
    function IntCommand(title, address, maxValue, minValue) {
        var _this = _super.call(this, title, address, minValue, maxValue) || this;
        _this.valueType = Command.INT_VALUE;
        return _this;
    }
    IntCommand.prototype.handleValue = function (values) {
        this.valueString = values[0].toString();
        this.value = NumberUtil_1.NumberUtil.NumberToString(values[0], 16, 4); // Command.intToHexString(values[0])
    };
    IntCommand.prototype.convertToString = function () {
        var no = NumberUtil_1.NumberUtil.NumberToString(this.getModbusNo(), 16, 2); //Command.intToHexString(this.getModbusNo())
        var baseStr = no + this.action + this.address + this.value;
        var data = Command.toNumbers(baseStr);
        return baseStr + CRC16Util_1.CRC16Util.getCrc(CRC16Util_1.CRC16Util.calcCrc16(data, 0, data.length)) + '0000000000';
    };
    return IntCommand;
}(Command));
exports.IntCommand = IntCommand;
var TimeCommand = /** @class */ (function (_super) {
    __extends(TimeCommand, _super);
    function TimeCommand(title, address) {
        var _this = _super.call(this, title, address, 0, 0) || this;
        _this.valueType = Command.TIME_VALUE;
        _this.script = '';
        return _this;
    }
    TimeCommand.prototype.handleValue = function (values) {
        var hstr = (values[0] / 60).toString();
        var mstr = (values[1] % 60).toString();
        if (2 > hstr.length)
            hstr = '0' + hstr;
        if (2 > mstr.length)
            mstr = '0' + mstr;
        this.valueString = hstr + ':' + mstr;
        this.value = NumberUtil_1.NumberUtil.NumberToString(values[0] * 60 + values[1], 16, 4); //Command.intToHexString(values[0] * 60 + values[1])
    };
    return TimeCommand;
}(IntCommand));
exports.TimeCommand = TimeCommand;
var SystemCommand = /** @class */ (function (_super) {
    __extends(SystemCommand, _super);
    function SystemCommand(title, address, maxValue, minValue) {
        var _this = _super.call(this, title, address, minValue, maxValue) || this;
        _this.valueType = Command.SYSTEM_VALUE;
        _this.valueIsSet = false;
        return _this;
    }
    return SystemCommand;
}(IntCommand));
exports.SystemCommand = SystemCommand;
var FloatCommand = /** @class */ (function (_super) {
    __extends(FloatCommand, _super);
    function FloatCommand(title, address, maxValue, minValue) {
        var _this = _super.call(this, title, address, minValue, maxValue) || this;
        _this.action = '10';
        _this.valueType = Command.FLOAT_VALUE;
        return _this;
    }
    FloatCommand.prototype.handleValue = function (values) {
        this.valueString = values[0].toFixed(2);
        var data = new ArrayBuffer(4);
        var view = new DataView(data);
        view.setFloat32(0, values[0], false);
        this.value = NumberUtil_1.NumberUtil.NumberToString(view.getUint8(0), 16, 2) +
            NumberUtil_1.NumberUtil.NumberToString(view.getUint8(1), 16, 2) +
            NumberUtil_1.NumberUtil.NumberToString(view.getUint8(2), 16, 2) +
            NumberUtil_1.NumberUtil.NumberToString(view.getUint8(3), 16, 2);
    };
    FloatCommand.prototype.convertToString = function () {
        var no = NumberUtil_1.NumberUtil.NumberToString(this.getModbusNo(), 16, 4);
        return no + this.action + this.address + '000204' + this.value;
    };
    return FloatCommand;
}(Command));
exports.FloatCommand = FloatCommand;
var OpenCloseCommand = /** @class */ (function (_super) {
    __extends(OpenCloseCommand, _super);
    function OpenCloseCommand(title, address, maxValue, minValue) {
        var _this = _super.call(this, title, address, minValue, maxValue) || this;
        _this.valueType = Command.OPEN_CLOSE_VALUE;
        return _this;
    }
    return OpenCloseCommand;
}(IntCommand));
exports.OpenCloseCommand = OpenCloseCommand;
//}
