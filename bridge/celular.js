var Celular = (function () {
    function Celular () {
    }
    
    Celular.prototype.enviarSMS = function (msj) {
        console.log("Mensaje: " + msj);
    };
    return Celular;
})();

module.exports = function () {
    return new Celular();
};