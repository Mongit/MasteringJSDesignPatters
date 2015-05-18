var AverageOfStudents = (function () {
    function AverageOfStudents () {
    }
    
    AverageOfStudents.prototype.visit = function (students) {//recibe el obj que va a visitar
        var average = 0, con = 0;
        for (var i in students){
            average += students.score;
        }
        con ++;
        console.log("The score average of all students is: "  + (average/con));
    };
    
    return AverageOfStudents;
})();

module.exports = function () {
    return new AverageOfStudents();
}