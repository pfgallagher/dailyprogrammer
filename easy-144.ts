import { chunkArr } from "./lib/util";

const priceArrToPriceObj = (arr: string[]): { [key: string]: string } =>
	Object.fromEntries(arr.map(nameAndPrice => nameAndPrice.split(" ")));

const findPriceDifferences = (input: string): void => {
	const [itemCount, ...items] = input.split("\n");
	const [oldPrices, newPrices] = chunkArr(
		items,
		parseInt(itemCount, 10),
	) as string[][];
	const oldPricesObj = priceArrToPriceObj(oldPrices);
	const newPricesObj = priceArrToPriceObj(newPrices);
	const changedPrices: { [key: string]: string | number } = {};
	Object.keys(oldPricesObj).forEach(key => {
		if (oldPricesObj[key] !== newPricesObj[key]) {
			let priceChange: string | number =
				parseInt(newPricesObj[key], 10) - parseInt(oldPricesObj[key], 10);
			priceChange = priceChange > 0 ? `+${priceChange}` : priceChange;
			changedPrices[key] = priceChange;
		}
	});
	Object.entries(changedPrices).forEach(changedPrice => {
		console.log(changedPrice.join(" "));
	});
};

console.log(
	findPriceDifferences(
		"4\nCarriageBolt 45\nEyebolt 50\nWasher 120\nRivet 10\nCarriageBolt 45\nEyebolt 45\nWasher 140\nRivet 10",
	),
);
// Eyebolt -5
// Washer +20

console.log(
	findPriceDifferences(
		"3\n2DNail 3\n4DNail 5\n8DNail 10\n8DNail 11\n4DNail 5\n2DNail 2",
	),
);
// 2DNail -1
// 8DNail +1
