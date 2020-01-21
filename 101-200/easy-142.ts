const fallingSand = (n: number, input: string): string => {
	const startGrid = input.split("\n").map(el => [...el]);
	const afterGrid = startGrid
		.reduce((acc, curRow, rowI) => {
			const belowRow = rowI < n - 1 ? acc[rowI + 1] : false;
			if (belowRow) {
				curRow.forEach((cell, cellI) => {
					const belowCell = belowRow[cellI];
					if (cell === "." && belowCell === " ") {
						curRow.splice(cellI, 1, " ");
						belowRow.splice(cellI, 1, ".");
					}
				});
			}
			return acc;
		}, startGrid)
		.map(row => row.join(""))
		.join("\n");
	return afterGrid;
};

console.log(fallingSand(5, ".....\n  #  \n#    \n     \n    ."));
// .
// . #
// #
//     .
//  . ..
console.log(
	fallingSand(5, ".....\n  #  \n#    \n     \n    .") ===
		"  .  \n. #  \n#    \n    .\n . ..",
);
