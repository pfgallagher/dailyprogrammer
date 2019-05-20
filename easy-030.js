// Just a quick note: If it wasn't immediately obvious from the filename, I'll be
// doing these exercises in TypeScript now, so I can get some practice with it.
var twoSum = function (arr, target) {
    var complements = arr.map(function (el) { return ({
        complement: target - el,
        value: el
    }); });
    for (var key in complements) {
        if (complements.hasOwnProperty(key)) {
            var _a = complements[key], complement = _a.complement, value = _a.value;
            if (arr.includes(complement) && complement !== value) {
                return [value, complement];
            }
        }
    }
    return "No pair found.";
};
// Assumptions: Only one solution per input and elements may not be used twice.
console.log(twoSum([1, 2, 3, 4, 5], 6)); // -> [1, 5]
console.log(twoSum([1, 2, 3, 4, 6, 7], 12)); // -> "No pair found."
console.log(twoSum([2, 7, 11, 15], 9)); // -> [2, 7]
