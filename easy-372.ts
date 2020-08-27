import { count } from "./lib/util";

const balanced = (input: string): boolean =>
	count(input, "x") === count(input, "y");

[
	balanced("xxxyyy") === true,
	balanced("yyyxxx") === true,
	balanced("xxxyyyy") === false,
	balanced("yyxyxxyxxyyyyxxxyxyx") === true,
	balanced("xyxxxxyyyxyxxyxxyy") === false,
	balanced("") === true,
	balanced("x") === false,
].forEach((test, i) => {
	console.assert(test, i.toString());
});
