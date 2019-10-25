const brailleMap: { [brailleKey: string]: string } = {
	"O.....": "a",
	"O.O...": "b",
	"OO....": "c",
	"OO.O..": "d",
	"O..O..": "e",
	"OOO...": "f",
	"OOOO..": "g",
	"O.OO..": "h",
	".OO...": "i",
	".OOO..": "j",
	"O...O.": "k",
	"O.O.O.": "l",
	"OO..O.": "m",
	"OO.OO.": "n",
	"O..OO.": "o",
	"OOO.O.": "p",
	"OOOOO.": "q",
	"O.OOO.": "r",
	".OO.O.": "s",
	".OOOO.": "t",
	"O...OO": "u",
	"O.O.OO": "v",
	".OOO.O": "w",
	"OO..OO": "x",
	"OO.OOO": "y",
	"O..OOO": "z",
};

const transcribeBraille = (input: string): string => {
	const rows = input.split("\n").map(row => row.split(" "));
	const transposedArr: string[][] = [...Array(rows[0].length)].map(() => []);
	rows.forEach(row => {
		row.forEach((cell, i) => {
			transposedArr[i].push(cell);
		});
	});
	return transposedArr
		.map(row => row.join(""))
		.map(cell => brailleMap[cell])
		.join("");
};

console.log(
	transcribeBraille(
		"O. O. O. O. O. .O O. O. O. OO\nOO .O O. O. .O OO .O OO O. .O\n.. .. O. O. O. .O O. O. O. ..",
	),
);
// helloworld
