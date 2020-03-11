const consonants = [..."bcdfghjklmnpqrstvwxyz"];
const vowels = [..."aeiou"];

const getRandomChar = (type: "consonant" | "vowel"): string =>
	(type === "consonant" ? consonants : vowels)[
		Math.floor(Math.random() * (type === "consonant" ? 21 : 5))
	];

const randomWord = (word: string): string =>
	[...word.toLowerCase()]
		.map(char =>
			char === "c"
				? getRandomChar("consonant")
				: char === "v"
				? getRandomChar("vowel")
				: char,
		)
		.join("");

console.log(randomWord("cvcvcc"));
console.log(randomWord("CcvV"));
console.log(randomWord("cvcvcvcvcvcvcvcvcvcv"));
