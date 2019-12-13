var Point = /** @class */ (function () {
    function Point(x, y) {
        var _this = this;
        this.translate = function (a, b) {
            _this.x += a;
            _this.y += b;
            return _this;
        };
        this.rotate = function (a, b, c) {
            var xRot = Math.cos(-c) * (_this.x - a) - Math.sin(-c) * (_this.y - b) + a;
            var yRot = Math.sin(-c) * (_this.x - a) + Math.cos(-c) * (_this.y - b) + b;
            _this.x = xRot;
            _this.y = yRot;
            return _this;
        };
        this.scale = function (a, b, s) {
            _this.x = (_this.x - a) * s + a;
            _this.y = (_this.y - b) * s + b;
            return _this;
        };
        this.reflect = function (axis) {
            if (axis === "X") {
                _this.y *= -1;
            }
            else if (axis === "Y") {
                _this.x *= -1;
            }
            return _this;
        };
        this.finish = function () { return [
            Math.round(_this.x),
            Math.round(_this.y),
        ]; };
        this.x = x;
        this.y = y;
        return this;
    }
    return Point;
}());
var point = new Point(0, 5)
    .translate(3, 2)
    .scale(1, 3, 0.5)
    .rotate(3, 2, 1.57079632679)
    .reflect("X")
    .translate(2, -1)
    .scale(0, 0, -0.25)
    .rotate(1, -3, 3.14159265359)
    .reflect("Y")
    .finish();
console.log(point); // [-4, -7]
