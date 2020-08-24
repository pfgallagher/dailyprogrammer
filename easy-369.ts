const hexColor = (r: number, g: number, b: number): string =>
	`#${[r, g, b]
		.map(color => color.toString(16).toUpperCase().padStart(2, "0"))
		.join("")}`;

[
	hexColor(255, 99, 71) === "#FF6347",
	hexColor(184, 134, 11) === "#B8860B",
	hexColor(189, 183, 107) === "#BDB76B",
	hexColor(0, 0, 205) === "#0000CD",
].forEach((test, i) => {
	console.assert(test, i.toString());
});
