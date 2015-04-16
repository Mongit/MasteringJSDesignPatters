var CelMedioAdapter = (function () {
    function CelMedioAdapter (celular) {
        this.medio = celular;
    }
    
    CelMedioAdapter.prototype.enviar = function (msj) {
        this.medio.enviarSMS(msj);
    };
    return CelMedioAdapter;
})();

module.exports = function (celular) {
   return new CelMedioAdapter(celular); 
};