const numToNumArr = (numStr: number): number[] =>
	[...numStr.toString()].map(dig => parseInt(dig, 10));

const additivePersistence = (n: number): number => {
	let counter = 0;
	let nArr = numToNumArr(n);
	while (nArr.length !== 1) {
		nArr = numToNumArr(nArr.reduce((a, c) => a + c, 0));
		counter++;
	}
	return counter;
};

[
	additivePersistence(13) === 1,
	additivePersistence(1234) === 2,
	additivePersistence(9876) === 2,
	additivePersistence(199) === 3,
].forEach((test, i) => {
	console.assert(test, i.toString());
});
