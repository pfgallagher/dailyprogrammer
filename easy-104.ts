import { range } from "./lib/util";

const test = (day: number): number =>
	!(day % 3) || !(day % 100) || !(day % 14) ? 0 : 1;

const powerplantSimulation = (days: number): number =>
	range(1, days)
		.map(day => test(day))
		.reduce((a, c) => a + c);

console.log(powerplantSimulation(10)); // 7
console.log(powerplantSimulation(14)); // 9
console.log(powerplantSimulation(42)); // 26
console.log(powerplantSimulation(100)); // 61
console.log(powerplantSimulation(300)); // 184
console.log(powerplantSimulation(1400)); // 859
console.log(powerplantSimulation(4200)); // 2576
console.log(powerplantSimulation(5991)); // 3675
console.log(powerplantSimulation(7843)); // 4811
