const absDiff = (numArr: number[]): number[] => {
	const diffs: number[] = [];
	numArr.forEach((n, i, arr) => {
		if (i) {
			diffs.push(Math.abs(arr[i - 1] - n));
		}
	});
	return diffs.sort((a, b) => b - a);
};

const isDescending = (numArr: number[]): boolean =>
	numArr.every((n, i, arr) => (i ? n + 1 === arr[i - 1] : true));

const strToNumArr = (input: string): number[] =>
	input.split(" ").map(n => parseInt(n, 10));

const jollyJumper = (input: string): string =>
	`${input} ${
		isDescending(absDiff(strToNumArr(input))) ? "JOLLY" : "NOT JOLLY"
	}`;

console.log(jollyJumper("1 4 2 3"));
// 1 4 2 3 JOLLY
console.log(jollyJumper("1 6 -1 8 9 5 2 7"));
// 1 6 -1 8 9 5 2 7 NOT JOLLY
console.log(jollyJumper("1 4 2 -1 6"));
// 1 4 2 -1 6 NOT JOLLY
console.log(jollyJumper("19 22 24 21"));
// 19 22 24 21 NOT JOLLY
console.log(jollyJumper("19 22 24 25"));
// 19 22 24 25 JOLLY
console.log(jollyJumper("2 -1 0 2"));
// 2 -1 0 2 JOLLY
