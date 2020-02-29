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

function extendPrototype(Class) {
    Class.prototype.spicies = 'Human';
    Class.prototype.toSpeciesString = function () {
        return `I am a ${this.spicies}. ${this.toString()}`
    };
}

extendPrototype(Person);
const testPerson = new Person('Misho', 'Mishev@abv.bg');
console.log(testPerson.toSpeciesString());