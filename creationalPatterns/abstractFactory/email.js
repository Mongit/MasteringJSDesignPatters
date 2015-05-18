var Email = (function() {
    function Email(){
        
    }
    
    Email.prototype.sendMessage = function (text) {
        console.log(text);
    };
    
    return Email;
    
})();

module.exports = function () {
    return new Email();
};

