var trianFactory = require ("./triangulo");

var TrianguloProxy = (function () {
    function TrianguloProxy (l1, l2, l3) {
        this.trian = null;
        this.lados = [l1, l2, l3];
    }
    
    TrianguloProxy.prototype.obtenerTriangulo = function () {
        if(this.trian === null) 
            this.trian = trianFactory(this.lados[0], this.lados[1], this.lados[2]);
        
        return this.trian;
    }
    
    TrianguloProxy.prototype.calcularArea = function () {
        return this.obtenerTriangulo().calcularArea();
    }
    
    TrianguloProxy.prototype.calcularPerimetro = function () {
        return this.obtenerTriangulo().calcularPerimetro();
    }
    
    return TrianguloProxy;
})();

module.exports = function (l1, l2, l3) {
    var p = new TrianguloProxy(l1, l2, l3);
    Object.defineProperty(p, 'base', {
        get: function() { 
            return this.obtenerTriangulo().base; 
        },
        set: function(newValue) { 
            return this.obtenerTriangulo().base = newValue; 
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(p, 'altura', {
        get: function() { 
            return this.obtenerTriangulo().altura; 
        },
        set: function(newValue) { 
            return this.obtenerTriangulo().altura = newValue; 
        },
        enumerable: true,
        configurable: true
    });

    return p;
}