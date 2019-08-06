const rowColConverter = (arr: any[][], size: number): any[][] =>
	arr.reduce(
		(acc, cur) => {
			cur.forEach((cell, i) => {
				acc[i].push(cell);
			});
			return acc;
		},
		Array(size)
			.fill(0)
			.map(() => []),
	);

const nestedArrToSumMap = (arr: number[][]): Map<number, number> => {
	const map = new Map();
	arr.forEach((el, i) => {
		map.set(el.reduce((acc, cur) => acc + cur, 0), i);
	});
	return map;
};

const sortByRowAndCol = (matrix: string): string => {
	const rows = matrix
		.split("\n")
		.map(row => row.split(" ").map(el => parseInt(el, 10)));
	const columns = rowColConverter(rows, rows.length + 1);
	const rowMap: Map<any, any> = nestedArrToSumMap(rows);
	const colMap: Map<any, any> = nestedArrToSumMap(columns);
	const rowSums = [...rowMap.keys()];
	const colSums = [...colMap.keys()];
	const sortedRowSums = [...rowSums].sort().map(row => rows[rowMap.get(row)]);
	const sortedColSums = rowColConverter(
		[...colSums].sort().map(column => columns[colMap.get(column)]),
		rows.length + 1,
	);
	return `
Row Sums: ${rowSums.join(", ")}
Column Sums: ${colSums.join(", ")}

Sorted By Rows: 
${sortedRowSums.map(row => row.join(" ")).join("\n")}

Sorted By Columns: 
${sortedColSums.map(column => column.join(" ")).join("\n")}
`;
};

console.log(sortByRowAndCol("10 5 4 20\n9 33 27 16\n11 6 55 3"));
console.log(
	sortByRowAndCol(
		"5 58 88 60 11 23 97 48 59 82 95 24 6 67 47\n45 14 36 99 16 70 77 18 43 39 97 54 11 53 98\n85 14 96 66 34 86 95 49 4 49 72 76 45 49 37\n72 88 20 56 37 16 20 97 71 11 91 33 90 5 96\n15 53 54 95 61 93 75 95 51 83 71 70 2 57 83\n54 29 56 80 79 93 40 55 40 14 63 94 77 12 90\n96 97 3 47 2 43 12 2 82 92 1 99 90 13 35\n24 19 54 96 82 96 10 40 62 30 35 16 70 83 64\n59 81 8 84 14 46 32 45 41 35 98 66 87 51 49\n13 49 12 51 34 82 36 77 88 14 84 41 66 18 56\n6 68 82 63 77 72 67 36 85 53 66 70 21 86 80\n40 51 87 5 78 56 99 44 39 48 78 56 19 55 40\n5 94 62 46 85 73 24 67 95 63 42 95 43 53 4\n14 99 7 36 25 65 22 71 20 80 16 10 71 97 23\n99 77 85 53 13 32 37 19 61 32 45 62 25 18 32\n98 79 35 17 26 96 22 3 76 20 81 9 40 95 72\n18 39 55 99 96 63 90 78 77 81 2 99 68 6 84\n53 27 68 43 48 29 27 14 50 29 53 65 5 56 46\n94 36 17 64 2 93 5 95 47 78 90 3 85 26 32\n46 62 70 63 81 6 86 51 44 96 47 83 33 28 28",
	),
);
