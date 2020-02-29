(function personAndTeachersClasses() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
        get info() {
            return `${this.name} - ${this.email}`
        }
    }

    const testPerson = new Person('Pesho', 'Peshev@abv.bg');
    const testTeacher = new Teacher('Gosho', 'Goshev@abv.bg', 'Math');
    console.log(testTeacher);
    console.log(testPerson);
    console.log(testTeacher.info);
    return {
        Person,
        Teacher
    }
})()