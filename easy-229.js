var dottieNumber = function (n) {
    return Math.cos(n) === n ? n : dottieNumber(Math.cos(n));
};
console.log(dottieNumber(5));
