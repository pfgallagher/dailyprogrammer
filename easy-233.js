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
var box = ["+---+", "|   |", "+---+"];
var emptyBox = ["     ", "     ", "     "];
var fillRows = function (input) {
    return input
        .map(function (row) { return row.map(function (char) { return (char === "*" ? box : emptyBox); }); })
        .map(function (row, i) { return util_1.transpose(row).map(function (row) { return row.join(""); }); })
        .map(function (row) { return row.join("\n"); });
};
var cleanRows = function (input) {
    return input.map(function (row) { return row.replace(/-\+\+-/g, "----").replace(/\|\|/g, "  "); });
};
var strDiff = function (one, two) {
    return __spread(one).map(function (char, i) {
        return char === "+" && two[i] === "+"
            ? "+"
            : char === two[i]
                ? " "
                : char === "+"
                    ? char
                    : two[i];
    })
        .join("");
};
var cleanSides = function (input) {
    return input.map(function (row) { return row.replace(/(?<!-)\+(?!-)/g, "|"); });
};
var asciiHouse = function (input) {
    var cleanedRows = cleanRows(fillRows(input.split("\n").map(function (row) { return __spread(row); })))
        .join("\n")
        .split("\n");
    for (var i = 0; i < cleanedRows.length; i++) {
        var curRow = cleanedRows[i];
        if (i !== 0 && i !== cleanedRows.length - 1) {
            var nextRow = cleanedRows[i + 1];
            if (nextRow) {
                var divider = /\+-+\+/;
                if (divider.test(curRow) && divider.test(nextRow)) {
                    cleanedRows.splice(i, 2, strDiff(curRow, nextRow));
                }
            }
        }
    }
    return cleanSides(cleanedRows).join("\n");
};
console.log(asciiHouse("   *  \n  *** \n******"));
//    *
//   ***
// ******
//                +---+
//                |   |
//           +----+   +----+
//           |             |
// +---------+             +----+
// |                            |
// +----------------------------+
console.log(asciiHouse(" * \n***\n***\n***\n***\n***\n***"));
//  *
// ***
// ***
// ***
// ***
// ***
// ***
//      +---+
//      |   |
// +----+   +----+
// |             |
// |             |
// |             |
// |             |
// |             |
// |             |
// |             |
// |             |
// |             |
// |             |
// |             |
// +-------------+
console.log(asciiHouse("    **\n*** **\n******"));
// 		**
// *** **
// ******
//                     +--------+
//                     |        |
// +-------------+     |        |
// |             |     |        |
// |             +-----+        |
// |                            |
// +----------------------------+
console.log(asciiHouse("***                    ***\n***     **  ***  **    ***\n***   ***************  ***\n***   ***************  ***\n***   ***************  ***\n**************************\n**************************"));
// ***                    ***
// ***     **  ***  **    ***
// ***   ***************  ***
// ***   ***************  ***
// ***   ***************  ***
// **************************
// **************************
// +-------------+                                                                                                    +-------------+
// |             |                                                                                                    |             |
// |             |                         +--------+          +-------------+          +--------+                    |             |
// |             |                         |        |          |             |          |        |                    |             |
// |             |               +---------+        +----------+             +----------+        +---------+          |             |
// |             |               |                                                                         |          |             |
// |             |               |                                                                         |          |             |
// |             |               |                                                                         |          |             |
// |             |               |                                                                         |          |             |
// |             |               |                                                                         |          |             |
// |             +---------------+                                                                         +----------+             |
// |                                                                                                                                |
// |                                                                                                                                |
// |                                                                                                                                |
// +--------------------------------------------------------------------------------------------------------------------------------+
