// I have no idea what this is used for, since I haven't learned calculus yet,
// but here it is:
const numericalDerivative = (x: number[], f: number[]): number[] => {
	const derivativeArr = [];
	const step = (x[1] - x[0]) / (f.length - 1);
	for (let i = 0; i < f.length - 1; i++) {
		derivativeArr.push((f[i + 1] - f[i]) / step);
	}
	return derivativeArr;
};

console.log(numericalDerivative([-1, 1], [-1.0, -0.5, 0, 0.5, 1.0]));
