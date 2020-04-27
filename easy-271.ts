const criticalProbability = (d: number, h: number): number =>
	h <= d ? (d + 1 - h) / d : criticalProbability(d, h - d) / d;

console.log(criticalProbability(4, 1));
// 1
console.log(criticalProbability(4, 4));
// 0.25
console.log(criticalProbability(4, 5));
// 0.25
console.log(criticalProbability(4, 6));
// 0.1875
console.log(criticalProbability(1, 10));
// 1
console.log(criticalProbability(100, 200));
// 0.0001
console.log(criticalProbability(8, 20));
// 0.009765625
