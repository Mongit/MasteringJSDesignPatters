var Papas = (function () {
    function Papas () {
        this.cantPapas = 5;
    }
    return Papas;
})();

module.exports = function () {
    return new Papas();
};