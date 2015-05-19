var Iterator = (function () {
    function Iterator(arr) {
        this.arr = arr;
        this.pointer = 0;
    }
    
    Iterator.prototype.next = function () {
        return this.arr[this.pointer++];
    };
    
    Iterator.prototype.hasNext = function () {
        return this.pointer < this.arr.length;
    };
    
    return Iterator;
})();

module.exports = function (arr) {
    return new Iterator(arr);
}