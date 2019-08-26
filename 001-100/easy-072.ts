interface IPattern {
	[key: string]: string;
}

const patterns: IPattern = {
	"000": "0",
	"001": "1",
	"010": "1",
	"011": "1",
	"100": "0",
	"101": "1",
	"110": "1",
	"111": "0",
};

const split = (sequence: string): string[] => {
	const groups = [];
	for (let i = 0; i < sequence.length; i++) {
		const slice = sequence.slice(i, i + 3);
		if (slice.length === 3) {
			groups.push(slice);
		}
	}
	return groups;
};

const rule110 = (initialSequence: string, iterations: number): void => {
	console.log(initialSequence);
	let sequence = split(initialSequence);
	for (let i = 0; i < iterations; i++) {
		const nextSeq = `0${sequence.map(seq => patterns[seq]).join("")}0`;
		console.log(nextSeq);
		sequence = split(nextSeq);
	}
};

console.log(rule110("0000000000000001000000000000000", 250));
