class BinarySearchTree {
	public value: number;
	public left: null | BinarySearchTree;
	public right: null | BinarySearchTree;
	constructor(num: number) {
		this.value = num;
		this.left = null;
		this.right = null;
	}
	public insert(num: number) {
		if (this.contains(num)) {
			return;
		}
		const direction = num < this.value ? "left" : "right";
		const next = this[direction];
		if (next) {
			next.insert(num);
		} else {
			this[direction] = new BinarySearchTree(num);
		}
	}
	public contains(num: number): boolean {
		if (this.value === num) {
			return true;
		}
		const direction = num < this.value ? "left" : "right";
		const next = this[direction];
		if (next) {
			return next.contains(num);
		}
		return false;
	}
}

const intersect = (arrOne: number[], arrTwo: number[]): number[] =>
	arrOne.length <= arrTwo.length
		? arrOne.filter(el => arrTwo.includes(el))
		: arrTwo.filter(el => arrOne.includes(el));

const findPath = (
	tree: BinarySearchTree,
	num: number,
	path: number[] = [],
): number[] => {
	path.push(tree.value);
	if (path.includes(num)) {
		return path;
	}
	const direction = num < tree.value ? "left" : "right";
	const next = tree[direction];
	if (next) {
		return findPath(next, num, path);
	}
	return [];
};

const findLowestAncestor = (
	tree: BinarySearchTree,
	m: number,
	n: number,
): number => {
	const mAncestors = findPath(tree, m);
	const nAncestors = findPath(tree, n);
	const intersection = intersect(mAncestors, nAncestors);
	const lowestAncestor = intersection[intersection.length - 1];
	return lowestAncestor;
};

const treeOne = new BinarySearchTree(6);
const numsOne = [2, 8, 0, 4, 7, 9, 3, 5];
numsOne.forEach(num => {
	treeOne.insert(num);
});
const treeTwo = new BinarySearchTree(20);
const numsTwo = [8, 22, 4, 12, 10, 14];
numsTwo.forEach(num => {
	treeTwo.insert(num);
});

console.log(findLowestAncestor(treeOne, 2, 8)); // 6
console.log(findLowestAncestor(treeOne, 2, 4)); // 2
console.log(findLowestAncestor(treeTwo, 10, 14)); // 12
console.log(findLowestAncestor(treeTwo, 14, 8)); // 8
console.log(findLowestAncestor(treeTwo, 10, 22)); // 20
