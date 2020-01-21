import { strPermutations } from "../lib/util";

/* 
	As the problem specifies, this is a repeat of easy-012. My original
	solution already satisified the bonus challenges, and I've already converted 
	it to TypeScript. Not too much more I could do for this one. 
*/

console.log(strPermutations("baz")); // ["baz", "bza", "abz", "azb", "zba", "zab"]
console.log(strPermutations("daily"));
console.log(strPermutations("ab")); // ["ab", "ba"]
console.log(strPermutations("abbccc")); // ["ab", "ba"]
console.log(strPermutations("foo")); // ["foo", "ofo", "oof"]
