var bdd = require("./bdd");
var vestimenta = require("./vestimenta");
var persona = require("./persona");

var lunes = 0,
    martes = 1,
    miercoles = 2,
    jueves = 3,
    viernes = 4;

var yo = persona(bdd());

yo.vestirme(lunes, vestimenta("camisa azul", "pantalon blanco"));
yo.vestirme(martes, vestimenta("camisa blanca", "pantalon negro"));
yo.vestirme(miercoles, vestimenta("camisa verde", "pantalon morado"));
yo.vestirme(jueves, vestimenta("camisa cafe", "pantalon amarillo"));
yo.vestirme(viernes, yo.verQueTraiaPuesto(lunes));

console.dir(yo.verQueTraiaPuesto(miercoles));
console.dir(yo.verQueTraiaPuesto(viernes));

//las propiedades son las que determinan el estado de un objeto.