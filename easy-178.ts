class Point {
	public x: number;
	public y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
		return this;
	}

	public translate = (a: number, b: number): Point => {
		this.x += a;
		this.y += b;
		return this;
	};

	public rotate = (a: number, b: number, c: number): Point => {
		const xRot = Math.cos(-c) * (this.x - a) - Math.sin(-c) * (this.y - b) + a;
		const yRot = Math.sin(-c) * (this.x - a) + Math.cos(-c) * (this.y - b) + b;
		this.x = xRot;
		this.y = yRot;
		return this;
	};

	public scale = (a: number, b: number, s: number): Point => {
		this.x = (this.x - a) * s + a;
		this.y = (this.y - b) * s + b;
		return this;
	};

	public reflect = (axis: "X" | "Y"): Point => {
		if (axis === "X") {
			this.y *= -1;
		} else if (axis === "Y") {
			this.x *= -1;
		}
		return this;
	};

	public finish = (): [number, number] => [
		Math.round(this.x),
		Math.round(this.y),
	];
}

const point = new Point(0, 5)
	.translate(3, 2)
	.scale(1, 3, 0.5)
	.rotate(3, 2, 1.57079632679)
	.reflect("X")
	.translate(2, -1)
	.scale(0, 0, -0.25)
	.rotate(1, -3, 3.14159265359)
	.reflect("Y")
	.finish();

console.log(point); // [-4, -7]
