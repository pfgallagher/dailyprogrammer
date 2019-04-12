// const fizzbuzz = n => [...Array(n)].map((e, i) => `${++i % 3 ? "" : "Fizz"}${i % 5 ? "" : "Buzz"}` || i);
const fizzbuzz = n => [...Array(n)].map((e, i) => `${!(++i % 3 )&& "Fizz"}${!(i % 5) && "Buzz"}` || i);


console.log(fizzbuzz(5));