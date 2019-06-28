const findSubstring = (mainString: string, searchString: string): number => {
	for (let i = 0; i < mainString.length; i++) {
		if (mainString[i] === searchString[0]) {
			let isSubstring = true;
			for (let j = 0; j < searchString.length; j++) {
				if (searchString[j] !== mainString[i + j]) {
					isSubstring = false;
				}
			}
			if (isSubstring) {
				return i;
			}
		}
	}
	return -1;
};

console.log(findSubstring("Double, double, toil and trouble", "il an"));
console.log(findSubstring("il ale, double, toil and trouble", "il an"));
console.log(findSubstring("il ale, il abe, toil and trouble", "il an"));
console.log(findSubstring("il ane, il abe, toil and trouble", "il an"));
