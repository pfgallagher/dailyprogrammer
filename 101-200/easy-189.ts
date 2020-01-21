import { promises } from "fs";
import * as inquirer from "inquirer";

const hangmanPictures = [
	`
  +---+
  |   |
  O   |
 /|\\\  |
 / \\\  |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|\\\  |
 /    |
      |
      
=========`,
	`
  +---+
  |   |
  O   |
 /|\\\  |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
	`
  +---+
  |   |
      |
      |
      |
      |
=========`,
];

class Hangman {
	private triesRemaining = 6;
	private alreadyGuessed: string[] = [];
	private randomWord = "";
	private hiddenWord = "";

	public play = async (): Promise<void> => {
		this.randomWord = await this.getRandomWord();
		this.hiddenWord = "_".repeat(this.randomWord.length);
		while (this.triesRemaining) {
			this.displayStatus();
			const guess = await this.getGuess();
			if (this.isInvalidGuess(guess)) {
				continue;
			}
			this.alreadyGuessed.push(guess);
			const guessIndices = this.findCharIndices(guess);
			if (guessIndices.length) {
				this.updateHiddenWord(guessIndices, guess);
			} else {
				this.triesRemaining--;
			}
			if (this.hiddenWord === this.randomWord) {
				this.displayStatus();
				console.log("You win!");
				break;
			}
		}
		if (!this.triesRemaining && this.hiddenWord !== this.randomWord) {
			this.displayStatus();
			console.log(`You lose! The word was ${this.randomWord}`);
		}
	};

	private isInvalidGuess = (guess: string): boolean =>
		this.alreadyGuessed.includes(guess) ||
		/[^a-z]/.test(guess) ||
		guess.length > 1 ||
		!guess;

	private getWordList = async (): Promise<string[]> => {
		const fileContents = await promises.readFile(
			"./easy-189-data.txt",
			"utf-8",
		);
		return fileContents.split("\r\n").filter(word => word.length <= 7);
	};

	private getRandomWord = async () => {
		const wordList = await this.getWordList();
		return wordList[Math.floor(Math.random() * wordList.length)];
	};

	private guessPrompt = () => {
		const input: inquirer.QuestionCollection = {
			message: "Guess a letter:",
			name: "guess",
			type: "input",
		};
		return inquirer.prompt(input);
	};

	private getGuess = async () => {
		const { guess } = await this.guessPrompt();
		const lowerCaseGuess = guess.toLowerCase();
		return lowerCaseGuess;
	};

	private findCharIndices = (char: string): number[] => {
		const charIndices: number[] = [];
		[...this.randomWord].forEach((letter, i) => {
			if (letter === char) {
				charIndices.push(i);
			}
		});
		return charIndices;
	};

	private updateHiddenWord = (guessIndices: number[], guess: string) => {
		this.hiddenWord = [...this.hiddenWord]
			.map((char, i) => (guessIndices.includes(i) ? guess : char))
			.join("");
	};

	private displayStatus = (): void => {
		const hangmanState = hangmanPictures[this.triesRemaining];
		const alreadyGuessed = this.alreadyGuessed.join(", ");
		console.log(
			`${hangmanState}\nAlready guessed: ${alreadyGuessed}\nWord: ${this.hiddenWord}`,
		);
	};
}

const game = new Hangman();
game.play();
