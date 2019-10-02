import { promises } from "fs";
const [path] = process.argv.slice(2);

const calcMostCommonWords = (wordList: string[]): string[] => {
	const wordObj: { [word: string]: number } = {};
	wordList.forEach(word => {
		const formattedWord = word.toLowerCase();
		const isWordRegex = /[A-z]+/g;
		if (wordObj[formattedWord] && isWordRegex.test(formattedWord)) {
			wordObj[formattedWord]++;
		} else if (isWordRegex.test(formattedWord)) {
			wordObj[formattedWord] = 1;
		}
	});
	const sorted = Object.keys(wordObj).sort((a, b) => wordObj[a] - wordObj[b]);
	return sorted.slice(0, 3);
};

const calcMostCommonLetters = (letterList: string[]): string[] => {
	const letterObj: { [letter: string]: number } = {};
	letterList.forEach(letter => {
		const formattedLetter = letter.toLowerCase();
		const isLetterRegex = /[a-z]+/gi;
		if (letterObj[formattedLetter] && isLetterRegex.test(formattedLetter)) {
			letterObj[formattedLetter]++;
		} else if (isLetterRegex.test(formattedLetter)) {
			letterObj[formattedLetter] = 1;
		}
	});
	const sorted = Object.keys(letterObj).sort(
		(a, b) => letterObj[a] - letterObj[b],
	);
	return sorted.slice(0, 3);
};

const analyzeText = async (filePath: string): Promise<void> => {
	const fileContents = await promises.readFile(filePath, "utf-8");
	const words = fileContents.split(/[(\r\n) )]/g).filter(word => word);
	const chars = words.join("").split("");
	const letters = chars.filter(char => /[a-z]/gi.test(char));
	const symbols = chars.filter(char => /[^a-z\d\s]/gi.test(char));
	const mostCommonWords = calcMostCommonWords(words);
	const mostCommonLetters = calcMostCommonLetters(letters);
	const analysis = `
${words.length} words
${letters.length} letters
${symbols.length} symbols
Top three most common words: ${mostCommonWords.join(", ")}
Top three most common letters: ${mostCommonLetters.join(", ")}
`;
	console.log(analysis);
};

analyzeText(path);

