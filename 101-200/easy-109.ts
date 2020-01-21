const onlyContainsDigits = (testStr: string): boolean => !/\D/g.test(testStr);

console.log(onlyContainsDigits("123")); // true
console.log(onlyContainsDigits("123.123")); // false
console.log(onlyContainsDigits("abc")); // false
