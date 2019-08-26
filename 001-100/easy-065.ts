const currency = [
	{
		count: 0,
		name: "Hundred-Dollar Bills",
		value: 100,
	},
	{
		count: 0,
		name: "Fifty-Dollar Bills",
		value: 50,
	},
	{
		count: 0,
		name: "Ten-Dollar Bills",
		value: 10,
	},
	{
		count: 0,
		name: "Five-Dollar Bills",
		value: 5,
	},
	{
		count: 0,
		name: "One-Dollar Bills",
		value: 1,
	},
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

const makeChange = (amount: number): void => {
	const rounded = parseFloat(amount.toFixed(2));
	let total = 0;
	while (total < rounded) {
		const amountRemaining = parseFloat((rounded - total).toFixed(2));
		const largestCurrency = currency.find(
			money => money.value <= amountRemaining,
		);
		if (largestCurrency) {
			largestCurrency.count++;
			total += largestCurrency.value;
		}
	}
	currency.forEach(money => {
		if (money.count > 0) {
			console.log(`${money.name}: ${money.count}`);
		}
	});
};

console.log(makeChange(12.333));
