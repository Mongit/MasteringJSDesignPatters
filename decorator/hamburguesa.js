var Hamburguesa = (function () {
    function Hamburguesa () {
        this.carne = 1;
    }
    return Hamburguesa;
})();

module.exports = function () {
    return new Hamburguesa();
};