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
var countNonogram = function (cells) {
    var count = [0];
    cells.forEach(function (cell) {
        var lastCounter = count[count.length - 1];
        if (cell === "*") {
            count[count.length - 1]++;
        }
        else if (lastCounter && cell === " ") {
            count.push(0);
        }
    });
    return count.filter(function (n) { return n; });
};
var formatNonogram = function (nonogramCountArr, type) {
    var mostRows = Math.max.apply(Math, __spread(nonogramCountArr.map(function (el) { return el.length; })));
    var withBlanks = Array(mostRows)
        .fill(0)
        .map(function () { return []; });
    nonogramCountArr.forEach(function (el) {
        for (var i = 0; i < mostRows; i++) {
            var count = el[i];
            if (count) {
                withBlanks[i].push(count.toString());
            }
            else {
                withBlanks[i].push(" ");
            }
        }
    });
    var formatted = withBlanks.map(function (formattedArr) {
        return formattedArr.map(function (cell) { return cell.padEnd(2); });
    });
    return type === "rows"
        ? util_1.transpose(formatted)
            .map(function (row) { return row.reverse().join(" "); })
            .join("\n")
        : formatted
            .map(function (col) { return col.join(" "); })
            .reverse()
            .join("\n");
};
var nonogram = function (input) {
    var rows = input.split("\n").map(function (row) { return __spread(row); });
    return "Columns:\n" + formatNonogram(util_1.transpose(rows).map(function (col) { return countNonogram(col); }), "columns") + "\nRows:\n" + formatNonogram(rows.map(function (row) { return countNonogram(row); }), "rows") + "\n";
};
console.log(nonogram("    *\n   **\n  * *\n *  *\n*****"));
// Columns:
//       1  1
// 1  2  1  1  5
// Rows:
//    1
//    2
// 1  1
// 1  1
//    5
console.log(nonogram("    ** *  \n   *****  \n  ******  \n ******** \n**********\n *      * \n * ** * * \n * ** * * \n * **   * \n ******** "));
// Columns:
//                   1
//       1  4  4  1  2  1
// 1  7  3  4  5  5  4  5  7  1
// Rows:
//       1  2
//          5
//          6
//          8
//          10
//       1  1
// 1  1  2  1
// 1  1  2  1
//    1  2  1
//          8
console.log(nonogram("     ***       \n  **** **      \n ****** ****** \n * **** **    *\n ****** ***  **\n ****** *******\n****** ********\n *   **********\n *   **********\n *   **********\n * * ****  ****\n *** ****  ****\n     ****  ****\n     ****  ****\n     ****  ****"));
// Columns:
//       1           8
//       3  2        4  9        6  10 10 11
// 1  10 2  6  6  15 1  2  14 8  1  1  1  1  12
// Rows:
//          3
//       2  4
//       6  6
// 1  2  4  1
//    2  3  6
//       7  6
//       8  6
//       10 1
//       10 1
//       10 1
// 4  4  1  1
//    4  4  3
//       4  4
//       4  4
//       4  4
