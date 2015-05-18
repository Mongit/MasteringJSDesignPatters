var Afinacion = (function () {
    function Afinacion () {
        this.bujias = [];
        this.faceite = [];
        this.faire = [];
        this.fgasolina = [];
    }
    
    Afinacion.prototype.obtenerPresupuesto = function () {
        var total = 0;
        this.bujias.forEach(function (bujia) {
            total += bujia.price;
        });
        
        this.faceite.forEach(function (aceite) {
            total += aceite.price;
        });
        
        this.faire.forEach(function (aire) {
            total += aire.price;
        });
        
        this.fgasolina.forEach(function (gasolina) {
            total += gasolina.price;
        });
        
        return total;
    };
    
    return Afinacion;
})();

module.exports = function () {
    return new Afinacion();
};