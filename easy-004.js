const range = (start, end) =>
	Array(end - start + 1)
		.fill()
		.map((el, idx) => start + idx);

const passGen = (num, length) => {
	const charCodeArr = [
		33,
		range(35, 37),
		range(47, 57),
		range(64, 90),
		range(97, 122),
	].flat();
	return Array(num)
		.fill()
		.map(() =>
			Array(length)
				.fill()
				.map(() =>
					String.fromCharCode(
						charCodeArr[Math.floor(Math.random() * charCodeArr.length)],
					),
				)
				.join(""),
		);
};
