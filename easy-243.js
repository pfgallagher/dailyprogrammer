"use strict";
exports.__esModule = true;
var util_1 = require("./lib/util");
var sum = function (numArr) { return numArr.reduce(function (a, c) { return a + c; }, 0); };
var divisors = function (n) { return util_1.range(1, n).filter(function (num) { return !(n % num); }); };
var abundantOrDeficient = function (n) {
    var sumOfDivisors = sum(divisors(n));
    var doubleN = n * 2;
    if (sumOfDivisors < doubleN) {
        return n + " is deficient";
    }
    return n + " is abundant by " + (sumOfDivisors - doubleN);
};
[9, 18, 21, 69, 85, 111, 112, 134, 220].forEach(function (n) {
    console.log(abundantOrDeficient(n));
});
// 9 is deficient
// 18 is abundant by 3
// 21 is deficient
// 69 is deficient
// 85 is deficient
// 111 is deficient
// 112 is abundant by 24
// 134 is deficient
// 220 is abundant by 64
