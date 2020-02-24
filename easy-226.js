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
var util_1 = require("./lib/util");
var addFractions = function (input) {
    var fractions = input
        .split("\n")
        .map(function (fraction) { return fraction.split("/").map(function (part) { return parseInt(part, 10); }); });
    var denominators = fractions.map(function (_a) {
        var _b = __read(_a, 2), numerator = _b[0], denominator = _b[1];
        return denominator;
    });
    var LCM = util_1.lcmOfArray(denominators);
    var multipliers = denominators.map(function (denominator) { return LCM / denominator; });
    var numerators = fractions.map(function (_a) {
        var _b = __read(_a, 1), numerator = _b[0];
        return numerator;
    });
    var summation = numerators
        .map(function (numerator, i) { return numerator * multipliers[i]; })
        .reduce(function (acc, cur) { return acc + cur; }, 0);
    var GCD = util_1.gcd(summation, LCM);
    return summation / GCD + "/" + LCM / GCD;
};
console.log(addFractions("1/6\n3/10"));
// 7/15
console.log(addFractions("1/3\n1/4\n1/12"));
// 2/3
console.log(addFractions("2/9\n4/35\n7/34\n1/2\n16/33"));
// 89962/58905
console.log(addFractions("1/7\n35/192\n61/124\n90/31\n5/168\n31/51\n69/179\n32/5\n15/188\n10/17"));
// 351910816163/29794134720
