var PartidoPolitico = (function () {
    function PartidoPolitico (nombre) {
        this.nombre = nombre;
        this.votos = 0;
    }
    PartidoPolitico.prototype.sumarVotos = function () {
        this.votos++;
    }
    return PartidoPolitico;
})();

module.exports = function (nombre) {
    return new PartidoPolitico(nombre);
}