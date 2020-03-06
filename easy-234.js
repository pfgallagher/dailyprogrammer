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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
exports.__esModule = true;
var util_1 = require("./lib/util");
var countDigits = function (n) { return __spread(n.toString()).length; };
var firstNumberWithNDigits = function (n) { return Math.pow(10, (n - 1)); };
var lastNumberWithNDigits = function (n) {
    return firstNumberWithNDigits(n + 1) - 1;
};
var digitPermutations = function (n, len) { return __spread(new Set(util_1.combinations(__spread(n.toString()).map(function (num) { return parseInt(num, 10); }), len)
    .flatMap(function (combo) { return util_1.strPermutations(combo.join("")); })
    .map(function (permutation) { return parseInt(permutation, 10); })
    .filter(function (permutation) { return countDigits(permutation) === len; })
    .sort())); };
var multiply = function (numArr) {
    return numArr.reduce(function (a, c) { return a * c; }, 1);
};
var countTrailingZeros = function (numArr) {
    return numArr.reduce(function (a, c) { return (!(c % 10) ? a + 1 : a); }, 0);
};
var createCachedCombinationsForMultiplication = function () {
    var cache = {};
    return function (digPermutations, m) {
        var key = digPermutations.toString();
        var cachedValue = cache[key];
        if (cachedValue) {
            return cachedValue;
        }
        var combinationsForMultiplication = util_1.combinations(digPermutations, m).filter(function (combination) { return countTrailingZeros(combination) <= 1; });
        cache[key] = combinationsForMultiplication;
        return combinationsForMultiplication;
    };
};
var cachedCombinationsForMultiplication = createCachedCombinationsForMultiplication();
var vampireTest = function (n, m, digPermutations) {
    var e_1, _a;
    var combinationsForMultiplication = cachedCombinationsForMultiplication(digPermutations, m);
    try {
        for (var combinationsForMultiplication_1 = __values(combinationsForMultiplication), combinationsForMultiplication_1_1 = combinationsForMultiplication_1.next(); !combinationsForMultiplication_1_1.done; combinationsForMultiplication_1_1 = combinationsForMultiplication_1.next()) {
            var multiplicationCombination = combinationsForMultiplication_1_1.value;
            if (multiply(multiplicationCombination) === n &&
                usesAllDigits(n, parseInt(multiplicationCombination.join(""), 10))) {
                return n + "=" + multiplicationCombination.join("*");
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (combinationsForMultiplication_1_1 && !combinationsForMultiplication_1_1.done && (_a = combinationsForMultiplication_1["return"])) _a.call(combinationsForMultiplication_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return false;
};
var tallyDigits = function (n) {
    var tally = Array(10).fill(0);
    __spread(n.toString()).forEach(function (dig) {
        var digNum = parseInt(dig, 10);
        tally[digNum]++;
    });
    return tally;
};
var usesAllDigits = function (n, target) {
    return tallyDigits(n).every(function (dig, i) { return dig === tallyDigits(target)[i]; });
};
var vampireNumbers = function (n, m) {
    var vampireNums = [];
    for (var i = firstNumberWithNDigits(n); i <= lastNumberWithNDigits(n); i++) {
        var digPermutations = digitPermutations(i, 2);
        var vampireTestResult = vampireTest(i, m, digPermutations);
        if (vampireTestResult) {
            vampireNums.push(vampireTestResult);
        }
    }
    return vampireNums.join("\n");
};
console.log(vampireNumbers(4, 2));
// 1260=21*60
// 1395=15*93
// 1435=41*35
// 1530=51*30
// 1827=87*21
// 2187=27*81
// 6880=86*80
/*
    While this does execute correctly, it is commented out because it is
    definitely far from performant!
*/
// console.log(vampireNumbers(6, 3));
// 114390=41*31*90
// 121695=21*61*95
// 127428=21*74*82
// 127680=21*76*80
// 127980=20*79*81
// 137640=31*74*60
// 163680=66*31*80
// 178920=71*90*28
// 197925=91*75*29
// 198450=81*49*50
// 247680=40*72*86
// 294768=46*72*89
// 376680=73*60*86
// 397575=93*75*57
// 457968=56*94*87
// 479964=74*94*69
// 498960=99*84*60
