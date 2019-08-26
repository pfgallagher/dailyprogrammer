const dayOfTheWeek = (month, day, year) =>
	new Date(year, month - 1, day).toLocaleDateString("en-US", {
		weekday: "long",
	});
