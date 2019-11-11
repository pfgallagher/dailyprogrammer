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
var findTornNums = function () {
    return util_1.range(1, 99)
        .filter(function (num) {
        var digits = __spread("" + Math.pow(num, 2));
        if (digits.length === 4) {
            var _a = __read(digits, 4), one = _a[0], two = _a[1], three = _a[2], four = _a[3];
            var target = parseInt("" + one + two + three + four, 10);
            var left = parseInt("" + one + two, 10);
            var right = parseInt("" + three + four, 10);
            return Math.pow((left + right), 2) === target;
        }
        return false;
    })
        .map(function (num) { return Math.pow(num, 2); });
};
console.log(findTornNums());
