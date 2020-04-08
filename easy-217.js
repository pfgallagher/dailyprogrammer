"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
exports.__esModule = true;
var util_1 = require("./lib/util");
var organizeLogPiles = function (input) {
    var _a = __read(input.split("\n")), sizeStr = _a[0], logStr = _a[1], storage = _a.slice(2);
    var size = parseInt(sizeStr, 10);
    var numLogsToAdd = parseInt(logStr, 10);
    var logGrid = storage
        .map(function (el) { return el.split(" ").map(function (cell) { return parseInt(cell, 10); }); })
        .flat();
    var _loop_1 = function () {
        var smallestPile = Math.min.apply(Math, __spread(logGrid));
        logGrid.forEach(function (cell, i) {
            if (cell === smallestPile) {
                if (numLogsToAdd) {
                    logGrid[i]++;
                    numLogsToAdd--;
                }
            }
        });
    };
    while (numLogsToAdd) {
        _loop_1();
    }
    return util_1.chunkArr(logGrid, size)
        .map(function (row) { return row.join(" "); })
        .join("\n");
};
console.log(organizeLogPiles("3\n7\n1 1 1\n2 1 3\n1 4 1"));
//  3 2 2
//  2 2 3
//  2 4 2
console.log(organizeLogPiles("4\n200\n15 12 13 11\n19 14 8 18\n13 14 17 15\n7 14 20 7"));
// 27 26 26 26
// 26 26 26 26
// 26 26 26 26
// 26 26 26 26
console.log(organizeLogPiles("15\n2048\n5 15 20 19 13 16 5 2 20 5 9 15 7 11 13\n17 13 7 17 2 17 17 15 4 17 4 14 8 2 1\n13 8 5 2 9 8 4 2 2 18 8 12 9 10 14\n18 8 13 13 4 4 12 19 3 4 14 17 15 20 8\n19 9 15 13 9 9 1 13 14 9 10 20 17 20 3\n12 7 19 14 16 2 9 5 13 4 1 17 9 14 19\n6 3 1 7 14 3 8 6 4 18 13 16 1 10 3\n16 3 4 6 7 17 7 1 10 10 15 8 9 14 6\n16 2 10 18 19 11 16 6 17 7 9 13 10 5 11\n12 19 12 6 6 9 13 6 13 12 10 1 13 15 14\n19 18 17 1 10 3 1 6 14 9 10 17 18 18 7\n7 2 10 12 10 20 14 13 19 11 7 18 10 11 12\n5 16 6 8 20 17 19 17 14 10 10 1 14 8 12\n19 10 15 5 11 6 20 1 5 2 5 10 5 14 14\n12 7 15 4 18 11 4 10 20 1 16 18 7 13 15"));
// 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
// 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
// 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
// 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
// 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
// 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
// 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
// 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
// 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
// 20 20 20 20 20 20 20 20 20 20 20 20 20 19 19
// 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19
// 19 19 19 19 19 20 19 19 19 19 19 19 19 19 19
// 19 19 19 19 20 19 19 19 19 19 19 19 19 19 19
// 19 19 19 19 19 19 20 19 19 19 19 19 19 19 19
// 19 19 19 19 19 19 19 19 20 19 19 19 19 19 19
console.log(organizeLogPiles("1\n41\n1"));
// 42
console.log(organizeLogPiles("12\n10000\n9 15 16 18 16 2 20 2 10 12 15 13\n20 6 4 15 20 16 13 6 7 12 12 18\n11 11 7 12 5 7 2 14 17 18 7 19\n7 14 4 19 8 6 4 11 14 13 1 4\n3 8 3 12 3 6 15 8 15 2 11 9\n16 13 3 9 8 9 8 9 18 13 4 5\n6 4 18 1 2 14 8 19 20 11 14 2\n4 7 12 8 5 2 19 4 1 10 10 14\n7 8 3 11 15 11 2 11 4 17 6 18\n19 8 18 18 15 12 20 11 10 9 3 16\n3 12 3 3 1 2 9 9 13 11 18 13\n9 2 12 18 11 13 18 15 14 20 18 10"));
// 80 80 80 80 80 80 80 80 80 80 80 80
// 80 80 80 80 80 80 80 80 80 80 80 80
// 80 80 80 80 80 80 80 80 80 80 80 80
// 80 80 80 80 80 80 80 80 80 80 80 80
// 80 80 80 80 80 80 80 80 80 80 80 80
// 80 80 80 80 80 80 80 80 80 80 80 80
// 80 80 80 80 80 80 80 80 80 80 80 80
// 80 80 80 80 80 80 80 80 80 80 80 80
// 80 80 80 80 80 80 80 80 80 80 80 80
// 80 80 79 79 79 79 79 79 79 79 79 79
// 79 79 79 79 79 79 79 79 79 79 79 79
// 79 79 79 79 79 79 79 79 79 79 79 79