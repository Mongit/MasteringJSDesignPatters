var Alumno = (function () {
    function Alumno (nombre, apellido, promedio){
        this.nombre = nombre;
        this.apellido = apellido;
        this.promedio = promedio;
    }

    Alumno.prototype.print = function () {
        console.log(this.nombre + " " + this.apellido + " " + this.promedio);
    };
    return Alumno;    
})();

module.exports = function (nombre, apellido, promedio) {
    return new Alumno(nombre, apellido, promedio);
}