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
			set.add(splicedStr.concat(el).join(""));
		});
	});
	return [...set];
};

export const combinations = <T>(options: T[], length: number): T[][] => {
	if (length === 1) {
		return options.map(option => [option]);
	}
	const combos: T[][] = [];
	options.forEach((option, i) => {
		const subCombos = combinations(options.slice(i + 1), length - 1);
		subCombos.forEach((subCombo: T[]) => {
			combos.push([option].concat(subCombo));
		});
	});
	return combos;
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

export const transpose = <T>(arr: T[][]): T[][] => {
	const transposed: T[][] = [
		...Array(Math.max(...arr.map(el => el.length))),
	].map(() => []);
	arr.forEach(rowOrCol => {
		rowOrCol.forEach((cell, i) => {
			transposed[i].push(cell);
		});
	});
	return transposed;
};

export const mean = (dataArr: number[]): number =>
	dataArr.reduce((acc, cur) => acc + cur, 0) / dataArr.length;

export const variance = (dataArr: number[]): number => {
	const dataMean = mean(dataArr);
	return (
		dataArr.reduce((acc, cur) => acc + (dataMean - cur) ** 2, 0) /
		dataArr.length
	);
};

export const standardDeviation = (dataArr: number[]): number =>
	Math.sqrt(variance(dataArr));

export const shuffle = <T>(input: T[]): T[] => {
	const shuffledInput = input;
	for (let i = 0; i < input.length; i++) {
		const randomI = Math.floor(Math.random() * i);
		[shuffledInput[i], shuffledInput[randomI]] = [
			shuffledInput[randomI],
			shuffledInput[i],
		];
	}
	return shuffledInput;
};

export const gcd = (a: number, b: number): number =>
	b > 0 ? gcd(b, a % b) : a;

export const lcm = (a: number, b: number): number => (a * b) / gcd(a, b);

export const lcmOfArray = (arr: number[]): number =>
	arr.reduce((acc, cur) => lcm(acc, cur));
