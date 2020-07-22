const firstRecurringChar = (input: string): string => {
	const visited: string[] = [];
	for (const char of input) {
		if (visited.includes(char)) {
			return char;
		}
		visited.push(char);
	}
	return "N/A";
};

console.log(firstRecurringChar("ABCDEBC"));
// B
console.log(firstRecurringChar("IKEUNFUVFV"));
// U
console.log(firstRecurringChar("PXLJOUDJVZGQHLBHGXIW"));
// J
console.log(firstRecurringChar('*l1J?)yn%R[}9~1"=k7]9;0['));
// 1
