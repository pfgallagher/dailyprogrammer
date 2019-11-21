"use strict";
exports.__esModule = true;
var util_1 = require("./lib/util");
var isCellFilled = function (x, y) {
    while (x > 0 || y > 0) {
        if (x % 3 === 1 && y % 3 === 1) {
            return false;
        }
        x = Math.floor(x / 3);
        y = Math.floor(y / 3);
    }
    return true;
};
var sierpinskiCarpet = function (n) {
    return util_1.range(0, Math.pow(3, n) - 1)
        .map(function (x) { return util_1.range(0, Math.pow(3, n) - 1).map(function (y) { return isCellFilled(x, y); }); })
        .map(function (row) { return row.map(function (cell) { return (cell ? "\u2591" : " "); }).join(""); })
        .join("\n");
};
console.log(sierpinskiCarpet(3));
