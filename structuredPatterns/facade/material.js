var Material = (function () {
    function Material () {
    }
    Material.prototype.getMaterial = function (tipoConstruccion)
    {
        if(tipoConstruccion === "casa"){
            console.log("Requiere:\n1 ton cemento\n1 ton marmolina\n10 bultos pegapiso .");
        }
        if(tipoConstruccion === "edificio"){
            console.log("Requiere:\n1000 ton cemento\n1000 ton marmolina\n100 bultos pegapiso.");
        }
    }
    return Material;
})();

module.exports = function () {
    return new Material();
}