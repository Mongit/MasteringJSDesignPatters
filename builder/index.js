var tallerFactory = require("./taller");
var afinacion4Factory = require("./builder4cil");
var afinacion6Factory = require("./builder6cil");
var afinacion8Factory = require("./builder8cil");

var price4 = {
    bujias: 10,
    aceite: 5,
    aire: 5,
    gas: 10
};

var price6 = {
    bujias: 5,
    aceite: 5,
    aire: 5,
    gas: 5
};

var price8 = {
    bujias: 10,
    aceite: 10,
    aire: 10,
    gas: 10
};

var taller = tallerFactory();
var afinacion4 = taller.build(afinacion4Factory(price4));
var afinacion6 = taller.build(afinacion6Factory(price6));
var afinacion8 = taller.build(afinacion8Factory(price8));

console.log("Afinacion de 4 cilindros: $" + afinacion4.obtenerPresupuesto());
console.log("Afinacion de 6 cilindros: $" + afinacion6.obtenerPresupuesto());
console.log("Afinacion de 8 cilindros: $" + afinacion8.obtenerPresupuesto());
