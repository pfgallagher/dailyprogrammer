/*
	I largely replicated the Python approach described in the Wikipedia entry for
	'Synthetic Division.'
*/
class Polynomial {
	public static divide = (dividend: string, divisor: string): string =>
		Polynomial.formatOutput(
			Polynomial.syntheticDivision(
				Polynomial.toCoefArr(dividend),
				Polynomial.toCoefArr(divisor),
			),
		);

	public static test = () => {
		Polynomial.runTests();
	};

	private static toCoefArr = (polynomial: string): number[] =>
		polynomial.split(/x\^?\d*/g).map(numStr => parseInt(numStr, 10));

	private static toPolynomial = (coefArr: number[]): string =>
		coefArr
			.map((coef, i) => [coef, coefArr.length - i - 1])
			.map(([coef, power]) => {
				const formattedCoef = coef !== 1 ? coef : "";
				return power > 1
					? `${formattedCoef}x^${power}`
					: power === 1
					? `${formattedCoef}x`
					: formattedCoef;
			})
			.join(" + ")
			.replace(/ \+ -/g, " - ");

	private static syntheticDivision = (
		dividend: number[],
		divisor: number[],
	): number[][] => {
		for (let i = 0; i <= dividend.length - divisor.length; i++) {
			dividend[i] /= divisor[0];
			if (dividend[i]) {
				for (let j = 1; j < divisor.length; j++) {
					dividend[i + j] += -divisor[j] * dividend[i];
				}
			}
		}
		const separator = 1 - divisor.length;
		return [dividend.slice(0, separator), dividend.slice(separator)];
	};

	private static formatOutput = ([quotient, remainder]: number[][]): string =>
		`Quotient: ${Polynomial.toPolynomial(
			quotient,
		)}\nRemainder: ${Polynomial.toPolynomial(remainder)}`;

	private static runTests = () => {
		[
			Polynomial.divide("4x^3+2x^2-6x+3", "1x-3") ===
				"Quotient: 4x^2 + 14x + 36\nRemainder: 111",
			Polynomial.divide("2x^4-9x^3+21x^2-26x+12", "2x-3") ===
				"Quotient: x^3 - 3x^2 + 6x - 4\nRemainder: 0",
			Polynomial.divide("10x^4+0x^3-7x^2+0x-1", "1x^2-1x+3") ===
				"Quotient: 10x^2 + 10x - 27\nRemainder: -57x + 80",
		].forEach((test, i) => {
			console.assert(test, i.toString());
		});
	};
}

Polynomial.test();
