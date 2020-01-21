import { range } from "../lib/util";

const findTornNums = () =>
	range(1, 99)
		.filter(num => {
			const digits = [...`${num ** 2}`];
			if (digits.length === 4) {
				const [one, two, three, four] = digits;
				const target = parseInt(`${one}${two}${three}${four}`, 10);
				const left = parseInt(`${one}${two}`, 10);
				const right = parseInt(`${three}${four}`, 10);
				return (left + right) ** 2 === target;
			}
			return false;
		})
		.map(num => num ** 2);

console.log(findTornNums());
