//chain
var taxiFactory = require ("./taxi");
var camionFactory = require ("./camion");
var caminarFactory = require ("./caminar");


var TransportePublico = (function () {
    function TransportePublico() {
        this.transporte = new Array();
        this.transporte.push(taxiFactory());
        this.transporte.push(camionFactory());
        this.transporte.push(caminarFactory());
    }
    
    TransportePublico.prototype.transportar = function (dinero) {
        for(var i = 0; i < this.transporte.length; i++)
            if (this.transporte[i].isAbleToTransport(dinero) === true) {
                return this.transporte[i].Transport(dinero);
            }
    }
    return TransportePublico;
})();

module.exports = function () {
    return new TransportePublico();
}