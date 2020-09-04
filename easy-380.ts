const morseArr = ".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..".split(
	" ",
);

const smorse = (word: string): string =>
	[...word].map(char => morseArr[char.charCodeAt(0) - 97]).join("");

[
	smorse("sos") === "...---...",
	smorse("daily") === "-...-...-..-.--",
	smorse("programmer") === ".--..-.-----..-..-----..-.",
	smorse("bits") === "-.....-...",
	smorse("three") === "-.....-...",
].forEach((test, i) => {
	console.assert(test, i.toString());
});
