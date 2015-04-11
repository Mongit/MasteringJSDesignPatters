var Whatsapp = (function() {
    function Whatsapp(){
        
    }
    
    Whatsapp.prototype.sendMessage = function (text) {
        console.log(text);
    };
    
    return Whatsapp;
    
})();

module.exports = function () {
    return new Whatsapp();
};
