const splitAndParseEquation = (eq: string): [number, number] => {
	const [firstTerm, sign = "+", secondTerm] = eq
		.replace("y=", "")
		.split(/(y=)/)
		.join("")
		.split(/x([+-])|x/);
	const parsedFirstTerm = parseFloat(firstTerm);
	const parsedSecondTerm =
		(secondTerm ? parseFloat(secondTerm) : 0) * (sign === "+" ? 1 : -1);
	return [parsedFirstTerm, parsedSecondTerm];
};

const linearIntersection = (eqOne: string, eqTwo: string): [number, number] => {
	const [eqOneFirstTerm, eqOneSecondTerm] = splitAndParseEquation(eqOne);
	const [eqTwoFirstTerm, eqTwoSecondTerm] = splitAndParseEquation(eqTwo);
	const x =
		(eqTwoSecondTerm - eqOneSecondTerm) / (eqOneFirstTerm - eqTwoFirstTerm);
	const y = eqOneFirstTerm * x + eqOneSecondTerm;
	return [x, y];
};

console.log(linearIntersection("y=2x+2", "y=5x-4")); // [2, 6]
console.log(linearIntersection("y=-5x", "y=-4x+1")); // [-1, 5]
console.log(linearIntersection("y=0.5x+1.3", "y=-1.4x-0.2")); // [-0.7895, 0.9053]
