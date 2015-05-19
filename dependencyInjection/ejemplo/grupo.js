var Grupo = (function () {
    function Grupo(iterator) {
        this.iterator = iterator;
    }
    Grupo.prototype.imprimir = function () {
        while(this.iterator.hasNext()) {
            var alumno = this.iterator.next();
            alumno.print();
        }
    };
    return Grupo;
})();

module.exports = function (iterator) {
    return new Grupo(iterator);
}