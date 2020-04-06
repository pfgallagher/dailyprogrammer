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
var squareObliqueCoords = function (n) {
    var splitXs = [[], []];
    var halfI = Math.ceil((3 * n) / 4);
    if (!(halfI % 2)) {
        halfI++;
    }
    for (var i = 0; i <= halfI; i++) {
        splitXs[0].push(util_1.range(0, i));
        if (i > 0) {
            splitXs[1].push(util_1.range(i, halfI));
        }
    }
    var xs = splitXs.flat();
    var ys = xs.map(function (el) { return __spread(el).reverse(); });
    return xs.map(function (xArr, i) { return xArr.map(function (xCoord, j) { return [xCoord, ys[i][j]]; }); });
};
var sizeNSquare = function (n) {
    return Array(n)
        .fill(0)
        .map(function () { return []; });
};
var oblique = function (matrix) {
    return squareObliqueCoords(matrix.length).map(function (coordsArr) {
        return coordsArr.map(function (_a) {
            var _b = __read(_a, 2), x = _b[0], y = _b[1];
            return matrix[x][y];
        });
    });
};
var deoblique = function (obliquedMatrix) {
    var longestArr = Math.max.apply(Math, __spread(obliquedMatrix.map(function (el) { return el.length; })));
    var deobliquedMatrix = sizeNSquare(longestArr);
    var flatMatrix = obliquedMatrix.flat();
    squareObliqueCoords(longestArr)
        .flat()
        .forEach(function (_a, i) {
        var _b = __read(_a, 2), x = _b[0], y = _b[1];
        deobliquedMatrix[x][y] = flatMatrix[i];
    });
    return deobliquedMatrix;
};
var test1 = oblique([
    [0, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29],
    [30, 31, 32, 33, 34, 35],
]);
console.log(test1);
// [
//   [ 0 ],
//   [ 1, 6 ],
//   [ 2, 7, 12 ],
//   [ 3, 8, 13, 18 ],
//   [ 4, 9, 14, 19, 24 ],
//   [ 5, 10, 15, 20, 25, 30 ],
//   [ 11, 16, 21, 26, 31 ],
//   [ 17, 22, 27, 32 ],
//   [ 23, 28, 33 ],
//   [ 29, 34 ],
//   [ 35 ]
// ]
console.log(deoblique(test1));
// [
// 	[0, 1, 2, 3, 4, 5],
// 	[6, 7, 8, 9, 10, 11],
// 	[12, 13, 14, 15, 16, 17],
// 	[18, 19, 20, 21, 22, 23],
// 	[24, 25, 26, 27, 28, 29],
// 	[30, 31, 32, 33, 34, 35],
// ]
var test2 = oblique([
    [0, 1, 2, 3],
    [6, 7, 8, 9],
    [12, 13, 14, 15],
    [18, 19, 20, 21],
]);
console.log(test2);
// [
//   [ 0 ],
//   [ 1, 6 ],
//   [ 2, 7, 12 ],
//   [ 3, 8, 13, 18 ],
//   [ 9, 14, 19 ],
//   [ 15, 20 ],
//   [ 21 ]
// ]
console.log(deoblique(test2));
// [
//   [ 0, 1, 2, 3 ],
//   [ 6, 7, 8, 9 ],
//   [ 12, 13, 14, 15 ],
//   [ 18, 19, 20, 21 ]
// ]
var test3 = oblique([
    [0, 1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29, 30, 31],
    [32, 33, 34, 35, 36, 37, 38, 39],
    [40, 41, 42, 43, 44, 45, 46, 47],
    [48, 49, 50, 51, 52, 53, 54, 55],
    [56, 57, 58, 59, 60, 61, 62, 63],
]);
console.log(test3);
// [
//   [ 0 ],
//   [ 1, 8 ],
//   [ 2, 9, 16 ],
//   [ 3, 10, 17, 24 ],
//   [ 4, 11, 18, 25, 32 ],
//   [ 5, 12, 19, 26, 33, 40 ],
//   [
//      6, 13,
//     20, 27,
//     34, 41,
//     48
//   ],
//   [
//      7, 14, 21,
//     28, 35, 42,
//     49, 56
//   ],
//   [
//     15, 22,
//     29, 36,
//     43, 50,
//     57
//   ],
//   [ 23, 30, 37, 44, 51, 58 ],
//   [ 31, 38, 45, 52, 59 ],
//   [ 39, 46, 53, 60 ],
//   [ 47, 54, 61 ],
//   [ 55, 62 ],
//   [ 63 ]
// ]
console.log(deoblique(test3));
// [
//   [
//     0, 1, 2,
//     3, 4, 5,
//     6, 7
//   ],
//   [
//      8,  9, 10,
//     11, 12, 13,
//     14, 15
//   ],
//   [
//     16, 17, 18,
//     19, 20, 21,
//     22, 23
//   ],
//   [
//     24, 25, 26,
//     27, 28, 29,
//     30, 31
//   ],
//   [
//     32, 33, 34,
//     35, 36, 37,
//     38, 39
//   ],
//   [
//     40, 41, 42,
//     43, 44, 45,
//     46, 47
//   ],
//   [
//     48, 49, 50,
//     51, 52, 53,
//     54, 55
//   ],
//   [
//     56, 57, 58,
//     59, 60, 61,
//     62, 63
//   ]
// ]
