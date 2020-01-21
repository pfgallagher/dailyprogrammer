import { range } from "../lib/util";

const generateLetterRange = (start: string, end: string): string[] => {
	const alphabetArr = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
	const result = [];
	for (let i = alphabetArr.indexOf(start); i <= alphabetArr.indexOf(end); i++) {
		result.push(alphabetArr[i]);
	}
	return result;
};

const generateBijectiveBase26Range = (
	startChar: string,
	endChar: string,
	startNum: number,
	endNum: number,
): string[] =>
	generateLetterRange(startChar, endChar)
		.map(letter => range(startNum, endNum).map(num => `${letter}${num}`))
		.flat();

const splitBijectiveBase26 = (bijectiveBase26: string): [string, number] => [
	[...bijectiveBase26][0],
	parseInt([...bijectiveBase26].slice(1).join(""), 10),
];

const bijectiveBase26ToCoordinates = (
	bijectiveBase26: string,
): [number, number] => {
	const [char, num] = splitBijectiveBase26(bijectiveBase26);
	return [char.charCodeAt(0) - 65, num - 1];
};

const rangeNotationToRange = (rangeNotation: string): string[] => {
	const [first, second] = rangeNotation.split(":");
	const [firstChar, firstNum] = splitBijectiveBase26(first);
	const [secondChar, secondNum] = splitBijectiveBase26(second);
	return generateBijectiveBase26Range(
		firstChar,
		secondChar,
		firstNum,
		secondNum,
	);
};

const generateUniqueRange = (group: string[]): string[] => [
	...new Set(
		group
			.map(el => (el.indexOf(":") > 0 ? rangeNotationToRange(el) : el))
			.flat(),
	),
];

const spreadsheetSelection = (selector: string): string => {
	const groups = selector.split(/([&~])/).filter(el => el !== "&");
	let included = groups;
	let excluded: string[] = [];
	const inclusionIdx = groups.indexOf("~");
	if (inclusionIdx > 0) {
		included = groups.slice(0, inclusionIdx);
		excluded = groups.slice(inclusionIdx + 1);
	}
	const includedRange = generateUniqueRange(included);
	const excludedRange = generateUniqueRange(excluded);
	const finalRange = includedRange.filter(el => !excludedRange.includes(el));
	return finalRange
		.map(el => bijectiveBase26ToCoordinates(el).join(", "))
		.join("\n");
};

console.log(spreadsheetSelection("B1:B3&B4:E10&F1:G1&F4~C5:C8&B2"));
// 1, 0
// 1, 2
// 1, 3
// 1, 4
// 1, 5
// 1, 6
// 1, 7
// 1, 8
// 1, 9
// 2, 3
// 2, 8
// 2, 9
// 3, 3
// 3, 4
// 3, 5
// 3, 6
// 3, 7
// 3, 8
// 3, 9
// 4, 3
// 4, 4
// 4, 5
// 4, 6
// 4, 7
// 4, 8
// 4, 9
// 5, 0
// 6, 0
// 5, 3
