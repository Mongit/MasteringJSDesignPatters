//ejecuta un codigo en funcion a un evento
var EventEmitter = require('events').EventEmitter;//hacer eventos
var util = require('util');//hacer herencia, etc.

var Semaforo = (function () {
    function Semaforo () {
        this.posiblesEstados = ['verde', 'amarillo', 'rojo'];
        this.actual = 0;
    }
    
    util.inherits(Semaforo, EventEmitter);//semaforo hereda de emiter
    
    Semaforo.prototype.cambiarEstado = function () {
        
        this.emit('antesDeCambiar', this.posiblesEstados[this.actual]);
        
        if (this.actual === 2)
            this.actual = 0;
        else
            this.actual++;
        
        this.emit('despuesDeCambiar', this.posiblesEstados[this.actual]);
    }
    
    return Semaforo;
})();

module.exports = function () {
    return new Semaforo();
}