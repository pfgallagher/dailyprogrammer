import { combinations } from "./lib/util";

const recursivePermutations = (
	arrs: string[][],
	result: string[] = [],
): string[] => {
	if (!arrs.length) {
		return result;
	}
	arrs.sort((a, b) => a.length - b.length);
	const nextArr = arrs.pop() || [];
	if (!result.length) {
		result = nextArr;
	} else {
		result = result.flatMap(el => nextArr.map(innerEl => el.concat(innerEl)));
	}
	return recursivePermutations(arrs, result);
};

const possiblePairs = (selection: string[]) =>
	combinations(selection, 2).map(el => el.join(""));

const pairwiseTest = (optionArrs: string[][]): number => {
	const result: string[] = [];
	const permutations = recursivePermutations(optionArrs);
	const potentialPairs = new Set(
		permutations.flatMap(permutation => possiblePairs([...permutation])),
	);
	while (potentialPairs.size) {
		const numMatchingPairsForPermutation = permutations.map(permutation =>
			possiblePairs([...permutation]).reduce(
				(a, c) => a + (potentialPairs.has(c) ? 1 : 0),
				0,
			),
		);
		const mostPairsIdx = numMatchingPairsForPermutation.findIndex(
			(el, i, arr) => el === Math.max(...arr),
		);
		if (mostPairsIdx >= 0) {
			const correspondingPermutation = permutations[mostPairsIdx];
			result.push(correspondingPermutation);
			possiblePairs([...correspondingPermutation]).forEach(possiblePair => {
				potentialPairs.delete(possiblePair);
			});
			permutations.splice(mostPairsIdx, 1);
		}
	}
	return result.length;
};

console.log(
	pairwiseTest([
		["0", "1"],
		["A", "B", "C"],
		["D", "E", "F", "G"],
	]),
);
// 12
console.log(
	pairwiseTest([
		["0", "1", "2", "3"],
		["A", "B", "C", "D"],
		["E", "F", "G", "H", "I"],
	]),
);
// 20
console.log(
	pairwiseTest([
		["0", "1", "2", "3", "4"],
		["A", "B", "C", "D", "E"],
		["F", "G", "H", "I"],
		["J", "K", "L"],
	]),
);
// 30
