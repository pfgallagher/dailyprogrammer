"use strict";
exports.__esModule = true;
exports.range = function (min, max) {
    return Array(max - min + 1)
        .fill(0)
        .map(function (el, idx) { return idx + min; });
};
