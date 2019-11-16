export {};

const capitalizationRules = (word: string): string => {
	if (word.length > 1) {
		const exclamationI = word.indexOf("!");
		const caretI = word.indexOf("^");
		if (exclamationI >= 0) {
			return word.toUpperCase().slice(0, exclamationI);
		}
		if (caretI >= 0) {
			return `${word[0].toUpperCase()}${word.slice(1, caretI)}`;
		}
	}
	return word;
};

const decompress = (dictionary: string[], compressedText: string): string => {
	const rules = compressedText
		.replace(/(\d*)/g, match => {
			if (match) {
				const iFromNum = parseInt(match, 10);
				return dictionary[iFromNum];
			}
			return match;
		})
		.split(" ")
		.map(el => capitalizationRules(el))
		.filter(el => el !== "e" && el !== "E")
		.reduce((acc: string[], cur, i, arr) => {
			const isPunctuation = /[\.,?!;:]/g;
			if (isPunctuation.test(cur)) {
				acc[acc.length - 1] = `${acc[acc.length - 1]}${cur}`;
				return acc;
			}
			acc.push(cur);
			return acc;
		}, [])
		.join(" ")
		.replace(/ R ?/gi, "\n")
		.replace(/ - /g, "-");
	return rules;
};

console.log(
	decompress(["is", "my", "hello", "name", "stan"], "2! ! R 1^ 3 0 4^ . E"),
);
// HELLO!
// My name is Stan.

const seussDictionary = [
	"i",
	"do",
	"house",
	"with",
	"mouse",
	"in",
	"not",
	"like",
	"them",
	"ham",
	"a",
	"anywhere",
	"green",
	"eggs",
	"and",
	"here",
	"or",
	"there",
	"sam",
	"am",
];

console.log(decompress(seussDictionary, "0^ 1 6 7 8 5 10 2 . R"));
// I do not like them in a house.

console.log(decompress(seussDictionary, "0^ 1 6 7 8 3 10 4 . R"));
// I do not like them with a mouse.

console.log(decompress(seussDictionary, "0^ 1 6 7 8 15 16 17 . R"));
// I do not like them here or there.

console.log(decompress(seussDictionary, "0^ 1 6 7 8 11 . R"));
// I do not like them anywhere.

console.log(decompress(seussDictionary, "0^ 1 6 7 12 13 14 9 . R"));
// I do not like green eggs and ham.

console.log(decompress(seussDictionary, "0^ 1 6 7 8 , 18^ - 0^ - 19 . R E"));
// I do not like them, Sam-I-am.
