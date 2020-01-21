const combinationLock = (
	numDigits: number,
	digitOne: number,
	digitTwo: number,
	digitThree: number,
): number =>
	numDigits * 3 +
	digitOne +
	((digitOne - digitTwo + numDigits) % numDigits) +
	((numDigits + digitThree - digitTwo) % numDigits);

console.log(combinationLock(5, 1, 2, 3));
// 21
