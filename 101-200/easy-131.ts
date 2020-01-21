const testStrOps = (inputArr: Array<[number, string, string]>): void =>
	inputArr.forEach(input => {
		const [op, testStr, resultStr] = input;
		let passed = false;
		if (!op) {
			const reversed = [...testStr].reverse().join("");
			if (resultStr === reversed) {
				passed = true;
			}
		} else {
			const capitalized = testStr.toUpperCase();
			if (resultStr === capitalized) {
				passed = true;
			}
		}
		const testOutcome = passed ? "Good test data" : "Mismatch! Bad test data";
		console.log(testOutcome);
	});

console.log(
	testStrOps([
		[0, "Car", "raC"], // Good test data
		[0, "Alpha", "AhplA"], // Mismatch! Bad test data
		[0, "Discuss", "noissucsiD"], // Mismatch! Bad test data
		[1, "Batman", "BATMAN"], // Good test data
		[1, "Graph", "GRAPH"], // Good test data
		[1, "One", "one"], // Mismatch! Bad test data
	]),
);
