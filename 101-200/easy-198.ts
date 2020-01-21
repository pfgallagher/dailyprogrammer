const oneToOneDifference = (arrOne: string[], arrTwo: string[]): string => {
	const arrTwoSlice = [...arrTwo];
	return arrOne.reduce((acc, cur) => {
		const arrTwoI = arrTwoSlice.indexOf(cur);
		if (arrTwoI >= 0) {
			arrTwoSlice.splice(arrTwoI, 1);
			return acc;
		}
		return `${acc}${cur}`;
	}, "");
};

const wordsWithEnemies = (wordOne: string, wordTwo: string): string => {
	const wordOneDiff = oneToOneDifference([...wordOne], [...wordTwo]);
	const wordTwoDiff = oneToOneDifference([...wordTwo], [...wordOne]);
	const result = `${wordOneDiff}${wordTwoDiff}`;
	const winner =
		wordOneDiff.length > wordTwoDiff.length
			? wordOne
			: wordTwoDiff.length > wordOneDiff.length
			? wordTwo
			: "tie";
	return `Resulting word: ${result}\nWinner: ${winner}`;
};

console.log(wordsWithEnemies("hat", "cat"));
console.log(wordsWithEnemies("miss", "hiss"));
console.log(wordsWithEnemies("because", "cause"));
console.log(wordsWithEnemies("hello", "below"));
console.log(wordsWithEnemies("hit", "miss"));
console.log(wordsWithEnemies("rekt", "pwn"));
console.log(wordsWithEnemies("combo", "jumbo"));
console.log(wordsWithEnemies("critical", "optical"));
console.log(wordsWithEnemies("isoenzyme", "apoenzyme"));
console.log(wordsWithEnemies("tribesman", "brainstem"));
console.log(wordsWithEnemies("blames", "nimble"));
console.log(wordsWithEnemies("yakuza", "wizard"));
console.log(wordsWithEnemies("longbow", "blowup"));
