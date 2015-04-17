var Menu = (function () {
    function Menu (name, cmd) {
        this.name = name;
        this.subMenu = [];
        this.command = cmd;
    }
    return Menu;
})();

module.exports = function (name, cmd) {
    return new Menu(name, cmd);
};