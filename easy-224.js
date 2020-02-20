"use strict";
exports.__esModule = true;
var util_1 = require("./lib/util");
var shuffleInput = function (input) {
    return util_1.shuffle(input.split(" ")).join(" ");
};
console.log(shuffleInput("1 2 3 4 5 6 7 8"));
console.log(shuffleInput("apple blackberry cherry dragonfruit grapefruit kumquat mango nectarine persimmon raspberry raspberry"));
console.log(shuffleInput("a e i o u"));
