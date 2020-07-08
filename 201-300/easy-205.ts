const monthMap: { [month: string]: string } = {
	"0": "January",
	"1": "February",
	"2": "March",
	"3": "April",
	"4": "May",
	"5": "June",
	"6": "July",
	"7": "August",
	"8": "September",
	"9": "October",
	"10": "November",
	"11": "December",
};

const ordinalMap: { [day: string]: string } = {
	"1": "1st",
	"2": "2nd",
	"3": "3rd",
	"21": "21st",
	"22": "22nd",
	"23": "23rd",
	"31": "31st",
};

const getOrdinal = (day: number): string =>
	day.toString() in ordinalMap ? ordinalMap[day.toString()] : `${day}th`;

const friendlyDateRange = (input: string): string => {
	const [start, end] = input.split(" ").map(date => {
		const [year, month, day] = date.split("-").map(el => parseInt(el, 10));
		return new Date(Date.UTC(year, month - 1, day));
	});
	const [startYear, endYear] = [start, end].map(date => date.getUTCFullYear());
	const [startMonth, endMonth] = [start, end].map(
		date => monthMap[date.getUTCMonth().toString()],
	);
	const [startDay, endDay] = [start, end].map(date => date.getUTCDate());
	const [startTime, endTime] = [start, end].map(date => date.getTime());
	const [startOrdinal, endOrdinal] = [startDay, endDay].map(date =>
		getOrdinal(date),
	);

	const startIsSameAsEnd = !(startTime - endTime);
	const startYearIsCurrentYear = startYear === new Date().getUTCFullYear();
	const startIsSameMonthAndYearAsEnd =
		startYear === endYear && startMonth === endMonth;
	const avgMSInYear = 31_557_600_000; // Not going to deal with leap years.
	const differenceIsLessThanAYear = endTime - startTime < avgMSInYear;
	const startYearIsSameAsEndYear = startYear === endYear;

	if (startIsSameAsEnd) {
		return `${startMonth} ${startOrdinal}, ${startYear}`;
	}
	if (startYearIsCurrentYear) {
		if (startIsSameMonthAndYearAsEnd) {
			return `${startMonth} ${startOrdinal} – ${endOrdinal}`;
		}
		if (differenceIsLessThanAYear) {
			return `${startMonth} ${startOrdinal} – ${endMonth} ${endOrdinal}`;
		}
	}
	if (startYearIsSameAsEndYear) {
		return `${startMonth} ${startOrdinal} – ${endMonth} ${endOrdinal}, ${startYear}`;
	}
	return `${startMonth} ${startOrdinal}, ${startYear} – ${endMonth} ${endOrdinal}, ${endYear}`;
};

console.log(friendlyDateRange("2020-07-01 2020-07-04"));
//     July 1st - 4th
console.log(friendlyDateRange("2020-12-01 2021-02-03"));
//     December 1st - February 3rd
console.log(friendlyDateRange("2015-12-01 2017-02-03"));
//     December 1st, 2015 - February 3rd, 2017
console.log(friendlyDateRange("2016-03-01 2016-05-05"));
//     March 1st - May 5th, 2016
console.log(friendlyDateRange("2017-01-01 2017-01-01"));
//     January 1st, 2017
console.log(friendlyDateRange("2022-09-05 2023-09-04"));
//     September 5th, 2022 - September 4th, 2023
console.log(friendlyDateRange("2015-04-01 2020-09-10"));
//     April 1st, 2015 - September 10th, 2020
console.log(friendlyDateRange("2015-12-11 2016-12-11"));
//     December 11th, 2015 - December 11th, 2016.
