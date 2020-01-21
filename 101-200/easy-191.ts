import { promises } from "fs";

const countWords = async () => {
	const fileContents = await promises.readFile("./easy-191-data.txt", "utf-8");
	const lines = fileContents.split("\r\n");
	const startLine = lines.findIndex(line => line.startsWith("*** START")) + 1;
	const endLine = lines.findIndex(line => line.startsWith("*** END"));
	const bookContents = lines.slice(startLine, endLine).join("\n");
	const wordMap: { [word: string]: number } = {};
	bookContents.split(/[ \n]/).forEach(word => {
		if (word && wordMap[word]) {
			wordMap[word]++;
		} else {
			wordMap[word] = 1;
		}
	});
	const sorted = Object.entries(wordMap).sort((a, b) => b[1] - a[1]);
	console.log(sorted);
};

countWords();
