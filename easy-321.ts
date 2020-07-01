type StrMap = { [str: string]: string };

enum TimePeriod {
	am = "am",
	pm = "pm",
}

class TalkingClock {
	private static numToWordMap: StrMap = {
		"0": "",
		"1": "one",
		"2": "two",
		"3": "three",
		"4": "four",
		"5": "five",
		"6": "six",
		"7": "seven",
		"8": "eight",
		"9": "nine",
		"10": "ten",
		"11": "eleven",
		"12": "twelve",
		"13": "thirteen",
		"14": "fourteen",
		"15": "fifteen",
		"16": "sixteen",
		"17": "seventeen",
		"18": "eighteen",
		"19": "nineteen",
	};
	private static minuteFirstHalfMap: StrMap = {
		"0": "oh",
		"2": "twenty",
		"3": "thirty",
		"4": "forty",
		"5": "fifty",
	};

	public static say = (time: string): string => {
		const [hrStr, min] = time.split(":");
		const [hr, period] = TalkingClock.convert24HourTo12Hour(hrStr);
		return TalkingClock.formatTime(hr, min, period);
	};

	public static test = (): void => {
		TalkingClock.runTests();
	};

	private static formatTime = (
		hour: string,
		minute: string,
		period: TimePeriod,
	): string =>
		`It's ${TalkingClock.numToWordMap[hour]}${
			TalkingClock.minuteToWord(minute)
				? ` ${TalkingClock.minuteToWord(minute)}`
				: ""
		} ${period}`;

	private static minuteToWord = (minute: string): string => {
		const parsed = parseInt(minute, 10);
		if (parsed && (parsed < 10 || parsed > 19)) {
			let [first, second] = [...minute];
			first = TalkingClock.minuteFirstHalfMap[first];
			second = TalkingClock.numToWordMap[second];
			return `${first}${second ? ` ${second}` : ""}`;
		}
		return TalkingClock.numToWordMap[minute];
	};

	private static convert24HourTo12Hour = (
		hour: string,
	): [string, TimePeriod] => {
		const hr = parseInt(hour, 10);
		return !hr
			? ["12", TimePeriod.am]
			: hr === 12
			? ["12", TimePeriod.pm]
			: hr > 12
			? [`${hr - 12}`, TimePeriod.pm]
			: [`${hr}`, TimePeriod.am];
	};

	private static runTests = () => {
		[
			TalkingClock.say("00:00") === "It's twelve am",
			TalkingClock.say("01:30") === "It's one thirty am",
			TalkingClock.say("12:05") === "It's twelve oh five pm",
			TalkingClock.say("14:01") === "It's two oh one pm",
			TalkingClock.say("20:29") === "It's eight twenty nine pm",
			TalkingClock.say("21:00") === "It's nine pm",
		].forEach((test, i) => {
			console.assert(test, i.toString());
		});
	};
}

TalkingClock.test();
