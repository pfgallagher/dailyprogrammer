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
var range = function (min, max) {
    return Array(max - min + 1)
        .fill(0)
        .map(function (el, idx) { return idx + min; });
};
var isPrime = function (num) {
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (!(num % i)) {
            return false;
        }
    }
    return true;
};
var emirpsUpToN = function (n) {
    return range(0, n).filter(function (num) {
        var reverse = __spread(num.toString(10)).reverse().join("");
        var reversedNum = parseInt(reverse, 10);
        return isPrime(num) && isPrime(reversedNum) && num.toString(10) !== reverse;
    });
};
console.log(emirpsUpToN(158));
