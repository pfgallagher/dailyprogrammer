const estimateSleepCycle = (wakeupTime: string): any => {
	const [time, period] = wakeupTime.split(" ");
	const [hours, minutes] = time.split(":");
	let hrNum = parseInt(hours, 10);
	const minNum = parseInt(minutes, 10);	
	if (period === "PM" && hrNum < 12) {
		hrNum += 12;
	}
	const wakeTime = new Date(Date.UTC(2050, 6, 15, hrNum, minNum)).getTime();
	const sleepCycleLength = 5_400_000;
	const possibleTimes = [];
	for (let i = 1; i < 10; i++) {
		const newTime = new Date();
		newTime.setTime(wakeTime - (sleepCycleLength * i));
		possibleTimes.push(newTime);
	}
	return possibleTimes.map(possibleTime => {
		let hr = possibleTime.getUTCHours();
		const finalPeriod = hr >= 12 ? "PM" : "AM";
		if (hr > 12) {
			hr -= 12;
		}
		if (hr === 0) {
			hr += 12;
		}
		return `${hr}:${possibleTime.getUTCMinutes()} ${finalPeriod}`;
	}).reverse();
};

console.log(estimateSleepCycle("6:15 AM"));
