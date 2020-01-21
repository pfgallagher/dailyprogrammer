export {};
type Grid = string[][];

class GameOfLife {
	private grid: Grid;
	private width: number;
	private height: number;
	constructor(width: number, height: number, input: string) {
		this.grid = input.split("\n").map(row => [...row]);
		this.width = width;
		this.height = height;
	}

	public simulate = (n: number) => {
		for (let simulationRounds = 0; simulationRounds < n; simulationRounds++) {
			const gridCopy = [...this.grid].map(row => [...row]);
			for (let row = 0; row < this.height; row++) {
				for (let col = 0; col < this.width; col++) {
					const cell = gridCopy[row][col];
					if (cell === "." && this.livingNeighbors(row, col, gridCopy) === 3) {
						this.toggleCell(row, col);
					} else if (cell === "#") {
						if (this.livingNeighbors(row, col, gridCopy) < 2) {
							this.toggleCell(row, col);
						} else if (this.livingNeighbors(row, col, gridCopy) > 3) {
							this.toggleCell(row, col);
						}
					}
				}
			}
		}
	};

	public printGrid = () => this.grid.forEach(row => console.log(row.join("")));

	private livingNeighbors = (row: number, col: number, grid: Grid) => {
		let neighborCount = 0;
		for (let i = -1; i < 2; i++) {
			for (let j = -1; j < 2; j++) {
				if ((i || j) && grid[row + i] && grid[row + i][col + j] === "#") {
					neighborCount++;
				}
			}
		}
		return neighborCount;
	};

	private toggleCell = (row: number, col: number) => {
		const cell = this.grid[row][col];
		if (cell) {
			if (cell === ".") {
				this.grid[row][col] = "#";
			} else {
				this.grid[row][col] = ".";
			}
		}
	};
}

const game = new GameOfLife(
	10,
	10,
	"..........\n..........\n..#.......\n...#......\n.###......\n..........\n..........\n..........\n..........\n..........",
);
game.simulate(7);
game.printGrid();

console.log("\n");

const game2 = new GameOfLife(
	17,
	17,
	".................\n.................\n....###...###....\n.................\n..#....#.#....#..\n..#....#.#....#..\n..#....#.#....#..\n....###...###....\n.................\n....###...###....\n..#....#.#....#..\n..#....#.#....#..\n..#....#.#....#..\n.................\n....###...###....\n.................\n.................",
);
game2.simulate(32);
game2.printGrid();
