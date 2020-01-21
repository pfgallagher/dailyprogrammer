"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) { return o; }
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) { ar.push(r.value); }
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i.return)) { m.call(i); }
        }
        finally { if (e) { throw e.error; } }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) { ar = ar.concat(__read(arguments[i])); }
    return ar;
};
exports.__esModule = true;
var util_1 = require("../lib/util");
var generateLetterRange = function (start, end) {
    var alphabetArr = __spread("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    var result = [];
    for (var i = alphabetArr.indexOf(start); i <= alphabetArr.indexOf(end); i++) {
        result.push(alphabetArr[i]);
    }
    return result;
};
var generateBijectiveBase26Range = function (startChar, endChar, startNum, endNum) {
    return generateLetterRange(startChar, endChar)
        .map(function (letter) { return util_1.range(startNum, endNum).map(function (num) { return "" + letter + num; }); })
        .flat();
};
var splitBijectiveBase26 = function (bijectiveBase26) { return [
    __spread(bijectiveBase26)[0],
    parseInt(__spread(bijectiveBase26).slice(1).join(""), 10),
]; };
var bijectiveBase26ToCoordinates = function (bijectiveBase26) {
    var _a = __read(splitBijectiveBase26(bijectiveBase26), 2), char = _a[0], num = _a[1];
    return [char.charCodeAt(0) - 65, num - 1];
};
var rangeNotationToRange = function (rangeNotation) {
    var _a = __read(rangeNotation.split(":"), 2), first = _a[0], second = _a[1];
    var _b = __read(splitBijectiveBase26(first), 2), firstChar = _b[0], firstNum = _b[1];
    var _c = __read(splitBijectiveBase26(second), 2), secondChar = _c[0], secondNum = _c[1];
    return generateBijectiveBase26Range(firstChar, secondChar, firstNum, secondNum);
};
var generateUniqueRange = function (group) { return __spread(new Set(group
    .map(function (el) { return (el.indexOf(":") > 0 ? rangeNotationToRange(el) : el); })
    .flat())); };
var spreadsheetSelection = function (selector) {
    var groups = selector.split(/([&~])/).filter(function (el) { return el !== "&"; });
    var included = groups;
    var excluded = [];
    var inclusionIdx = groups.indexOf("~");
    if (inclusionIdx > 0) {
        included = groups.slice(0, inclusionIdx);
        excluded = groups.slice(inclusionIdx + 1);
    }
    var includedRange = generateUniqueRange(included);
    var excludedRange = generateUniqueRange(excluded);
    var finalRange = includedRange.filter(function (el) { return !excludedRange.includes(el); });
    return finalRange
        .map(function (el) { return bijectiveBase26ToCoordinates(el).join(", "); })
        .join("\n");
};
console.log(spreadsheetSelection("B1:B3&B4:E10&F1:G1&F4~C5:C8&B2"));
// 1, 0
// 1, 2
// 1, 3
// 1, 4
// 1, 5
// 1, 6
// 1, 7
// 1, 8
// 1, 9
// 2, 3
// 2, 8
// 2, 9
// 3, 3
// 3, 4
// 3, 5
// 3, 6
// 3, 7
// 3, 8
// 3, 9
// 4, 3
// 4, 4
// 4, 5
// 4, 6
// 4, 7
// 4, 8
// 4, 9
// 5, 0
// 6, 0
// 5, 3
