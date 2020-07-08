import { chunkArr, shuffle } from "../lib/util";

const tetrominoOptions = ["O", "I", "S", "Z", "L", "J", "T"];

const generateTetrominos = (): string => {
	const selectedTetrominos: string[] = [];
	while (selectedTetrominos.length < 50) {
		const shuffled = shuffle([...tetrominoOptions]);
		shuffled.forEach(tetromino => {
			if (selectedTetrominos.length < 50) {
				selectedTetrominos.push(tetromino);
			}
		});
	}
	return selectedTetrominos.join("");
};

const areValidTetrominos = (tetrominos: string): boolean =>
	(chunkArr([...tetrominos], 7) as string[][]).every(tetrominoArr =>
		tetrominoArr.every(
			tetromino =>
				tetrominoArr.indexOf(tetromino) === tetrominoArr.lastIndexOf(tetromino),
		),
	);

const generatedTetrominos = generateTetrominos();
console.log(generatedTetrominos);
console.log(areValidTetrominos(generatedTetrominos));
