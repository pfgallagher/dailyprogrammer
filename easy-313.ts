const absVal = (numArr: number[]): number[] => numArr.map(n => Math.abs(n));

/*
	This works quite nicely because of the premise that the list is comprised of
	distinct integers. My original approach works with duplicates, since it was
	based on first finding the additive inverses of the array; however, it wasn't
	nearly as clean!
*/
const sumToZero = (numArr: number[]): boolean =>
	numArr.includes(0) || numArr.length !== new Set(absVal(numArr)).size;

console.log(sumToZero([1, 2, 3]));
// false
console.log(sumToZero([-5, -3, -1, 2, 4, 6]));
// false
console.log(sumToZero([]));
// false
console.log(sumToZero([-1, 1]));
// true
console.log(sumToZero([-97364, -71561, -69336, 19675, 71561, 97863]));
// true
console.log(sumToZero([-53974, -39140, -36561, -23935, -15680, 0]));
// true
