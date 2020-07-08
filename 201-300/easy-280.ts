const conversionMap: { [key: string]: number } = {
	"00010": 1,
	"00110": 2,
	"01110": 3,
	"11110": 4,
	"00001": 5,
	"00011": 6,
	"00111": 7,
	"01111": 8,
	"11111": 9,
};

const countFingers = (input: string): number | string => {
	const [firstHalf, secondHalf] = [
		input.slice(0, 5),
		[...input.slice(5)].reverse().join(""),
	];
	return conversionMap.hasOwnProperty(firstHalf) &&
		conversionMap.hasOwnProperty(secondHalf)
		? parseInt(`${conversionMap[firstHalf]}${conversionMap[secondHalf]}`, 10)
		: "Invalid";
};

console.log(countFingers("0111011100"));
// 37
console.log(countFingers("1010010000"));
// Invalid
console.log(countFingers("0011101110"));
// 73
console.log(countFingers("0000110000"));
// 55
console.log(countFingers("1111110001"));
// Invalid
