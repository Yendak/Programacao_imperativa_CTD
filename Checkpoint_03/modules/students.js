function Student(name, classesMissed, grades) {
    this.name = name;
    this.classesMissed = classesMissed;
    this.grades = grades;
    this.averageGrade = function() {
        let total = 0
        this.grades.forEach(grade => 
            total += grade
        )
        const average = total / this.grades.length

        return average
    }
    this.absence = function() { this.classesMissed++ }
}

const students = [
    new Student('João Ricardo', 0, [10, 8, 6, 8, 5]),
    new Student('Maria joaquina', 0, [10, 8, 6, 8, 5]),
    new Student('Matheus Nascimento ', 0, [10, 8, 6, 8, 1]),
    new Student('Arthur Filho', 0, [10, 8, 6, 8, 5]),
    new Student('Enzo Fernandes', 0, [10, 8, 6, 8, 5]),
    new Student('Aline Melo', 0, [10, 8, 6, 8, 5]),
];

module.exports = [students, Student];