import { range } from "./lib/util";

const lightDuration = (input: string): number =>
	new Set(
		input
			.split("\n")
			.map(interval => interval.split(" ").map(time => parseInt(time, 10)))
			.flatMap(([start, end]) => range(start, end - 1)),
	).size;

[
	lightDuration("1 3\n2 3\n4 5") === 3,
	lightDuration("2 4\n3 6\n1 3\n6 8") === 7,
	lightDuration("6 8\n5 8\n6 9\n5 7\n4 7") === 5,
	lightDuration(
		"15 18\n13 16\n9 12\n3 4\n17 20\n9 11\n17 18\n4 5\n5 6\n4 5\n5 6\n13 16\n2 3\n15 17\n13 14",
	) === 14,
].forEach((test, i) => {
	console.assert(test, i.toString());
});
