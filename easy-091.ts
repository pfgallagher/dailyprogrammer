const sleepSort = (numArr: number[]): void => {
	numArr.forEach(num =>
		setTimeout(() => {
			console.log(num);
		}, num),
	);
};

sleepSort([3, 1, 4, 1, 5, 9]);
