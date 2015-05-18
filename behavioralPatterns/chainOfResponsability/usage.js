var transportePublicoFactory = require ("./transportePublico");

var persona = transportePublicoFactory();

persona.transportar(36);
persona.transportar(0);
persona.transportar(8);