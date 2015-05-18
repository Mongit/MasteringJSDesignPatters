var LlamadaPorMinuto = (function () {
    function LlamadaPorMinuto () {
    }
    
    LlamadaPorMinuto.prototype.cobrar = function (seg) {
        var min = seg / 60;
        return  min * 1;
    }
    
    return LlamadaPorMinuto;
})();

module.exports = function() {
    return new LlamadaPorMinuto();
}