"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) { return o; }
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) { ar.push(r.value); }
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i.return)) { m.call(i); }
        }
        finally { if (e) { throw e.error; } }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) { ar = ar.concat(__read(arguments[i])); }
    return ar;
};
exports.__esModule = true;
var util_1 = require("../lib/util");
var numberToASCIIMap = {
    "0": " _ \n| |\n|_|",
    "1": "   \n  |\n  |",
    "2": " _ \n _|\n|_ ",
    "3": " _ \n _|\n _|",
    "4": "   \n|_|\n  |",
    "5": " _ \n|_ \n _|",
    "6": " _ \n|_ \n|_|",
    "7": " _ \n  |\n  |",
    "8": " _ \n|_|\n|_|",
    "9": " _ \n|_|\n _|"
};
var bankNumberBanner = function (input) {
    return util_1.transpose(__spread(input).map(function (el) { return numberToASCIIMap[el].split("\n"); }))
        .map(function (el) { return el.join(""); })
        .join("\n");
};
console.log(bankNumberBanner("000000000"));
console.log(bankNumberBanner("111111111"));
console.log(bankNumberBanner("490067715"));
