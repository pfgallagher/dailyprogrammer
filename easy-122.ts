import { promises } from "fs";

const findWordsWithAlphabeticalVowels = async (
	path: string,
): Promise<string[]> => {
	const wordList = await promises.readFile(path, { encoding: "utf-8" });
	return wordList
		.split("\r\n")
		.filter(word => /.*a.*e.*i.*o.*u.*y.*/gi.test(word));
};

(async () => {
	const wordList = await findWordsWithAlphabeticalVowels("./easy-122-data.txt");
	console.log(wordList);
})();
// ['abstemiously', 'adventitiously', 'autoeciously', 'facetiously', 'sacrilegiously']
