import { sum } from "./lib/util";

const upc = (code: string): number => {
	const parsedCode = [...code].map(dig => parseInt(dig, 10));
	const M =
		(sum(parsedCode.filter((_, i) => !(i % 2))) * 3 +
			sum(parsedCode.filter((_, i) => i % 2))) %
		10;
	return M ? 10 - M : 0;
};

[
	upc("04210000526") === 4,
	upc("03600029145") === 2,
	upc("12345678910") === 4,
	upc("00001234567") === 0,
].forEach((test, i) => {
	console.assert(test, i.toString());
});
