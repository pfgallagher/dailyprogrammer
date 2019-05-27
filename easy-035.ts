const calcTriangleNumVal = (num: number): number => (num * (num + 1)) / 2;

const findClosestTriangleNum = (num: number): number => {
	let triangleNum: number = 0;
	for (let i = 0; calcTriangleNumVal(i) <= num; i++) {
		triangleNum = i;
	}
	return triangleNum;
};

const printTriangle = (num: number): void => {
	const closestTriangleNum = findClosestTriangleNum(num);
	let closestTriangleNumVal: number = calcTriangleNumVal(closestTriangleNum);
	for (let i = closestTriangleNum; i > 0; i--) {
		const rowArr = [];
		while (rowArr.length < i) {
			rowArr.unshift(closestTriangleNumVal);
			closestTriangleNumVal--;
		}
		console.log(rowArr.join(" "));
	}
};

printTriangle(10);
// printTriangle(6);
// printTriangle(3);
// printTriangle(12);
