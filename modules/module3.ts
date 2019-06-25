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




// ABSTRACT CLASSES

// Abstract classes are classes that you CANNOT INSTANTIATE.
// You can only INHERIT from these classes.
// They sit there as an abstraction in your work.
abstract class Project {
    projectName: string = "Default";
    budget: number = 1000;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITPRoject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITPRoject();
console.log(newProject);
newProject.changeName("Imagine Solve");
console.log(newProject);




// PRIVATE CONSTRUCTORS AND SINGLETONS

// Below is an example of a singleton class.
// Singletion classes are used when you want only one instance of the class during runtime.
// Declaring the constructor private means you CANNOT instantiate this class.
class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public readonly name: string) {}

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}

// let wrong = new OnlyOne('The Only One');  // => You cannot instantiate the class
let right = OnlyOne.getInstance();
console.log(right);


console.clear();



// READ ONLY PROPERTIES


console.log(right.name);
// right.name = "hello"; => Cannot assign to 'name' because it is a read-only property.
console.log(right.name);

