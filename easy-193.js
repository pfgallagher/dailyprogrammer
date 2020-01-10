var calculateCubeEdge = function (volume) { return Math.cbrt(volume); };
var calculateCylinderDiameter = function (volume, height) {
    return Math.sqrt(volume / Math.PI / height) * 2;
};
var calculateSphereRadius = function (volume) {
    return Math.cbrt(volume / Math.PI / (4 / 3));
};
var calculateConeRadius = function (volume, height) {
    return Math.sqrt(volume / Math.PI / (height / 3));
};
var calculateDimensions = function (volume) {
    var cubeEdge = calculateCubeEdge(volume);
    var cylinderHeightHeuristic = cubeEdge;
    var cylinderDiameter = calculateCylinderDiameter(volume, cylinderHeightHeuristic);
    var sphereRadius = calculateSphereRadius(volume);
    var coneHeightHeuristic = cubeEdge * 3;
    var coneRadius = calculateConeRadius(volume, coneHeightHeuristic);
    return "\nCube: " + cubeEdge.toFixed(2) + "m width, " + cubeEdge.toFixed(2) + "m length, " + cubeEdge.toFixed(2) + "m height\nCylinder: " + cylinderHeightHeuristic.toFixed(2) + "m height, " + cylinderDiameter.toFixed(2) + "m diameter\nSphere: " + sphereRadius.toFixed(2) + "m radius\nCone: " + coneHeightHeuristic.toFixed(2) + "m height, " + coneRadius.toFixed(2) + "m radius\n\t";
};
console.log(calculateDimensions(27));
//  Cube: 3.00m width, 3.00m, high, 3.00m tall
//  Cylinder: 3.00m tall, Diameter of 3.38m
//  Sphere: 1.86m Radius
//  Cone: 9.00m tall, 1.69m Radius
console.log(calculateDimensions(42));
console.log(calculateDimensions(1000));
console.log(calculateDimensions(2197));
