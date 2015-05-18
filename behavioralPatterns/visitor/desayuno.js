var Desayuno = (function () {
    function Desayuno () {
    }
    
    Desayuno.prototype.visit = function (ingredientes) {
        if (ingredientes.ingredientes.i2 === "huevo") {
            console.log("Tu omelete tendra: " );
            this.prepararDesayuno(ingredientes);
        } else {
            console.log("No sera omelete");
        }
    };
    
    Desayuno.prototype.prepararDesayuno = function (ingredientes) {
        ingredientes.printIngredientes();
    };
    
    return Desayuno;
})();

module.exports = function () {
    return new Desayuno();
}