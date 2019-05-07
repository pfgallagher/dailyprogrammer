const range = (min, max) =>
	Array(max - min + 1)
		.fill()
		.map((el, idx) => idx + min);

const findPrimes = () => {
	const primesArr = [];
	range(2, 2000).forEach(el => {
		const multiples = [];
		range(1, Math.floor(Math.sqrt(el))).forEach(innerEl => {
			if (!(el % innerEl)) multiples.push(innerEl);
		});
		if (!multiples.filter(multiple => multiple !== 1 && multiple !== el).length)
			primesArr.push(el);
	});
	return primesArr.length;
};
