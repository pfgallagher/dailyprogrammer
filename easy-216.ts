// tslint:disable: max-classes-per-file
export {};

class Card {
	public suit: string;
	public value: string;
	public name: string;
	constructor(suit: string, value: string) {
		this.suit = suit;
		this.value = value;
		this.name = `${value} of ${suit}`;
	}
}

class Deck {
	private deck: Card[] = [];
	private suits = ["♠", "♥", "♦", "♣"];
	private values = [
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"Jack",
		"Queen",
		"King",
		"Ace",
	];
	constructor(numDecks: number) {
		for (let i = 0; i < numDecks; i++) {
			for (const suit of this.suits) {
				for (const value of this.values) {
					const card = new Card(suit, value);
					this.deck.push(card);
				}
			}
		}
	}
	public deal = () => {
		if (this.deck.length) {
			return this.deck.pop();
		}
	};
	public shuffle = (numShuffles: number) => {
		for (let i = 0; i < numShuffles; i++) {
			for (let j = 0; j < this.deck.length; j++) {
				const randomJ = Math.floor(Math.random() * j);
				[this.deck[j], this.deck[randomJ]] = [this.deck[randomJ], this.deck[j]];
			}
		}
	};
}

const playTexasHoldEm = (numPlayers: number) => {
	const deck = new Deck(1);
	deck.shuffle(7);
	const hands: Array<{ name: string; hand: Card[] }> = [];
	for (let i = 0; i < numPlayers; i++) {
		const name = !i ? "Your Hand" : `CPU ${i} Hand`;
		const hand = [deck.deal(), deck.deal()] as Card[];
		hands.push({ name, hand });
	}
	deck.deal();
	hands.push({
		hand: [deck.deal(), deck.deal(), deck.deal()] as Card[],
		name: "Flop",
	});
	deck.deal();
	hands.push({
		hand: [deck.deal()] as Card[],
		name: "Turn",
	});
	deck.deal();
	hands.push({
		hand: [deck.deal()] as Card[],
		name: "River",
	});
	return hands
		.map(
			({ hand, name }) =>
				`${name}: ${hand.map(({ name: cardName }) => cardName).join(", ")}`,
		)
		.join("\n");
};
console.log(playTexasHoldEm(3));

// How many players (2-8) ? 3
// Your hand: 2 of Clubs, 5 of Diamonds
// CPU 1 Hand: Ace of Spades, Ace of Hearts
// CPU 2 Hand: King of Clubs, Queen of Clubs
// Flop: 2 of Hearts, 5 of Clubs, Ace of Clubs
// Turn: King of Hearts
// River: Jack of Hearts
