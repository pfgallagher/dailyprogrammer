import { lcm as calcLCM } from "./lib/util";

/*
	My math / physics background isn't very extensive, so all I basically did was
	translate a written explanation from the challenge thread into code. So, this
	wasn't a very useful challenge, as I don't think I would have been able to
	figure these calculations out inductively / on my own.
*/
const ricochet = (height: number, width: number, velocity: number): string => {
	const lcm = calcLCM(height, width);
	return `${!((lcm / height - 1) % 2) ? "L" : "U"}${
		!((lcm / width - 1) % 2) ? "R" : "L"
	} ${lcm / height + lcm / width - 2} ${lcm / velocity}`;
};

console.log(ricochet(8, 3, 1));
// LL 9 24
console.log(ricochet(15, 4, 2));
// UR 17 30
