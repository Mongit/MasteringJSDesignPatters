var Circle = (function () {
    function Circle (){
    }
    
    Circle.prototype.calculateArea = function (a, b) {
        return (b*b)*a;
    };
    return Circle;
})();

module.exports = function () {
    return new Circle();
};