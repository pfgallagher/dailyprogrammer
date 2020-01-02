import { promises } from "fs";

const determineDateFormat = (dateString: string) => {
	if (dateString.includes("-")) {
		return "ISO";
	}
	if (dateString.includes("/")) {
		return "slash";
	}
	if (dateString.includes("#")) {
		return "hash";
	}
	if (dateString.includes("*")) {
		return "asterisk";
	}
	const yearLength = dateString.split(" ")[2].length;
	if (yearLength === 4) {
		return "fullWithFourDigits";
	}
	if (yearLength === 2) {
		return "fullWithTwoDigits";
	}
};

const dateParamsToDateString = (year: number, month: string, date: string) =>
	new Date(year, parseInt(month, 10) - 1, parseInt(date, 10))
		.toISOString()
		.slice(0, 10);

const partialYearToFullYear = (year: string): number =>
	parseInt(year, 10) >= 50
		? parseInt(`19${year}`, 10)
		: parseInt(`20${year}`, 10);

const monthAbbreviationMap: { [month: string]: string } = {
	Jan: "01",
	Feb: "02",
	Mar: "03",
	Apr: "04",
	May: "05",
	Jun: "06",
	Jul: "07",
	Aug: "08",
	Sep: "09",
	Oct: "10",
	Nov: "11",
	Dec: "12",
};

const normalizeDate = (incorrectDate: string, dateFormat: string): string => {
	switch (dateFormat) {
		case "ISO":
			return incorrectDate;
		case "slash": {
			const [month, date, year] = incorrectDate.split("/");
			const fullYear = partialYearToFullYear(year);
			return dateParamsToDateString(fullYear, month, date);
		}
		case "hash": {
			const [month, year, date] = incorrectDate.split("#");
			const fullYear = partialYearToFullYear(year);
			return dateParamsToDateString(fullYear, month, date);
		}
		case "asterisk": {
			const [date, month, year] = incorrectDate.split("*");
			return dateParamsToDateString(parseInt(year, 10), month, date);
		}
		case "fullWithTwoDigits": {
			const [month, date, year] = incorrectDate.split(" ");
			const monthNumberString = monthAbbreviationMap[month];
			const fullYear = partialYearToFullYear(year);
			return dateParamsToDateString(fullYear, monthNumberString, date);
		}
		case "fullWithFourDigits": {
			const [month, date, year] = incorrectDate.split(" ");
			const monthNumberString = monthAbbreviationMap[month];
			return dateParamsToDateString(
				parseInt(year, 10),
				monthNumberString,
				date,
			);
		}
		default:
			return "Unknown Format";
	}
};

const correctDates = async () => {
	const incorrectDates = await promises.readFile(
		"./easy-188-data.txt",
		"utf-8",
	);
	const normalizedDates = incorrectDates
		.split("\n")
		.map(incorrectDate => {
			const dateFormat = determineDateFormat(incorrectDate);
			if (dateFormat) {
				return normalizeDate(incorrectDate, dateFormat);
			}
		})
		.join("\n");
	await promises.writeFile("./easy-188-result.txt", normalizedDates);
};

correctDates();
