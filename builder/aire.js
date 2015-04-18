var Aire = ( function() {
    function Aire (price) {
        this.price = price;
    }
    return Aire;
})();

module.exports = function (price) {
    return new Aire(price);
};