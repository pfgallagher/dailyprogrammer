const merge = (leftArr: number[], rightArr: number[]): number[] => {
	let leftCounter = 0;
	let rightCounter = 0;
	const resultArr: number[] = [];
	while (leftCounter < leftArr.length && rightCounter < rightArr.length) {
		const left = leftArr[leftCounter];
		const right = rightArr[rightCounter];
		if (left < right) {
			resultArr.push(left);
			leftCounter++;
		} else {
			resultArr.push(right);
			rightCounter++;
		}
	}
	return [
		...resultArr,
		...leftArr.slice(leftCounter),
		...rightArr.slice(rightCounter),
	];
};

const splitArr = (arr: number[], splitAt: number): number[][] => [
	arr.slice(0, splitAt),
	arr.slice(splitAt),
];

const mergeSort = (arr: number[]): number[] => {
	const [leftHalf, rightHalf] = splitArr(arr, Math.floor(arr.length / 2));
	return arr.length <= 1
		? arr
		: merge(mergeSort(leftHalf), mergeSort(rightHalf));
};

const main = (arrOne: number[], arrTwo: number[]): number[] => {
	const mergedArr = [...arrOne, ...arrTwo.filter(el => el)];
	return mergeSort(mergedArr);
};

console.log(main([692, 1, 32], [0, 0, 0, 14, 15, 123, 2431]));
