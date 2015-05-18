var Refresco = (function () {
    function Refresco () {
        this.ml = 300; 
    };
    return Refresco;
})();

module.exports = function () {
    return new Refresco();
};

