export {};

const makeGrid = (size: number): string[][] =>
	Array(size)
		.fill(0)
		.map(() => [])
		.map(() =>
			Array(size)
				.fill(0)
				.map(() => "+"),
		);

const goDirection = (
	current: [number, number],
	direction: string,
): [number, number] => {
	const [one, two] = current;
	switch (direction) {
		case "right":
			return [one, two + 1];
		case "left":
			return [one, two - 1];
		case "up":
			return [one - 1, two];
		case "down":
			return [one + 1, two];
		default:
			throw new Error("Invalid direction");
	}
};

const order: { [direction: string]: string } = {
	right: "up",
	up: "left",
	left: "down",
	down: "right",
};

const squareSpirals = (size: number, pointNumberOrCoords: string) => {
	const grid = makeGrid(size);
	const centerI = Math.ceil(size / 2) - 1;
	grid[centerI][centerI] = "1";
	let last: [number, number] = [centerI, centerI];
	let curDirection = "right";
	let counter = 2;
	while (true) {
		const cur = goDirection(last, curDirection);
		const [one, two] = cur;
		last = [one, two];
		if (!grid[one][two]) {
			break;
		} else {
			grid[one][two] = `${counter}`;
			counter++;
		}
		const nextDirection = order[curDirection];
		const next = goDirection(last, nextDirection);
		const [nextOne, nextTwo] = next;
		if (grid[nextOne][nextTwo] !== "+") {
			continue;
		} else {
			curDirection = nextDirection;
		}
	}
	if (pointNumberOrCoords.indexOf("(") === -1) {
		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid.length; j++) {
				if (grid[i][j] === pointNumberOrCoords) {
					return `(${j + 1}, ${i + 1})`;
				}
			}
		}
	}
	const [targetOne, targetTwo] = pointNumberOrCoords
		.slice(1, -1)
		.split(", ")
		.map(coord => parseInt(coord, 10));
	return grid[targetTwo - 1][targetOne - 1];
};

console.log(squareSpirals(3, "8"));
// (2, 3)
console.log(squareSpirals(7, "(1, 1)"));
// 37
console.log(squareSpirals(11, "50"));
// (10, 9)
console.log(squareSpirals(9, "(6, 8)"));
// 47

/*
	Since my solution is a bit naive, I couldn't get the last two test cases
	working efficiently in the time I allotted for this challenge.
*/
