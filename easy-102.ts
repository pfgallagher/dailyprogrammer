export {};

const randomNumFromRange = (arr: number[]): number =>
	Math.ceil(Math.random() * arr[arr.length - 1]);
	
const range = (min: number, max: number) =>
	Array(max - min + 1)
		.fill(0)
		.map((el, idx) => idx + min);

const rollDice = (diceNotation: string): number => {
	const [, A, B, operator, C] = diceNotation.match(/(\d*)*d(\d*)+(\W)*(\d*)*/);
	const [AInt, BInt, CInt] = [A, B, C].map(numStr => parseInt(numStr, 10) || 0);
	return (
		range(1, AInt || 1)
			.map(die => randomNumFromRange(range(1, BInt)))
			.reduce((a, c) => a + c) +
		(operator ? (operator === "+" ? CInt : -CInt) : 0)
	);
};

console.log(rollDice("d8"));
console.log(rollDice("10d6-2"));
console.log(rollDice("d20+7"));
