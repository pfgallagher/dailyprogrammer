import { chunkArr } from "./lib/util";

const equalizeArrs = <T>(arrOne: T[], arrTwo: T[]): T[] => {
	if (arrOne.length < arrTwo.length) {
		while (arrOne.length < arrTwo.length) {
			arrOne = [...arrOne, ...arrOne];
		}
		return arrOne.slice(0, arrTwo.length);
	}
	return arrOne;
};

/*
	I wrote two functions instead of one with a type differentiator, because that
	seemed to make the most sense.
*/

const insertBracket = (
	targetOrTargetArr: string | string[],
	bracket: string,
): string[] => {
	let target =
		typeof targetOrTargetArr === "string"
			? [...targetOrTargetArr]
			: targetOrTargetArr;
	const bracketPairs = equalizeArrs(
		chunkArr([...bracket], 2) as string[],
		target,
	);
	target = equalizeArrs(target, bracketPairs);
	return bracketPairs.map(([start, end], i) => `${start}${target[i]}${end}`);
};

const weaveArrs = <T>(weaveArr: T[], targetArr: T[]): T[] | T[][] => {
	const targetLength = targetArr.length;
	const weaveLength = weaveArr.length;
	if (targetLength < weaveLength) {
		weaveArr = weaveArr.slice(0, targetLength);
	} else if (weaveLength < targetLength) {
		weaveArr = equalizeArrs(weaveArr, targetArr);
	}
	return targetArr.flatMap((el, i) => [el, weaveArr[i]]).slice(0, -1);
};

console.log(insertBracket("abc", "()"));
// [ '(a)', '(b)', '(c)' ]
console.log(insertBracket("+-", "234567"));
// [ '2+3', '4-5', '6+7' ]
console.log(insertBracket(insertBracket("+-", "234567"), "()"));
// [ '(2+3)', '(4-5)', '(6+7)' ]
console.log(weaveArrs([11], [0, 1, 2, 3]));
// [ 0, 11, 1, 11, 2, 11, 3 ]
console.log(weaveArrs([11, 12], [0, 1, 2, 3]));
// [ 0, 11, 1, 12, 2, 11, 3 ]
console.log(weaveArrs([11, 12, 13], [0, 1]));
// [ 0, 11, 1 ]
console.log(
	weaveArrs(["*"], insertBracket(insertBracket("+-", "234567"), "()")),
);
// [ '(2+3)', '*', '(4-5)', '*', '(6+7)' ]
