//clase que hereda del template, y modifica el metodo abstracto agregarIngredienteEspecial
var sandwich = require('./sandwich');
var util = require('util');//hacer herencia, etc.

var SandwichJamon = (function () {
    function SandwichJamon () {
        
    }
    
    util.inherits(SandwichJamon, sandwich);//SandwichPollo hereda de sandwich
    
    SandwichJamon.prototype.agregarIngredienteEspecial = function () {
        console.log("pone: jamon 'Ingrediente especial'");        
    }
    
    return SandwichJamon;
})();

module.exports = function () {
    return new SandwichJamon();
}
