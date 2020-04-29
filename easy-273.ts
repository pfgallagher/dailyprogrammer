export {};

const celsiusToFahrenheit = (n: number): number => Math.round(n * (9 / 5) + 32);
const fahrenheitToCelsius = (n: number): number =>
	Math.round((n - 32) * (5 / 9));

const kelvinToCelsius = (n: number): number => Math.round(n - 273.15);
const celsiusToKelvin = (n: number): number => Math.round(n + 273.15);

const fahrenheitToKelvin = (n: number): number =>
	Math.round(celsiusToKelvin(fahrenheitToCelsius(n)));
const kelvinToFahrenheit = (n: number): number =>
	Math.round(celsiusToFahrenheit(kelvinToCelsius(n)));

const radiansToDegrees = (n: number): number => Math.round(n / (Math.PI / 180));
const degreesToRadians = (n: number): number => Math.round(n * (Math.PI / 180));

const conversions: { [conversion: string]: (n: number) => string } = {
	rd: n => `${radiansToDegrees(n)}d`,
	dr: n => `${degreesToRadians(n)}r`,
	fc: n => `${fahrenheitToCelsius(n)}c`,
	cf: n => `${celsiusToFahrenheit(n)}f`,
	fk: n => `${fahrenheitToKelvin(n)}k`,
	kf: n => `${kelvinToFahrenheit(n)}f`,
	ck: n => `${celsiusToKelvin(n)}k`,
	kc: n => `${kelvinToCelsius(n)}c`,
};

const convertDegrees = (input: string): string => {
	const [n, conversion] = [parseFloat(input.slice(0, -2)), input.slice(-2)];
	return conversion in conversions
		? conversions[conversion](n)
		: "No candidate for conversion";
};

console.log(convertDegrees("3.1416rd"));
// 180d
console.log(convertDegrees("90dr"));
// 2r
console.log(convertDegrees("212fc"));
// 100c
console.log(convertDegrees("70cf"));
// 158f
console.log(convertDegrees("100cr"));
// No candidate for conversion
console.log(convertDegrees("315.15kc"));
// 42c
