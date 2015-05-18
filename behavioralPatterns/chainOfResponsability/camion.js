var Camion = (function () {
    function Camion() {
        
    }
    
    Camion.prototype.isAbleToTransport = function (dineroDelPasajero) {
        var tarifa = 7;
        return dineroDelPasajero > tarifa;
    }
    
    Camion.prototype.Transport = function () {
        console.log("Camion es accesible");
    }
    return Camion;
})();
module.exports = function () {
    return new Camion();
}