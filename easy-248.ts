import { promises } from "fs";

const makeGrid = (size: string): string[][][] => {
	const grid: string[][][] = [];
	const [rows, cols] = size.split(" ").map(el => parseInt(el, 10));
	for (let i = 0; i < cols; i++) {
		grid.push([]);
		for (let j = 0; j < rows; j++) {
			grid[i].push([]);
		}
	}
	return grid;
};

const paintImage = async (input: string, path: string): Promise<void> => {
	const [size, ...instructions] = input.split("\n");
	const headers = `P3 ${size} 255 `;
	const grid = makeGrid(size);
	instructions.forEach(instruction => {
		const instArr = instruction.split(" ");
		const type = instArr[0];
		const color = instArr.slice(1, 4);
		switch (type) {
			case "point": {
				const [x, y] = instArr.slice(-2).map(el => parseInt(el, 10));
				grid[x][y] = color;
				break;
			}
			case "line": {
				const [startX, startY] = instArr
					.slice(-4, -2)
					.map(el => parseInt(el, 10));
				const [endX, endY] = instArr.slice(-2).map(el => parseInt(el, 10));
				const slope = (endY - startY) / (endX - startX);
				for (
					let x = startX < endX ? startX : endX;
					x < (endX > startX ? endX : startX);
					x++
				) {
					let y = slope * x + startY;
					if (slope < 0) {
						y = parseInt(size.split(" ")[0], 10) + y;
					}
					const yFloor = Math.floor(y);
					const yCeil = Math.ceil(y);
					grid[x][yFloor] = color;
					grid[x][yCeil] = color;
				}
				break;
			}
			case "rect": {
				const [startX, startY] = instArr
					.slice(-4, -2)
					.map(el => parseInt(el, 10));
				const [sizeX, sizeY] = instArr.slice(-2).map(el => parseInt(el, 10));
				const [endX, endY] = [startX + sizeX, startY + sizeY];
				for (let i = startY; i < endY; i++) {
					for (let j = startX; j < endX; j++) {
						grid[j][i] = color;
					}
				}
				break;
			}
			default: {
				break;
			}
		}
	});
	const finishedGrid = grid
		.flat()
		.map(el => (!el.length ? ["0", "0", "0"] : el))
		.map(el => el.join(" "))
		.join(" ");
	const fileContents = `${headers}${finishedGrid}`;
	await promises.writeFile(path, fileContents, "utf-8");
};

paintImage(
	"5 3\npoint 0 0 255 0 0\nline 100 100 100 0 2 2 4\nrect 77 0 0 1 3 2 2",
	"./easy-248-output1.ppm",
);

paintImage(
	"400 300\nrect 0 0 255 0 0 300 400\nline 255 255 255 0 0 299 399\nline 255 255 255 299 0 0 399\nrect 200 200 0 100 150 100 100\npoint 0 0 0 150 200",
	"./easy-248-output2.ppm",
);
