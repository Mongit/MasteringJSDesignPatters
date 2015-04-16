var Whatsapp = (function () {
    function Whatsapp () {
    }
    Whatsapp.prototype.enviarTexto =function (txt) {
        console.log("This Whatsapp says: " + txt);
    };
    return Whatsapp;
})();

module.exports = function () {
    return new Whatsapp();
};