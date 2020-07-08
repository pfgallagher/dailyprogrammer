const getShare = (numSailors: number, numCoconuts: number): number =>
	Math.floor(numCoconuts / numSailors);

const testSplit = (numSailors: number, numCoconuts: number): boolean => {
	for (let i = 0; i < numSailors; i++) {
		const share = getShare(numSailors, numCoconuts);
		if (numCoconuts % share !== 1) {
			return false;
		}
		numCoconuts -= share + 1;
	}
	return !(numCoconuts % getShare(numSailors, numCoconuts));
};

const coconuts = (numSailors: number): number => {
	let numCoconuts = 2;
	while (!testSplit(numSailors, numCoconuts)) {
		numCoconuts++;
	}
	return numCoconuts;
};

console.log(coconuts(5));
// 3121
