const change = (coin: number): number =>
	!coin
		? 1
		: change(Math.floor(coin / 2)) +
		  change(Math.floor(coin / 3)) +
		  change(Math.floor(coin / 4));

console.log(change(19));
console.log(change(2));
console.log(change(7)); // 15
console.log(change(1000));
