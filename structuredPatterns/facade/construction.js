/*var planosFactory = require("./planos");
var trabajadoresFactory = require("./trabajadores");
var materialFactory = require("./material");

var Construccion = (function () {
    function Construccion (constr) {
        this.construccion = {
            plano: constr.plano,
            traba
        }
    }
    return Construccion;
})();
*/

var casa = {
    plano: planosFactory().getPlano("casa"),
    trabajadores: trabajadoresFactory().designaTrabajadores("casa"),
    material: materialFactory().getMaterial("casa")
    }

var edificio = {
    plano: planosFactory().getPlano("edificio"),
    trabajadores: trabajadoresFactory().designaTrabajadores("edificio"),
    material: materialFactory().getMaterial("edificio")
    }


console.log("\nCONSTRUCCION DE UNA CASA \n"casa);
console.log("\nCONSTRUCCION DE UN EDIFICIO \n"edificio);
