enum Wires {
	white = "white",
	black = "black",
	purple = "purple",
	red = "red",
	green = "green",
	orange = "orange",
}

enum Results {
	defused = "Bomb Defused",
	exploded = "Boom",
}

class BombDefusal {
	private cannotCut: Wires[] = [];
	private mustCut: Wires[] = [];
	private rules = {
		[Wires.white]: {
			cannot: [Wires.white, Wires.black],
			must: [],
		},
		[Wires.red]: {
			cannot: [],
			must: [Wires.green],
		},
		[Wires.black]: {
			cannot: [Wires.white, Wires.green, Wires.orange],
			must: [],
		},
		[Wires.orange]: {
			cannot: [],
			must: [Wires.red, Wires.black],
		},
		[Wires.green]: {
			cannot: [],
			must: [Wires.orange, Wires.white],
		},
		[Wires.purple]: {
			cannot: [Wires.purple, Wires.green, Wires.orange, Wires.white],
			must: [],
		},
	};

	constructor() {
		this.mustCut.push(...Object.values(Wires));
	}

	public cutSequence = (sequence: Wires[]): Results =>
		sequence.every(wire => this.cutWire(wire))
			? Results.defused
			: Results.exploded;

	private cutWire = (wire: Wires): boolean => {
		if (
			(this.cannotCut.length && this.cannotCut.includes(wire)) ||
			(this.mustCut.length && !this.mustCut.includes(wire))
		) {
			return false;
		}
		this.setRules(wire);
		return true;
	};

	private setRules = (wire: Wires) => {
		this.cannotCut = this.rules[wire].cannot;
		this.mustCut = this.rules[wire].must;
	};
}

const test1 = new BombDefusal();
console.log(
	test1.cutSequence([Wires.white, Wires.red, Wires.green, Wires.white]),
);
// Bomb Defused

const test2 = new BombDefusal();
console.log(
	test2.cutSequence([Wires.white, Wires.orange, Wires.green, Wires.white]),
);
// Boom
