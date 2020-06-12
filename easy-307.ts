export {};

const encode = (input: string): string =>
	input.replace(/\+/g, "++").split("\n").join("+,");

const decode = (input: string): string =>
	input.split(/\+,/g).join("\n").replace(/\+\+/g, "+");

const test = encode("abc+def\nghij\nklmno++p+");
console.log(test, "\n");
// abc++def+ghij+klmno++++p++
console.log(decode(test));
// abc+def
// ghij
// klmno++p+
