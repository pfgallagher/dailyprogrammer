export {};

type ComposableFunction = (y: any, x?: any) => any;

const fork = (...args: ComposableFunction[]): ComposableFunction => {
	const [f, g, h] = args;
	if (args.length === 3) {
		return (y: any, x?: any) => g(f(y, x), h(y, x));
	}
	return (y: any, x?: any) => g(f(y, x), fork(...args.slice(2))(y, x));
};

const sum = (numArr: number[]): number => numArr.reduce((a, c) => a + c, 0);
const divide = (a: number, b: number): number => a / b;
const count = (numArr: number[]): number => numArr.length;

const mean = fork(sum, divide, count);
console.log(mean([1, 2, 3, 4, 5]));

(() => {
	const arbitraryNumberOfFuncsTest: any[] = [];
	for (let i = 0; i < 25; i++) {
		arbitraryNumberOfFuncsTest.push(new Function("x", "y", "return x + y"));
	}
	const forkedArbitraryNumberOfFuncs = fork(...arbitraryNumberOfFuncsTest);
	console.log(forkedArbitraryNumberOfFuncs(1, 2));
})();
