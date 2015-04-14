var Bujias = (function () {
    function Bujias (price) {
        this.price = price;
    }
    return Bujias;
})();

module.exports = function (price) {
    return new Bujias(price);
};