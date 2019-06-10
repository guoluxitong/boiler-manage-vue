"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var map_1 = require("../map/map");
var NumberHashMap = /** @class */ (function () {
    function NumberHashMap(map) {
        this.map = {};
        if (map) {
            this.map = map;
        }
    }
    NumberHashMap.prototype.addItem = function (key, value) {
        this.map[key] = value;
    };
    NumberHashMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    Object.defineProperty(NumberHashMap.prototype, "count", {
        get: function () {
            return map_1.map.length;
        },
        enumerable: true,
        configurable: true
    });
    NumberHashMap.prototype.each = function (func) {
        for (var k in this.map) {
            func(new Number(k).valueOf(), this.map[k]);
        }
    };
    NumberHashMap.prototype.containsKey = function (key) {
        return this.map[key] ? true : false;
    };
    return NumberHashMap;
}());
exports.NumberHashMap = NumberHashMap;
var StringHashMap = /** @class */ (function () {
    function StringHashMap() {
        this.map = {};
    }
    StringHashMap.prototype.addItem = function (key, value) {
        this.map[key] = value;
    };
    StringHashMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    Object.defineProperty(StringHashMap.prototype, "count", {
        get: function () {
            var i = 0;
            this.each(function () {
                i++;
            });
            return i;
        },
        enumerable: true,
        configurable: true
    });
    // get Keys(): string[] {
    //     // let keys: string[] = []
    //     // this.each((k, v) => {
    //     //     keys.push(k)
    //     // })
    //     //return keys
    //     return this.map2.keys()
    // }
    StringHashMap.prototype.each = function (func) {
        for (var key in this.map) {
            func(key, this.map[key]);
        }
    };
    StringHashMap.prototype.containsKey = function (key) {
        return this.map[key] ? true : false;
    };
    StringHashMap.prototype.remove = function (key) {
        delete this.map[key];
    };
    StringHashMap.prototype.clear = function () {
        this.map = {};
    };
    return StringHashMap;
}());
exports.StringHashMap = StringHashMap;
var List = /** @class */ (function () {
    function List() {
        this.list = [];
    }
    List.prototype.push = function (item) {
        if (item) {
            this.list.push(item);
        }
    };
    List.prototype.insert = function (index, item) {
        this.list.splice(index, 0, item);
    };
    List.prototype.each = function (func) {
        for (var i in this.list) {
            func(this.list[i]);
        }
    };
    List.prototype.item = function (index) {
        return this.list[index];
    };
    List.prototype.toArray = function () {
        return this.list;
    };
    return List;
}());
exports.List = List;
//}
