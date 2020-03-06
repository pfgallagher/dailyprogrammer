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
var uniquePrimeFactors = function (n) { return __spread(new Set(util_1.primeFactorialize(n))); };
var sum = function (numArr) { return numArr.reduce(function (a, c) { return a + c; }); };
var sumOfUniquePrimeFactors = function (n) {
    return sum(uniquePrimeFactors(n));
};
var ruthAaronPair = function (input) {
    return JSON.stringify(input) + " " + (sumOfUniquePrimeFactors(input[0]) === sumOfUniquePrimeFactors(input[1])
        ? "VALID"
        : "INVALID");
};
console.log(ruthAaronPair([714, 715]));
// [714,715] VALID
console.log(ruthAaronPair([77, 78]));
// [77,78] VALID
console.log(ruthAaronPair([20, 21]));
// [20,21] INVALID
console.log(ruthAaronPair([5, 6]));
// [5,6] VALID
console.log(ruthAaronPair([2107, 2108]));
// [2107,2108] VALID
console.log(ruthAaronPair([492, 493]));
// [492,493] VALID
console.log(ruthAaronPair([128, 129]));
// [128,129] INVALID
