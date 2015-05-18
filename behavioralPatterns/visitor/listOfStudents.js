var ListOfStudents = (function () {
    function ListOfStudents () {
    }
    
    ListOfStudents.prototype.visit = function (students) {
        console.log("Name: " + students.name + "  \t  Age: " + students.age);
    };
    
    return ListOfStudents;
})();

module.exports = function () {
    return new ListOfStudents();
}