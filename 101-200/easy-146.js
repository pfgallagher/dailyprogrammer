var calcPolygonPerimeter = function (n, r) { return (2 * r * n * Math.sin(Math.PI / n)).toFixed(3); };
console.log(calcPolygonPerimeter(5, 3.7)); // 21.748
console.log(calcPolygonPerimeter(100, 1.0)); // 6.282
