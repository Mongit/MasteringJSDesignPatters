var Omelet = (function () {
    function Omelet () {
        this.ingredientes = {
            i1: "jamon",
            i2: "huevo",
            i3: "verdura"
        }
    }
    
    Omelet.prototype.printIngredientes = function () {
        for (var x in this.ingredientes) {
            console.log(this.ingredientes[x]);
        }
    }
    
    Omelet.prototype.visit =function (visitor) {
        visitor.visit(this);
    }
    return Omelet;
})();

module.exports = function () {
    return new Omelet();
}