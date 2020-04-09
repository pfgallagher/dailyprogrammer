import { distance, divmod } from "./lib/util";

const keyCoords = (key: string): [number, number] =>
	divmod("123456789.0".indexOf(key), 3);

const measureIPAddressDistance = (ipAddress: string): string =>
	`${[...ipAddress]
		.reduce(
			(a, c, i, arr) =>
				arr[i - 1] ? a + distance(keyCoords(c), keyCoords(arr[i - 1])) : a,
			0,
		)
		.toFixed(2)}cm`;

console.log(measureIPAddressDistance("7851"));
// 3.41cm
console.log(measureIPAddressDistance("219.45.143.143"));
// 27.38cm
console.log(measureIPAddressDistance("123456789.0"));
// 13.71cm
