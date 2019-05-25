"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SdcSoftDevice_1 = require("./devices/SdcSoftDevice");
exports.SdcSoftDevice = SdcSoftDevice_1.SdcSoftDevice;
var DeviceAdapterUtil_1 = require("./utils/DeviceAdapterUtil");
exports.DeviceAdapterUtil = DeviceAdapterUtil_1.Wx_DeviceAdapterUtil;
var Commands = require("./command/Command");
exports.Commands = Commands;
var CRC16Util_1 = require("./utils/CRC16Util");
exports.CRC16Util = CRC16Util_1.CRC16Util;
var Collections_1 = require("./entities/Collections");
//import { checkDevice } from './test/Before'
//checkDevice('0222222222','CTL_RT_T2_RYZQ_YLKZQ_180839008',function(){})
var devicesHashTable = new Collections_1.StringHashMap();
exports.SdcSoftDeviceHashMap = devicesHashTable;
