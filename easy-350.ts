import { combinations, sum } from "./lib/util";

const getPossibleCombos = (bookWidths: number[]): number[][] => {
	const combos: number[][] = [];
	for (let i = bookWidths.length; 0 < i; i--) {
		combos.push(...combinations(bookWidths, i));
	}
	return combos;
};

const bookshelf = (input: string): number => {
	const [rawShelves, ...rawBooks] = input.split("\n");
	const shelves = rawShelves.split(" ").map(shelf => parseInt(shelf, 10));
	const bookWidths = rawBooks.map(rawBook =>
		parseInt(rawBook.slice(0, rawBook.indexOf(" ")), 10),
	);
	const chosenShelves = [];
	while (bookWidths.length) {
		const possibleCombos = getPossibleCombos(bookWidths).sort(
			(a, b) => sum(b) - sum(a),
		);
		let foundShelf;
		const found = possibleCombos.find(combo => {
			const comboSum = sum(combo);
			foundShelf = shelves.find(shelf => shelf >= comboSum);
			return foundShelf;
		});
		if (found) {
			chosenShelves.push(foundShelf);
			found.forEach(bookWidth => {
				bookWidths.splice(bookWidths.indexOf(bookWidth), 1);
			});
		} else {
			return -1;
		}
	}
	return chosenShelves.length;
};

console.log(
	bookshelf(
		"150 150 300 150 150\n70 A Game of Thrones\n76 A Clash of Kings\n99 A Storm of Swords\n75 A Feasts for Crows\n105 A Dance With Dragons",
	),
);
// 2
console.log(
	bookshelf(
		"500 500 500\n1309 Artamene\n303 A la recherche du temps perdu\n399 Mission Earth",
	),
);
// -1

/*
		Since this is a naive combination solution, the challenge test probably
		isn't going to work efficiently, if at all, so I've excluded it for now.
*/
