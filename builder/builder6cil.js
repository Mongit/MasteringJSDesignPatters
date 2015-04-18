var afinacionFactory = require("./afinacion");
var bujiasFactory = require("./bujias");
var filtroAceiteFactory = require("./aceite");
var filtroAireFactory = require("./aire");
var filtroGasolinaFactory = require("./gasolina");

var Builder6cilindros = (function () {
    function Builder6cilindros (price) {
        this.price = price;
    }
    
    Builder6cilindros.prototype.build = function () {
        var afinacion = afinacionFactory();
        
        afinacion.bujias.push(bujiasFactory(this.price.bujias));
        afinacion.bujias.push(bujiasFactory(this.price.bujias));
        
        afinacion.faceite.push(filtroAceiteFactory(this.price.aceite));
        
        afinacion.faire.push(filtroAireFactory(this.price.aire));
        
        afinacion.fgasolina.push(filtroGasolinaFactory(this.price.gas));
        
        return afinacion;
    
    };
    
    return Builder6cilindros;
})();

module.exports = function (price) {
    return new Builder6cilindros(price);
};