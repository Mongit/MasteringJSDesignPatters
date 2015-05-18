var Telcel = (function () {
    function Telcel (porMin, porSeg) {
        this.porMin = porMin;
        this.porSeg = porSeg;
    }
    
    Telcel.prototype.obtenerTarifa = function (saldo) {//elige una estrategia
        if(saldo < 100)
            return this.porMin;
        return this.porSeg;
    }
    
    Telcel.prototype.facturar = function (cliente) {
        console.log("===FACTURA===");
        console.log("Saldo Promedio: " + cliente.saldoPromedio);
        console.log("Segundos hablados: " + cliente.segPorFacturar);  
        var tarifaFactory = this.obtenerTarifa(cliente.saldoPromedio);
        var tarifa = tarifaFactory();
        console.log("Total a pagar: " + tarifa.cobrar(cliente.segPorFacturar)); 
        console.log("");
    }
    
    return Telcel;
})();

module.exports = function(porMin, porSeg) {
    return new Telcel(porMin, porSeg);
}