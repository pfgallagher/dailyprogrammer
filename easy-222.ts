type SplitWords = Array<[string, string, string]>;

const calcAlphaVal = (char: string): number => char.charCodeAt(0) - 64;

const weighSplitWord = (word: SplitWords[number]): [number, number] => {
	let leftVal = 0;
	let rightVal = 0;
	const [left, splitChar, right] = word;
	for (let i = 0; i <= left.length - 1; i++) {
		leftVal += (left.length - i) * calcAlphaVal(left[i]);
	}
	for (let i = 0; i <= right.length - 1; i++) {
		rightVal += (i + 1) * calcAlphaVal(right[i]);
	}
	return [leftVal, rightVal];
};

const findSplitCombos = (word: string): SplitWords => {
	const combos: SplitWords = [];
	for (let i = 0; i < word.length - 1; i++) {
		combos.push([word.slice(0, i), word.slice(i, i + 1), word.slice(i + 1)]);
	}
	return combos.filter(arr => arr.every(el => el));
};

const balanceWord = (word: string): string => {
	const splitCombos = findSplitCombos(word);
	for (const splitWord of splitCombos) {
		const weight = weighSplitWord(splitWord);
		if (weight[0] === weight[1]) {
			return `${splitWord.join(" ")} - ${weight[0]}`;
		}
	}
	return `${word} DOES NOT BALANCE`;
};

console.log(balanceWord("STEAD"));
// S T EAD - 19
console.log(balanceWord("CONSUBSTANTIATION"));
// CONSUBST A NTIATION - 456
console.log(balanceWord("WRONGHEADED"));
// WRO N GHEADED - 120
console.log(balanceWord("UNINTELLIGIBILITY"));
// UNINTELL I GIBILITY - 521
console.log(balanceWord("SUPERGLUE"));
// SUPERGLUE DOES NOT BALANCE
