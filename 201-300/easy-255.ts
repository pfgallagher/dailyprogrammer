const lightSwitches = (input: string): number => {
	const [numSwitchesStr, ...rest] = input.split("\n");
	const instructions = rest.map(switchRange =>
		switchRange
			.split(" ")
			.map(num => parseInt(num, 10))
			.sort((a, b) => a - b),
	);
	const switches = Array(parseInt(numSwitchesStr, 10)).fill(false);
	for (const [start, end] of instructions) {
		for (let i = start; i <= end; i++) {
			switches[i] = !switches[i];
		}
	}
	return switches.filter(switchEl => switchEl).length;
};

console.log(lightSwitches("10\n3 6\n0 4\n7 3\n9 9"));
// 7

console.log(
	lightSwitches(
		"1000\n616 293\n344 942\n27 524\n716 291\n860 284\n74 928\n970 594\n832 772\n343 301\n194 882\n948 912\n533 654\n242 792\n408 34\n162 249\n852 693\n526 365\n869 303\n7 992\n200 487\n961 885\n678 828\n441 152\n394 453",
	),
);
// 423

// This theoretically should work. I was too impatient to wait for it to finish.

// import { promises } from "fs";

// (async () => {
// 	const test3 = await promises.readFile("./easy-255-data.txt", "utf-8");
// 	console.log(lightSwitches(test3));
// })();
