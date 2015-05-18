var SMS = (function() {
    function SMS(){
        
    }
    
    SMS.prototype.sendMessage = function (text) {
        console.log(text);
    };
    
    return SMS;
    
})();

module.exports = function () {
    return new SMS();
};

