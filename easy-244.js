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
var fork = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _a = __read(args, 3), f = _a[0], g = _a[1], h = _a[2];
    if (args.length === 3) {
        return function (y, x) { return g(f(y, x), h(y, x)); };
    }
    return function (y, x) { return g(f(y, x), fork.apply(void 0, __spread(args.slice(2)))(y, x)); };
};
var sum = function (numArr) { return numArr.reduce(function (a, c) { return a + c; }, 0); };
var divide = function (a, b) { return a / b; };
var count = function (numArr) { return numArr.length; };
var mean = fork(sum, divide, count);
console.log(mean([1, 2, 3, 4, 5]));
(function () {
    var arbitraryNumberOfFuncsTest = [];
    for (var i = 0; i < 25; i++) {
        arbitraryNumberOfFuncsTest.push(new Function("x", "y", "return x + y"));
    }
    var forkedArbitraryNumberOfFuncs = fork.apply(void 0, __spread(arbitraryNumberOfFuncsTest));
    console.log(forkedArbitraryNumberOfFuncs(1, 2));
})();
