//caretaker
var Persona = (function() {
    function Persona (bd) {
        this.bdd = bd;
    }
    
    Persona.prototype.vestirme = function (dia, vestimenta) {
        return this.bdd.guardaVestimenta(dia, vestimenta)
    }
    
    Persona.prototype.verQueTraiaPuesto = function (dia) {
        return this.bdd.verVestimenta(dia);
    }
    return Persona;
})();

module.exports = function (bd) {
    return new Persona(bd);
}
