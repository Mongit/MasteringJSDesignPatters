var Trabajadores = (function (){
    function Trabajadores () {
    }
    
    Trabajadores.prototype.designaTrabajadores = function (tipoConstruccion) {
        if(tipoConstruccion === "casa"){
            console.log("Requiere:\n4 Albaniles\n1 Electricista\n1 Fontanreo.");
        }
        if(tipoConstruccion === "edificio"){
            console.log("Requiere:\n50 Albaniles\n20 Electricistas\n30 Fontanreos.");
        }
        
    }
    
    return Trabajadores;
})();

module.exports = function () {
    return new Trabajadores();
}