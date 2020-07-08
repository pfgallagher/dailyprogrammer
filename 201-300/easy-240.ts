import { shuffle } from "../lib/util";

const typoglycemia = (input: string): string =>
	input.replace(/(?<=\b\w)(\w+)(?=\w\b)/g, match =>
		shuffle([...match]).join(""),
	);

console.log(
	typoglycemia(
		"According to a research team at Cambridge University, it doesn't matter in what order the letters in a word are,",
	),
);
console.log(
	typoglycemia(
		"the only important thing is that the first and last letter be in the right place.",
	),
);
console.log(
	typoglycemia(
		"The rest can be a total mess and you can still read it without a problem.",
	),
);
console.log(
	typoglycemia(
		"This is because the human mind does not read every letter by itself, but the word as a whole.",
	),
);
console.log(
	typoglycemia("Such a condition is appropriately called Typoglycemia."),
);
