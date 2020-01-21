const parseString = (str: string): string =>
	/^[+-]?\d+$/.test(str)
		? "integer"
		: /^\d+\.\d+$/.test(str)
		? "float"
		: /^\d{4}-\d{2}-\d{2}$/.test(str)
		? "date"
		: "text";

console.log(parseString("123")); // int
console.log(parseString("+123")); // int
console.log(parseString("-123")); // int
console.log(parseString("0")); // int
console.log(parseString("123.456")); // float
console.log(parseString("123.456")); // float
console.log(parseString("2019-09-13")); // date
console.log(parseString("Hello, World!")); // text
