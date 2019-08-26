import * as inquirer from "inquirer";

const askCommand = () => {
	const command: any = {
		message: "Command:",
		name: "command",
		type: "input",
	};
	return inquirer.prompt(command);
};

let hasWon = false;

const theAdventureOfTheBarrenMoor = async () => {
	let grid: any = makeGrid();
	console.log(`You awaken to find yourself in a barren moor.  Try "look"`);
	while (!hasWon) {
		const command: any = await askCommand();
		switch (command.command) {
			case "look":
				console.log(`
Gray foggy clouds float oppressively close to you, 
reflected in the murky gray water which reaches up your shins.
Some black plants barely poke out of the shallow water.
Try "north","south","east", or "west".
You notice a small watch-like device in your left hand.
It has hands like a watch, but the hands don't seem to tell time.
`);
			case "north":
			case "south":
			case "east":
			case "west":
				grid = movePlayer(grid, command.command);
				if (!hasWon) {
					console.log(`The dial reads '${findDistance(grid)}m'.`);
				}
				if (hasWon) {
					break;
				}
		}
	}
	console.log(`
The dial reads '0m'.
You see a box sitting on the plain.
It's filled with treasure!
You win!
The end.
`);
};

const makeGrid = (): number[][] => {
	const grid = [];
	for (let i = 0; i < 11; i++) {
		const row = Array(11).fill(0);
		grid.push(row);
	}

	const treasureStartLocations = [[0, 0], [0, 10], [10, 0], [10, 10]];
	const randomStart = Math.floor(Math.random() * 4);
	const [treasureX, treasureY] = treasureStartLocations[randomStart];
	grid[treasureX][treasureY] = 2;

	grid[5][5] = 1; // Player starts at middle

	return grid;
};

const findCoords = (grid: number[][], target: number): [number, number] => {
	const y = grid.findIndex(row => row.includes(target));
	const x = grid[y].findIndex(column => column === target);
	return [x, y];
};

const findDistance = (grid: number[][]): number => {
	const [treasureX, treasureY] = findCoords(grid, 2);
	const [playerX, playerY] = findCoords(grid, 1);
	return Math.abs(treasureX - playerX) + Math.abs(treasureY - playerY);
};

const isValidPosition = (x: number, y: number): boolean =>
	[x, y].every(coord => coord >= 0 && coord <= 10);

const checkIfWin = (
	directionX: number,
	directionY: number,
	grid: number[][],
): boolean => {
	const [treasureX, treasureY] = findCoords(grid, 2);
	return directionX === treasureX && directionY === treasureY;
};
const movePlayer = (
	grid: number[][],
	direction: string,
): number[][] | undefined => {
	const [playerX, playerY] = findCoords(grid, 1);
	switch (direction) {
		case "north":
			const [northX, northY] = [playerX, playerY - 1];
			if (checkIfWin(northX, northY, grid)) {
				hasWon = true;
				return;
			}
			if (isValidPosition(northX, northY)) {
				grid[playerY][playerX] = 0;
				grid[northY][northX] = 1;
				break;
			}
		case "south":
			const [southX, southY] = [playerX, playerY + 1];
			if (checkIfWin(southX, southY, grid)) {
				hasWon = true;
				return;
			}
			if (isValidPosition(southX, southY)) {
				grid[playerY][playerX] = 0;
				grid[southY][southX] = 1;
				break;
			}
		case "west":
			const [westX, westY] = [playerX - 1, playerY];
			if (checkIfWin(westX, westY, grid)) {
				hasWon = true;
				return;
			}
			if (isValidPosition(westX, westY)) {
				grid[playerY][playerX] = 0;
				grid[westY][westX] = 1;
				break;
			}
		case "east":
			const [eastX, eastY] = [playerX + 1, playerY];
			if (checkIfWin(eastX, eastY, grid)) {
				hasWon = true;
				return;
			}
			if (isValidPosition(eastX, eastY)) {
				grid[playerY][playerX] = 0;
				grid[eastY][eastX] = 1;
				break;
			}
	}
	return grid;
};

theAdventureOfTheBarrenMoor();
