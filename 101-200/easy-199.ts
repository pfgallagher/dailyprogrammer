import { transpose } from "../lib/util";

const numberToASCIIMap: { [key: string]: string } = {
	"0": " _ \n| |\n|_|",
	"1": "   \n  |\n  |",
	"2": " _ \n _|\n|_ ",
	"3": " _ \n _|\n _|",
	"4": "   \n|_|\n  |",
	"5": " _ \n|_ \n _|",
	"6": " _ \n|_ \n|_|",
	"7": " _ \n  |\n  |",
	"8": " _ \n|_|\n|_|",
	"9": " _ \n|_|\n _|",
};

const bankNumberBanner = (input: string) =>
	transpose([...input].map(el => numberToASCIIMap[el].split("\n")))
		.map(el => el.join(""))
		.join("\n");

console.log(bankNumberBanner("000000000"));
console.log(bankNumberBanner("111111111"));
console.log(bankNumberBanner("490067715"));
