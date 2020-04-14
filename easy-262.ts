const maybeNumeric = (numStr: string): string | number | number[] | BigInt => {
	if (numStr.includes(" ")) {
		return numStr.split(" ").map(num => parseFloat(num));
	}
	const parsedNum = parseFloat(numStr);
	if (parsedNum > Number.MAX_SAFE_INTEGER && Number.isInteger(parsedNum)) {
		return BigInt(numStr);
	}
	return !Number.isNaN(Number(numStr)) && Number.isFinite(Number(numStr))
		? Number(numStr)
		: numStr;
};

console.log(maybeNumeric("123"));
// 123 (as number)
console.log(maybeNumeric("44.234"));
// 44.234 (as number)
console.log(maybeNumeric("0x123n"));
// 0x123n (as string)
console.log(maybeNumeric("123 234 345"));
// [123, 234, 345] (as number[])
console.log(maybeNumeric("3.23e5"));
// 323000 (as number)
console.log(maybeNumeric("1293712938712938172938172391287319237192837329"));
// 1293712938712938172938172391287319237192837329n (as BigInt)
console.log(maybeNumeric(".25"));
// 0.25 (as number)
