class PermutationBaseTwo {
	public static fromDecimal = (n: number): string =>
		PermutationBaseTwo.index(n)
			.toString(2)
			.padStart(PermutationBaseTwo.nLength(n), "0");

	public static toDecimal = (n: string): number =>
		2 ** n.length + parseInt(n, 2) - 2;

	public static test = () => {
		PermutationBaseTwo.runTests();
	};

	private static nLength = (n: number): number => Math.floor(Math.log2(n + 2));

	private static index = (n: number): number =>
		n - (2 ** PermutationBaseTwo.nLength(n) - 2);

	private static runTests = () => {
		[
			PermutationBaseTwo.fromDecimal(54) === "11000",
			PermutationBaseTwo.toDecimal("111000111") === 965,
			PermutationBaseTwo.fromDecimal(234234234) ===
				"101111101100010000101111100",
			PermutationBaseTwo.fromDecimal(234234234234234) ===
				"10101010000100011101000010100110110010101111100",
			/*
				234234234234234234234234 won't work because it is greater than
				`Number.MAX_SAFE_INTEGER`. Theoretically, it could work if I use a
				BigInt, but unfortunately, the `Math` methods don't work on BigInts.
				Accordingly, I'm simply going to skip it.
			*/
			PermutationBaseTwo.toDecimal(
				"000111000111111000111111000111111000111",
			) === 610944389061,
			PermutationBaseTwo.toDecimal(
				"11111111000111000111111000111111000111111000111",
			) === 280986409471941,
		].forEach((test, i) => {
			console.assert(test, i.toString());
		});
	};
}

PermutationBaseTwo.test();
