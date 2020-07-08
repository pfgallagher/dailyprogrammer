import { strPermutations, range, combinations } from "../lib/util";

const strRange = (length: number): string[] =>
	range(0, length - 1).map(dig => dig.toString());

const findPermutations = (permutationRange: number, index: number): string =>
	strPermutations(strRange(permutationRange))[index - 1];

const findCombinations = (
	combinationRange: number,
	length: number,
	index: number,
): string =>
	combinations(strRange(combinationRange), length).map(el => el.join(""))[
		index - 1
	];

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
