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
var binaryToEnglish = function (input) {
    return util_1.chunkArr(__spread(input), 8)
        .map(function (arr) { return String.fromCharCode(parseInt(arr.join(""), 2)); })
        .join("");
};
console.log(binaryToEnglish("0100100001100101011011000110110001101111001000000101011101101111011100100110110001100100"));
// Hello World
// These test cases are kind of creepy! lol
console.log(binaryToEnglish("0111000001101100011001010110000101110011011001010010000001110100011000010110110001101011001000000111010001101111001000000110110101100101"));
// please talk to me
console.log(binaryToEnglish("011011000110100101100110011001010010000001110010011010010110011101101000011101000010000001101110011011110111011100100000011010010111001100100000011011000110111101101110011001010110110001111001"));
// life right now is lonely
