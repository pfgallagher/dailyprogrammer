const range = (min, max) =>
	Array(max - min + 1)
		.fill()
		.map((el, idx) => idx + min);

const triangle = height =>
	range(1, height)
		.map((el, i) => "*".repeat(2 ** i))
		.join("\n");

console.log(triangle(5));
