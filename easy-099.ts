import { promises } from "fs";

const countAlphabeticalWords = async (path: string) => {
	const fileContents = await promises.readFile(path, "utf-8");
	return fileContents
		.split("\r\n")
		.filter(word => word === [...word].sort().join("")).length;
};

(async () =>
	console.log(await countAlphabeticalWords("./easy-080-data.txt")))();
