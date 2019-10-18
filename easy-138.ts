const calculateRepulsion = (
	particleOne: number[],
	particleTwo: number[],
): number => {
	const [oneMass, oneX, oneY] = particleOne;
	const [twoMass, twoX, twoY] = particleTwo;
	const deltaX = oneX - twoX;
	const deltaY = oneY - twoY;
	const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
	const force = (oneMass * twoMass) / distance ** 2;
	return force;
};

console.log(calculateRepulsion([1, -5.2, 3.8], [1, 8.7, -4.1])); // ~0.0039

console.log(calculateRepulsion([4, 0.04, -0.02], [4, -0.02, -0.03])); // ~4324.3279
