/*
	The math for this problem was a bit out of my wheelhouse, so this is largely a
	copy of a solution posted on the subreddit, with a few changes.
*/

class GoldenSection {
	private static phi = (1 + Math.sqrt(5)) / 2;

	public static search = (
		f: (n: number) => number,
		lower: number,
		upper: number,
		type: "minima" | "maxima",
	) => {
		let innerLower = upper - (upper - lower) / GoldenSection.phi;
		let innerUpper = lower + (upper - lower) / GoldenSection.phi;
		while (innerUpper - innerLower > Number.EPSILON) {
			const innerLowerOutput = f(innerLower);
			const innerUpperOutput = f(innerUpper);
			if (type === "maxima") {
				if (innerUpperOutput > innerLowerOutput) {
					lower = innerLower;
				} else {
					upper = innerUpper;
				}
			} else if (type === "minima") {
				if (innerUpperOutput < innerLowerOutput) {
					lower = innerLower;
				} else {
					upper = innerUpper;
				}
			}
			innerLower = upper - (upper - lower) / GoldenSection.phi;
			innerUpper = lower + (upper - lower) / GoldenSection.phi;
		}
		return (upper + lower) / 2;
	};

	public static test = () => {
		GoldenSection.runTests();
	};

	private static function1 = (radius: number): number => {
		const arcLength = 100 - 2 * radius;
		const circleDiameter = Math.PI * radius * 2;
		const circleArea = Math.PI * radius * radius;
		return (arcLength / circleDiameter) * circleArea;
	};

	private static function2 = (distance: number): number => {
		const distanceA = Math.sqrt(20 * 20 + distance * distance);
		const distanceB = Math.sqrt(30 * 30 + (100 - distance) * (100 - distance));
		return distanceA + distanceB;
	};

	private static runTests = () => {
		const radius = GoldenSection.search(
			GoldenSection.function1,
			0,
			50,
			"maxima",
		);
		const angle = ((100 - radius * 2) / (radius * 2 * Math.PI)) * 360;
		const distance = GoldenSection.search(
			GoldenSection.function2,
			0,
			100,
			"minima",
		);
		console.log(angle);
		console.log(distance);
	};
}

GoldenSection.test();
// ~114.6
// ~40
