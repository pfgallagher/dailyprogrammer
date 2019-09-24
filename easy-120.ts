const readline = require("readline");
const { exec } = require("child_process");

const checkLogThroughput = (seconds: number): void => {
	let count = 0;
	const logger = exec("node easy-120-logger.js");
	const rl = readline.createInterface({ input: logger.stdout });
	rl.on("line", () => {
		count++;
	});
	setInterval(() => {
		console.log(`Throughput: ${count / seconds}/s`);
		count = 0;
	}, seconds * 1000);
};

checkLogThroughput(5);
