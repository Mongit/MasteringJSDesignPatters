//Mediador
var Ife = (function () {
    function Ife (partidos, ciudadanos) {
        this.partidosPoliticos = partidos;
        this.ciudadanos = ciudadanos;
    }
    
    Ife.prototype.buscarPartido = function (nombre) {
        for (var i = 0; i < this.partidosPoliticos.length; i++){
            if (this.partidosPoliticos[i].nombre === nombre)
                return this.partidosPoliticos[i];
        }
        return null;
    }
    
    Ife.prototype.organizarElecciones = function () {
        var that = this;
        this.ciudadanos.forEach(function(ciudadano) {
            var partidoPolitico = that.buscarPartido(ciudadano.simpatizanteDe);
            partidoPolitico.sumarVotos();
        });
    }
    
    Ife.prototype.presentarResultados = function () {
        var ganador = this.partidosPoliticos.reduce(function(prev, current, index){
            if(prev.votos > current.votos) {
                return prev;
            }                
            return current;
        });
        return ganador;
    }
    return Ife;
})();

module.exports = function (partidos, ciudadanos) {
    return new Ife(partidos, ciudadanos);
}

