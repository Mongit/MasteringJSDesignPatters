var request = require("request");

var ServerProxy = (function (){
    function ServerProxy() {
    }
    ServerProxy.prototype.realizarOperacion = function (comando) {
        request.post({
            url: "http://localhost:8080/realizarOperacion",
            json: JSON.stringify(comando) 
        }, function(err, res, body) {
            if(err) 
                return console.dir(err);
            console.log(body);
        });
    };
    
    return ServerProxy;
})();

module.exports = function () {
    return new ServerProxy();
};