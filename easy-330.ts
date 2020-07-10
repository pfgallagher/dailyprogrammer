const surroundCircles = (input: string): string => {
	const xs: number[] = [];
	const ys: number[] = [];
	input
		.split("\n")
		.map(group => group.split(",").map(prop => parseFloat(prop)))
		.forEach(([x, y, radius]) => {
			xs.push(x + radius, x - radius);
			ys.push(y + radius, y - radius);
		});
	const [minX, maxX, minY, maxY] = [
		Math.min(...xs),
		Math.max(...xs),
		Math.min(...ys),
		Math.max(...ys),
	].map(n => n.toFixed(3));
	return `(${minX}, ${minY}), (${minX}, ${maxY}), (${maxX}, ${maxY}), (${maxX}, ${minY})`;
};

console.log(surroundCircles("1,1,2\n2,2,0.5\n-1,-3,2\n5,2,1"));
// (-3.000, -5.000), (-3.000, 3.000), (6.000, 3.000), (6.000, -5.000)
