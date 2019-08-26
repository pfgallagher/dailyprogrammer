export {};

interface IOperatorMap {
	[operator: string]: (a: number, b: number) => number;
}

const mappedOperators: IOperatorMap = {
	"*": (a: number, b: number) => a * b,
	"+": (a: number, b: number) => a + b,
	"-": (a: number, b: number) => a - b,
	"/": (a: number, b: number) => a / b,
};

const range = (min: number, max: number): number[] => Array((max - min) + 1).fill(0).map((el, idx) => idx + min);

const formatRow = ([first, ...rest]: any[]) => `${first}  |  ${rest.join("  ")}\n`;

const arithmeticTable = (operator: string, n: number): string => {
	const elRange = range(0, n);
	let table = formatRow([operator, ...elRange]);
	table += `${"-".repeat(table.length)}\n`;
	Object.keys(elRange).forEach(mainEl => {
		table += formatRow([mainEl, ...elRange.map(el => mappedOperators[operator](parseInt(mainEl, 10), el))]);
	});
	return table;
};

console.log(arithmeticTable("+", 4));
