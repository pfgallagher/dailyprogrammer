const removedLetterCombos = (word: string): string[] => {
	const combos: string[] = [];
	for (let i = 0; i < word.length; i++) {
		const next = [...word];
		next.splice(i, 1);
		combos.push(next.join(""));
	}
	return combos;
};

const wordFunnel = (wordOne: string, wordTwo: string): boolean =>
	removedLetterCombos(wordOne).some(combo => combo === wordTwo);

[
	wordFunnel("leave", "eave") === true,
	wordFunnel("reset", "rest") === true,
	wordFunnel("dragoon", "dragon") === true,
	wordFunnel("eave", "leave") === false,
	wordFunnel("sleet", "lets") === false,
	wordFunnel("skiff", "ski") === false,
].forEach((test, i) => {
	console.assert(test, i.toString());
});
