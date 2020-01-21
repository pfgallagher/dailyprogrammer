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
exports.__esModule = true;
// This is pretty close to easy-102, but here is the solution:
var util_1 = require("../lib/util");
var roll = function (n) { return Math.ceil(Math.random() * n); };
var rollDice = function (notation) {
    var _a = __read(notation.match(/(\d*)d(\d+)/), 3), rollNum = _a[1], dieSides = _a[2];
    return util_1.range(0, parseInt(rollNum, 10) - 1)
        .map(function (die) { return roll(parseInt(dieSides, 10)); })
        .join(" ");
};
console.log(rollDice("2d20"));
console.log(rollDice("4d6"));
