export {};

class Rabbits {
	private males = Array(96).fill(0);
	private females = Array(96).fill(0);
	private monthsElapsed = 0;

	constructor(males: number, females: number) {
		this.males[2] = males;
		this.females[2] = females;
	}

	public calculate = (target: number): number => {
		while (this.numRabbits() < target) {
			this.monthsElapsed++;
			const fertileCount = this.numFertile();
			this.age();
			this.reproduce(fertileCount);
		}
		return this.monthsElapsed;
	};

	private reproduce = (numFertile: number) => {
		this.males[0] += numFertile * 5;
		this.females[0] += numFertile * 9;
	};

	private numFertile = (): number =>
		this.females.slice(4).reduce((a, c) => a + c, 0);

	private numRabbits = (): number =>
		[...this.males, ...this.females].reduce((a, c) => a + c, 0);

	private age = () => {
		const nextMales = Array(96).fill(0);
		const nextFemales = Array(96).fill(0);
		this.males.forEach((males, i) => {
			if (nextMales[i + 1] !== undefined) {
				nextMales[i + 1] = males;
			}
		});
		this.females.forEach((females, i) => {
			if (nextFemales[i + 1] !== undefined) {
				nextFemales[i + 1] = females;
			}
		});
		this.males = nextMales;
		this.females = nextFemales;
	};
}

const test = new Rabbits(2, 4);
console.log(test.calculate(1000000000));
// 32
const test2 = new Rabbits(2, 4);
console.log(test2.calculate(15000000000));
// 36
