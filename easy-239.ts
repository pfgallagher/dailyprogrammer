const gameOfThrees = (input: number): string => {
	const steps = [];
	while (input !== 1) {
		const step = !(input % 3) ? 0 : input % 3 === 1 ? -1 : 1;
		steps.push([input, step]);
		input = (input + step) / 3;
	}
	return [...steps.map(pair => pair.join(" ")), "1"].join("\n");
};

console.log(gameOfThrees(100));
// 100 -1
// 33 0
// 11 1
// 4 -1
// 1
console.log(gameOfThrees(31337357));
// 31337357 1
// 10445786 1
// 3481929 0
// 1160643 0
// 386881 -1
// 128960 1
// 42987 0
// 14329 -1
// 4776 0
// 1592 1
// 531 0
// 177 0
// 59 1
// 20 1
// 7 -1
// 2 1
// 1
