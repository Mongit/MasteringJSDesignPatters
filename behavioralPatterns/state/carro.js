var Carro = (function () {
    function Carro() {
        this.state = false;
        this.gasolina = 20;
    }
        
    Carro.prototype.encender = function () {
        this.state = true;
        console.log("El carro esta encendido, es decir su estado es: " + this.state);
    }
    Carro.prototype.apagar = function () {
        this.state = false
        console.log("Tu auto esta apagado, es decir su estado es:" + this.state);
    }
    Carro.prototype.moverse = function () {
        this.gasolina = this.gasolina - 5;
        console.log("Auto en movimiento queda " + this.gasolina + " gasolina");
    }
    return Carro;
})();

module.exports = function ()
{
    return new Carro();
}