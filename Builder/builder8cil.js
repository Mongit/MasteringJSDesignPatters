var afinacionFactory = require("./afinacion");
var bujiasFactory = require("./bujias");
var filtroAceiteFactory = require("./aceite");
var filtroAireFactory = require("./aire");
var filtroGasolinaFactory = require("./gasolina");

var Builder8cilindros = (function () {
    function Builder8cilindros (price) {
        this.price = price;
    }
    
    Builder8cilindros.prototype.build = function () {
        var afinacion = afinacionFactory();
        
        afinacion.bujias.push(bujiasFactory(this.price.bujias));
        afinacion.bujias.push(bujiasFactory(this.price.bujias));
        afinacion.bujias.push(bujiasFactory(this.price.bujias));
        
        afinacion.faceite.push(filtroAceiteFactory(this.price.aceite));
        
        afinacion.faire.push(filtroAireFactory(this.price.aire));
        
        afinacion.fgasolina.push(filtroGasolinaFactory(this.price.gas));
        
        return afinacion;
    };
    
    return Builder8cilindros;
})();

module.exports = function (price) {
    return new Builder8cilindros(price);
};