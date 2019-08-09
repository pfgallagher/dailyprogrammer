import { readFileSync } from "fs";
const data = JSON.parse(readFileSync("./easy-089-data.json", "utf-8")).data;

const mean = (dataArr: number[]): number =>
	dataArr.reduce((acc, cur) => acc + cur, 0) / dataArr.length;

const variance = (dataArr: number[]): number =>
	dataArr.reduce((acc, cur) => acc + (mean(dataArr) - cur) ** 2, 0) /
	dataArr.length;

const standardDeviation = (dataArr: number[]): number =>
	Math.sqrt(variance(dataArr));

console.log(mean(data));
console.log(variance(data));
console.log(standardDeviation(data));
