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
var shannonEntropy = function (input) {
    var inputArr = __spread(input);
    var inputFrequency = util_1.frequency(inputArr);
    return (-1 *
        __spread(new Set(inputArr)).reduce(function (a, c) {
            var probability = inputFrequency[c] / inputArr.length;
            return a + probability * Math.log2(probability);
        }, 0));
};
console.log(shannonEntropy("1223334444"));
// 1.8464393446710154
console.log(shannonEntropy("Hello, world!"));
// 3.180832987205441
console.log(shannonEntropy("122333444455555666666777777788888888"));
// 2.7942086837942446
console.log(shannonEntropy("563881467447538846567288767728553786"));
// 2.7942086837942446
console.log(shannonEntropy("https://www.reddit.com/r/dailyprogrammer"));
// 4.056198332810094
console.log(shannonEntropy("int main(int argc, char *argv[])"));
// 3.8667292966721747
