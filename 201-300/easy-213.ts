const digitWordMap: { [digit: string]: string } = {
	1: "One",
	2: "Two",
	3: "Three",
	4: "Four",
	5: "Five",
	6: "Six",
	7: "Seven",
	8: "Eight",
	9: "Nine",
};

const twoDigitMap: { [char: string]: string } = {
	A: "Atta",
	B: "Bibbity",
	C: "City",
	D: "Dickety",
	E: "Ebbity",
	F: "Fleventy",
};

const fourDigitMap: { [char: string]: string } = {
	A: "Atta-bitey",
	B: "Bibbity-bitey",
	C: "City-bitey",
	D: "Dickety-bitey",
	E: "Ebbity-bitey",
	F: "Fleventy-bitey",
};

const isDigit = (input: string): boolean => /\d/.test(input);

const hexPronunciation = (input: string): string => {
	const hexValue = input.slice(2);
	if (hexValue.length === 2) {
		return `${twoDigitMap[hexValue[0]]}-${
			digitWordMap[hexValue[1]]
		}`.toLowerCase();
	} else if (hexValue.length === 4) {
		let addBitey = false;
		let [firstHalf, secondHalf] = [hexValue.slice(0, 2), hexValue.slice(2)];
		if (isDigit(firstHalf[1])) {
			firstHalf = fourDigitMap[firstHalf[0]];
		} else {
			addBitey = true;
			firstHalf = `${twoDigitMap[firstHalf[0]]}-bee`;
		}
		if (isDigit(secondHalf[1])) {
			secondHalf = `${twoDigitMap[secondHalf[0]]}-${
				digitWordMap[secondHalf[1]]
			}`;
		} else {
			secondHalf = `${twoDigitMap[secondHalf[0]]}-bee`;
		}
		return `${firstHalf}${
			addBitey ? " bitey " : " "
		}${secondHalf}`.toLowerCase();
	}
	return hexValue;
};

console.log(hexPronunciation("0xF5"));
// "fleventy-five"
console.log(hexPronunciation("0xB3"));
// “bibbity-three”
console.log(hexPronunciation("0xE4"));
// “ebbity-four”
console.log(hexPronunciation("0xBBBB"));
// “bibbity-bee bitey bibbity-bee”
console.log(hexPronunciation("0xA0C9"));
// “atta-bitey city-nine”
