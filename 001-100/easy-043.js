var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree(num) {
        this.value = num;
        this.left = null;
        this.right = null;
    }
    BinarySearchTree.prototype.insert = function (num) {
        if (this.contains(num)) {
            return;
        }
        var direction = num < this.value ? "left" : "right";
        var next = this[direction];
        if (next) {
            next.insert(num);
        }
        else {
            this[direction] = new BinarySearchTree(num);
        }
    };
    BinarySearchTree.prototype.contains = function (num) {
        if (this.value === num) {
            return true;
        }
        var direction = num < this.value ? "left" : "right";
        var next = this[direction];
        if (next) {
            return next.contains(num);
        }
        return false;
    };
    return BinarySearchTree;
}());
var intersect = function (arrOne, arrTwo) {
    return arrOne.length <= arrTwo.length
        ? arrOne.filter(function (el) { return arrTwo.includes(el); })
        : arrTwo.filter(function (el) { return arrOne.includes(el); });
};
var findPath = function (tree, num, path) {
    if (path === void 0) { path = []; }
    path.push(tree.value);
    if (path.includes(num)) {
        return path;
    }
    var direction = num < tree.value ? "left" : "right";
    var next = tree[direction];
    if (next) {
        return findPath(next, num, path);
    }
    return [];
};
var findLowestAncestor = function (tree, m, n) {
    var mAncestors = findPath(tree, m);
    var nAncestors = findPath(tree, n);
    var intersection = intersect(mAncestors, nAncestors);
    var lowestAncestor = intersection[intersection.length - 1];
    return lowestAncestor;
};
var treeOne = new BinarySearchTree(6);
var numsOne = [2, 8, 0, 4, 7, 9, 3, 5];
numsOne.forEach(function (num) {
    treeOne.insert(num);
});
var treeTwo = new BinarySearchTree(20);
var numsTwo = [8, 22, 4, 12, 10, 14];
numsTwo.forEach(function (num) {
    treeTwo.insert(num);
});
console.log(findLowestAncestor(treeOne, 2, 8)); // 6
console.log(findLowestAncestor(treeOne, 2, 4)); // 2
console.log(findLowestAncestor(treeTwo, 10, 14)); // 12
console.log(findLowestAncestor(treeTwo, 14, 8)); // 8
console.log(findLowestAncestor(treeTwo, 10, 22)); // 20
