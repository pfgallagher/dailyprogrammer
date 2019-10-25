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
var fallingSand = function (n, input) {
    var startGrid = input.split("\n").map(function (el) { return __spread(el); });
    var afterGrid = startGrid
        .reduce(function (acc, curRow, rowI) {
        var belowRow = rowI < n - 1 ? acc[rowI + 1] : false;
        if (belowRow) {
            curRow.forEach(function (cell, cellI) {
                var belowCell = belowRow[cellI];
                if (cell === "." && belowCell === " ") {
                    curRow.splice(cellI, 1, " ");
                    belowRow.splice(cellI, 1, ".");
                }
            });
        }
        return acc;
    }, startGrid)
        .map(function (row) { return row.join(""); })
        .join("\n");
    return afterGrid;
};
console.log(fallingSand(5, ".....\n  #  \n#    \n     \n    ."));
// .
// . #
// #
//     .
//  . ..
console.log(fallingSand(5, ".....\n  #  \n#    \n     \n    .") ===
    "  .  \n. #  \n#    \n    .\n . ..");
