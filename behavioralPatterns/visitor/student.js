var Student = (function () {
    function Student (name, age, score){
        this.name = name;
        this.age = age;
        this.score = score;
    }

    Student.prototype.visit = function (visitor) {//le manda al visitador todo el contenido del obj. Manda this al visitador
        visitor.visit(this);
    };
    return Student;    
})();

module.exports = function (name, age, score) {
    return new Student(name, age, score);
}