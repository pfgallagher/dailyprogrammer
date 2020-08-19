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

export const isPrime = (num: number): boolean => {
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (!(num % i)) {
			return false;
		}
	}
	return true;
};

export const primeFactorialize = (num: number): number[] => {
	const factors: number[] = [];
	for (let i = 2; i <= num; i++) {
		while (isPrime(i) && !(num % i)) {
			factors.push(i);
			num /= i;
		}
	}
	return factors;
};

export const zip = <T>(...[arr, ...rest]: T[][]): T[][] => {
	return arr
		.map((el, i) => rest.reduce((a, c) => [...a, c[i]], [el]))
		.filter(zippedArr => zippedArr.every(el => el));
};

export const divmod = (a: number, b: number): [number, number] => [
	Math.floor(a / b),
	a % b,
];

export const distance = (
	[firstX, firstY]: [number, number],
	[secondX, secondY]: [number, number],
): number => ((firstX - secondX) ** 2 + (firstY - secondY) ** 2) ** 0.5;

export const getMajorDiagonals = <T>(arr: T[][]): T[][] =>
	arr.reduce<T[][]>(
		([a, b], _, i) => [
			[...a, arr[i][i]],
			[...b, arr[i][arr.length - 1 - i]],
		],
		[[], []],
	);

export const sum = (arr: number[]): number => arr.reduce((a, c) => a + c, 0);

export const frequency = (
	arr: (string | number)[],
): { [key: string]: number } => {
	const result: { [key: string]: number } = {};
	for (const el of arr) {
		const key = typeof el === "number" ? el.toString() : el;
		if (result[key]) {
			result[key]++;
		} else {
			result[key] = 1;
		}
	}
	return result;
};

export const basicDeepCopy = <T>(itemToCopy: T): T =>
	JSON.parse(JSON.stringify(itemToCopy));

export const basicDeepReverse = <T>(arr: T[]): T[] =>
	basicDeepCopy(arr).reverse();

export const posIdxFromNegIdx = <T>(arr: T[], i: number): number =>
	arr.length - i - 1;

export const escapeRegExp = (str: string): string =>
	str.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");

export const trunc = (n: number, nDecPlaces: number = 0): number => {
	const nStr = n.toString();
	const decimalI = nStr.indexOf(".") + 1;
	if (decimalI >= 0) {
		return parseFloat(nStr.slice(0, decimalI + nDecPlaces));
	}
	return n;
};

export const isEven = (n: number): boolean => !(n % 2);

export const isOdd = (n: number): boolean => !isEven(n);

export const interleave = (...strs: string[]): string => {
	const ilStr = strs.map(str => str[0]).join("");
	const nextStrs = strs.map(str => str.slice(1)).filter(str => str.length);
	return nextStrs.length ? ilStr.concat(interleave(...nextStrs)) : ilStr;
};

export const count = (source: string, target: string): number => {
	let charCount = 0;
	for (const char of [...source]) {
		if (char === target) {
			charCount++;
		}
	}
	return charCount;
};
