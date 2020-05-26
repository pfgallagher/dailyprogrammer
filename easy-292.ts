class RangeNotation {
	public static toRange = (rangeNotation: string): string => {
		const rangeArr: number[] = [];
		RangeNotation.toRanges(rangeNotation).forEach(([min, max, step]) => {
			rangeArr.push(...RangeNotation.resolveInputs(rangeArr, min, max, step));
		});
		return rangeArr.join(" ");
	};

	public static test = () => {
		RangeNotation.runTests();
	};

	private static toRanges = (rangeStrs: string): [string, string, number][] =>
		rangeStrs
			.replace(/-|\.\./g, ":")
			.split(",")
			.map(rangeStr => rangeStr.split(":"))
			.map(([min, max, step = "1"]) => [min, max, parseInt(step, 10)]);

	private static resolveInputs = (
		rangeArr: number[],
		min: string,
		max: string,
		step: number,
	): number[] =>
		RangeNotation.range([
			RangeNotation.resolveMin(rangeArr, min),
			RangeNotation.resolveMax(rangeArr, min, max),
			step,
		]);

	private static resolveMin = (rangeArr: number[], min: string): number =>
		rangeArr.length
			? RangeNotation.shorthandToLonghand(rangeArr[rangeArr.length - 1], min)
			: parseInt(min, 10);

	private static shorthandToLonghand = (min: number, max: string) => {
		let next = min;
		while (!next.toString().endsWith(max)) {
			next++;
		}
		return next;
	};

	private static resolveMax = (
		rangeArr: number[],
		min: string,
		max: string,
	): number =>
		max
			? RangeNotation.shorthandToLonghand(
					RangeNotation.resolveMin(rangeArr, min),
					max,
			  )
			: RangeNotation.resolveMin(rangeArr, min);

	private static range = ([min, max, step]: [number, number, number]) => {
		const rangeArr = [];
		for (let i = min; i <= max; i += step) {
			rangeArr.push(i);
		}
		return rangeArr;
	};

	private static runTests = () => {
		[
			RangeNotation.toRange("1,3,7,2,4,1") === "1 3 7 12 14 21",
			RangeNotation.toRange("1-3,1-2") === "1 2 3 11 12",
			RangeNotation.toRange("1:3,1:2") === "1 2 3 11 12",
			RangeNotation.toRange("1..3,1..2") === "1 2 3 11 12",
			RangeNotation.toRange("1:5:2") === "1 3 5",
			RangeNotation.toRange("104-2") === "104 105 106 107 108 109 110 111 112",
			RangeNotation.toRange("104..02") ===
				"104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159 160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 189 190 191 192 193 194 195 196 197 198 199 200 201 202",
			RangeNotation.toRange("545,64:11") ===
				"545 564 565 566 567 568 569 570 571 572 573 574 575 576 577 578 579 580 581 582 583 584 585 586 587 588 589 590 591 592 593 594 595 596 597 598 599 600 601 602 603 604 605 606 607 608 609 610 611",
		].forEach((test, i) => {
			console.assert(test, i.toString());
		});
	};
}

RangeNotation.test();
