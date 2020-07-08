import { frequency } from "../lib/util";

const shannonEntropy = (input: string): number => {
	const inputArr = [...input];
	const inputFrequency = frequency(inputArr);
	return (
		-1 *
		[...new Set(inputArr)].reduce((a, c) => {
			const probability = inputFrequency[c] / inputArr.length;
			return a + probability * Math.log2(probability);
		}, 0)
	);
};

console.log(shannonEntropy("1223334444"));
// 1.8464393446710154
console.log(shannonEntropy("Hello, world!"));
// 3.180832987205441
console.log(shannonEntropy("122333444455555666666777777788888888"));
// 2.7942086837942446
console.log(shannonEntropy("563881467447538846567288767728553786"));
// 2.7942086837942446
console.log(shannonEntropy("https://www.reddit.com/r/dailyprogrammer"));
// 4.056198332810094
console.log(shannonEntropy("int main(int argc, char *argv[])"));
// 3.8667292966721747
