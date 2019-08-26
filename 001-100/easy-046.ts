const popCount = (num: number): number =>
	[...num.toString(2)].reduce((acc, cur) => (cur === "1" ? ++acc : acc), 0);

console.log(popCount(23));
