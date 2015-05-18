var celularFactory = require("./celular");
var adapterFactory = require("./medioAdapter");//transforma de una interfaz a otra
var notificarFactory = require("./notificador");

var celular = celularFactory();
var adapter = adapterFactory(celular);
var notificador = notificarFactory();

notificador.notificar(adapter, "hola desde adapter");