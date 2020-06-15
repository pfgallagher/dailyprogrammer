const flashPoint = (floorPlan: string, smokeCoords: string) => {
	const grid = floorPlan.split("\n").map(row => [...row]);
	const coords = smokeCoords
		.split("\n")
		.map(row => row.split(" ").map(coord => parseInt(coord, 10)));
	coords.forEach(([x, y]) => {
		switch (grid[y][x]) {
			case " ":
				grid[y][x] = "S";
				break;
			case "S":
				grid[y][x] = "F";
				break;
			default:
				break;
		}
	});
	grid.forEach((row, y) => {
		row.forEach((cell, x) => {
			if (
				cell === "S" &&
				[grid[y - 1][x], grid[y + 1][x], grid[y][x - 1], grid[y][x + 1]].some(
					el => el === "F",
				)
			) {
				grid[y][x] = "F";
			}
		});
	});
	return grid
		.map(row => row.join(""))
		.join("\n")
		.replace(/F_S|S_F/g, "F_F");
};

console.log(
	flashPoint(
		"#############/#\n#     |       #\n#     #       #\n#     #       #\n#######       #\n#     _       #\n###############",
		"1 1\n1 2\n1 3\n5 6\n4 2\n1 1\n1 2\n5 5\n5 5\n9 1\n7 5\n2 2",
	),
);
// #############/#
// #F    |  S    #
// #FF S #       #
// #F    #       #
// #######       #
// #    F_F      #
// ################
