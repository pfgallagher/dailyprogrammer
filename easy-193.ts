const calculateCubeEdge = (volume: number): number => Math.cbrt(volume);

const calculateCylinderDiameter = (volume: number, height: number): number =>
	Math.sqrt(volume / Math.PI / height) * 2;

const calculateSphereRadius = (volume: number): number =>
	Math.cbrt(volume / Math.PI / (4 / 3));

const calculateConeRadius = (volume: number, height: number): number =>
	Math.sqrt(volume / Math.PI / (height / 3));

const calculateDimensions = (volume: number): string => {
	const cubeEdge = calculateCubeEdge(volume);
	const cylinderHeightHeuristic = cubeEdge;
	const cylinderDiameter = calculateCylinderDiameter(
		volume,
		cylinderHeightHeuristic,
	);
	const sphereRadius = calculateSphereRadius(volume);
	const coneHeightHeuristic = cubeEdge * 3;
	const coneRadius = calculateConeRadius(volume, coneHeightHeuristic);
	return `
Cube: ${cubeEdge.toFixed(2)}m width, ${cubeEdge.toFixed(
		2,
	)}m length, ${cubeEdge.toFixed(2)}m height
Cylinder: ${cylinderHeightHeuristic.toFixed(
		2,
	)}m height, ${cylinderDiameter.toFixed(2)}m diameter
Sphere: ${sphereRadius.toFixed(2)}m radius
Cone: ${coneHeightHeuristic.toFixed(2)}m height, ${coneRadius.toFixed(
		2,
	)}m radius
	`;
};

console.log(calculateDimensions(27));
//  Cube: 3.00m width, 3.00m, high, 3.00m tall
//  Cylinder: 3.00m tall, Diameter of 3.38m
//  Sphere: 1.86m Radius
//  Cone: 9.00m tall, 1.69m Radius
console.log(calculateDimensions(42));
console.log(calculateDimensions(1000));
console.log(calculateDimensions(2197));
