import { promises } from "fs";

const twitterHandles = async () => {
	const fileContents = await promises.readFile("./easy-185-data.txt", "utf-8");
	const splitContents = fileContents.split("\r\n");
	const sorted = splitContents
		.filter(el => el.startsWith("at"))
		.map(el => el.replace("at", "@"))
		.sort((a, b) => a.length - b.length);
	const shortest = sorted.slice(0, 10);
	const longest = sorted.slice(-10);
	return `Shortest: ${shortest.join(", ")}\n\nLongest: ${longest.join(", ")}`;
};

(async () => {
	const result = await twitterHandles();
	console.log(result);
})();
