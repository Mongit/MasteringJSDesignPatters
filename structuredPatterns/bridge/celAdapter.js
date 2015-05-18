var CelMedioAdapter = (function () {
    function CelMedioAdapter (celular) {
        this.celular = celular;
    }
    
    CelMedioAdapter.prototype.enviar = function (msj) {
        this.celular.enviarSMS(msj);
    };
    return CelMedioAdapter;
})();

module.exports = function (celular) {
   return new CelMedioAdapter(celular); 
};