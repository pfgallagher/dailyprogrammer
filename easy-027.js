const checkCenturyandIfLeapYear = year => {
	const century = Math.ceil(year / 100);
	let leap = true;
	if (year % 4) leap = false;
	else if (year % 100) leap = true;
	else if (year % 400) leap = false;
	return `
	Century: ${century}
	Leap Year: ${leap ? "Yes" : "No"}`;
};

console.log(checkCenturyandIfLeapYear(1800)); // Century: 18 | Leap Year: No
console.log(checkCenturyandIfLeapYear(1996)); // Century: 20 | Leap Year: Yes
console.log(checkCenturyandIfLeapYear(1900)); // Century: 19 | Leap Year: No
console.log(checkCenturyandIfLeapYear(2000)); // Century: 20 | Leap Year: Yes
console.log(checkCenturyandIfLeapYear(2004)); // Century: 21 | Leap Year: Yes
