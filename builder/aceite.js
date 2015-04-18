var Aceite = (function () {
    function Aceite (price) {
        this.price = price;
    }
    return Aceite;
})();

module.exports = function (price) {
    return new Aceite(price);
};