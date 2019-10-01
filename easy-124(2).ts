/* 
	For whatever reason, it looks like there are two problems numbered 124.
	So, here's the second one.
*/

interface IGraphObj {
	[edgeName: string]: number[];
}

const edgeSorter = (graphObj: IGraphObj) =>
	Object.entries(graphObj)
		.map<[string, number]>(([key, [a, b]]) => [key, a + b])
		.sort(([, aVal], [, bVal]) => aVal - bVal)
		.map(([key]) => key);

console.log(
	edgeSorter({
		A: [3, 4],
		B: [4, 5],
		C: [1, 2],
		D: [2, 3],
	}),
); // ["C", "D", "A", "B"];

console.log(
	edgeSorter({
		F: [2, 3],
		B: [1, 2],
		D: [6, 5],
		C: [6, 7],
		E: [5, 4],
		A: [3, 4],
	}),
); // ["B", "F", "A", "E", "D", "C"];
