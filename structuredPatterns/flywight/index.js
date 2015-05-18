var flyFactory = require("./fly");

var airplane = flyFactory();
var bird = flyFactory();
var cockroach = flyFactory();

airplane.distance = 1000;
airplane.high = 10000;

bird.distance = 100;
bird.high = 100;

cockroach.wings = 4;
cockroach.high = 5;

console.log("The airplane flies " + airplane.distance + " km");
console.log("A bird can fly so tall as " + bird.high + " feet high");
console.log("A cockroach has " + cockroach.wings + " wings");
