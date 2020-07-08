const recurrenceRelation = (input: string): string => {
	const [operation, start, end] = input.split("\n");
	const operations = operation.split(" ");
	const [startNum, endNum] = [start, end].map(num => parseInt(num, 10));
	const resultArr = [startNum];
	let last = startNum;
	while (resultArr.length <= endNum) {
		const result = operations.reduce(
			// 'safer' alternative to eval()
			(acc, cur) => Function(`return ${acc}${cur}`)(),
			last,
		);
		last = result;
		resultArr.push(result);
	}
	return resultArr.map((el, i) => `Term ${i}: ${el}`).join("\n");
};

console.log(recurrenceRelation("*3 +2 *2\n0\n7"));
// Term 0: 0
// Term 1: 4
// Term 2: 28
// Term 3: 172
// Term 4: 1036
// Term 5: 6220
// Term 6: 37324
// Term 7: 223948

console.log(recurrenceRelation("*2 +1\n1\n10"));
// Term 0: 1
// Term 1: 3
// Term 2: 7
// Term 3: 15
// Term 4: 31
// Term 5: 63
// Term 6: 127
// Term 7: 255
// Term 8: 511
// Term 9: 1023
// Term 10: 2047

console.log(recurrenceRelation("*-2\n1\n8"));
// Term 0: 1
// Term 1: -2
// Term 2: 4
// Term 3: -8
// Term 4: 16
// Term 5: -32
// Term 6: 64
// Term 7: -128
// Term 8: 256

console.log(recurrenceRelation("+2 *3 -5\n0\n10"));
// Term 0: 0
// Term 1: 1
// Term 2: 4
// Term 3: 13
// Term 4: 40
// Term 5: 121
// Term 6: 364
// Term 7: 1093
// Term 8: 3280
// Term 9: 9841
// Term 10: 29524
