const letterByLetter = (source: string, target: string): string => {
	const wordArr = [...source];
	const result = [wordArr.join("")];
	[...target].forEach((letter, i) => {
		if (wordArr[i] !== letter) {
			wordArr[i] = letter;
			result.push(wordArr.join(""));
		}
	});
	return result.join("\n");
};

console.log(letterByLetter("floor", "brake"), "\n");
// floor
// bloor
// broor
// braor
// brakr
// brake
console.log(letterByLetter("wood", "book"), "\n");
// wood
// bood
// book
console.log(letterByLetter("a fall to the floor", "braking the door in"));
// a fall to the floor
// b fall to the floor
// brfall to the floor
// braall to the floor
// brakll to the floor
// brakil to the floor
// brakin to the floor
// brakingto the floor
// braking o the floor
// braking t the floor
// braking ththe floor
// braking thehe floor
// braking the e floor
// braking the d floor
// braking the dofloor
// braking the dooloor
// braking the dooroor
// braking the door or
// braking the door ir
// braking the door in
