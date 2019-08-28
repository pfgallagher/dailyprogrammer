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
exports.__esModule = true;
var randomNumFromRange = function (arr) {
    return Math.ceil(Math.random() * arr[arr.length - 1]);
};
var range = function (min, max) {
    return Array(max - min + 1)
        .fill(0)
        .map(function (el, idx) { return idx + min; });
};
var rollDice = function (diceNotation) {
    var _a = __read(diceNotation.match(/(\d*)*d(\d*)+(\W)*(\d*)*/), 5), A = _a[1], B = _a[2], operator = _a[3], C = _a[4];
    var _b = __read([A, B, C].map(function (numStr) { return parseInt(numStr, 10) || 0; }), 3), AInt = _b[0], BInt = _b[1], CInt = _b[2];
    return (range(1, AInt || 1)
        .map(function (die) { return randomNumFromRange(range(1, BInt)); })
        .reduce(function (a, c) { return a + c; }) +
        (operator ? (operator === "+" ? CInt : -CInt) : 0));
};
console.log(rollDice("d8"));
console.log(rollDice("10d6-2"));
console.log(rollDice("d20+7"));
