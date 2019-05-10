const splitArr = arr => [
	arr.slice(0, Math.floor(arr.length / 2)),
	arr.slice(Math.floor(arr.length / 2)),
];

console.log(splitArr([1, 2, 3, 4, 5, 6]));
console.log(splitArr([1, 2, 3, 4, 5]));
console.log(splitArr([1, 2, 3, 4]));

// Just for fun, here's a recursive chunking function that allows you specify
// the size of chunks (rather than just splitting the array in half.)

const chunkArr = (arr, size) => {
	const newArr = arr.slice();
	const chunk = newArr.splice(0, size);
	return chunk.length ? [chunk].concat(chunkArr(newArr, size)) : newArr;
};

console.log(chunkArr([1, 2, 3, 4, 5, 6], 1));
console.log(chunkArr([1, 2, 3, 4, 5, 6], 3));
console.log(chunkArr([1, 2, 3, 4, 5], 2));
console.log(chunkArr([1, 2, 3, 4, 5], 5));
