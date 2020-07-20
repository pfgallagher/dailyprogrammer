const padStartWithZeros = (n: number, max: number): string =>
	n.toString().padStart(max, "0");

const dayOfTheWeek = (year: number, month: number, day: number) =>
	new Date(
		[
			padStartWithZeros(year, 4),
			padStartWithZeros(month, 2),
			padStartWithZeros(day + 1, 2),
		].join("-"),
	).toLocaleDateString([], { weekday: "long" });

[
	dayOfTheWeek(2017, 10, 30) === "Monday",
	dayOfTheWeek(2016, 2, 29) === "Monday",
	dayOfTheWeek(2015, 2, 28) === "Saturday",
	dayOfTheWeek(29, 4, 12) === "Thursday",
	dayOfTheWeek(570, 11, 30) === "Friday",
	dayOfTheWeek(1066, 9, 25) === "Tuesday",
	dayOfTheWeek(1776, 7, 4) === "Thursday",
	dayOfTheWeek(1933, 1, 30) === "Monday",
	dayOfTheWeek(1953, 3, 6) === "Friday",
	dayOfTheWeek(2100, 1, 9) === "Saturday",
	dayOfTheWeek(2202, 12, 15) === "Wednesday",
	dayOfTheWeek(7032, 3, 26) === "Monday",
].forEach((test, i) => {
	console.assert(test, i.toString());
});
