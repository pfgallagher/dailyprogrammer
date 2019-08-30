export const range = (min: number, max: number) =>
	Array(max - min + 1)
		.fill(0)
		.map((el, idx) => idx + min);
