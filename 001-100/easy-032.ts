// Since there are so many possible roulette bets, I am just going to do a few of the more common ones.

import {
	bets,
	numbers,
	RouletteNumber,
	rouletteNumbers,
} from "./easy-032-data";

const randomNum = (): RouletteNumber =>
	rouletteNumbers[Math.floor(Math.random() * numbers.length)];

const playRoulette = (
	betAmount: number,
	betType: string,
	betOption: string,
) => {
	const { payoutMultiplier, probability } = bets[betType];
	const roll = randomNum();
	const win = roll[betType] === betOption;
	return win
		? `You win! You made a ${betType} bet on ${betOption}, and the winning number was ${
				roll.num
		  }. You won $${betAmount *
				payoutMultiplier}. The odds were ${probability}.`
		: `You lose. You made a ${betType} bet on ${betOption}, and the winning number was ${
				roll.num
		  }. The odds were ${probability}.`;
};

// console.log(playRoulette(100, "num", "0"));
// console.log(playRoulette(100, "num", "00"));
// console.log(playRoulette(100, "num", "20"));
// console.log(playRoulette(100, "color", "red"));
// console.log(playRoulette(100, "color", "black"));
// console.log(playRoulette(100, "parity", "even"));
// console.log(playRoulette(100, "parity", "odd"));
// console.log(playRoulette(100, "twelve", "first"));
// console.log(playRoulette(100, "twelve", "second"));
// console.log(playRoulette(100, "twelve", "third"));
// console.log(playRoulette(100, "eighteen", "first"));
// console.log(playRoulette(100, "eighteen", "second"));
// console.log(playRoulette(100, "rows", "top"));
// console.log(playRoulette(100, "rows", "middle"));
// console.log(playRoulette(100, "rows", "bottom"));
