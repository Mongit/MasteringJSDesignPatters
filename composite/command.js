var Command = (function (){
    function Command(text) {
        this.text = text;
    }
    Command.prototype.ejecutar = function () {
        console.log(this.text); 
    };
    return Command;
})();

module.exports = function (text) {
    return new Command(text);
};