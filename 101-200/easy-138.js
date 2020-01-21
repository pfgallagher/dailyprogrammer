var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var calculateRepulsion = function (particleOne, particleTwo) {
    var _a = __read(particleOne, 3), oneMass = _a[0], oneX = _a[1], oneY = _a[2];
    var _b = __read(particleTwo, 3), twoMass = _b[0], twoX = _b[1], twoY = _b[2];
    var deltaX = oneX - twoX;
    var deltaY = oneY - twoY;
    var distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    var force = (oneMass * twoMass) / Math.pow(distance, 2);
    return force;
};
console.log(calculateRepulsion([1, -5.2, 3.8], [1, 8.7, -4.1])); // ~0.0039
console.log(calculateRepulsion([4, 0.04, -0.02], [4, -0.02, -0.03])); // ~4324.3279
