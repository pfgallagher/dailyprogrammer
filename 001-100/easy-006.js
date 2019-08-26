// So, it turns out that calculating pi is really, really difficult using JavaScript...
// Here's an implementation that uses math.js, because I don't think it's quite
// feasible to do it with vanilla JavaScript.

const math = require("mathjs");
math.config({
	number: "BigNumber",
});

const calcPi = (r = 1) => {
	const f = n => math.eval("2 * (n - 1) + 1", { n });
	const g = n => math.eval("n * n", { n });
	for (let i = 100; i > 0; i--) {
		r = math.eval("f(i) + g(i) / r", { f, g, r, i });
	}
	return math.eval("4 / r", { r });
};
