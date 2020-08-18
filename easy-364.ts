import { range } from "./lib/util";

const randomNum = (n: number): number => {
	const nRange = range(1, n);
	return Math.ceil(Math.random() * nRange[nRange.length - 1]);
};

const diceRoller = (diceNotation: string): number => {
	const [numRolls, numSides] = diceNotation
		.split("d")
		.map(nStr => parseInt(nStr, 10));
	return range(1, numRolls).reduce(a => a + randomNum(numSides), 0);
};

[
	diceRoller("3d6"),
	diceRoller("4d12"),
	diceRoller("1d10"),
	diceRoller("5d4"),
	diceRoller("5d12"),
	diceRoller("6d4"),
	diceRoller("1d2"),
	diceRoller("1d8"),
	diceRoller("3d6"),
	diceRoller("4d20"),
	diceRoller("100d100"),
].forEach(roll => {
	console.log(roll);
});
