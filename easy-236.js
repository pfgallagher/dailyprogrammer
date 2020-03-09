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
var tetrominoOptions = ["O", "I", "S", "Z", "L", "J", "T"];
var generateTetrominos = function () {
    var selectedTetrominos = [];
    while (selectedTetrominos.length < 50) {
        var shuffled = util_1.shuffle(__spread(tetrominoOptions));
        shuffled.forEach(function (tetromino) {
            if (selectedTetrominos.length < 50) {
                selectedTetrominos.push(tetromino);
            }
        });
    }
    return selectedTetrominos.join("");
};
var areValidTetrominos = function (tetrominos) {
    return util_1.chunkArr(__spread(tetrominos), 7).every(function (tetrominoArr) {
        return tetrominoArr.every(function (tetromino) {
            return tetrominoArr.indexOf(tetromino) === tetrominoArr.lastIndexOf(tetromino);
        });
    });
};
var generatedTetrominos = generateTetrominos();
console.log(generatedTetrominos);
console.log(areValidTetrominos(generatedTetrominos));
