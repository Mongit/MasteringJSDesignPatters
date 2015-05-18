//template
module.exports = (function () {
    function Sandwich () {}
    Sandwich.prototype.prepararSandwich = function () {
        this.ponerPanAderezo();
        this.ponerVerdura();
        this.agregarIngredienteEspecial();
        this.ponerPanAderezo();
        console.log("\n");
    }
    
    Sandwich.prototype.ponerPanAderezo = function () {
        console.log("Pone pan y mayonesa");
    }
    
    Sandwich.prototype.ponerVerdura = function () {
        console.log("Pone jitomate, cebolla y chile");
    }
    
    Sandwich.prototype.agregarIngredienteEspecial = function () {}
    
    return Sandwich;
})();
