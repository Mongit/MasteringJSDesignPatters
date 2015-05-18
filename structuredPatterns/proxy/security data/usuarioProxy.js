var UsuarioProxy = (function () {
    function UsuarioProxy (usuario) {
        this.nombre = usuario.nombre;
        this.email = usuario.email;
        this.contrasena = "Contrasena no disponible";
    }
    
    UsuarioProxy.prototype.getUsuario = function() {
        console.log(" nombre: " + this.nombre + "\n email: " + this.email + "\n password: " + this.contrasena);
    }
    return UsuarioProxy;
})();

module.exports = function (usuario) {
    return new UsuarioProxy(usuario);
}