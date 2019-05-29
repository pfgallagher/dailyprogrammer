import { promises } from "fs";

interface ICount {
	lines: number;
	words: number;
}

const countLinesAndWords = async (filePath: string): Promise<ICount> => {
	try {
		const fileContents = await promises.readFile(filePath, "utf-8");
		const lineCount = fileContents.split("\n").length;
		const wordCount = [...fileContents]
			.filter(el => el !== "\n")
			.join("")
			.split(" ").length;
		return {
			lines: lineCount,
			words: wordCount,
		};
	} catch (error) {
		return error;
	}
};

(async () => {
	const count = await countLinesAndWords("./easy-037-data.txt");
	console.log(count);
})();
