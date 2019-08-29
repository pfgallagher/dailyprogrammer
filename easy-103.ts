const leetMap: { [key: string]: string } = {
	A: "A 4 /-\\ /_\\ @ /\\",
	B: "B 8 |3 |8 |o",
	C: "C < { [ ( © ¢",
	D: "D |) |] |>",
	E: "E 3 £ ₤ €",
	F: 'F |= |# |"',
	G: "G [- [+ 6",
	H: "H 4 |-| [-] {-} }-{ }{ |=| {=} /-/ (-) )-(",
	I: "I 1 | !",
	J: "J _| _/ _7 _) _] _}",
	K: "K |< 1< l<",
	L: "L |_ |",
	M: "M |\\/| ^^ /\\/\\ /X\\ []\\/[] []V[] ][\\\\//][ (V) N\\",
	N: "N |\\| /\\/ /V ][\\\\][",
	O: "O 0 () []",
	P: "P |* |°",
	Q: "Q O_ 9",
	R: "R |2 ®",
	S: "S 5 $ § ",
	T: "T 7 + 7` '|'",
	U: "U |_| \\_\\ /_/ \\_/ (_)",
	V: "V \\/",
	W: "W \\/\\/ (/\\) |/\\| \\X/ \\\\' '// VV \\\\//\\\\//",
	X: "X % >< )(",
	Y: "Y `/ ¥",
	Z: "Z 2",
};

const convertToLeet = (text: string): string =>
	[...text.toUpperCase()]
		.map(char => {
			const mappedLeet = leetMap[char];
			if (mappedLeet) {
				const leetArr = mappedLeet.split(" ");
				return leetArr[Math.floor(Math.random() * leetArr.length)];
			}
			return char;
		})
		.join("");

console.log(convertToLeet("Hello, world!"));
console.log(convertToLeet("This is another test."));
console.log(convertToLeet("Here is one last test case."));
