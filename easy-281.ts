const getNumericFromAlpha = (letter: string): number =>
	letter.charCodeAt(0) - 87;

const isLetter = (n: string): boolean => /[a-z]/.test(n);

const calcSmallestBase = (n: string): number =>
	Math.max(
		...[...n].map(dig =>
			isLetter(dig) ? getNumericFromAlpha(dig) : parseInt(dig, 10),
		),
	) + 1;

const smallestBaseAndDecimalValue = (n: string): string => {
	const smallestBase = calcSmallestBase(n);
	return `base ${smallestBase} => ${parseInt(n, smallestBase)}`;
};

console.log(smallestBaseAndDecimalValue("1"));
// base 2 => 1
console.log(smallestBaseAndDecimalValue("21"));
// base 3 => 7
console.log(smallestBaseAndDecimalValue("ab3"));
// base 12 => 1575
console.log(smallestBaseAndDecimalValue("ff"));
// base 16 => 255
