/*Decorator contiene dos clases: decorator y decorate. Decorate es la clase base y Decorator contiene una clase base, a la cual le modifica el contenido sin cambiar su interfaz, ambas contienen los mismos metodos y propiedades. 
*/

var hamburguesaFactory = require("./hamburguesa");
var papasFactory = require("./papas");
var refrescoFactory = require("./refresco");
var comboBaseFactory = require("./cineComboBase");
var comboMas5PesosFactory = require("./cineComboMas5Pesos");

//Combo base
var comboBase = comboBaseFactory(hamburguesaFactory(), papasFactory(), refrescoFactory());
console.log("COMBO BASE CONTIENE: " + "\nCarne: " + comboBase.getHamburguesa() + "\nPapas: " + comboBase.getPapas() + "\nRefresco: " + comboBase.getRefresco());

//Combo base mas 5 pesos
var comboMas5Pesos = comboMas5PesosFactory(comboBase);

console.log("\nCOMBO MAS 5 PESOS: " + "\nCarne: " + comboMas5Pesos.getHamburguesa() + "\nPapas: " + comboMas5Pesos.getPapas() + "\nRefresco: " + comboMas5Pesos.getRefresco());
