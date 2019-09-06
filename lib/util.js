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
exports.range = function (min, max) {
    return Array(max - min + 1)
        .fill(0)
        .map(function (el, idx) { return idx + min; });
};
exports.strPermutations = function (str) {
    if (str.length === 1) {
        return [str];
    }
    if (str.length === 2) {
        return [str, "" + str[1] + str[0]];
    }
    var set = new Set();
    __spread(str).forEach(function (el, i) {
        var newStr = __spread(str.slice());
        var splicedStr = newStr.splice(i, 1);
        exports.strPermutations(newStr).forEach(function (el) {
            console.log(splicedStr.concat(el).join(""));
            set.add(splicedStr.concat(el).join(""));
        });
    });
    return __spread(set);
};
exports.union = function (arrOne, arrTwo) { return __spread(new Set(__spread(arrOne, arrTwo))); };
exports.intersect = function (arrOne, arrTwo) {
    return arrOne.length <= arrTwo.length
        ? arrOne.filter(function (el) { return arrTwo.includes(el); })
        : arrTwo.filter(function (el) { return arrOne.includes(el); });
};
exports.difference = function (arrOne, arrTwo) {
    return arrTwo.filter(function (el) { return !arrOne.includes(el); });
};
exports.chunkArr = function (arr, size) {
    var newArr = arr.slice();
    var chunk = newArr.splice(0, size);
    return chunk.length ? [chunk].concat(exports.chunkArr(newArr, size)) : newArr;
};
