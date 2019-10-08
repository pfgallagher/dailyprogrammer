// This is pretty close to easy-102, but here is the solution:
import { range } from "./lib/util";

const roll = (n: number): number => Math.ceil(Math.random() * n);

const rollDice = (notation: string): string => {
	const [, rollNum, dieSides] = notation.match(/(\d*)d(\d+)/);
	return range(0, parseInt(rollNum, 10) - 1)
		.map(die => roll(parseInt(dieSides, 10)))
		.join(" ");
};

console.log(rollDice("2d20"));
console.log(rollDice("4d6"));
