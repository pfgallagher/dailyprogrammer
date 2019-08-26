// This is mostly a repeat of easy-007, but here it is, nonetheless.

import * as inquirer from "inquirer";

interface IMorse {
	[key: string]: string;
}

const morseObj: IMorse = {
	".-": "a",
	"-...": "b",
	"-.-.": "c",
	"-..": "d",
	".": "e",
	"..-.": "f",
	"--.": "g",
	"....": "h",
	"..": "i",
	".---": "j",
	"-.-": "k",
	".-..": "l",
	"--": "m",
	"-.": "n",
	"---": "o",
	".--.": "p",
	"--.-": "q",
	".-.": "r",
	"...": "s",
	"-": "t",
	"..-": "u",
	"...-": "v",
	".--": "w",
	"-..-": "x",
	"-.--": "y",
	"--..": "z",
};

const decodeMorse = (morseStr: string): string =>
	morseStr
		.split("  ")
		.map(morseWord =>
			morseWord
				.split(" ")
				.map(char => morseObj[char])
				.join(""),
		)
		.join(" ");

const encodeMorse = (textStr: string): string =>
	textStr
		.toLowerCase()
		.split(" ")
		.map(textWord =>
			[...textWord]
				.map(char =>
					Object.keys(morseObj).find(morseKey => morseObj[morseKey] === char),
				)
				.join(" "),
		)
		.join("  ");

const askForInput = () => {
	const input: inquirer.QuestionCollection = {
		message: "Enter text, morse code, or exit():",
		name: "input",
		type: "input",
	};
	return inquirer.prompt(input);
};

(async () => {
	while (true) {
		const input = await askForInput();
		if (input.input === "exit()") {
			break;
		} else if (input.input.match(/\w+/)) {
			console.log(encodeMorse(input.input));
		} else {
			console.log(decodeMorse(input.input));
		}
	}
})();
