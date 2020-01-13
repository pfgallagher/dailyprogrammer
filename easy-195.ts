const resolveSymlink = (input: string): string => {
	const [target, ...symlinks] = input.split("\n").reverse();
	const symlinkEntries = symlinks.map(symlink => symlink.split(":"));
	let resolvedSymlink = target;
	while (
		symlinkEntries.some(([beforePath]) => resolvedSymlink.includes(beforePath))
	) {
		for (const [i, symlinkEntry] of symlinkEntries.entries()) {
			const beforePath = symlinkEntry[0];
			let afterPath = symlinkEntry[1];
			if (afterPath.endsWith("/")) {
				afterPath = afterPath.slice(0, -1);
			}
			if (resolvedSymlink.includes(beforePath)) {
				resolvedSymlink = resolvedSymlink.replace(beforePath, afterPath);
				break;
			}
		}
	}
	return resolvedSymlink;
};

console.log(
	resolveSymlink(
		"/bin/thing:/bin/thing-3\n/bin/thing-3:/bin/thing-3.2\n/bin/thing-3.2/include:/usr/include\n/usr/include/SDL:/usr/local/include/SDL\n/bin/thing/include/SDL/stan",
	),
);
// /usr/local/include/SDL/stan

console.log(
	resolveSymlink(
		"/home/elite/documents:/media/mmcstick/docs\n/home/elite/documents/office",
	),
);
// /media/mmcstick/docs/office

console.log(
	resolveSymlink(
		"/bin:/usr/bin\n/usr/bin:/usr/local/bin/\n/usr/local/bin/log:/var/log-2014\n/bin/log/rc",
	),
);
// /var/log-2014/rc

// console.log(resolveSymlink("/etc:/tmp/etc\n/tmp/etc/:/etc/\n/etc/modprobe.d/config/"));
// Infinite loop
