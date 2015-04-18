var Triangle = (function () {
    function Triangle (){
    }
    
    Triangle.prototype.calculateArea = function (a, b) {
        return (a*b)/2;
};
    return Triangle;
})();

module.exports = function () {
    return new Triangle();
};