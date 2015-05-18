var Fly = (function () {
    function Fly () {
    }
    Fly.prototype.wings = 2;
    Fly.prototype.distance = 10;
    Fly.prototype.high = 10;
    
    return Fly;
})();

module.exports = function () {
    return new Fly();
}
