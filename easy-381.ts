import { frequency } from "./lib/util";

const yahtzeeUpper = (rolls: number[]): number =>
	Math.max(
		...Object.entries(frequency(rolls)).map(
			([dig, count]) => parseInt(dig, 10) * count,
		),
	);

[
	yahtzeeUpper([2, 3, 5, 5, 6]) === 10,
	yahtzeeUpper([1, 1, 1, 1, 3]) === 4,
	yahtzeeUpper([1, 1, 1, 3, 3]) === 6,
	yahtzeeUpper([1, 2, 3, 4, 5]) === 5,
	yahtzeeUpper([6, 6, 6, 6, 6]) === 30,
].forEach((test, i) => {
	console.assert(test, i.toString());
});
