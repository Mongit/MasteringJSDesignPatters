var proxyFactory = require("./proxy");
var comandoFactory = require("./comando");

var sumar = comandoFactory("sumar", [2,3]);
var proxy = proxyFactory();

proxy.realizarOperacion(sumar);