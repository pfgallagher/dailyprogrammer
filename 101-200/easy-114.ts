import { promises } from "fs";

const countCharsInOrder = (wordOne: string[], wordTwo: string[]): number =>
	wordOne.reduce((acc, cur, i) => (cur === wordTwo[i] ? acc + 1 : acc), 0);

const wordLadder = (word: string, wordList: string[]): string[] =>
	wordList.filter(
		listWord => countCharsInOrder([...word], [...listWord]) === word.length - 1,
	);

(async () => {
	const wordList = (await promises.readFile(
		"./easy-114-data.txt",
		"utf-8",
	)).split("\r\n");
	console.log(wordLadder("puma", wordList)); // duma, pima, puja, pula, pump, puna, pupa
})();
