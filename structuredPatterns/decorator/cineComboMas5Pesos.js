var ComboBaseMas5Pesos = (function () {
    function ComboBaseMas5PEsos (comboBase) {
        this.comboBaseDecorate = comboBase;
    }
    
    ComboBaseMas5PEsos.prototype.getHamburguesa = function () {
        this.comboBaseDecorate.hamburguesa.carne = this.comboBaseDecorate.hamburguesa.carne *2;
        return this.comboBaseDecorate.getHamburguesa();
    }
    ComboBaseMas5PEsos.prototype.getPapas = function () {
        this.comboBaseDecorate.papas.cantPapas = this.comboBaseDecorate.papas.cantPapas + 5;
        return this.comboBaseDecorate.getPapas();
    }
    ComboBaseMas5PEsos.prototype.getRefresco = function () {
        this.comboBaseDecorate.refresco.ml = this.comboBaseDecorate.refresco.ml + 300;
        return this.comboBaseDecorate.getRefresco();
    }
    
    return ComboBaseMas5PEsos;
})();

module.exports = function (comboBase) {
    return new ComboBaseMas5Pesos(comboBase);
};