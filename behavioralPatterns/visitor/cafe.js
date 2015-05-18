var Cafe = (function () {
    function Cafe () {
        this.ingredientes = {
            i1: "cafe",
            i2: "azucar",
            i3: "agua"
        }
    }
    
    Cafe.prototype.printIngredientes = function () {
        for (var x in this.ingredientes) {
            console.log("ingrediente " + this.ingredientes[x]);
        }
    }
    
    Cafe.prototype.visit =function (visitor) {
        visitor.visit(this);
    }
    return Cafe;
})();

module.exports = function () {
    return new Cafe();
}