export {};

type Rectangle = [number, number, number, number];

const mapStringify = (arr: any[]): string[] =>
	arr.map(el => JSON.stringify(el));

const mapParse = (arr: string[]): any[] => arr.map(el => JSON.parse(el));

const intersect = <T>(arrOne: T[], arrTwo: T[]): T[] =>
	arrOne.length <= arrTwo.length
		? mapParse(
				mapStringify(arrOne).filter(el => mapStringify(arrTwo).includes(el)),
		  )
		: mapParse(
				mapStringify(arrTwo).filter(el => mapStringify(arrOne).includes(el)),
		  );

const rectangleIntersection = (
	rectOne: Rectangle,
	rectTwo: Rectangle,
): Rectangle | null => {
	const [xTLOne, yTLOne, xBROne, yBROne] = rectOne;
	const [xTLTwo, yTLTwo, xBRTwo, yBRTwo] = rectTwo;
	const rectOneCoords = [[xTLOne, yTLOne]];
	const rectTwoCoords = [[xTLTwo, yTLTwo]];

	for (let i = xTLOne + 1; i <= xBROne; i++) {
		rectOneCoords.push([i, yTLOne], [xTLOne, i], [i, i]);
	}
	for (let i = xTLTwo + 1; i <= xBRTwo; i++) {
		rectTwoCoords.push([i, yTLTwo], [xTLTwo, i], [i, i]);
	}
	const intersection = intersect(rectOneCoords, rectTwoCoords)
		.filter((arr, i, coordArr) => i === 0 || i === coordArr.length - 1)
		.flat() as Rectangle;
	return intersection.length ? intersection : null;
};
console.log(rectangleIntersection([3, 3, 10, 10], [6, 6, 12, 12]));
console.log(rectangleIntersection([4, 4, 5, 5], [6, 6, 10, 10]));
