const compress = (str: string): string[] => {
	const compressedArr: string[] = [];
	const groupedChars = str.match(/(.)\1{2,}|(.){0,1}/gi);
	if (groupedChars) {
		groupedChars.forEach(charGroup => {
			if (charGroup) {
				compressedArr.push(`(${charGroup.length}, ${charGroup[0]})`);
			}
		});
	}
	return compressedArr;
};

const decompress = (compressedArr: string[]): string =>
	compressedArr
		.map(charGroup => charGroup.slice(1, -1).split(", "))
		.map(charGroup => charGroup[1].repeat(parseInt(charGroup[0], 10)))
		.join("");

const compressedStr = compress("Heeeeelllllooooo nurse!");
console.log(compressedStr);
console.log(decompress(compressedStr));
