// I feel like this code is super WET, but nonetheless, it's working
// more-or-less correctly.

interface INumber {
	[key: string]: string | number;
	long: string;
	short: string;
	value: number;
}

const numbers: INumber[] = [
	{
		long: "trillion",
		short: "quintillion",
		value: 1_000_000_000_000_000_000,
	},
	{
		long: "billiard",
		short: "quadrillion",
		value: 1_000_000_000_000_000,
	},
	{
		long: "billion",
		short: "trillion",
		value: 1_000_000_000_000,
	},
	{
		long: "milliard",
		short: "billion",
		value: 1_000_000_000,
	},
	{
		long: "million",
		short: "million",
		value: 1_000_000,
	},
	{
		long: "thousand",
		short: "thousand",
		value: 1_000,
	},
	{
		long: "hundred",
		short: "hundred",
		value: 100,
	},
	{
		long: "ninety",
		short: "ninety",
		value: 90,
	},
	{
		long: "eighty",
		short: "eighty",
		value: 80,
	},
	{
		long: "seventy",
		short: "seventy",
		value: 70,
	},
	{
		long: "sixty",
		short: "sixty",
		value: 60,
	},
	{
		long: "fifty",
		short: "fifty",
		value: 50,
	},
	{
		long: "forty",
		short: "forty",
		value: 40,
	},
	{
		long: "thirty",
		short: "thirty",
		value: 30,
	},
	{
		long: "twenty",
		short: "twenty",
		value: 20,
	},
	{
		long: "nineteen",
		short: "nineteen",
		value: 19,
	},
	{
		long: "eighteen",
		short: "eighteen",
		value: 18,
	},
	{
		long: "seventeen",
		short: "seventeen",
		value: 17,
	},
	{
		long: "sixteen",
		short: "sixteen",
		value: 16,
	},
	{
		long: "fifteen",
		short: "fifteen",
		value: 15,
	},
	{
		long: "fourteen",
		short: "fourteen",
		value: 14,
	},
	{
		long: "thirteen",
		short: "thirteen",
		value: 13,
	},
	{
		long: "twelve",
		short: "twelve",
		value: 12,
	},
	{
		long: "eleven",
		short: "eleven",
		value: 11,
	},
	{
		long: "ten",
		short: "ten",
		value: 10,
	},
	{
		long: "nine",
		short: "nine",
		value: 9,
	},
	{
		long: "eight",
		short: "eight",
		value: 8,
	},
	{
		long: "seven",
		short: "seven",
		value: 7,
	},
	{
		long: "six",
		short: "six",
		value: 6,
	},
	{
		long: "five",
		short: "five",
		value: 5,
	},
	{
		long: "four",
		short: "four",
		value: 4,
	},
	{
		long: "three",
		short: "three",
		value: 3,
	},
	{
		long: "two",
		short: "two",
		value: 2,
	},
	{
		long: "one",
		short: "one",
		value: 1,
	},
];

const findNum = (n: number): INumber | undefined => {
	const found = numbers.find(num => n - num.value >= 0);
	if (found) {
		return found;
	}
};

const findWord = (n: number, form: string): string | undefined => {
	const found = numbers.find(num => num.value === n);
	if (found) {
		const word = found[form];
		if (typeof word === "string") {
			return word;
		}
	}
};

const numLoop = (n: number, min: number): Array<[number, number]> => {
	const numMap = new Map();
	while (n > min) {
		const found = findNum(n);
		if (found) {
			if (numMap.has(found.value)) {
				numMap.set(found.value, numMap.get(found.value) + 1);
			} else {
				numMap.set(found.value, 1);
			}
			n -= found.value;
		}
	}
	return [...numMap];
};

const lessThan100 = (n: number, form: string): string =>
	numLoop(n, 0)
		.map(num => findWord(num[0], form))
		.join("-");

const greaterThan100 = (n: number, form: string): string =>
	numLoop(n, 100)
		.map(
			num =>
				`${num[1] < 100 ? lessThan100(num[1], form) : num[1]} ${findWord(
					num[0],
					form,
				)}`,
		)
		.join(", ");

const combine = (n: number, form: string): string => {
	const greater = greaterThan100(n, form);
	const lesser = lessThan100(n % 100, form);
	const result = `${greater} ${lesser ? `${lesser}` : ""}`;
	return result.replace(/(\d+)/g, match => combine(parseInt(match, 10), form));
};

const numToWords = (n: number): string => {
	const short = combine(n, "short");
	const long = combine(n, "long");
	return `
short: ${short}

long: ${long}
`;
};

console.log(numToWords(1234567891111));
