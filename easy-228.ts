const isAlphabeticalWord = (word: string): boolean => {
	const charCodes = [...word].map(char => char.charCodeAt(0));
	const sortedCharCodes = [...charCodes].sort((a, b) => a - b);
	return charCodes.every((charCode, i) => charCode === sortedCharCodes[i]);
};

const isReverseAlphabeticalWord = (word: string): boolean =>
	isAlphabeticalWord([...word].reverse().join(""));

const determineAlphabeticalWords = (input: string): string => {
	const determinedWords = input.split("\n").map(word => {
		if (isAlphabeticalWord(word)) {
			return `${word} IN ORDER`;
		}
		if (isReverseAlphabeticalWord(word)) {
			return `${word} IN REVERSE ORDER`;
		}
		return `${word} NOT IN ORDER`;
	});
	return determinedWords.join("\n");
};

console.log(determineAlphabeticalWords("almost\ncereal"));
// almost IN ORDER
// cereal NOT IN ORDER

console.log(
	determineAlphabeticalWords(
		"billowy\nbiopsy\nchinos\ndefaced\nchintz\nsponged\nbijoux\nabhors\nfiddle\nbegins\nchimps\nwronged",
	),
);
// billowy IN ORDER
// biopsy IN ORDER
// chinos IN ORDER
// defaced NOT IN ORDER
// chintz IN ORDER
// sponged IN REVERSE ORDER
// bijoux IN ORDER
// abhors IN ORDER
// fiddle NOT IN ORDER
// begins IN ORDER
// chimps IN ORDER
// wronged IN REVERSE ORDER
