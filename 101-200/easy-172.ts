import { promises } from "fs";
import { chunkArr } from "../lib/util";

const createBitmapHeader = (input: string): string => {
	const format = "P1";
	const bitmapFontWidth = input.length * 5;
	const bitmapFontHeight = 7;
	return `${format}\n${bitmapFontWidth} ${bitmapFontHeight}\n`;
};

const getCharToBitsMap = async () => {
	const rawCharToBitsMap = await promises.readFile(
		"./easy-172-data.txt",
		"utf-8",
	);
	const formattedCharToBitsMap = Object.fromEntries(
		(chunkArr(
			rawCharToBitsMap.split("\n"),
			8,
		) as string[][]).map(([char, ...rest]) => [char, rest]),
	);
	formattedCharToBitsMap[" "] = Array(7).fill("0 0 0 0 0");
	return formattedCharToBitsMap;
};

const textToBitmap = async (input: string): Promise<void> => {
	const charToBitsMap = await getCharToBitsMap();
	const bitmappedText = [...input.toUpperCase()].map(
		char => charToBitsMap[char],
	);
	const textArr = Array(7)
		.fill("")
		.map((): string[] => []);
	bitmappedText.forEach(char =>
		char.forEach((row, i) => {
			textArr[i].push(row);
		}),
	);
	const writableBits = textArr.map(row => row.join(" ")).join("\n");
	const completeBitmap = `${createBitmapHeader(input)}${writableBits}`;
	await promises.writeFile("easy-172-result.pbm", completeBitmap);
};

textToBitmap("hello world");
