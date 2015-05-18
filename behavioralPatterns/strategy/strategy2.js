var LlamadaPorSegundo = (function() {
    function LlamadaPorSegundo () {
    }
    
    LlamadaPorSegundo.prototype.cobrar = function (seg) {
        return seg * 0.01;
    }
    
    return LlamadaPorSegundo;
})();

module.exports = function() {
    return new LlamadaPorSegundo();
}