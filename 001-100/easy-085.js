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
var rowColConverter = function (arr, size) {
    return arr.reduce(function (acc, cur) {
        cur.forEach(function (cell, i) {
            acc[i].push(cell);
        });
        return acc;
    }, Array(size)
        .fill(0)
        .map(function () { return []; }));
};
var nestedArrToSumMap = function (arr) {
    var map = new Map();
    arr.forEach(function (el, i) {
        map.set(el.reduce(function (acc, cur) { return acc + cur; }, 0), i);
    });
    return map;
};
var sortByRowAndCol = function (matrix) {
    var rows = matrix
        .split("\n")
        .map(function (row) { return row.split(" ").map(function (el) { return parseInt(el, 10); }); });
    var columns = rowColConverter(rows, rows.length + 1);
    var rowMap = nestedArrToSumMap(rows);
    var colMap = nestedArrToSumMap(columns);
    var rowSums = __spread(rowMap.keys());
    var colSums = __spread(colMap.keys());
    var sortedRowSums = __spread(rowSums).sort().map(function (row) { return rows[rowMap.get(row)]; });
    var sortedColSums = rowColConverter(__spread(colSums).sort().map(function (column) { return columns[colMap.get(column)]; }), rows.length + 1);
    return "\nRow Sums: " + rowSums.join(", ") + "\nColumn Sums: " + colSums.join(", ") + "\n\nSorted By Rows: \n" + sortedRowSums.map(function (row) { return row.join(" "); }).join("\n") + "\n\nSorted By Columns: \n" + sortedColSums.map(function (column) { return column.join(" "); }).join("\n") + "\n";
};
console.log(sortByRowAndCol("10 5 4 20\n9 33 27 16\n11 6 55 3"));
console.log(sortByRowAndCol("5 58 88 60 11 23 97 48 59 82 95 24 6 67 47\n45 14 36 99 16 70 77 18 43 39 97 54 11 53 98\n85 14 96 66 34 86 95 49 4 49 72 76 45 49 37\n72 88 20 56 37 16 20 97 71 11 91 33 90 5 96\n15 53 54 95 61 93 75 95 51 83 71 70 2 57 83\n54 29 56 80 79 93 40 55 40 14 63 94 77 12 90\n96 97 3 47 2 43 12 2 82 92 1 99 90 13 35\n24 19 54 96 82 96 10 40 62 30 35 16 70 83 64\n59 81 8 84 14 46 32 45 41 35 98 66 87 51 49\n13 49 12 51 34 82 36 77 88 14 84 41 66 18 56\n6 68 82 63 77 72 67 36 85 53 66 70 21 86 80\n40 51 87 5 78 56 99 44 39 48 78 56 19 55 40\n5 94 62 46 85 73 24 67 95 63 42 95 43 53 4\n14 99 7 36 25 65 22 71 20 80 16 10 71 97 23\n99 77 85 53 13 32 37 19 61 32 45 62 25 18 32\n98 79 35 17 26 96 22 3 76 20 81 9 40 95 72\n18 39 55 99 96 63 90 78 77 81 2 99 68 6 84\n53 27 68 43 48 29 27 14 50 29 53 65 5 56 46\n94 36 17 64 2 93 5 95 47 78 90 3 85 26 32\n46 62 70 63 81 6 86 51 44 96 47 83 33 28 28"));
