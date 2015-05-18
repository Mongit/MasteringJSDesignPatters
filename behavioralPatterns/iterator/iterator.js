var Iterator = (function () {
    function Iterator(arr) {
        this.arr = arr;
        this.pointer = 0;
    }
    Iterator.prototype.next = function () {
        return this.arr[this.pointer++];
    };
    return Iterator;
})();

module.exports = function (arr) {
    return new Iterator(arr);
}