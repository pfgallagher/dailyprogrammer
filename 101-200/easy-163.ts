const diceAnalysis = () => {
	console.log("# of Rolls\t1s\t2s\t3s\t4s\t5s\t6s");
	console.log("==============================================================");
	for (let i = 10; i <= 1_000_000; i *= 10) {
		const rollArr = [
			[1, 0],
			[2, 0],
			[3, 0],
			[4, 0],
			[5, 0],
			[6, 0],
		];
		for (let j = 0; j < i; j++) {
			const possibleRolls = [0, 1, 2, 3, 4, 5];
			const randomRoll = Math.floor(Math.random() * possibleRolls.length);
			const roll = rollArr[randomRoll];
			roll[1]++;
		}
		const total = rollArr.reduce((acc, cur) => acc + cur[1], 0);
		const percentages = rollArr.map(
			roll => `${((roll[1] / total) * 100).toFixed(2)}%`,
		);
		console.log(`${i}\t\t${percentages.join("\t")}`);
	}
};

diceAnalysis();
