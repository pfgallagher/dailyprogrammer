const gcd = (a: number, b: number): number => (b > 0 ? gcd(b, a % b) : a);

console.log(gcd(8, 12)); // 4
console.log(gcd(32, 12)); // 4
console.log(gcd(142341, 512345)); // 1
console.log(gcd(65535, 4294967295)); // 65535
