const treeGenerator = (
	n: number,
	trunkChar: string,
	leavesChar: string,
): void => {
	for (
		let i = 1, spaceCounter = Math.ceil(n / 2);
		i <= n;
		i += 2, spaceCounter--
	) {
		console.log(" ".repeat(spaceCounter) + leavesChar.repeat(i));
	}
	console.log(" ".repeat(Math.floor(n / 2)) + trunkChar.repeat(3));
};

treeGenerator(3, "#", "*");
//    *
//   ***
//   ###

treeGenerator(13, "=", "+");
//       +
//      +++
//     +++++
//    +++++++
//   +++++++++
//  +++++++++++
// +++++++++++++
//      ===
