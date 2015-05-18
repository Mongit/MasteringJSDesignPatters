var ciudadanosFactory = require("./ciudadano");
var partidosPoliticosFactory = require("./partidoPolitico");
var ifeFactory = require("./ife");

var partidosPoliticos = [];
var ciudadanos = new Array();

partidosPoliticos.push(partidosPoliticosFactory("pan"));
partidosPoliticos.push(partidosPoliticosFactory("pri"));
partidosPoliticos.push(partidosPoliticosFactory("prd"));

var persona1 = ciudadanosFactory("pan");
var persona2 = ciudadanosFactory("pri");
var persona3 = ciudadanosFactory("prd");
var persona4 = ciudadanosFactory("pan");

ciudadanos.push(persona1, persona2, persona3, persona4);

var mediador = ifeFactory(partidosPoliticos, ciudadanos);
mediador.organizarElecciones();

console.log("El partido ganador es: " + mediador.presentarResultados().nombre);