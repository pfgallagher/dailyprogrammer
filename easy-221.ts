const horizToVert = (word: string): string[] => [...word].map(char => char);

function padWord(word: string, n: number): string;
function padWord(wordArr: string[], n: number): string[];
function padWord(wordOrWordArr: string | string[], n: number) {
	const pad = (word: string): string => `${" ".repeat(n)}${word}`;
	if (Array.isArray(wordOrWordArr)) {
		return wordOrWordArr.map(word => pad(word));
	}
	return pad(wordOrWordArr);
}

const wordSnake = (input: string) => {
	const wordArr = input.split(" ");
	const result: Array<string | string[]> = [wordArr[0]];
	let padLength = wordArr[0].length - 1;
	wordArr.slice(1).forEach((word, i) => {
		if (!(i % 2)) {
			result.push(padWord(horizToVert(word.slice(1)), padLength));
		} else {
			result.push(padWord(word, padLength));
			padLength += word.length - 1;
		}
	});
	return result.flat().join("\n");
};

console.log(
	wordSnake("SHENANIGANS SALTY YOUNGSTER ROUND DOUBLET TERABYTE ESSENCE"),
);

console.log(
	wordSnake("DELOREAN NEUTER RAMSHACKLE EAR RUMP PALINDROME EXEMPLARY YARD"),
);

console.log(
	wordSnake(
		"CAN NINCOMPOOP PANTS SCRIMSHAW WASTELAND DIRK KOMBAT TEMP PLUNGE ESTER REGRET TOMBOY",
	),
);

console.log(
	wordSnake(
		"NICKEL LEDERHOSEN NARCOTRAFFICANTE EAT TO OATS SOUP PAST TELEMARKETER RUST THINGAMAJIG GROSS SALTPETER REISSUE ELEPHANTITIS",
	),
);
