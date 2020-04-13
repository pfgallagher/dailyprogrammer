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
var isMagicSquare = function (numArr) {
    var rows = util_1.chunkArr(numArr, 3);
    return __spread(rows, util_1.transpose(rows), util_1.getMajorDiagonals(rows)).every(function (arr) { return util_1.sum(arr) === 15; });
};
console.log(isMagicSquare([8, 1, 6, 3, 5, 7, 4, 9, 2]));
// true
console.log(isMagicSquare([2, 7, 6, 9, 5, 1, 4, 3, 8]));
// true
console.log(isMagicSquare([3, 5, 7, 8, 1, 6, 4, 9, 2]));
// false
console.log(isMagicSquare([8, 1, 6, 7, 5, 3, 4, 9, 2]));
// false
