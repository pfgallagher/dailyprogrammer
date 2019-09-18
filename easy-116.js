"use strict";
exports.__esModule = true;
var util_1 = require("./lib/util");
/*
    As the problem specifies, this is a repeat of easy-012. My original
    solution already satisified the bonus challenges, and I've already converted
    it to TypeScript. Not too much more I could do for this one.
*/
console.log(util_1.strPermutations("baz")); // ["baz", "bza", "abz", "azb", "zba", "zab"]
console.log(util_1.strPermutations("daily"));
console.log(util_1.strPermutations("ab")); // ["ab", "ba"]
console.log(util_1.strPermutations("abbccc")); // ["ab", "ba"]
console.log(util_1.strPermutations("foo")); // ["foo", "ofo", "oof"]
