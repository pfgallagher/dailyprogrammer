"use strict";
exports.__esModule = true;
var range = function (min, max) {
    return Array(max - min + 1)
        .fill(0)
        .map(function (_, idx) { return idx + min; });
};
var createChessboard = function (height, width) {
    return range(0, height - 1)
        .map(function (_, rowIdx) {
        return range(0, width - 1).map(function (_, squareIdx) {
            return (rowIdx + squareIdx) % 2 ? "⬛️" : "⬜️";
        });
    })
        .join("\n");
};
console.log(createChessboard(3, 8));
console.log("\n");
console.log(createChessboard(2, 5));
console.log("\n");
console.log(createChessboard(8, 8));
