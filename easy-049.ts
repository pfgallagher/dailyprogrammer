const montyHall = (n: number): string => {
	const selectedDoor = 0;
	let switchCount = 0;
	let stayCount = 0;
	for (let i = 0; i < n; i++) {
		const carLocation = Math.floor(Math.random() * 3);
		if (carLocation === selectedDoor) {
			stayCount++;
		} else {
			switchCount++;
		}
	}
	return `
Stay: ${stayCount}
Switch: ${switchCount}
`;
};

console.log(montyHall(10_000_000));
