const add = (a: number, b: number): number => a + b;

const increment = (n: number): number => add(n, 1);

const negate = (n: number): number => {
	const intArr = new Int16Array(1);
	while (intArr[0] >= 0) {
		intArr[0] = increment(intArr[0]);
	}
	let min = intArr[0];
	while (add(min, n)) {
		min = increment(min);
	}
	return min;
};

const subtract = (a: number, b: number): number => add(a, negate(b));

const decrement = (n: number): number => subtract(n, 1);

const multiply = (a: number, b: number): number => {
	let product = 0;
	if (b >= 0) {
		for (let i = 0; i < b; i = increment(i)) {
			product = add(product, a);
		}
	} else {
		for (let i = b; i < 0; i = increment(i)) {
			product = subtract(product, a);
		}
	}
	return product;
};

const divide = (a: number, b: number): number | string => {
	if (!b) {
		return "Undefined";
	}
	let quotient = 0;
	const flippedSign = a < 0;
	if (a < 0) {
		a = negate(a);
	}
	while (a) {
		if (b >= 0) {
			a = subtract(a, b);
			quotient = increment(quotient);
			if (a < 0) {
				return "Non-integral answer";
			}
		} else if (b < 0) {
			a = add(a, b);
			quotient = decrement(quotient);
			if (a < 0) {
				return "Non-integral answer";
			}
		}
	}
	return flippedSign ? negate(quotient) : quotient;
};

const exponentiate = (a: number, b: number): number | string => {
	if (b < 0) {
		return "Non-integral answer";
	}
	let power = 1;
	for (let i = 0; i < b; i = increment(i)) {
		power = multiply(power, a);
	}
	return power;
};

const calculator = (input: string): number | string => {
	const [aStr, operator, bStr] = input.split(" ");
	const [a, b] = [aStr, bStr].map(n => parseInt(n, 10));
	switch (operator) {
		case "+":
			return add(a, b);
		case "-":
			return subtract(a, b);
		case "*":
			return multiply(a, b);
		case "/":
			return divide(a, b);
		case "^":
			return exponentiate(a, b);
		default:
			return "Undefined operation";
	}
};

[
	calculator("12 + 25") === 37,
	calculator("-30 + 100") === 70,
	calculator("100 - 30") === 70,
	calculator("100 - -30") === 130,
	calculator("-25 - 29") === -54,
	calculator("-41 - -10") === -31,
	calculator("9 * 3") === 27,
	calculator("9 * -4") === -36,
	calculator("-4 * 8") === -32,
	calculator("-12 * -9") === 108,
	calculator("100 / 2") === 50,
	calculator("75 / -3") === -25,
	calculator("-75 / 3") === -25,
	calculator("7 / 3") === "Non-integral answer",
	calculator("0 / 0") === "Undefined",
	calculator("5 ^ 3") === 125,
	calculator("-5 ^ 3") === -125,
	calculator("-8 ^ 3") === -512,
	calculator("-1 ^ 1") === -1,
	calculator("1 ^ 1") === 1,
	calculator("0 ^ 5") === 0,
	calculator("5 ^ 0") === 1,
	calculator("10 ^ -3") === "Non-integral answer",
].forEach((test, i) => {
	console.assert(test, i.toString());
});
