class Locker {
	public static count(lockerArr: Locker[]) {
		const numberOpen = lockerArr.reduce((acc, cur) => {
			if (cur.open === true) {
				return acc + 1;
			}
			return acc;
		}, 0);
		const numberClosed = lockerArr.length - numberOpen;
		const pluralOpen = numberOpen === 1 ? "locker is" : "lockers are";
		const pluralClosed = numberClosed === 1 ? "locker is" : "lockers are";

		return `${numberOpen} ${pluralOpen} open and ${numberClosed} ${pluralClosed} closed.`;
	}
	public static whichOpen(lockerArr: Locker[]) {
		const lockersOpen = lockerArr
			.filter(locker => locker.open === true)
			.map(locker => locker.label);
		const pluralOpen = lockersOpen.length === 1 ? "Locker" : "Lockers";
		return `${pluralOpen} open: ${lockersOpen.join(", ")}`;
	}

	public label: number;
	public open: boolean;

	constructor(label: number) {
		this.label = label;
		this.open = false;
	}

	public toggle() {
		this.open = !this.open;
	}
}

const lockers: Locker[] = [];

for (let i = 1; i <= 1000; i++) {
	const newLocker = new Locker(i);
	lockers.push(newLocker);
}

const range = (min: number, max: number): number[] =>
	Array(max - min + 1)
		.fill(0)
		.map((el, idx) => idx + min);

const students = range(1, 1000);

students.forEach(student => {
	lockers.forEach(locker => {
		if (!(locker.label % student)) {
			locker.toggle();
		}
	});
});
// console.log(Locker.count(lockers));
// console.log(Locker.whichOpen(lockers));

// The above class solution is flexible, yet iterative. If we solely wanted to
// produce an array with booleans for the open status, we could rely on a neat
// trick that takes advantage of the fact that the result of flipping each
// subsequent number results in only the numbers that are squares being flipped.

const lockersAlt = range(1, Math.floor(Math.sqrt(1000))).map(
	locker => locker ** 2,
);
// console.log(lockersAlt);
