var celularFactory = require("./celular");
var adapterFactory = require("./celAdapter");//transforma de una interfaz a otra
var notificarFactory = require("./notificador");
var whatsFactory = require("./whatsapp");
var wAdapterFactory = require("./whatsAdapter");

var celular = celularFactory();
var whats = whatsFactory();
var wAdapter = wAdapterFactory(whats);
var adapter = adapterFactory(celular);
var notificador = notificarFactory();

notificador.notificar(adapter, "hola desde adapter");
notificador.notificar(wAdapter, "Hey im here using Whatsapp");
