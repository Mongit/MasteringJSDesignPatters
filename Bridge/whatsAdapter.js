var WhatsAdapter = (function () {
    function WhatsAdapter (whats) {
        this.whats = whats;
    }
    
    WhatsAdapter.prototype.enviar = function (txt) {
        this.whats.enviarTexto(txt);
    };
    return WhatsAdapter;
})();

module.exports = function (whats) {
    return new WhatsAdapter(whats);
};