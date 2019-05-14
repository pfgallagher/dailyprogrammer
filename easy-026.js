const removeConsecutiveDuplicates = str => {
	const duplicates = [];
	const reduced = [...str].reduce((acc, cur) => {
		if (acc[acc.length - 1] === cur) duplicates.push(cur);
		else acc.push(cur);
		return acc;
	}, []);
	return [reduced.join(""), duplicates.join("")];
};

console.log(removeConsecutiveDuplicates("balloons")); // -> "balons" "lo"
console.log(removeConsecutiveDuplicates("ddaaiillyypprrooggrraammeerr")); // -> "dailyprogramer" "dailyprogramer"
console.log(removeConsecutiveDuplicates("aabbccddeded")); // -> "abcdeded" "abcd"
console.log(removeConsecutiveDuplicates("flabby aapples")); // -> "flaby aples" "bap"
