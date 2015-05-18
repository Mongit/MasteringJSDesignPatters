var desayuno = require('./desayuno');
var omelet = require('./omelete');
var cafe = require('./cafe');
var coctel = require('./coctel');

var collection = [];
    collection.push(cafe());
    collection.push(coctel());
    collection.push(omelet());

var visitor = desayuno();

for (var i = 0; i < collection.length; i++) {
    collection[i].visit(visitor);
}