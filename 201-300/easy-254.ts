export {};

import { zip } from "../lib/util";

const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
const atbashEntries = zip(alphabet, [...alphabet].reverse());
const atbashMap: { [char: string]: string } = {
	...Object.fromEntries(atbashEntries),
	...Object.fromEntries(
		atbashEntries.map(atbashEntry =>
			atbashEntry.map(char => char.toUpperCase()),
		),
	),
};

const atbashCipher = (input: string): string =>
	[...input].map(char => (char in atbashMap ? atbashMap[char] : char)).join("");

console.log(atbashCipher("foobar"));
// ullyzi
console.log(atbashCipher("wizard"));
// draziw
console.log(atbashCipher("/r/dailyprogrammer"));
// /i/wzrobkiltiznnvi
console.log(atbashCipher("gsrh rh zm vcznkov lu gsv zgyzhs xrksvi"));
// this is an example of the atbash cipher
