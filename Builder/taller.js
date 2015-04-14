var Taller = (function () {
    function Taller () {
    }
    
    Taller.prototype.build = function (builder) {
        return builder.build();
    };
    return Taller;
})();

module.exports = function () {
    return new Taller();
};