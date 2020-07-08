const dottieNumber = (n: number): number =>
	Math.cos(n) === n ? n : dottieNumber(Math.cos(n));

console.log(dottieNumber(5));
