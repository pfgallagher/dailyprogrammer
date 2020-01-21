const isbnValidator = (isbn: string): boolean =>
	!(
		[...isbn.replace(/-/g, "")]
			.map(el => (el === "X" ? "10" : el))
			.reduce((acc, cur, i) => acc + (10 - i) * parseInt(cur, 10), 0) % 11
	);

console.log(isbnValidator("0-7475-3269-9"));
// true
console.log(isbnValidator("1-5688-1111-X"));
// true
console.log(isbnValidator("9-9999-9999-X"));
// false
