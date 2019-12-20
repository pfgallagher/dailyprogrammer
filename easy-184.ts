class SmartStackList {
	private stack: number[] = [];
	private ordered: number[] = [];

	public push(n: number) {
		this.stack.push(n);
		this.ordered.push(n);
		this.ordered = this.ordered.sort((a, b) => a - b);
	}

	public pop() {
		const popped = this.stack.pop();
		if (popped) {
			this.ordered.splice(this.ordered.lastIndexOf(popped), 1);
		}
	}

	public size() {
		return this.stack.length;
	}

	public removeGreater(n: number) {
		this.stack = this.stack.filter(el => el > n);
		this.ordered = this.stack.filter(el => el > n);
	}

	public display(type: "stack" | "ordered") {
		return type === "stack" ? this.stack : this.ordered;
	}
}

const randomPositiveOrNegativeN = (maxAndMinus: number) => {
	const negative = !!Math.round(Math.random());
	let randomNum = Math.floor(Math.random() * maxAndMinus);
	if (negative) {
		randomNum *= -1;
	}
	return randomNum;
};

const runTests = () => {
	const mySmartStackList = new SmartStackList();
	const randomN = Math.floor(Math.random() * 40);

	for (let i = 0; i < randomN; i++) {
		const randomNum = randomPositiveOrNegativeN(1000);
		mySmartStackList.push(randomNum);
	}
	console.log(mySmartStackList.display("stack"));
	console.log(mySmartStackList.display("ordered"));

	const randomFilter = randomPositiveOrNegativeN(1000);
	mySmartStackList.removeGreater(randomFilter);
	console.log(mySmartStackList.display("stack"));
	console.log(mySmartStackList.display("ordered"));

	for (let i = 0; i < Math.round(mySmartStackList.size() / 2); i++) {
		mySmartStackList.pop();
	}
	console.log(mySmartStackList.display("stack"));
	console.log(mySmartStackList.display("ordered"));
};

runTests();
