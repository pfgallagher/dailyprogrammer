const cardValueMap: { [key: string]: number } = {
	Two: 2,
	Three: 3,
	Four: 4,
	Five: 5,
	Six: 6,
	Seven: 7,
	Eight: 8,
	Nine: 9,
	Ten: 10,
	Jack: 10,
	Queen: 10,
	King: 11,
	Ace: 11,
};

const scoreHand = (hand: string[]): number =>
	hand.map(card => cardValueMap[card]).reduce((acc, cur) => acc + cur, 0);

const checkBlackjack = (input: string): string => {
	const playersAndHands: Array<[string, string[]]> = input
		.split("\n")
		.map(el => el.split(": "))
		.map(([player, hand]) => [
			player,
			hand.split(", ").map(card => card.slice(0, card.indexOf(" of"))),
		]);
	for (const playerAndHand of playersAndHands) {
		const [player, hand] = playerAndHand;
		if (hand.length === 5 && scoreHand(hand) <= 21) {
			return `${player} has won with a 5-card trick!`;
		}
	}
	const playersAndScoredHands = playersAndHands.map(([player, hand]) => [
		player,
		scoreHand(hand),
	]);
	const winners = playersAndScoredHands.filter(([_, score]) => score === 21);
	if (winners.length > 1) {
		return "Tie.";
	}
	return `${winners[0][0]} has won!`;
};

console.log(
	checkBlackjack(
		"Alice: Ace of Diamonds, Ten of Clubs\nBob: Three of Hearts, Six of Spades, Seven of Spades\nChris: Ten of Hearts, Three of Diamonds, Jack of Clubs",
	),
); // Alice has won!

console.log(
	checkBlackjack(
		"Alice: Ace of Diamonds, Ten of Clubs\nBob: Three of Hearts, Six of Spades, Seven of Spades\nChris: Ten of Hearts, Three of Diamonds, Jack of Clubs\nDavid: Two of Hearts, Three of Clubs, Three of Hearts, Five of Hearts, Six of Hearts",
	),
); // David has won with a 5-card trick!
