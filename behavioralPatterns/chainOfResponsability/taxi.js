var Taxi = (function () {
    function Taxi() {
        
    }
    Taxi.prototype.isAbleToTransport = function (dineroDelPasajero) {
        var tarifa = 30;
        return dineroDelPasajero > tarifa;
    }
    Taxi.prototype.Transport = function () {
        console.log("Vamonos en Taxi");
    }
    return Taxi;
})();
module.exports = function () {
    return new Taxi();
}