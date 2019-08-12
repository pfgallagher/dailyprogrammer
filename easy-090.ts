type Grid = any[][];

const makeGrid = (xSize: number, ySize: number, type: string): number[][] => {
	const grid: Grid = [];
	for (let i = 0; i < ySize; i++) {
		const row = Array(xSize).fill(0);
		grid.push(row);
	}
	if (type === "player") {
		grid[0][0] = 1;
	}
	return grid;
};

const findPlayer = (grid: Grid): [number, number] => {
	const y = grid.findIndex(row => row.includes(1));
	const x = grid[y].findIndex(column => column === 1);
	return [x, y];
};

const isValidPosition = (x: number, y: number): boolean =>
	[x, y].every(coord => coord >= 0 && coord <= maxCoord);

const executeCommand = (
	command: string,
	playerGrid: Grid,
	paintGrid: Grid,
): Grid => {
	const [playerX, playerY] = findPlayer(playerGrid);
	switch (command) {
		case "N":
			const [northX, northY] = [playerX, playerY - 1];
			if (isValidPosition(northX, northY)) {
				playerGrid[playerY][playerX] = 0;
				playerGrid[northY][northX] = 1;
				break;
			}
		case "S":
			const [southX, southY] = [playerX, playerY + 1];
			if (isValidPosition(southX, southY)) {
				playerGrid[playerY][playerX] = 0;
				playerGrid[southY][southX] = 1;
				break;
			}
		case "W":
			const [westX, westY] = [playerX - 1, playerY];
			if (isValidPosition(westX, westY)) {
				playerGrid[playerY][playerX] = 0;
				playerGrid[westY][westX] = 1;
				break;
			}
		case "E":
			const [eastX, eastY] = [playerX + 1, playerY];
			if (isValidPosition(eastX, eastY)) {
				playerGrid[playerY][playerX] = 0;
				playerGrid[eastY][eastX] = 1;
				break;
			}
		case "P":
			paintGrid[playerY][playerX] = 1;
	}
	return playerGrid;
};

const paint = (paintGrid: Grid): Grid => [
	...paintGrid.map(row => [...row].map(cell => (cell ? "⬛️" : "⬜️"))),
];

let maxCoord = 0;

const walkaroundRasterizer = (
	xSize: number,
	ySize: number,
	commandStr: string,
) => {
	maxCoord = Math.max(xSize, ySize);

	const playerGrid: Grid = makeGrid(xSize, ySize, "player");
	const paintGrid: Grid = makeGrid(xSize, ySize, "paint");
	[...commandStr].forEach(command => {
		executeCommand(command, playerGrid, paintGrid);
	});
	return paint(paintGrid);
};

console.log(walkaroundRasterizer(5, 5, "PESPESPESPESPNNNNPWSPWSPWSPWSP"));
