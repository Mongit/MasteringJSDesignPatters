var proxyFactory = require("./usuarioProxy");
var usuarioFactory = require("./usuario");

var u = usuarioFactory("juan", "juan@example", "pasword");
var proxy = proxyFactory(u);

proxy.getUsuario();