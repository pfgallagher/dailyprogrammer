import { promises } from "fs";
import wrap from "word-wrap";
import { chunkArr } from "./lib/util";

const textIntoColumns = async (
	colNum: number,
	colWidth: number,
	spaceWidth: number,
) => {
	const fileContents = await promises.readFile("./easy-182-data.txt", "utf-8");
	const text = [...fileContents].filter(el => el !== "\n").join("");
	const wrapped = wrap(text, { cut: true, width: colWidth, indent: "" }).split(
		"\n",
	);
	const chunked = chunkArr(
		wrapped,
		Math.ceil(wrapped.length / colNum),
	) as string[][];
	const maxLength = Math.max(...chunked.map(chunkedArr => chunkedArr.length));
	const cols = Array(maxLength)
		.fill("")
		.map<string | string[]>(() => []);
	chunked.forEach(chunkedArr => {
		chunkedArr.forEach((row, i) => {
			const separator = " ".repeat(spaceWidth);
			cols[i] += `${row}${separator}`;
		});
	});
	const result = cols.join("\n");
	await promises.writeFile("./easy-182-result.txt", result);
};

textIntoColumns(4, 25, 4);
