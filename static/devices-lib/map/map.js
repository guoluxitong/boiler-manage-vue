"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collections_1 = require("../entities/Collections");
var map = /** @class */ (function () {
    function map() {
        this.pointMap = new Collections_1.StringHashMap();
        //protected commandMap: StringHashMap<Command[] | null> = new StringHashMap<Command[] | null>()
        this.commandMap = new Collections_1.StringHashMap();
    }
    //protected subTypes: StringHashMap<string> = new StringHashMap<string>()
    //protected warningMsg:string = ''
    map.prototype.getPointMap = function () {
        return this.pointMap;
    };
    map.prototype.getCommandsMap = function () {
        return this.commandMap;
    };
    // getSubTypes(){
    //     return this.subTypes
    // }
    // getwarningMsg(){
    //     return this.warningMsg
    // }
    // protected addCommandGroup(groupKey: string) {
    //     this.commandMap.addItem(groupKey, null)
    // }
    map.prototype.addPoint = function (byteField) {
        this.pointMap.addItem(byteField.getName(), byteField);
    };
    map.prototype.addCommand = function (groupKey, cmd) {
        if (this.commandMap.containsKey(groupKey)) {
            var cmds = this.commandMap.getItem(groupKey);
            cmds.push(cmd);
        }
        else {
            var cmds = [cmd];
            this.commandMap.addItem(groupKey, cmds);
        }
    };
    map.KEY_BASE = 'baseInfo';
    map.KEY_RUN = 'runInfo';
    map.KEY_EXCEPTION = 'exceptionInfo';
    map.KEY_MOCK = 'mockInfo';
    map.KEY_SETTING = 'settingInfo';
    map.KEY_START_STOP = 'startStopInfo';
    map.KEY_DEVICE = 'deviceInfo';
    map.KEY_OPEN_CLOSE = 'openclose';
    /**
     * 计算属性的KEY
     */
    map.KEY_Count_Fields = 'countfields';
    map.KEY_POINT_SYSTEM_STATUS = 'o_system_status';
    map.KEY_POINT_POWER = 'o_power';
    map.KEY_POINT_MEDIA = 'o_media';
    map.KEY_POINT_RUN_LIFE = 'ba_yunxingshijian';
    map.KEY_POINT_RUN_DAYS = 'ba_yunxingtianshu';
    map.KEY_POINT_RUN_HOURS = 'ba_yunxingxiaoshishu';
    return map;
}());
exports.map = map;
