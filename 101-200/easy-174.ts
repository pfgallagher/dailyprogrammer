const flipBits = (binaryString: string): string =>
	[...binaryString].map(num => (num === "1" ? "0" : "1")).join("");

const thueMorseSeq = (n: number): string => {
	let result = "0";
	for (let i = 0; i < n; i++) {
		result = `${result}${flipBits(result)}`;
	}
	return result;
};

console.log(thueMorseSeq(0)); // 0
console.log(thueMorseSeq(1)); // 01
console.log(thueMorseSeq(2)); // 0110
console.log(thueMorseSeq(3)); // 01101001
console.log(thueMorseSeq(4)); // 0110100110010110
console.log(thueMorseSeq(5)); // 01101001100101101001011001101001
console.log(thueMorseSeq(6)); // 0110100110010110100101100110100110010110011010010110100110010110
