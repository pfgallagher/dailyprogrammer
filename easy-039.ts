const fizzbuzz = (n: number): void =>
	Array(n)
		.fill(0)
		.map((el, idx) => idx + 1)
		.forEach(el => {
			console.log(`${el % 3 ? "" : "Fizz"}${el % 5 ? "" : "Buzz"}` || el);
		});

fizzbuzz(100);
