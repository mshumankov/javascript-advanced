require('./style.css')

const Person = require('./person.js');
const SampleMath = require('./math.js');

const testPerson = new Person('Pesho');
console.log(testPerson.greeting());
document.getElementById('greeting').textContent = testPerson.greeting();