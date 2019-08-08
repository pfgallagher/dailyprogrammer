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
var mapStringify = function (arr) {
    return arr.map(function (el) { return JSON.stringify(el); });
};
var mapParse = function (arr) { return arr.map(function (el) { return JSON.parse(el); }); };
var intersect = function (arrOne, arrTwo) {
    return arrOne.length <= arrTwo.length
        ? mapParse(mapStringify(arrOne).filter(function (el) { return mapStringify(arrTwo).includes(el); }))
        : mapParse(mapStringify(arrTwo).filter(function (el) { return mapStringify(arrOne).includes(el); }));
};
var rectangleIntersection = function (rectOne, rectTwo) {
    var _a = __read(rectOne, 4), xTLOne = _a[0], yTLOne = _a[1], xBROne = _a[2], yBROne = _a[3];
    var _b = __read(rectTwo, 4), xTLTwo = _b[0], yTLTwo = _b[1], xBRTwo = _b[2], yBRTwo = _b[3];
    var rectOneCoords = [[xTLOne, yTLOne]];
    var rectTwoCoords = [[xTLTwo, yTLTwo]];
    for (var i = xTLOne + 1; i <= xBROne; i++) {
        rectOneCoords.push([i, yTLOne], [xTLOne, i], [i, i]);
    }
    for (var i = xTLTwo + 1; i <= xBRTwo; i++) {
        rectTwoCoords.push([i, yTLTwo], [xTLTwo, i], [i, i]);
    }
    var intersection = intersect(rectOneCoords, rectTwoCoords)
        .filter(function (arr, i, coordArr) { return i === 0 || i === coordArr.length - 1; })
        .flat();
    return intersection.length ? intersection : null;
};
console.log(rectangleIntersection([3, 3, 10, 10], [6, 6, 12, 12]));
console.log(rectangleIntersection([4, 4, 5, 5], [6, 6, 10, 10]));
