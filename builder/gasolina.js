var Gasolina = (function () {
    function Gasolina (price) {
        this.price = price;
    }
    return Gasolina;
})();

module.exports = function (price) {
    return new Gasolina(price);
};