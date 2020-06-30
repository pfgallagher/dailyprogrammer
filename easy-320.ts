enum Direction {
	up = "up",
	down = "down",
	left = "left",
	right = "right",
}

class Spiral {
	private static nextDirectionMap: { [direction in Direction]: Direction } = {
		[Direction.right]: Direction.down,
		[Direction.down]: Direction.left,
		[Direction.left]: Direction.up,
		[Direction.up]: Direction.right,
	};

	public static makeSpiralGrid = (size: number): string => {
		const grid = Spiral.makeGrid(size);
		Spiral.spiralCoords(size).forEach(([y, x], i) => {
			grid[y][x] = (i + 1).toString();
		});
		return grid.map(row => row.join("\t")).join("\n");
	};

	private static makeGrid = (size: number): string[][] => {
		const res: string[][] = [];
		for (let i = 0; i < size; i++) {
			const row: string[] = [];
			for (let j = 0; j < size; j++) {
				row.push("");
			}
			res.push(row);
		}
		return res;
	};

	private static nextDirection = (direction: Direction): Direction =>
		Spiral.nextDirectionMap[direction];

	private static nextCoords = (
		direction: Direction,
		coords: [number, number],
	): [number, number] => {
		const [y, x] = coords;
		switch (direction) {
			case Direction.up:
				return [y - 1, x];
			case Direction.down:
				return [y + 1, x];
			case Direction.left:
				return [y, x - 1];
			case Direction.right:
				return [y, x + 1];
			default:
				return coords;
		}
	};

	private static isOutOfBounds = (y: number, x: number, max: number): boolean =>
		y < 0 || x < 0 || y >= max || x >= max;

	private static spiralCoords = (size: number): [number, number][] => {
		const coords: [number, number][] = [[0, 0]];
		const visited = ["0,0"];
		let direction = Direction.right;
		while (coords.length < size ** 2) {
			const lastCoords = coords[coords.length - 1];
			const [nextY, nextX] = Spiral.nextCoords(direction, lastCoords);
			const nextCoordsStr = [nextY, nextX].toString();
			if (
				visited.includes(nextCoordsStr) ||
				Spiral.isOutOfBounds(nextY, nextX, size)
			) {
				direction = Spiral.nextDirection(direction);
			} else {
				coords.push([nextY, nextX]);
				visited.push(nextCoordsStr);
			}
		}
		return coords;
	};
}

console.log(Spiral.makeSpiralGrid(5), "\n");
// 1       2       3       4       5
// 16      17      18      19      6
// 15      24      25      20      7
// 14      23      22      21      8
// 13      12      11      10      9
console.log(Spiral.makeSpiralGrid(4));
// 1       2       3       4
// 12      13      14      5
// 11      16      15      6
// 10      9       8       7
