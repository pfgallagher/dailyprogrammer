enum Colors {
	red = "red",
	black = "black",
	green = "green",
}

const redNums = [
	"1",
	"3",
	"5",
	"7",
	"9",
	"12",
	"14",
	"16",
	"18",
	"19",
	"21",
	"23",
	"25",
	"27",
	"30",
	"32",
	"34",
	"36",
];

enum Parity {
	none = "none",
	even = "even",
	odd = "odd",
}

enum Twelve {
	none = "none",
	first = "first",
	second = "second",
	third = "third",
}

enum Eighteen {
	none = "none",
	first = "first",
	second = "second",
}

enum Rows {
	none = "none",
	top = "top",
	middle = "middle",
	bottom = "bottom",
}

class RouletteNumber {
	[key: string]: any;
	public num: string;
	public color: Colors;
	public parity: Parity;
	public twelve: Twelve;
	public eighteen: Eighteen;
	public rows: Rows;
	constructor(
		num: string,
		color: Colors,
		parity: Parity,
		twelve: Twelve,
		eighteen: Eighteen,
		rows: Rows,
	) {
		this.num = num;
		this.color = color;
		this.parity = parity;
		this.twelve = twelve;
		this.eighteen = eighteen;
		this.rows = rows;
	}
}

const range = (min: number, max: number): number[] =>
	Array(max - min + 1)
		.fill(0)
		.map((el, idx) => idx + min);

const isZero = (num: string): boolean => num === "0" || num === "00";

const findParity = (num: string): Parity => {
	if (isZero(num)) {
		return Parity.none;
	}
	return !(parseInt(num, 10) % 2) ? Parity.even : Parity.odd;
};

const findTwelve = (num: string): Twelve => {
	if (isZero(num)) {
		return Twelve.none;
	}
	if (parseInt(num, 10) <= 12) {
		return Twelve.first;
	}
	if (parseInt(num, 10) <= 24) {
		return Twelve.second;
	}
	return Twelve.third;
};

const findEighteen = (num: string): Eighteen => {
	if (isZero(num)) {
		return Eighteen.none;
	}
	if (parseInt(num, 10) <= 18) {
		return Eighteen.first;
	}
	return Eighteen.second;
};

const findColor = (num: string): Colors => {
	if (isZero(num)) {
		return Colors.green;
	}
	if (redNums.includes(num)) {
		return Colors.red;
	}
	return Colors.black;
};

const findRow = (num: string): Rows => {
	if (isZero(num)) {
		return Rows.none;
	}
	switch (parseInt(num, 10) % 3) {
		case 0:
			return Rows.top;
		case 2:
			return Rows.middle;
		default:
			return Rows.bottom;
	}
};

const numbers = ["00", ...range(0, 36).map(el => el.toString())];

const rouletteNumbers: RouletteNumber[] = [];

numbers.forEach(el => {
	const num = el;
	const color = findColor(el);
	const parity = findParity(el);
	const twelve = findTwelve(el);
	const eighteen = findEighteen(el);
	const rows = findRow(el);
	const newNum = new RouletteNumber(num, color, parity, twelve, eighteen, rows);
	rouletteNumbers.push(newNum);
});

interface IBets {
	[key: string]: {
		payoutMultiplier: number;
		probability: string;
	};
}

const bets: IBets = {
	color: {
		payoutMultiplier: 1,
		probability: "1 1/9 to 1",
	},
	eighteen: {
		payoutMultiplier: 1,
		probability: "1 1/9 to 1",
	},
	num: {
		payoutMultiplier: 35,
		probability: "37 to 1",
	},
	parity: {
		payoutMultiplier: 1,
		probability: "1 1/9 to 1",
	},
	rows: {
		payoutMultiplier: 2,
		probability: "2 1/6 to 1",
	},
	twelve: {
		payoutMultiplier: 2,
		probability: "2 1/6 to 1",
	},
};

export { bets, numbers, RouletteNumber, rouletteNumbers };
