var studentFactory = require("./student");
var average = require("./averageOfStudents");
var list = require("./listOfStudents");

var juan = studentFactory("Juan", 21, 8);
var pedro = studentFactory("Pedro", 18, 4);
var maria = studentFactory("Maria", 20, 8);

var collection = [];
collection.push(juan);
collection.push(pedro);
collection.push(maria);

var list = list(),
    average = average();

console.log("LIST");
for (var i = 0; i < collection.length; i++) {
    collection[i].visit(list);
}

console.log("AVERAGE");
for (var i = 0; i < collection.length; i++) {
    collection[i].visit(average);
}


 