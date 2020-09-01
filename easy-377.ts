const packCrate = (
	sourceX: number,
	sourceY: number,
	targetX: number,
	targetY: number,
): number => Math.floor(sourceY / targetY) * Math.floor(sourceX / targetX);

[
	packCrate(25, 18, 6, 5) === 12,
	packCrate(10, 10, 1, 1) === 100,
	packCrate(12, 34, 5, 6) === 10,
	packCrate(12345, 678910, 1112, 1314) === 5676,
	packCrate(5, 100, 6, 1) === 0,
].forEach((test, i) => {
	console.assert(test, i.toString());
});
