var Coctel = (function () {
    function Coctel () {
        this.ingredientes = {
            i1: "sandia",
            i2: "papaya",
            i3: "pina"
        }
    }
    
    Coctel.prototype.printIngredientes = function () {
        for (var x in this.ingredientes) {
            console.log("ingrediente " + this.ingredientes[x]);
        }
    }
    
    Coctel.prototype.visit =function (visitor) {
        visitor.visit(this);
    }
    return Coctel;
})();

module.exports = function () {
    return new Coctel();
}