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
            set.add(splicedStr.concat(el).join(""));
        });
    });
    return __spread(set);
};
exports.combinations = function (options, length) {
    if (length === 1) {
        return options.map(function (option) { return [option]; });
    }
    var combos = [];
    options.forEach(function (option, i) {
        var subCombos = exports.combinations(options.slice(i + 1), length - 1);
        subCombos.forEach(function (subCombo) {
            combos.push([option].concat(subCombo));
        });
    });
    return combos;
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
exports.transpose = function (arr) {
    var transposed = __spread(Array(Math.max.apply(Math, __spread(arr.map(function (el) { return el.length; }))))).map(function () { return []; });
    arr.forEach(function (rowOrCol) {
        rowOrCol.forEach(function (cell, i) {
            transposed[i].push(cell);
        });
    });
    return transposed;
};
exports.mean = function (dataArr) {
    return dataArr.reduce(function (acc, cur) { return acc + cur; }, 0) / dataArr.length;
};
exports.variance = function (dataArr) {
    var dataMean = exports.mean(dataArr);
    return (dataArr.reduce(function (acc, cur) { return acc + Math.pow((dataMean - cur), 2); }, 0) /
        dataArr.length);
};
exports.standardDeviation = function (dataArr) {
    return Math.sqrt(exports.variance(dataArr));
};
exports.shuffle = function (input) {
    var _a;
    var shuffledInput = input;
    for (var i = 0; i < input.length; i++) {
        var randomI = Math.floor(Math.random() * i);
        _a = __read([
            shuffledInput[randomI],
            shuffledInput[i],
        ], 2), shuffledInput[i] = _a[0], shuffledInput[randomI] = _a[1];
    }
    return shuffledInput;
};
exports.gcd = function (a, b) {
    return b > 0 ? exports.gcd(b, a % b) : a;
};
exports.lcm = function (a, b) { return (a * b) / exports.gcd(a, b); };
exports.lcmOfArray = function (arr) {
    return arr.reduce(function (acc, cur) { return exports.lcm(acc, cur); });
};
exports.isPrime = function (num) {
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (!(num % i)) {
            return false;
        }
    }
    return true;
};
exports.primeFactorialize = function (num) {
    var factors = [];
    for (var i = 2; i <= num; i++) {
        while (exports.isPrime(i) && !(num % i)) {
            factors.push(i);
            num /= i;
        }
    }
    return factors;
};
