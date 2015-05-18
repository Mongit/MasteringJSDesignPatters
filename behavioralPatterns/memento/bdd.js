//originator
var Bdd = (function() {
    function Bdd () {
        this.dias = new Array();
    }
    Bdd.prototype.guardaVestimenta = function (dia, vestimenta) {
        this.dias[dia] = vestimenta;
    } 
    Bdd.prototype.verVestimenta = function (dia) {
        return this.dias[dia];
    }
    return Bdd;
})();

module.exports = function () {
    return new Bdd();
}