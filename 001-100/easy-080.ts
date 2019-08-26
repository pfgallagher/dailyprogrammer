import { promises } from "fs";

const alpabeticalSort = (word: string): string =>
	[...word].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0)).join("");

const anagrams = async (
	filePath: string,
	target: string,
): Promise<string[]> => {
	try {
		const fileContents = await promises.readFile(filePath, "utf-8");
		return fileContents
			.split("\r\n")
			.filter(word => alpabeticalSort(word) === alpabeticalSort(target));
	} catch (error) {
		return error;
	}
};

(async () => {
	const foundAnagrams = await anagrams("./easy-080-data.txt", "leprous");
	console.log(foundAnagrams); // ["leprous","pelorus", "sporule"];
})();

(async () => {
	const foundAnagrams = await anagrams("./easy-080-data.txt", "triangle");
	console.log(foundAnagrams); // ["alerting", "altering", "integral", "relating", "tanglier", "triangle"];
})();

(async () => {
	const foundAnagrams = await anagrams("./easy-080-data.txt", "pagers");
	console.log(foundAnagrams); // ["gapers", "gasper", "grapes", "pagers", "parges", "sparge"];
})();

(async () => {
	const foundAnagrams = await anagrams("./easy-080-data.txt", "amblers");
	console.log(foundAnagrams); // ["amblers", "blamers", "lambers", "marbles", "rambles"];
})();
