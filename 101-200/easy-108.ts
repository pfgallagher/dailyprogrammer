const decimalToScientific = (n: number): string => {
	let counter = 0;
	switch (true) {
		case n >= 1:
			while (n > 10) {
				n /= 10;
				counter++;
			}
			break;
		case n <= -10:
			while (n < -10) {
				n /= 10;
				counter++;
			}
			break;
		case n > -1 && n < 0:
			while (n > -1) {
				n *= 10;
				counter--;
			}
			break;
		default:
			while (n < 1) {
				n *= 10;
				counter--;
			}
	}
	return `${n}e${counter}`;
};

console.log(decimalToScientific(-499262690)); // -4.9926269e8
console.log(decimalToScientific(-0.654)); // -6.54e-1
console.log(decimalToScientific(-0.00000654)); // -6.54e-6
console.log(decimalToScientific(0.0000231)); // 2.31e-5
console.log(decimalToScientific(0.654)); // 6.54e-1
console.log(decimalToScientific(12345.6)); // 1.23456e4
console.log(decimalToScientific(239487)); // 2.39487e5
console.log(decimalToScientific(12340000)); // 1.234e7
