import { promises } from "fs";

const countWords = async (
	filePath: string,
): Promise<Array<[string, number]>> => {
	try {
		const countMap = new Map();

		const fileContents = await promises.readFile(filePath, "utf-8");
		const wordArr = fileContents
			.replace(/[".,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
			.split(" ");

		wordArr.forEach(word => {
			if (countMap.has(word)) {
				const curVal = countMap.get(word);
				countMap.set(word, curVal + 1);
			} else {
				countMap.set(word, 1);
			}
		});

		return [...countMap].sort((a, b) => b[1] - a[1]);
	} catch (error) {
		return error;
	}
};

(async () => {
	const count = await countWords("./easy-070-data.txt");
	console.log(count);
})();
