//clase que hereda del template, y modifica el metodo abstracto agregarIngredienteEspecial
var sandwich = require('./sandwich');
var util = require('util');//hacer herencia, etc.

var SandwichPollo = (function () {
    function SandwichPollo () {
        
    }
    
    util.inherits(SandwichPollo, sandwich);//SandwichPollo hereda de sandwich
    
    SandwichPollo.prototype.agregarIngredienteEspecial = function () {
        console.log("pone: pollo 'Ingrediente especial'");        
    }
    
    return SandwichPollo;
})();

module.exports = function () {
    return new SandwichPollo();
}
