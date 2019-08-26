interface INumeral {
	count: number;
	char: string;
}

const numerals: any = (): INumeral[] => [
	{
		char: "M",
		count: 0,
	},
	{
		char: "D",
		count: 0,
	},
	{
		char: "C",
		count: 0,
	},
	{
		char: "L",
		count: 0,
	},
	{
		char: "X",
		count: 0,
	},
	{
		char: "V",
		count: 0,
	},
	{
		char: "I",
		count: 0,
	},
];

const countNumerals = (str: string): INumeral[] => {
	const numeralList: INumeral[] = new numerals();
	[...str].forEach(el => {
		const numeralObj = numeralList.find(obj => obj.char === el);
		if (numeralObj) {
			numeralObj.count++;
		}
	});
	return numeralList;
};

const numeralXLessThanY = (x: string, y: string): boolean => {
	const xNumerals = countNumerals(x);
	const yNumerals = countNumerals(y);
	for (let i = 0; i < xNumerals.length; i++) {
		const xCount = xNumerals[i].count;
		const yCount = yNumerals[i].count;
		if (xCount > yCount) {
			return false;
		}
		if (yCount > xCount) {
			return true;
		}
	}
	return false;
};

console.log(numeralXLessThanY("X", "VIIII")); // false
console.log(numeralXLessThanY("CX", "MX")); // true
console.log(numeralXLessThanY("MDX", "MDXI")); // true
console.log(numeralXLessThanY("MDX", "MDV")); // false
console.log(numeralXLessThanY("MDV", "MDV")); // false
