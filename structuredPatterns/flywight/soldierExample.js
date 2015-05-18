var Soldier = (function () {
    function Soldier() {
        this.Health = 10;
        this.FightingAbility = 5;
        this.Hunger = 0;
    }
    return Soldier;
})();

var SoldierFly = (function () {
    function SoldierFly() { }
        Soldier.prototype.Health = 10;
        Soldier.prototype.FightingAbility = 5;
        Soldier.prototype.Hunger = 0;
    return SoldierFly;
})();

/*
var soldier1 = new Soldier();
var soldier2 = new Soldier();
console.log(soldier1.Health);//10
soldier1.Health = 7;
console.log(soldier1.Health);//7
console.log(soldier2.Health);//10
delete soldier1.Health;
console.log(soldier1.Health);//10
*/

var start = new Date().getTime();
for (var i=0; i<10000; i++) {
    var obj = new Soldier();
}
var end = new Date().getTime();
var time = end - start;
console.log("Soldier time: " + time);

var start = new Date().getTime();
for (var i=0; i<10000; i++) {
    var obj = new Soldier();
}
var end = new Date().getTime();
var time = end - start;
console.log("Soldier time: " + time);