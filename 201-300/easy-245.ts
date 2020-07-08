const dateDilemma = (dates: string[]): string[] =>
	dates
		.map(d => d.split(/[/\- ]/g))
		.map(d => (d[0].length !== 4 ? [d[2], d[0], d[1]] : d))
		.map(d => (d[0].length === 2 ? [`20${d[0]}`, ...d.slice(1)] : d))
		.map(d => new Date(d.join("-")).toISOString().slice(0, 10));

console.log(
	dateDilemma([
		"2/13/15",
		"1-31-10",
		"5 10 2015",
		"2012 3 17",
		"2001-01-01",
		"2008/01/07",
	]),
);
// 2015-02-13
// 2010-01-31
// 2015-05-10
// 2012-03-17
// 2001-01-01
// 2008-01-07
