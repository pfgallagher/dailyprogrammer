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

// tslint:disable-next-line: max-classes-per-file
class Decks {
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
			for (let i = 0; i < this.deck.length; i++) {
				const randomI = Math.floor(Math.random() * i);
				[this.deck[i], this.deck[randomI]] = [this.deck[randomI], this.deck[i]];
			}
		}
		return this.getDeck();
	};
	public getDeck = () => {
		return this.deck;
	};
	public dealBlackjack = () => {
		this.shuffle(7);
		let hands = 0;
		let naturalBlackjacks = 0;
		while (this.deck.length) {
			const [cardOne, cardTwo] = [this.deal(), this.deal()];
			if (cardOne && cardTwo && this.isBlackjack([cardOne, cardTwo])) {
				naturalBlackjacks++;
			}
			hands++;
		}
		return `After ${hands} hands, there were ${naturalBlackjacks} natural blackjacks at ${(
			(naturalBlackjacks / hands) *
			100
		).toFixed(2)}%`;
	};
	private isBlackjack = (cardArr: Card[]): boolean =>
		this.handContainsAce(cardArr) && this.handContainsTenValueCard(cardArr);
	private handContainsAce = (cardArr: Card[]): boolean =>
		cardArr.some(({ value }) => value === "Ace");
	private handContainsTenValueCard = (cardArr: Card[]): boolean => {
		const tenValueCards = ["10", "Jack", "Queen", "King"];
		return cardArr.some(({ value }) => tenValueCards.includes(value));
	};
}

const newDeck = new Decks(10);
console.log(newDeck.dealBlackjack());
