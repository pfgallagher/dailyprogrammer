"use strict";
exports.__esModule = true;
// This is mostly a repeat of easy-089.
var util_1 = require("./lib/util");
var calculateStandardDeviation = function (input) {
    return parseFloat(util_1.standardDeviation(input.split(" ").map(function (numStr) { return parseInt(numStr, 10); })).toFixed(4));
};
console.log(calculateStandardDeviation("5 6 11 13 19 20 25 26 28 37"));
// 9.7775
console.log(calculateStandardDeviation("37 81 86 91 97 108 109 112 112 114 115 117 121 123 141"));
// 23.2908
console.log(calculateStandardDeviation("266 344 375 399 409 433 436 440 449 476 502 504 530 584 587"));
// 83.6616
console.log(calculateStandardDeviation("809 816 833 849 851 961 976 1009 1069 1125 1161 1172 1178 1187 1208 1215 1229 1241 1260 1373"));
// 170.1273
