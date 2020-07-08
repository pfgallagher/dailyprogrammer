type Tiles = [string, number][];

const getTiles = (): Tiles => [
	["A", 9],
	["B", 2],
	["C", 2],
	["D", 4],
	["E", 12],
	["F", 2],
	["G", 3],
	["H", 2],
	["I", 9],
	["J", 1],
	["K", 1],
	["L", 4],
	["M", 2],
	["N", 6],
	["O", 8],
	["P", 2],
	["Q", 1],
	["R", 6],
	["S", 4],
	["T", 6],
	["U", 4],
	["V", 2],
	["W", 2],
	["X", 1],
	["Y", 2],
	["Z", 1],
	["_", 2],
];

const checkTiles = (tiles: Tiles): string[] =>
	tiles.filter(([_, count]) => count < 0).map(([letter]) => letter);

const scrabble = (usedLetters: string): string => {
	const tiles = Object.fromEntries(getTiles());
	[...usedLetters].forEach(letter => {
		tiles[letter]--;
	});
	const invalidTiles = checkTiles(Object.entries(tiles));
	if (invalidTiles.length) {
		return `Invalid input. The following letters were removed too many times: ${invalidTiles.join(
			", ",
		)}`;
	}
	return Object.entries(
		Object.entries(tiles).reduce(
			(countObj: { [count: number]: string[] }, [letter, count]) => {
				if (countObj[count]) {
					countObj[count].push(letter);
				} else {
					countObj[count] = [letter];
				}
				return countObj;
			},
			{},
		),
	)
		.sort((a, b) => parseInt(b[0], 10) - parseInt(a[0], 10))
		.map(([count, letters]) => `${count}: ${letters.join(", ")}`)
		.join("\n");
};

console.log(scrabble("AEERTYOXMCNB_S"), "\n");
// 10: E
// 9: I
// 8: A
// 7: O
// 5: N, R, T
// 4: D, L, U
// 3: G, S
// 2: F, H, P, V, W
// 1: B, C, J, K, M, Q, Y, Z, _
// 0: X
console.log(scrabble("PQAREIOURSTHGWIOAE_"), "\n");
// 10: E
// 7: A, I
// 6: N, O
// 5: T
// 4: D, L, R
// 3: S, U
// 2: B, C, F, G, M, V, Y
// 1: H, J, K, P, W, X, Z, _
// 0: Q
console.log(scrabble("LQTOONOEFFJZT"), "\n");
// 11: E
// 9: A, I
// 6: R
// 5: N, O
// 4: D, S, T, U
// 3: G, L
// 2: B, C, H, M, P, V, W, Y, _
// 1: K, X
// 0: F, J, Q, Z
console.log(scrabble("AXHDRUIOR_XHJZUQEE"));
// Invalid input. The following letters were removed too many times: X
