var Triangulo = (function () {
    function Triangulo (l1, l2, l3) {
        this.lados = [l1, l2, l3];
        this.base = l1;
        this.altura = l2;
    }
    
    Triangulo.prototype.calcularArea = function () {
        var area = (this.base * this.altura) / 2;
        return area;
    }
    Triangulo.prototype.calcularPerimetro = function () {
        var perimetro = 0;
        for (var i = 0; i < this.lados.length; i++) {
            perimetro = perimetro + this.lados[i];
        }
        return perimetro;
    }
    return Triangulo;
})();

module.exports = function (l1, l2, l3) {
    return new Triangulo (l1, l2, l3);
};