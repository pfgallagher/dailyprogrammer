const convertToBase = (num: number, base: number): string => {
	let value: string = "";
	let quotient: number = num;

	while (quotient !== 0) {
		const remainder = quotient % base;
		const adjust = remainder >= 10 ? 55 : 48;
		value = `${String.fromCharCode(remainder + adjust)}${value}`;
		quotient = Math.floor(quotient / base);
	}
	return value;
};

console.log(convertToBase(1234, 2)); // 10011010010
console.log(convertToBase(1234, 16)); // 4D2
console.log(convertToBase(12345678, 23)); // 1L2FHE
console.log(convertToBase(12345678, 19)); // 4IDHAA
console.log(convertToBase(19959694, 35)); // DAILY
console.log(convertToBase(376609378180550, 29)); // PROGRAMMER

const basePalindromeFinder = (num: number): number[] => {
	const results = [];
	for (let i = 2; i <= 36; i++) {
		const convertedBase = convertToBase(num, i);
		const reversed = [...convertedBase].reverse().join("");
		if (convertedBase === reversed) {
			results.push(i);
		}
	}
	return results;
};

console.log(basePalindromeFinder(16708)); // [ 7, 8, 27, 34, 35 ]
console.log(basePalindromeFinder(12321)); // [ 10, 36 ]
console.log(basePalindromeFinder(15167)); // [ 9, 27, 28, 35, 36 ]
console.log(basePalindromeFinder(10858)); // [ 4, 8, 26, 29, 32, 35 ]
