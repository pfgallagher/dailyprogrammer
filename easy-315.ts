class XOR {
	public static multiply = (input: string): number =>
		XOR.xorSum(
			XOR.padToMax(
				XOR.indexedPad(XOR.multiplicationRows(XOR.parseBinStr(input))),
			),
		);

	public static test = () => {
		XOR.runTests();
	};

	private static parseBinStr = (input: string): string[][] =>
		input.split("@").map(d => [...parseInt(d, 10).toString(2)]);

	private static multiplicationRows = ([aArr, bArr]: string[][]): string[] =>
		bArr
			.reverse()
			.map(b => aArr.map(a => parseInt(a, 10) * parseInt(b, 10)).join(""));

	private static indexedPad = (rows: string[]): string[] =>
		rows.map((row, i) => row.padEnd(row.length + i, "0"));

	private static maxArrLength = (rows: string[]): number =>
		Math.max(...rows.map(row => row.length));

	private static padToMax = (rows: string[]): string[] =>
		rows.map(row => row.padStart(XOR.maxArrLength(rows), "0"));

	private static xorSum = (rows: string[]): number =>
		rows.reduce((a, c) => a ^ parseInt(c, 2), 0);

	private static runTests = () => {
		[
			XOR.multiply("14@13") === 70,
			XOR.multiply("5@9") === 45,
			XOR.multiply("1@2") === 2,
			XOR.multiply("9@0") === 0,
			XOR.multiply("6@1") === 6,
			XOR.multiply("3@3") === 5,
			XOR.multiply("2@5") === 10,
			XOR.multiply("7@9") === 63,
			XOR.multiply("13@11") === 127,
			XOR.multiply("5@17") === 85,
			XOR.multiply("14@13") === 70,
			XOR.multiply("19@1") === 19,
			XOR.multiply("63@63") === 1365,
		].forEach((test, i) => {
			console.assert(test, i.toString());
		});
	};
}

XOR.test();
