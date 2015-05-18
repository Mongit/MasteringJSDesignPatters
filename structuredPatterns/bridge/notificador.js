var Notificador = (function () {
    function Notificador () {
    }
    Notificador.prototype.notificar = function (iMedio, msj) {
        iMedio.enviar(msj);
    }
    return Notificador;
})();

module.exports = function () {
    return new Notificador();
};