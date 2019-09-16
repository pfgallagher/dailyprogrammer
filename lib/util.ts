export const range = (min: number, max: number) =>
	Array(max - min + 1)
		.fill(0)
		.map((el, idx) => idx + min);

export const strPermutations = (str: string | string[]): string[] => {
	if (str.length === 1) {
		return [str] as string[];
	}
	if (str.length === 2) {
		return [str, `${str[1]}${str[0]}`] as string[];
	}
	const set: Set<string> = new Set();
	[...str].forEach((el, i) => {
		const newStr = [...str.slice()];
		const splicedStr = newStr.splice(i, 1);
		strPermutations(newStr).forEach(el => {
			console.log(splicedStr.concat(el).join(""));
			set.add(splicedStr.concat(el).join(""));
		});
	});
	return [...set];
};

export const union = (arrOne: any[], arrTwo: any[]) => [
	...new Set([...arrOne, ...arrTwo]),
];

export const intersect = (arrOne: any[], arrTwo: any[]) =>
	arrOne.length <= arrTwo.length
		? arrOne.filter(el => arrTwo.includes(el))
		: arrTwo.filter(el => arrOne.includes(el));

export const difference = (arrOne: any[], arrTwo: any[]) =>
	arrTwo.filter(el => !arrOne.includes(el));

export const chunkArr = <T>(arr: T[], size: number): T[] | T[][] => {
	const newArr = arr.slice();
	const chunk = newArr.splice(0, size);
	return chunk.length ? [chunk].concat(chunkArr(newArr, size)) : newArr;
};