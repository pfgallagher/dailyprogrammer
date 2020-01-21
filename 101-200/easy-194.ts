const validEscapes: { [key: string]: string } = {
	'\\"': '"',
	"\\'": "'",
	"\\?": "?",
	"\\\\": "\\",
	"\\a": "a",
	"\\b": "\b",
	"\\e": "e",
	"\\f": "\f",
	"\\n": "\n",
	"\\r": "\r",
	"\\t": "\t",
	"\\v": "\v",
};

const unescapeString = (input: string): string => {
	const possibleEscapeCodes = /(\\[a-z\\'"?])/g;
	const matches = input.match(possibleEscapeCodes);
	let result = input.slice(1, -1);
	let singleQuoteCount = 0;
	let doubleQuoteCount = 0;
	if (matches) {
		for (const match of matches) {
			if (match === "\\'") {
				singleQuoteCount++;
			}
			if (match === '\\"') {
				doubleQuoteCount++;
			}
			if (validEscapes[match]) {
				result = result.replace(match, validEscapes[match]);
			} else {
				return `Invalid string! (Bad escape code, ${match})`;
			}
		}
		if (!(singleQuoteCount % 2) && !(doubleQuoteCount % 2)) {
			return result;
		}
		return "Invalid string! (Doesn't end)";
	}
	return input;
};

console.log(unescapeString(String.raw`"hello,\nworld!"`));
// hello,
// world!
console.log("\n");
console.log(unescapeString(String.raw`"\"\\\""`));
// "\"
console.log("\n");
console.log(unescapeString(String.raw`"an invalid\nstring\"`));
// Invalid string! (Doesn't end)
console.log("\n");
console.log(unescapeString(String.raw`"another invalid string \q"`));
// Invalid string! (Bad escape code, \q)
