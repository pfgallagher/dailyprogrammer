const base10ToBase62 = (base10Num: number): string => {
	const chars =
		"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let value = "";
	let quotient = base10Num;

	while (quotient > 0) {
		const remainder = quotient % 62;
		value = `${chars[remainder]}${value}`;
		quotient = Math.floor(quotient / 62);
	}
	return value;
};

[
	base10ToBase62(15674) === "44O",
	// Skipped because number exceeds Number.MAX_SAFE_INTEGER:
	// base10ToBase62(7026425611433322325)
	base10ToBase62(187621) === "MO9",
	base10ToBase62(237860461) === "g62n3",
	base10ToBase62(2187521) === "9b4B",
	base10ToBase62(18752) === "4Ss",
].forEach((test, i) => {
	console.assert(test, i.toString());
});
