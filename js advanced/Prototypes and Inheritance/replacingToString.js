(function personAndTeachersClasses() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        toString() {
            const className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
        toString() {
            const baseStr = super.toString().slice(0, -1);
            return baseStr + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
        toString() {
            const baseStr = super.toString().slice(0, -1);
            return baseStr + `, course: ${this.course})`;
        }
    }

    const testPerson = new Person('Pesho', 'Peshev@abv.bg');
    const testTeacher = new Teacher('Gosho', 'Goshev@abv.bg', 'Math');
    const testStudent = new Student('Mosho', 'Moshev@abv.bg', 'Sport');

    console.log(testPerson.toString());
    console.log(testTeacher.toString());
    console.log(testStudent.toString());
    return {
        Person,
        Teacher,
        Student
    }
})();