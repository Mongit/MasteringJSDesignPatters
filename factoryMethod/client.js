var calculatorFactory = require("./areaCalculator");

var circle = calculatorFactory();
var trian = calculatorFactory();
var square = calculatorFactory();
var def = calculatorFactory();

console.log("Circle's Area: " + circle.getArea("circle", 3.1416, 5));
console.log("Triangle's Area: " + trian.getArea("triangle", 3, 4));
console.log("Square's Area: " + square.getArea("square", 2, 2));
console.log("Default error? : "+ def.getArea("asd", 0, 0));
