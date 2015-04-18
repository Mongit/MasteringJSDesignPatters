var ComboBase = (function () {
    function ComboBase (hamburguesa, papas, refresco) {
        this.hamburguesa = hamburguesa;
        this.papas = papas; 
        this.refresco = refresco;
    };
    
    ComboBase.prototype.getHamburguesa  = function () {
        return this.hamburguesa.carne;
    }
    
    ComboBase.prototype.getPapas = function () {
        return this.papas.cantPapas;
    }
    
    ComboBase.prototype.getRefresco = function () {
        return this.refresco.ml;
    }
    
    return ComboBase;
})();

module.exports = function (hamburguesa, papas, refresco) {
    return new ComboBase(hamburguesa, papas, refresco);
};