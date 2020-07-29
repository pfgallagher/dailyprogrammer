/*
	This appears to be working correctly. That said, it's a mostly-naive brute
	force solution, so it's not very efficient.
*/

type LetterMap = { [letter: string]: number };

const extractLetters = (chars: string[]): LetterMap => {
	const letterMap: LetterMap = {};
	chars.forEach(char => {
		if (!letterMap.hasOwnProperty(char)) {
			letterMap[char] = 0;
		}
	});
	return letterMap;
};

const distributeDigitsToLetters = (
	letterMap: LetterMap,
	combo: string,
): LetterMap => {
	Object.keys(letterMap).forEach((letter, i) => {
		letterMap[letter] = parseInt(combo[i], 10);
	});
	return letterMap;
};

function* comboGenerator(letterMap: LetterMap) {
	const numLetters = Object.keys(letterMap).length;
	let start = 0;
	let end = 10 ** numLetters;
	while (start !== end) {
		const startCombo = start.toString();
		if (
			startCombo.length === numLetters &&
			startCombo.length === new Set([...startCombo]).size
		) {
			yield distributeDigitsToLetters(letterMap, start.toString());
		}
		const endCombo = end.toString();
		if (
			endCombo.length === numLetters &&
			endCombo.length === new Set([...endCombo]).size
		) {
			yield distributeDigitsToLetters(letterMap, end.toString());
		}
		start++;
		end--;
	}
}

const substitute = (letterMap: LetterMap, numStr: string): number =>
	parseInt([...numStr].map(n => letterMap[n]).join(""), 10);

const allNumsAreDifferent = (letterMap: LetterMap): boolean =>
	new Set(Object.values(letterMap)).size === Object.keys(letterMap).length;

const isValidSolution = (
	letterMap: LetterMap,
	addends: string[],
	sum: string,
): boolean => {
	const [substitutedAddends, substitutedSum] = [
		addends.map(addend => substitute(letterMap, addend)),
		substitute(letterMap, sum),
	];
	if (
		substitutedAddends.some(
			(substitutedAddend, i) =>
				substitutedAddend.toString().length !== addends[i].length,
		) ||
		substitutedSum.toString().length !== sum.length
	) {
		return false;
	}
	return substitutedAddends.reduce((a, c) => a + c, 0) === substitutedSum;
};

const cryptarithm = (input: string): LetterMap | "N/A" => {
	const split = input.split(/ \+ | == /g);
	const letterMap = extractLetters([...split.join("")]);
	const [addends, sum] = [split.slice(0, -1), split[split.length - 1]];
	for (const possibleSolution of comboGenerator(letterMap)) {
		if (isValidSolution(possibleSolution, addends, sum)) {
			return possibleSolution;
		}
	}
	return "N/A";
};

console.log(cryptarithm("SEND + MORE == MONEY"));
// { S: 9, E: 5, N: 6, D: 7, M: 1, O: 0, R: 8, Y: 2 }
// console.log(cryptarithm("THIS + IS + HIS == CLAIM"));
// { T: 9, H: 8, I: 5, S: 2, C: 1, L: 0, A: 7, M: 6
// console.log(cryptarithm("WHAT + WAS + THY == CAUSE"));
// { W: 9, H: 2, A: 0, T: 6, S: 3, Y: 5, C: 1, U: 7, E: 4 }
// console.log(cryptarithm("TEN + HERONS + REST + NEAR + NORTH + SEA + SHORE + AS + TAN + TERNS + SOAR + TO + ENTER + THERE + AS + HERONS + NEST + ON + STONES + AT + SHORE + THREE + STARS + ARE + SEEN + TERN + SNORES + ARE + NEAR == SEVVOTH"))
// { T: 9, E: 5, N: 7, H: 3, R: 6, O: 4, S: 1, A: 2, V: 8 }
