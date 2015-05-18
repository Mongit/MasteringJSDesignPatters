var Cliente = (function () {
    function Cliente (saldoPromedio, segPorFacturar) {
        this.saldoPromedio = saldoPromedio;
        this.segPorFacturar = segPorFacturar;
    }
    
    return Cliente;
})();

module.exports = function(saldoPromedio, segPorFacturar) {
    return new Cliente(saldoPromedio, segPorFacturar);
}