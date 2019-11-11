"use strict";
// class MyMap<T extends string, U extends number | string> {
//     constructor(
//         public key: T,
//         public value: U,
//         private data: Array<{key: T, value: U}>
//     ) { }
//     get getItem(): [] {
//         const result: [] = this.data.indexOf(this.key);
//         return result;
//     }
//     set setItem<T>(key: T, value: T): T {
//         this.data.push({key: value})
//     }
// }
// MAX'S SOLUTION
var MyMap = /** @class */ (function () {
    function MyMap(map) {
        if (map === void 0) { map = {}; }
        this.map = map;
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.print = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 10);
numberMap.setItem('bananas', 2);
numberMap.print();
numberMap.getItem('apples');
var stringMap = new MyMap();
stringMap.setItem('apples', '10');
stringMap.getItem('apples');
stringMap.print();
