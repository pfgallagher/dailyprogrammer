export {};
// Effectively the same as #49, with a slight difference:

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
	const totalCount = switchCount + stayCount;
	return `
Tactic 1: ${((stayCount / totalCount) * 100).toFixed(1)}% winning chance
Tactic 2: ${((switchCount / totalCount) * 100).toFixed(1)}% winning chance
`;
};

console.log(montyHall(1_000_000));
// Tactic 1: 33.3% winning chance
// Tactic 2: 66.6% winning chance
