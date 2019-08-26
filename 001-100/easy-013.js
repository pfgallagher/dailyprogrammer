// More concise, more efficient way.
const calcDayOfYear = (month, day, year) =>
	Math.ceil(
		(new Date(year, month - 1, day + 1) - new Date(year, 0, 1)) / 86400000,
	);

// A much more iterative (and, not to mention, slower) but nonetheless
//  interesting alternative solution I came up with.
const range = (min, max) =>
	Array(max - min + 1)
		.fill()
		.map((el, idx) => idx + min);

const calcDayOfYear2 = (month, day, year) =>
	range(0, month - 1).reduce((acc, cur) => {
		(cur === month - 1 ? range(1, day) : range(1, 31)).forEach(reducerDay => {
			if (new Date(year, cur, reducerDay).getMonth() === cur) acc++;
		});
		return acc;
	}, 0);
