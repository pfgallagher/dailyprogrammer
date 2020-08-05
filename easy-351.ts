import { range } from "./lib/util";

type Scores = { [player: number]: number };
type Options = {
	[type: string]: (runs: number) => void;
};

class Cricket {
	private scores: Scores = Object.fromEntries(
		range(1, 11).map(player => [player, 0]),
	);
	private battingLineup = [1, 2, 3];
	private over = 1;
	private extra = 0;
	private options: Options = {
		".": () => {
			return;
		},
		w: () => {
			this.extra++;
		},
		W: () => {
			this.nextBatter();
		},
		b: () => {
			this.extra++;
			this.swapBatters();
		},
		digit: runs => {
			this.scoreRuns(runs);
		},
	};

	public scoreBreakdown = (input: string): string => {
		for (const type of [...input]) {
			this.handleType(type);
			this.swapIfOver();
			this.over++;
		}
		return this.formatScore();
	};

	private handleType = (type: string) => {
		if (this.options.hasOwnProperty(type)) {
			this.options[type](0);
		} else {
			this.options.digit(parseInt(type, 10));
		}
	};

	private swapIfOver = () => {
		if (this.over === 6) {
			this.swapBatters();
		}
	};

	private swapBatters = () => {
		[this.battingLineup[0], this.battingLineup[1]] = [
			this.battingLineup[1],
			this.battingLineup[0],
		];
	};

	private nextBatter = () => {
		this.battingLineup[0] = this.battingLineup[2];
		this.battingLineup[2]++;
	};

	private scoreRuns = (runs: number) => {
		this.scores[this.battingLineup[0]] += runs;
		if (runs % 2) {
			this.swapBatters();
		}
	};

	private formatScore = (): string => {
		const scores = Object.entries(this.scores)
			.filter(([_, runs]) => runs)
			.map(([player, runs]) => `P${player}: ${runs}`);
		if (this.extra) {
			scores.push(`Extra: ${this.extra}`);
		}
		return scores.join("\n") || "N/A";
	};
}

const game1 = new Cricket();
const game2 = new Cricket();
const game3 = new Cricket();

[
	game1.scoreBreakdown("1.2wW6.2b34"),
	game2.scoreBreakdown("WWWWWWWWWW"),
	game3.scoreBreakdown("1..24.w6"),
].forEach(test => {
	console.log(test, "\n");
});
// P1: 7
// P2: 2
// P3: 9
// Extra: 2

// N/A

// P1: 7
// P2: 6
// Extra: 1
