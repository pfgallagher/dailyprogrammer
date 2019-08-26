const rpnCalculator = (...args: Array<number | string>): number => {
	const stack: number[] = [];
	let workingNums: number[] = [];
	const pushOp = () => {
		const popOne = stack.pop();
		const popTwo = stack.pop();
		if (popOne && popTwo) {
			workingNums.push(popOne);
			workingNums.push(popTwo);
		}
	};
	for (const op of args) {
		switch (op) {
			case "+":
				pushOp();
				stack.push(workingNums[1] + workingNums[0]);
				workingNums = [];
				break;
			case "-":
				pushOp();
				stack.push(workingNums[1] - workingNums[0]);
				workingNums = [];
				break;
			case "*":
				pushOp();
				stack.push(workingNums[1] * workingNums[0]);
				workingNums = [];
				break;
			case "/":
				pushOp();
				stack.push(workingNums[1] / workingNums[0]);
				workingNums = [];
				break;
			default:
				if (typeof op === "number") {
					stack.push(op);
				}
		}
	}
	return parseInt(stack.toString(), 10);
};

console.log(rpnCalculator(3, 4, "*", 6, 2, "-", "+"));
