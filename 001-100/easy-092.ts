interface INumberDisplay {
	[key: string]: string[];
}

const ln = "+--+";
const l = "|   ";
const r = "   |";
const lr = "|  |";
const ws = "    ";

const mappings: INumberDisplay = {
	"0": [ln, lr, lr, lr, ln],
	"1": [ws, r, r, r, r],
	"2": [ln, r, ln, l, ln],
	"3": [ln, r, ln, r, ln],
	"4": [ws, lr, ln, r, r],
	"5": [ln, l, ln, r, ln],
	"6": [ln, l, ln, lr, ln],
	"7": [ln, r, r, r, r],
	"8": [ln, lr, ln, lr, ln],
	"9": [ln, lr, ln, r, ln],
};

const numberdisplay = (input: number): string =>
	[...input.toString()]
		.map(num => mappings[num])
		.reduce<string[][]>(
			(acc, cur) => {
				if (cur) {
					cur.forEach((el, i) => {
						acc[i].push(el);
					});
				}
				return acc;
			},
			Array(input.toString().length + 1)
				.fill(0)
				.map(el => []),
		)
		.map(el => el.join("  "))
		.join("\n");

console.log(numberdisplay(5362));
console.log(numberdisplay(1234567890));
