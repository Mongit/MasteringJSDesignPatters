var Planos = (function () {
    function Planos () {
    }
    Planos.prototype.getPlano = function  (tipoDePlano){
        if(tipoDePlano === "casa")
        {
            console.log("-----------------\n");
            console.log("| ____    ____  |\n");
            console.log("| |  |    |  |  |\n");
            console.log("| ____    ____  |\n");
            console.log("|     ____      |\n");
            console.log("|     |  |      |\n");
            console.log("|     |  |      |\n");
        }
        if(tipoDePlano === "edificio") {
            console.log("-----------------\n");
            console.log("| ____    ____  |\n");
            console.log("| |  |    |  |  |\n");
            console.log("| ____    ____  |\n");
            console.log("| ____    ____  |\n");
            console.log("| |  |    |  |  |\n");
            console.log("| ____    ____  |\n");
            console.log("| ____    ____  |\n");
            console.log("| |  |    |  |  |\n");
            console.log("| ____    ____  |\n"); 
            console.log("|     ____      |\n");
            console.log("|     |  |      |\n");
            console.log("|     |  |      |\n");
        }
    }
    return Planos;
})();

module.exports = function () {
    return new Planos();
};