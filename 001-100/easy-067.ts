const reverse32Bit = (n: number): number =>
	parseInt([...n.toString(2).padStart(32, "0")].reverse().join(""), 2);

console.log(reverse32Bit(13));
