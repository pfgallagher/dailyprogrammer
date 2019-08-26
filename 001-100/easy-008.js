const ninetyNineBottles = () =>
	[...Array(99)]
		.map((el, idx) => {
			const cur = 99 - idx;
			return cur === 1
				? "1 bottle of beer on the wall. 1 bottle of beer. Take one down, pass it around, no more bottles of beer on the wall!"
				: `${cur} bottles of beer on the wall. ${cur} bottles of beer. Take one down, pass it around, ${cur -
						1} ${cur === 2 ? "bottle" : "bottles"} of beer on the wall.`;
		})
		.join(" ");
