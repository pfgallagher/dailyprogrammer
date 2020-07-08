import { chunkArr, range } from "../lib/util";

/*
	The instructions for this exercise weren't very clear; accordingly, I think I
	may have accidentally hard coded some things that shouldn't have been hard 
	coded.
*/

const drawCircuit = (hrs: number) =>
	(chunkArr(
		range(0, maxLEDs(hrs) - 1).map(() => "-|>|-"),
		5,
	) as string[][])
		.map(row => row.join(""))
		.join(`\n|${" ".repeat(23)}|\n`);

const maxLEDs = (hrs: number): number => {
	const mAhFiveBatteriesSerial = 20;
	const mAhBattery = 1200;
	let numLEDs = Math.floor((mAhBattery / mAhFiveBatteriesSerial / hrs) * 5);
	while (numLEDs % 5) {
		numLEDs--;
	}
	return numLEDs;
};

const calculateResistance = (hrs: number): number => (0.5 / 1.2) * hrs;

const xmasLights = (hrs: number): string =>
	`Resistor: ${calculateResistance(hrs).toFixed(
		3,
	)} Ohms\nScheme:\n${drawCircuit(hrs)}`;

console.log(maxLEDs(1));
// 300
console.log(maxLEDs(4));
// 75
console.log(maxLEDs(8));
// 35
console.log(maxLEDs(12));
// 25

console.log(drawCircuit(20));
// -|>|--|>|--|>|--|>|--|>|-
// |                       |
// -|>|--|>|--|>|--|>|--|>|-
// |                       |
// -|>|--|>|--|>|--|>|--|>|-
console.log(drawCircuit(12));
console.log(drawCircuit(6));
console.log(drawCircuit(100));

console.log(calculateResistance(1));
// 0.417
console.log(calculateResistance(4));
// 1.667
console.log(calculateResistance(8));
// 3.333

console.log(xmasLights(20));
// Resistor: 8.333 Ohms
// Scheme:
// -|>|--|>|--|>|--|>|--|>|-
// |                       |
// -|>|--|>|--|>|--|>|--|>|-
// |                       |
// -|>|--|>|--|>|--|>|--|>|-
