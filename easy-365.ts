import { count } from "./lib/util";

const evaluateArrowNotation = (
	op1: number,
	arrowCount: number,
	op2: number,
): number =>
	arrowCount === 1
		? op1 ** op2
		: op2 === 0
		? 1
		: evaluateArrowNotation(
				op1,
				arrowCount - 1,
				evaluateArrowNotation(
					op1,
					op1 < 0 ? arrowCount - 1 : arrowCount,
					op2 - 1,
				),
		  );

const arrowNotation = (input: string): number => {
	const [op1, op2] = input.split(/ ↑+ /g).map(numStr => parseInt(numStr, 10));
	const arrowCount = count(input, "↑");
	return evaluateArrowNotation(op1, arrowCount, op2);
};

[
	arrowNotation("2 ↑ 4") === 16,
	arrowNotation("2 ↑↑ 4") === 65536,
	arrowNotation("2 ↑↑↑ 3") === 65536,
	arrowNotation("-1 ↑↑↑ 3") === -1,
	arrowNotation("1 ↑ 0") === 1,
	arrowNotation("1 ↑↑ 0") === 1,
	// arrowNotation("5 ↑↑↑↑ 5"), -> Too large
	// arrowNotation("7 ↑↑↑↑↑ 3"), -> Too large
	// arrowNotation("12 ↑↑↑↑↑↑↑↑↑↑↑ 25") -> Too large
].forEach((test, i) => {
	console.assert(test, i.toString());
});
