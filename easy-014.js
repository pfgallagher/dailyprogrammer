const reverseChunks = (arr, size) => {
	const newArr = arr.slice();
	const chunk = newArr.splice(0, size).reverse();
	return chunk.length ? chunk.concat(reverseChunks(newArr, size)) : newArr;
};

console.log(reverseChunks([12, 24, 32, 44, 55, 66], 2));
