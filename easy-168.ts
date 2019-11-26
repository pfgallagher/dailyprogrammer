import * as faker from "faker";
import { range } from "./lib/util";

const randomScore = (): number => Math.round(Math.random() * 100);

const generateStudentRecords = (n: number): string =>
	range(0, n)
		.map(
			() =>
				`${faker.name.firstName()} ${faker.name.lastName()}\t\t${range(0, 5)
					.map(() => randomScore())
					.join("\t")}`,
		)
		.join("\n");

console.log(generateStudentRecords(10));
