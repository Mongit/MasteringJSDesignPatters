var Square = (function () {
    function Square (){
    }
    
    Square.prototype.calculateArea = function (a, b) {
        return a*b;
    };
    return Square;
})();

module.exports = function () {
    return new Square();
};