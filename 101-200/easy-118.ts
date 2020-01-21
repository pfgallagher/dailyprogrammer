const templateToDateString = (template: string): string => {
	const cur = new Date();
	const templateReplacements: { [template: string]: () => number | string } = {
		"%H": () => {
			const hrs = cur.getHours();
			return hrs > 12 ? hrs - 12 : !hrs ? 12 : hrs;
		},
		"%M": () => cur.getMonth() + 1,
		"%c": () => (cur.getHours() < 12 ? "AM" : "PM"),
		"%d": () => cur.getDate(),
		"%h": () => cur.getHours(),
		"%l": () => cur.getMilliseconds(),
		"%m": () => cur.getMinutes(),
		"%s": () => cur.getSeconds(),
		"%y": () => cur.getFullYear(),
	};
	return template.replace(
		/%[lsmhHcdMy]/g,
		match => `${templateReplacements[match]()}`,
	);
};

console.log(templateToDateString("%s.%l"));
console.log(templateToDateString("%s:%m:%h %M/%d/%y"));
console.log(templateToDateString("The minute is %m! The hour is %h."));
