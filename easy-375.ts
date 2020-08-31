const incrementDigs = (input: number): number =>
	parseInt(
		[...input.toString()].map(dig => parseInt(dig, 10) + 1).join(""),
		10,
	);

console.log(incrementDigs(998));
// 10109
