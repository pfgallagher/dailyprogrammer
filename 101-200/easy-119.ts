// This is mostly a repeat of easy-065, but here is the solution nonetheless:
interface ICoin {
	count: number;
	name: string;
	value: number;
}

const Coins = (): ICoin[] => [
	{
		count: 0,
		name: "Quarters",
		value: 0.25,
	},
	{
		count: 0,
		name: "Dimes",
		value: 0.1,
	},
	{
		count: 0,
		name: "Nickels",
		value: 0.05,
	},
	{
		count: 0,
		name: "Pennies",
		value: 0.01,
	},
];

export const makeChange = (amount: number): void => {
	const coinArr = Coins();
	const rounded = parseFloat(amount.toFixed(2));
	let change = 0;
	while (change < rounded) {
		const amountRemaining = parseFloat((rounded - change).toFixed(2));
		const found = coinArr.find(coin => coin.value <= amountRemaining);
		if (found) {
			found.count++;
			change += found.value;
		} else {
			break;
		}
	}
	coinArr.forEach(coin => {
		if (coin.count) {
			console.log(`${coin.name}: ${coin.count}`);
		}
	});
};

console.log(makeChange(4.17));
// Quarters: 16
// Dimes: 1
// Nickels: 1
// Pennies: 2
console.log(makeChange(1.23));
// Quarters: 4
// Dimes: 2
// Nickels: 0
// Pennies: 3
console.log(makeChange(10.24));
console.log(makeChange(0.99));
console.log(makeChange(5));
console.log(makeChange(0.06));
