interface ITriangle {
	[key: string]: number | undefined;
	A?: number;
	B?: number;
	C?: number;
	a?: number;
	b?: number;
	c?: number;
}

const radiansToDegrees = (n: number): number => n / (Math.PI / 180);
const degreesToRadians = (n: number): number => n * (Math.PI / 180);

const pythagoreanTheorem = (
	target: "a" | "b" | "c",
	a?: number,
	b?: number,
	c?: number,
): number | undefined => {
	switch (target) {
		case "a":
			if (c && b) {
				return Math.sqrt(c ** 2 - b ** 2);
			}
		case "b":
			if (c && a) {
				return Math.sqrt(c ** 2 - a ** 2);
			}
		case "c":
			if (a && b) {
				return Math.sqrt(a ** 2 + b ** 2);
			}
	}
};

const SOH = (
	target: "S" | "O" | "H",
	S?: number,
	O?: number,
	H?: number,
): number | undefined => {
	switch (target) {
		case "S":
			if (O && H) {
				return radiansToDegrees(Math.asin(O / H));
			}
		case "O":
			if (S && H) {
				return Math.sin(degreesToRadians(S)) * H;
			}
		case "H":
			if (S && O) {
				return O / Math.sin(degreesToRadians(S));
			}
	}
};

const CAH = (
	target: "C" | "A" | "H",
	C?: number,
	A?: number,
	H?: number,
): number | undefined => {
	switch (target) {
		case "C":
			if (A && H) {
				return radiansToDegrees(Math.acos(A / H));
			}
		case "A":
			if (C && H) {
				return Math.cos(degreesToRadians(C)) * H;
			}
		case "H":
			if (C && A) {
				return A / Math.cos(degreesToRadians(C));
			}
	}
};

const TOA = (
	target: "T" | "O" | "A",
	T?: number,
	O?: number,
	A?: number,
): number | undefined => {
	switch (target) {
		case "T":
			if (O && A) {
				return radiansToDegrees(Math.atan(O / A));
			}
		case "O":
			if (T && A) {
				return Math.tan(degreesToRadians(T)) * A;
			}
		case "A":
			if (T && O) {
				return O / Math.tan(degreesToRadians(T));
			}
	}
};

const rightTriangleSolver = (input: string): ITriangle => {
	const triangle: ITriangle = {
		A: undefined,
		B: undefined,
		C: 90,
		a: undefined,
		b: undefined,
		c: undefined,
		...Object.fromEntries(
			input
				.split("\n")
				.map(variable => variable.split("="))
				.map(([variable, value]) => [variable, parseFloat(value)]),
		),
	};
	const unknowns = Object.keys(triangle).filter(
		variable => !triangle[variable],
	);
	while (unknowns.length) {
		const firstUnknown = unknowns.shift();
		let firstUnknownValue;
		switch (firstUnknown) {
			case "a":
				if (triangle.b && triangle.c) {
					firstUnknownValue = pythagoreanTheorem(
						"a",
						undefined,
						triangle.b,
						triangle.c,
					);
				} else if (triangle.B && triangle.b) {
					firstUnknownValue = TOA("A", triangle.B, triangle.b, undefined);
				}
				break;
			case "b":
				if (triangle.a && triangle.c) {
					firstUnknownValue = pythagoreanTheorem(
						"b",
						triangle.a,
						undefined,
						triangle.c,
					);
				} else if (triangle.A && triangle.c) {
					firstUnknownValue = CAH("A", triangle.A, undefined, triangle.c);
				} else if (triangle.B && triangle.c) {
					firstUnknownValue = SOH("O", triangle.B, undefined, triangle.c);
				} else if (triangle.B && triangle.a) {
					firstUnknownValue = TOA("O", triangle.B, undefined, triangle.a);
				}
				break;
			case "c":
				if (triangle.a && triangle.b) {
					firstUnknownValue = pythagoreanTheorem(
						"c",
						triangle.a,
						triangle.b,
						undefined,
					);
				} else if (triangle.B && triangle.b) {
					firstUnknownValue = SOH("H", triangle.B, triangle.b, undefined);
				} else if (triangle.A && triangle.b) {
					firstUnknownValue = CAH("H", triangle.A, triangle.b, undefined);
				}
				break;
			case "A":
				if (triangle.b && triangle.c) {
					firstUnknownValue = CAH("C", undefined, triangle.b, triangle.c);
				}
				break;
			case "B":
				if (triangle.b && triangle.c) {
					firstUnknownValue = SOH("S", undefined, triangle.b, triangle.c);
				} else if (triangle.b && triangle.a) {
					firstUnknownValue = TOA("T", undefined, triangle.b, triangle.a);
				}
				break;
		}
		if (firstUnknown) {
			if (firstUnknownValue) {
				triangle[firstUnknown] = firstUnknownValue;
			} else {
				unknowns.push(firstUnknown);
			}
		}
	}
	return triangle;
};

// console.log(rightTriangleSolver("a=3\nb=4\nC=90"));
// console.log(rightTriangleSolver("a=3\nb=4\nA=36.87"));
// console.log(rightTriangleSolver("a=3\nb=4\nB=53.13"));
// console.log(rightTriangleSolver("a=3\nb=4"));
// console.log(rightTriangleSolver("b=4\nc=5"));
// console.log(rightTriangleSolver("b=4\nc=5\nA=36.87"));
// console.log(rightTriangleSolver("b=4\nc=5\nB=53.13"));
// console.log(rightTriangleSolver("b=4\nc=5\nC=90"));
// console.log(rightTriangleSolver("a=3\nA=36.87\nB=53.13"));
// console.log(rightTriangleSolver("a=3\nb=4\nc=5"));

// Expected output for all above test cases:
// ---
// A=36.87
// B=53.13
// C=90
// a=3
// b=4
// c=5
