const readFlags = (possibleFlags: string, command: string): void => {
	const flagMap = Object.fromEntries(
		possibleFlags.split("\n").map(flag => flag.split(":")),
	);
	const args: Array<{ name: string; type: string }> = [];
	command.split(" ").forEach(arg => {
		if (arg.startsWith("--")) {
			args.push({
				name: arg.slice(2),
				type: "flag",
			});
			return;
		}
		if (arg.startsWith("-")) {
			const flags = [...arg.slice(1)];
			flags.forEach(flag => {
				args.push({
					name: flagMap[flag],
					type: "flag",
				});
			});
			return;
		}
		args.push({
			name: arg,
			type: "parameter",
		});
	});
	args.forEach(arg => {
		const { name, type } = arg;
		console.log(`${type}: ${name}`);
	});
};

console.log(
	readFlags(
		"a:all\nf:force\nn:networking\nN:numerical-list",
		"-aN 12 --verbose 192.168.0.44",
	),
);
// flag: all
// flag: numerical-list
// parameter: 12
// flag: verbose
// parameter: 192.168.0.44
