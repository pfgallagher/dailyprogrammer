const qwerty = "qwertyuiop[]\\asdfghjkl;'zxcvbnm,./";
const uQwerty = qwerty.toUpperCase();

const unshiftText = (text: string): string =>
	[...text]
		.map(char =>
			qwerty.indexOf(char) >= 0
				? qwerty[qwerty.indexOf(char) - 1]
				: uQwerty.indexOf(char) >= 0
				? uQwerty[uQwerty.indexOf(char) - 1]
				: char,
		)
		.join("");

console.log(unshiftText("Jr;;p ept;f")); // "Hello World"
console.log(unshiftText("Lmiyj od ,u jrtp")); // "Knuth is my hero"
