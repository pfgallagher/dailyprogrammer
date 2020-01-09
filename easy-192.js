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
var sumStrings = function (terms) {
    return terms.map(function (term) { return parseInt(term, 10); }).reduce(function (acc, cur) { return acc + cur; });
};
var digitLength = function (num) { return num.toString().length; };
var carriedAddition = function (input) {
    var terms = input.split("+");
    var cols = [];
    terms
        .map(function (term) { return __spread(term.padStart(digitLength(sumStrings(terms)), " ")); })
        .forEach(function (term) {
        return term.forEach(function (digit, i) {
            var parsed = parseInt(digit, 10);
            var digitOrSpace = !isNaN(parsed) ? parsed : " ";
            if (cols[i]) {
                cols[i].push(digitOrSpace);
            }
            else {
                cols[i] = [digitOrSpace];
            }
        });
    });
    var additionRows = cols
        .reverse()
        .map(function (col, i) {
        if (i === 0) {
            col.unshift(" ", "-");
        }
        var colSum = col.reduce(function (acc, cur) { return (typeof cur === "number" ? acc + cur : acc); }, 0);
        var overflow = Math.floor(colSum / 10);
        if (cols[i + 1]) {
            if (overflow) {
                cols[i + 1].unshift(overflow, "-");
            }
            else {
                cols[i + 1].unshift(" ", "-");
            }
        }
        if (overflow) {
            colSum -= overflow * 10;
        }
        return __spread(col, ["-", colSum, "-"]).map(function (el) { return el.toString(); });
    })
        .reverse();
    return util_1.transpose(additionRows)
        .map(function (el) { return el.join(""); })
        .join("\n");
};
console.log(carriedAddition("23+9+66"));
// 1
// --
// 23
//  9
// 66
// --
// 98
// --
console.log("\n");
console.log(carriedAddition("8765+305"));
// 1 1
// ----
// 8765
//  305
// ----
// 9070
// ----
console.log("\n");
console.log(carriedAddition("12+34+56+78+90"));
// 22
// ---
//  12
//  34
//  56
//  78
//  90
// ---
// 270
// ---
console.log("\n");
console.log(carriedAddition("999999+1"));
// 111111
// -------
//  999999
//       1
// -------
// 1000000
// -------
