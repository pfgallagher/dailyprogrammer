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
var brailleMap = {
    "O.....": "a",
    "O.O...": "b",
    "OO....": "c",
    "OO.O..": "d",
    "O..O..": "e",
    "OOO...": "f",
    "OOOO..": "g",
    "O.OO..": "h",
    ".OO...": "i",
    ".OOO..": "j",
    "O...O.": "k",
    "O.O.O.": "l",
    "OO..O.": "m",
    "OO.OO.": "n",
    "O..OO.": "o",
    "OOO.O.": "p",
    "OOOOO.": "q",
    "O.OOO.": "r",
    ".OO.O.": "s",
    ".OOOO.": "t",
    "O...OO": "u",
    "O.O.OO": "v",
    ".OOO.O": "w",
    "OO..OO": "x",
    "OO.OOO": "y",
    "O..OOO": "z"
};
var transcribeBraille = function (input) {
    var rows = input.split("\n").map(function (row) { return row.split(" "); });
    var transposedArr = __spread(Array(rows[0].length)).map(function () { return []; });
    rows.forEach(function (row) {
        row.forEach(function (cell, i) {
            transposedArr[i].push(cell);
        });
    });
    return transposedArr
        .map(function (row) { return row.join(""); })
        .map(function (cell) { return brailleMap[cell]; })
        .join("");
};
console.log(transcribeBraille("O. O. O. O. O. .O O. O. O. OO\nOO .O O. O. .O OO .O OO O. .O\n.. .. O. O. O. .O O. O. O. .."));
// helloworld
