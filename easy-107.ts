const charCodeArrsToStrings = (
	charCodeArrs: string[][],
	originalNumStr: string,
): string[] =>
	charCodeArrs
		.filter(
			charCodeArr =>
				charCodeArr.join("") === originalNumStr &&
				charCodeArr.every(charCode => parseInt(charCode, 10) <= 26),
		)
		.map(charCodeArr =>
			charCodeArr
				.map(charCode => String.fromCharCode(parseInt(charCode, 10) + 96))
				.join(""),
		);

const findPossibleCombos = (
	numStr: string,
	memo: string[] = [],
): string[][] => {
	let possibilities = [];
	if (!numStr.length) {
		possibilities.push(memo);
	}
	for (let i = 0, j = Math.min(2, numStr.length); i <= j; i++) {
		const letter = numStr.slice(0, i);
		if (letter) {
			const newMemo = memo ? memo.concat(letter) : [letter];
			possibilities = possibilities.concat(
				findPossibleCombos(numStr.slice(i), newMemo),
			);
		}
	}
	return possibilities;
};

const decode = (numStr: string): string[] =>
	charCodeArrsToStrings(findPossibleCombos(numStr), numStr);

console.log(decode("85121215"));
console.log(decode("123"));
