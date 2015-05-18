var clientes = require('./cliente');
var telefonia = require('./telcel');
var porMin = require('./strategy1');
var porSeg = require('./strategy2');

var cliente1 = clientes(200, 500),
    cliente2 = clientes(20, 500);

var telcel = telefonia(porMin, porSeg);

telcel.facturar(cliente1);
telcel.facturar(cliente2);
