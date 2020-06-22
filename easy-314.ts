const toNum = (nStr: string[]): number => parseInt(nStr.join(""), 10);

const concatDiff = (a: string, b: string): number =>
	parseInt(`${a}${b}`, 10) - parseInt(`${b}${a}`, 10);

const strConcat = (input: string): [number, number] => {
	const nums = input.split(" ").sort((a, b) => concatDiff(a, b));
	return [toNum(nums), toNum(nums.reverse())];
};

console.log(strConcat("5 56 50"));
// [ 50556, 56550 ]
console.log(strConcat("79 82 34 83 69"));
// [ 3469798283, 8382796934 ]
console.log(strConcat("420 34 19 71 341"));
// [ 193413442071, 714203434119 ]
console.log(strConcat("17 32 91 7 46"));
// [ 173246791, 917463217 ]
