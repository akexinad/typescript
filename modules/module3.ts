// This is the conventional way of declaring variables in TS.
class Person {
    name: string;
    private type: string;
    protected age: number;

    constructor(public name: string, public username: string, type: string, age: number) {
        this.name = name;
        this.type = type;
        this.age = age;
    }
}

const person = new Person("Fellini", "fell");

console.log(person.username);


// THIS IS SHORTER SYNTAX FOR DECLARING CLASS METHODS AND VARIABLES.

class Car {

    constructor(
        public make: string,
        private designer: string,
        protected model: string
    ) { }
}

const myCar = new Car('Ferrari', 'Materazzi', '288GTO');

console.log(myCar.model);
