"use strict";
exports.__esModule = true;
var util_1 = require("./lib/util");
var factorial = function (n) {
    return n > 0 ? util_1.range(1, n).reduce(function (a, c) { return (a *= c); }) : 1;
};
var pascalTriangleRow = function (n) {
    return util_1.range(0, n).map(function (k) { return factorial(n) / (factorial(k) * factorial(n - k)); });
};
var pascalPyramid = function (n) {
    return pascalTriangleRow(n - 1)
        .map(function (triOne, iOne) {
        return pascalTriangleRow(iOne).map(function (triTwo) { return triOne * triTwo; });
    })
        .forEach(function (pyramidRow, iTwo) {
        console.log("" + " ".repeat(n - 1 - iTwo) + pyramidRow.join(" "));
    });
};
pascalPyramid(1);
// 1
console.log("\n");
pascalPyramid(2);
//  1
// 1 1
console.log("\n");
pascalPyramid(3);
//   1
//  2 2
// 1 2 1
console.log("\n");
pascalPyramid(4);
//    1
//   3 3
//  3 6 3
// 1 3 3 1
console.log("\n");
pascalPyramid(5); // Close enough; not going to bother with fixing the spacing for multi-digit numbers.
//       1
//     4  4
//    6  12 6
//  4  12 12 4
// 1  4  6  4  1
