var afinacionFactory = require("./afinacion");
var bujiasFactory = require("./bujias");
var filtroAceiteFactory = require("./aceite");
var filtroAireFactory = require("./aire");
var filtroGasolinaFactory = require("./gasolina");

var Builder4cil = (function () {
    function Builder4cil (price) {
        this.price = price;
    }
    
    Builder4cil.prototype.build = function () {
        var afinacion = afinacionFactory();
        
        afinacion.bujias.push(bujiasFactory(this.price.bujias));
        
        afinacion.faceite.push(filtroAceiteFactory(this.price.aceite));
        
        afinacion.faire.push(filtroAireFactory(this.price.aire));
        
        afinacion.fgasolina.push(filtroGasolinaFactory(this.price.gas));
        
        return afinacion;
    };

    return Builder4cil;
})();

module.exports = function (price) {
    return new Builder4cil(price);
};