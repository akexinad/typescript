// This is the conventional way of declaring variables in TS.
class Person {
    public name: string;
    protected age: number = 44;

    constructor(name: string, public username: string) {
        this.name = name;
    }
}

const person = new Person("Fellini", "fell");

console.log(person.username);


// THIS IS SHORTER SYNTAX FOR DECLARING CLASS METHODS AND VARIABLES.

class Car {

    constructor(
        public make: string,
        protected model: string,
        private designer: string = 'Pininfarina'
    ) { }

    printModel() {
        return this.model;
    }
    
    setDesigner(designer: string) {
        this.model = designer;
        return designer;
    }
}

const myCar = new Car('Ferrari', 'F40');

console.log(myCar.printModel());
console.log(myCar);




// INHERITANCE

class Ferrari extends Car {

    constructor(model: string) {
        super("Ferrari", model);
    }
}

const myOtherCar = new Ferrari("F40");

console.clear();


// GETTERS AND SETTERS

class Plant {
    private _species: string = "Default"

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "Rose";
console.log(plant.species);




// STATIC PROPERTIES AND METHODS

// Static props and methods can be used without having to instantiate the class.
// These are great if you are building helper classes which bundle some useful project specific tools.
class Helpers {
    static PI: number = 3.14;
    static calculateCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calculateCircumference(6));

