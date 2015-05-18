var Caminar = (function () {
    function Caminar () {
        
    }
    Caminar.prototype.isAbleToTransport = function () {
        return true;
    }
    Caminar.prototype.Transport = function () {
        console.log("Caminar es la mejor opcion");
    }
    return Caminar;
})();
module.exports = function () {
    return new Caminar();
}