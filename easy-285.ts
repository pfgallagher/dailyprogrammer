import { divmod } from "./lib/util";

/*
	This challenge consists of multiple sub-challenges, many of which were not
	presented very clearly. E.g. for #3, it appears the first task is to generate
	a header using the length of the list. The instructions are rather vague and
	the example output is a hardcoded formula with no explanation of what the
	values and operations represent. In the interest of time, I simply skipped all
	sub-challenges other than #2, as it was the only one that was described
	reasonably well.
*/

const intToMaxByteArr = (int: number): string => {
	const maxByteSize = 255;
	const [maxRepeat, remainder] = divmod(int, maxByteSize);
	return `${`${maxByteSize} `.repeat(maxRepeat)}${remainder}`;
};

const extensibleByteBase = (intOrIntArr: string): string =>
	intOrIntArr
		.split(" ")
		.map(n => intToMaxByteArr(parseInt(n, 10)))
		.join(" ");

[
	extensibleByteBase("12") === "12",
	extensibleByteBase("255") === "255 0",
	extensibleByteBase("256") === "255 1",
	extensibleByteBase("510") === "255 255 0",
	extensibleByteBase("512 44 1024") === "255 255 2 44 255 255 255 255 4",
].forEach((test, i) => {
	console.assert(test, i.toString());
});
