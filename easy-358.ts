const numberMap: { [segment: string]: number } = {
	" _ | ||_|": 0,
	"     |  |": 1,
	" _  _||_ ": 2,
	" _  _| _|": 3,
	"   |_|  |": 4,
	" _ |_  _|": 5,
	" _ |_ |_|": 6,
	" _   |  |": 7,
	" _ |_||_|": 8,
	" _ |_| _|": 9,
};

const segmentDisplayToText = (input: string): number => {
	const lines = input.split("\n");
	const arr = [];
	const width = lines[0].length;
	for (let i = 0; i < width; i += 3) {
		let num = "";
		for (let j = 0; j < 3; j++) {
			num += lines[j].slice(i, i + 3);
		}
		arr.push(numberMap[num]);
	}
	return parseInt(arr.join(""), 10);
};

[
	segmentDisplayToText(
		"    _  _     _  _  _  _  _ \n  | _| _||_||_ |_   ||_||_|\n  ||_  _|  | _||_|  ||_| _|",
	) === 123456789,
	segmentDisplayToText(
		"    _  _  _  _  _  _  _  _ \n|_| _| _||_|| ||_ |_| _||_ \n  | _| _||_||_| _||_||_  _|",
	) === 433805825,
	segmentDisplayToText(
		" _  _  _  _  _  _  _  _  _ \n|_  _||_ |_| _|  ||_ | ||_|\n _||_ |_||_| _|  ||_||_||_|",
	) === 526837608,
	segmentDisplayToText(
		" _  _        _  _  _  _  _ \n|_||_ |_|  || ||_ |_ |_| _|\n _| _|  |  ||_| _| _| _||_ ",
	) === 954105592,
].forEach((test, i) => {
	console.assert(test, i.toString());
});
