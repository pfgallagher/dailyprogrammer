import { range } from "../lib/util";

const isCellFilled = (x: number, y: number): boolean => {
	while (x > 0 || y > 0) {
		if (x % 3 === 1 && y % 3 === 1) {
			return false;
		}
		x = Math.floor(x / 3);
		y = Math.floor(y / 3);
	}
	return true;
};

const sierpinskiCarpet = (n: number) =>
	range(0, Math.pow(3, n) - 1)
		.map(x => range(0, Math.pow(3, n) - 1).map(y => isCellFilled(x, y)))
		.map(row => row.map(cell => (cell ? "\u2591" : " ")).join(""))
		.join("\n");

console.log(sierpinskiCarpet(3));
