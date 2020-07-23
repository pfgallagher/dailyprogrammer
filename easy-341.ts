import { frequency } from "./lib/util";

const repeatingNumbers = (input: string): string =>
	Object.entries(
		frequency(
			[...input]
				.flatMap((_, i, arr) =>
					arr.map((__, j) => arr.slice(i, j + 1).join("")),
				)
				.filter(n => n),
		),
	)
		.filter(([n, count]) => n.length > 1 && count > 1)
		.map(entry => entry.join(":"))
		.join(" ") || "0";

[
	repeatingNumbers("11325992321982432123259") ===
		"21:2 23:2 25:2 32:4 59:2 232:2 259:2 321:2 325:2 3259:2",
	repeatingNumbers("1234565943210") === "0",
	repeatingNumbers("9870209870409898") ===
		"70:2 87:2 98:4 870:2 987:2 9870:2 09:2 098:2",
	repeatingNumbers("9999") === "99:3 999:2",
	repeatingNumbers("82156821568221") ===
		"15:2 21:3 56:2 68:2 82:3 156:2 215:2 568:2 682:2 821:2 1568:2 2156:2 5682:2 8215:2 15682:2 21568:2 82156:2 215682:2 821568:2 8215682:2",
	repeatingNumbers("11111011110111011") ===
		"10:3 11:10 101:3 110:3 111:6 1011:3 1101:3 1110:3 1111:3 10111:2 11011:3 11101:3 11110:2 110111:2 111011:3 111101:2 1110111:2 1111011:2 11110111:2 01:3 011:3 0111:2",
	repeatingNumbers("98778912332145") === "0",
	repeatingNumbers("124489903108444899") ===
		"44:3 48:2 89:2 99:2 448:2 489:2 899:2 4489:2 4899:2 44899:2",
].forEach((test, i) => {
	console.assert(test, i.toString());
});
