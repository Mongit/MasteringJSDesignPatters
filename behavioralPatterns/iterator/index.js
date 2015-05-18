var iteratorFactory = require("./iterator");

var iterator = iteratorFactory([2, 4, 6]);

console.log("Iterador 1: " + iterator.next());
console.log("Iterador 2: " + iterator.next());
console.log("Iterador 3: " + iterator.next());

//var iterator = iteratorFactory([{name: "obj1"}, {name: "obj2"}, {name: "obj3"}]);
//console.dir(iterator.next());