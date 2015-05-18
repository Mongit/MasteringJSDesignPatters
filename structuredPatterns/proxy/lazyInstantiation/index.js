var trianguloProxyFactory = require("./trianguloProxy");

var trian = trianguloProxyFactory(4, 3, 1);

console.log("Area: " + trian.calcularArea());
console.log("Perimetro: " + trian.calcularPerimetro());
console.log("Base: " + trian.base);
console.log("Altura: " + trian.altura);


