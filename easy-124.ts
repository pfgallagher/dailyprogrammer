import { promises } from "fs";
const [path, encoding] = process.argv.slice(2);

const changeLineEncoding = async (
	filePath: string,
	encodingType: string,
): Promise<void> => {
	let fileContents: string | string[] = await promises.readFile(
		filePath,
		"utf-8",
	);
	fileContents = fileContents
		.split("\r\n")
		.join("\n")
		.split("\n");
	if (encodingType === "Unix") {
		fileContents = fileContents.join("\n");
	} else if (encodingType === "Windows") {
		fileContents = fileContents.join("\r\n");
	}
	console.log(fileContents);
};

changeLineEncoding(path, encoding);
