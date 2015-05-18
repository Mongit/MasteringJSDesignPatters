//manda llamar las clases hijas con el metodo de la clase padre
var sandwichPollo = require("./sandwichPollo");
var sandwichJamon = require("./sandwichJamon");

var miDesayuno = sandwichJamon();
var miComida = sandwichPollo();

miDesayuno.prepararSandwich();
miComida.prepararSandwich();