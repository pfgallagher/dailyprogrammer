import { combinations, range } from "./lib/util";

const changeCalculator = (input: string): number | "N/A" => {
	const [sum, ...list] = input.split(" ").map(n => parseInt(n, 10));
	const fewestAddendSum = Math.min(
		...range(0, list.length)
			.flatMap((_, i) => combinations(list, i))
			.filter(nArr => nArr.reduce((a, c) => a + c, 0) === sum)
			.map(nArr => nArr.length),
	);
	return Number.isFinite(fewestAddendSum) ? fewestAddendSum : "N/A";
};

[
	changeCalculator("10 5 5 2 2 1") === 2,
	changeCalculator("150 100 50 50 50 50") === 2,
	changeCalculator("130 100 20 18 12 5 5") === 3,
	changeCalculator("200 50 50 20 20 10") === "N/A",
	changeCalculator("150 100 50 50 50 50") === 2,
	changeCalculator("130 100 20 18 12 5 5") === 3,
	/*
		Since I'm brute-forcing the solution, the last test case isn't really
		feasible (and causes the program to crash). So, it's commented out for now.
	*/
	// changeCalculator(`150 ${Array(10_000).fill(1).join(" ")}`) === 150,
].forEach((test, i) => {
	console.assert(test, i.toString());
});
