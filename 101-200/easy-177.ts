const partition = (arr: number[], low: number, high: number): number => {
	const pivot = Math.floor((low + high) / 2);
	while (low < high) {
		while (arr[low] < arr[pivot]) {
			low++;
		}
		while (arr[high] > arr[pivot]) {
			high--;
		}
		if (low <= high) {
			[arr[low], arr[high]] = [arr[high], arr[low]];
			low++;
			high--;
		}
	}
	return low;
};

const quicksort = (arr: number[], low = 0, high = arr.length - 1): number[] => {
	const pivot = partition(arr, low, high);
	if (low < high) {
		quicksort(arr, low, pivot - 1);
		quicksort(arr, pivot, high);
	}
	return arr;
};

console.log(quicksort([1, 2, 3, 4, 5]));
console.log(quicksort([5, 4, 3, 2, 1]));
