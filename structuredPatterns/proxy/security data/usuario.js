var Usuario = (function () {
    function Usuario (nom, email, contrasena) {
        this.nombre = nom;
        this.email = email;
        this.contrasena = contrasena;
    }
    return Usuario;
})();

module.exports = function (nom, email, contrasena) {
    return new Usuario(nom, email, contrasena);
}