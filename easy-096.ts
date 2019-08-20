const calcControllers = (dollars: number): number => {
	let availablePorts = 1;
	let controllers = 1;
	while (dollars > 12) {
		if (availablePorts && dollars >= 20) {
			controllers++;
			availablePorts--;
			dollars -= 20;
		} else if (!availablePorts && dollars >= 12) {
			availablePorts += 3;
			dollars -= 12;
		} else {
			break;
		}
	}
	return controllers;
};

console.log(calcControllers(10));
console.log(calcControllers(20));
console.log(calcControllers(60));
console.log(calcControllers(80));
console.log(calcControllers(120));
console.log(calcControllers(140));
console.log(calcControllers(160));
console.log(calcControllers(190));
console.log(calcControllers(200));
