class TwelveDaysOfChristmas {
	private static numMap: {
		[day: number]: { name: string; ordinal: string };
	} = {
		1: {
			name: "a",
			ordinal: "first",
		},
		2: {
			name: "Two",
			ordinal: "second",
		},
		3: {
			name: "Three",
			ordinal: "third",
		},
		4: {
			name: "Four",
			ordinal: "fourth",
		},
		5: {
			name: "Five",
			ordinal: "fifth",
		},
		6: {
			name: "Six",
			ordinal: "sixth",
		},
		7: {
			name: "Seven",
			ordinal: "seventh",
		},
		8: {
			name: "Eight",
			ordinal: "eighth",
		},
		9: {
			name: "Nine",
			ordinal: "ninth",
		},
		10: {
			name: "Ten",
			ordinal: "tenth",
		},
		11: {
			name: "Eleven",
			ordinal: "eleventh",
		},
		12: {
			name: "Twelve",
			ordinal: "twelfth",
		},
	};

	public static sing = (input: string): string =>
		input
			.split("\n")
			.map((item, day) => TwelveDaysOfChristmas.formatItem(item, day + 1))
			.map((_, day, arr) =>
				TwelveDaysOfChristmas.dayOfChristmas(
					arr.slice(0, day + 1).reverse(),
					day + 1,
				),
			)
			.join("\n");

	private static formatItem = (item: string, day: number) =>
		`${TwelveDaysOfChristmas.numMap[day].name} ${item}`;

	private static formatList = (formattedItems: string[]): string => {
		if (formattedItems.length > 1) {
			formattedItems[formattedItems.length - 1] = `And ${
				formattedItems[formattedItems.length - 1]
			}`;
		}
		return formattedItems.join("\n");
	};

	private static dayOfChristmas = (formattedItems: string[], day: number) =>
		`On the ${
			TwelveDaysOfChristmas.numMap[day].ordinal
		} day of Christmas, my true love sent to me:\n${TwelveDaysOfChristmas.formatList(
			formattedItems,
		)}\n`;
}

console.log(
	TwelveDaysOfChristmas.sing(
		"Partridge in a Pear Tree\nTurtle Doves\nFrench Hens\nCalling Birds\nGolden Rings\nGeese a Laying\nSwans a Swimming\nMaids a Milking\nLadies Dancing\nLords a Leaping\nPipers Piping\nDrummers Drumming",
	),
);
// On the first day of Christmas, my true love sent to me:
// a Partridge in a Pear Tree

// On the second day of Christmas, my true love sent to me:
// Two Turtle Doves
// And a Partridge in a Pear Tree

// On the third day of Christmas, my true love sent to me:
// Three French Hens
// Two Turtle Doves
// And a Partridge in a Pear Tree

// On the fourth day of Christmas, my true love sent to me:
// Four Calling Birds
// Three French Hens
// Two Turtle Doves
// And a Partridge in a Pear Tree

// On the fifth day of Christmas, my true love sent to me:
// Five Golden Rings
// Four Calling Birds
// Three French Hens
// Two Turtle Doves
// And a Partridge in a Pear Tree

// On the sixth day of Christmas, my true love sent to me:
// Six Geese a Laying
// Five Golden Rings
// Four Calling Birds
// Three French Hens
// Two Turtle Doves
// And a Partridge in a Pear Tree

// On the seventh day of Christmas, my true love sent to me:
// Seven Swans a Swimming
// Six Geese a Laying
// Five Golden Rings
// Four Calling Birds
// Three French Hens
// Two Turtle Doves
// And a Partridge in a Pear Tree

// On the eighth day of Christmas, my true love sent to me:
// Eight Maids a Milking
// Seven Swans a Swimming
// Six Geese a Laying
// Five Golden Rings
// Four Calling Birds
// Three French Hens
// Two Turtle Doves
// And a Partridge in a Pear Tree

// On the ninth day of Christmas, my true love sent to me:
// Nine Ladies Dancing
// Eight Maids a Milking
// Seven Swans a Swimming
// Six Geese a Laying
// Five Golden Rings
// Four Calling Birds
// Three French Hens
// Two Turtle Doves
// And a Partridge in a Pear Tree

// On the tenth day of Christmas, my true love sent to me:
// Ten Lords a Leaping
// Nine Ladies Dancing
// Eight Maids a Milking
// Seven Swans a Swimming
// Six Geese a Laying
// Five Golden Rings
// Four Calling Birds
// Three French Hens
// Two Turtle Doves
// And a Partridge in a Pear Tree

// On the eleventh day of Christmas, my true love sent to me:
// Eleven Pipers Piping
// Ten Lords a Leaping
// Nine Ladies Dancing
// Eight Maids a Milking
// Seven Swans a Swimming
// Six Geese a Laying
// Five Golden Rings
// Four Calling Birds
// Three French Hens
// Two Turtle Doves
// And a Partridge in a Pear Tree

// On the twelfth day of Christmas, my true love sent to me:
// Twelve Drummers Drumming
// Eleven Pipers Piping
// Ten Lords a Leaping
// Nine Ladies Dancing
// Eight Maids a Milking
// Seven Swans a Swimming
// Six Geese a Laying
// Five Golden Rings
// Four Calling Birds
// Three French Hens
// Two Turtle Doves
// And a Partridge in a Pear Tree
