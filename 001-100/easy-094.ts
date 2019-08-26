import { elements } from "./easy-094-data";

const highlight = (str: string): string[] => elements.reduce((acc: RegExpMatchArray[], cur) => 
acc.concat([...str.matchAll(new RegExp(cur, "ig"))]), []).map(({ 0: chars, index: i, input }) =>
		input && i !== undefined
			? `${input.slice(0, i)}[${chars[0].toUpperCase()}${chars.slice(
					1,
			  )}]${input.slice(i + chars.length)}`
			: "",
	);

console.log(highlight("dailyprogrammer"));
console.log(highlight("H H H H H H"));
