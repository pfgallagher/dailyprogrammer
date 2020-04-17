"use strict";
exports.__esModule = true;
var util_1 = require("./lib/util");
var strRange = function (length) {
    return util_1.range(0, length - 1).map(function (dig) { return dig.toString(); });
};
var findPermutations = function (permutationRange, index) {
    return util_1.strPermutations(strRange(permutationRange))[index - 1];
};
var findCombinations = function (combinationRange, length, index) {
    return util_1.combinations(strRange(combinationRange), length).map(function (el) { return el.join(""); })[index - 1];
};
console.log(findPermutations(3, 3));
// 102
console.log(findPermutations(6, 240));
// 154320
console.log(findPermutations(7, 3240));
// 4265310
console.log(findCombinations(6, 3, 3));
// 014
console.log(findCombinations(6, 3, 6));
// 024
console.log(findCombinations(8, 3, 24));
// 125
console.log(findCombinations(9, 4, 112));
// 3456
