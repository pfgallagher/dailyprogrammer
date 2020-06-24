class KnightPoint {
	private static moves = [
		[-2, -1],
		[-2, +1],
		[-1, -2],
		[-1, +2],
		[+1, -2],
		[+1, +2],
		[+2, -1],
		[+2, +1],
	];
	private x: number;
	private y: number;
	private steps: number;

	constructor(x: number, y: number, steps: number = 0) {
		this.x = x;
		this.y = y;
		this.steps = steps;
	}

	public static search = (start: KnightPoint, end: KnightPoint): number => {
		const queue = [start];
		const visited: KnightPoint[] = [];
		while (queue.length) {
			const next = queue.shift();
			if (next) {
				if (next.equals(end)) {
					return next.steps;
				}
				visited.push(next);
				next.availableMoves.forEach(pt => {
					if (!visited.includes(pt)) {
						queue.push(pt);
					}
				});
			}
		}
		return -1;
	};

	private equals = ({ x, y }: KnightPoint): boolean =>
		this.x === x && this.y === y;

	private get availableMoves() {
		return KnightPoint.moves.map(
			([xOffset, yOffset]) =>
				new KnightPoint(this.x + xOffset, this.y + yOffset, this.steps + 1),
		);
	}
}

console.log(KnightPoint.search(new KnightPoint(0, 0), new KnightPoint(3, 7)));
// 4
