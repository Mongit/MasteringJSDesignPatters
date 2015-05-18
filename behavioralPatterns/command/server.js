var express = require("express");
var calculadoraFactory = require("./calculadora");
var server = express();//factory q crea servers

server.post("/realizarOperacion", function (req, res) {
    console.log("entrando al post");
    var calculadora = calculadoraFactory();
    console.dir(req.body);
    var comando = JSON.parse(req.body);//convierte un obj de texto a un obj JS
    var metodo = calculadora[comando.nombre];
    var resultado = metodo.apply(calculadora, comando.parametros);
    res.send(resultado);
});

//donde va a escuchar
var port = process.env.PORT || 8080;
server.listen(port, function () {
    console.log("Server: http://localhost:8080/realizarOperacion");
});