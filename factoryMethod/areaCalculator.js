var squareFactory = require("./square");
var circleFactory = require("./circle");
var trianFactory = require("./triangle");

var AreaCalculator = (function () {
    function AreaCalculator () {
    }
    
    AreaCalculator.prototype.getArea = function (type, a, b) {
        if (type === "square") {
            return squareFactory().calculateArea(a, b);
        }
        if(type === "circle") {
            return circleFactory().calculateArea(a, b);
        }
        if(type === "triangle") {
            return trianFactory().calculateArea(a, b);
        }
         return 0;
    };
    return AreaCalculator;
})();

module.exports = function () {
    return new AreaCalculator();
};