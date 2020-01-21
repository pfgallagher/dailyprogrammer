const hexToBitmap = (input: string): any =>
	input
		.split(" ")
		.map(el =>
			[
				...Number(`0x${el}`)
					.toString(2)
					.padStart(8, "0"),
			]
				.map(char => (parseInt(char, 10) ? "x" : " "))
				.join(""),
		)
		.join("\n");

console.log(hexToBitmap("18 3C 7E 7E 18 18 18 18"));
//    xx
//   xxxx
//  xxxxxx
//  xxxxxx
//    xx
//    xx
//    xx
//    xx
console.log("\n");
console.log(hexToBitmap("FF 81 BD A5 A5 BD 81 FF"));
// xxxxxxxx
// x      x
// x xxxx x
// x x  x x
// x x  x x
// x xxxx x
// x      x
// xxxxxxxx
console.log("\n");
console.log(hexToBitmap("AA 55 AA 55 AA 55 AA 55"));
// x x x x
//  x x x x
// x x x x
//  x x x x
// x x x x
//  x x x x
// x x x x
//  x x x x
console.log("\n");
console.log(hexToBitmap("3E 7F FC F8 F8 FC 7F 3E"));
// xxxxx
// xxxxxxx
// xxxxxx
// xxxxx
// xxxxx
// xxxxxx
// xxxxxxx
//  xxxxx
console.log("\n");
console.log(hexToBitmap("93 93 93 F3 F3 93 93 93"));
// x  x  xx
// x  x  xx
// x  x  xx
// xxxx  xx
// xxxx  xx
// x  x  xx
// x  x  xx
// x  x  xx
