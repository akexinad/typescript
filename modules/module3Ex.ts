// Exercise 1

class Car {
    constructor(
        public name: string,
        public acceleration: number = 0
    ) { }
    
    honk() {
        console.log("BEEEEEEEEEEEEEEEEEEP!!!!");
    }

    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
        return console.log(this.acceleration);
    } 
}

const myCar = new Car("Herbert");

myCar.honk();
console.log(myCar.name);
console.log(myCar.acceleration);

myCar.accelerate(40);




// Exercise 2

class GeometricShape {
    constructor(
        public width: number = 0,
        public length: number = 0
    ) { }
}

const shape = new GeometricShape();

class Rectangle extends GeometricShape {
    constructor() {
        super();
    }

    calculateSize() {
        return console.log(this.width * this.length);
    }
}

const myRectangle = new Rectangle();
myRectangle.width = 20;
myRectangle.length = 20;
myRectangle.calculateSize();

class Person {

    constructor(
        private _firstName: string = "The man has no name"
    ) { }

    get firstName() {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value
        } else {
            this._firstName = "That is not a name.";
        }
    }
}

let my = new Person();

console.log(my.firstName);
my.firstName = "jo"
console.log(my.firstName);
my.firstName = "Danny"
console.log(my.firstName);




// MAX'S SOLUTIONS


// EXERCISE 1

class Car {
    name: string;
    acceleration: number = 10;

    constructor(name: string) {
        this.name = name
    }

    honk() {
        console.log("TOOOOOOOOT");
    }

    accelerate(speed: number) {
        this.acceleration += speed;
    }
}

const myCar = new Car("BMW");
myCar.honk();
myCar.accelerate(20)
console.log(myCar.acceleration);




// EXERCISE 2

class BaseObject {
    // Skipping type declarations since TS can infer types.
    width = 0;
    length = 0;
}

class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length;
    }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());




// EXERCISE 3

class Person {
    private _firstName: string = "";

    get firstName() {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = "";
        }
    }
}

const my = new Person();
console.log(my.firstName);
my.firstName = "Jo";
console.log(my.firstName);
my.firstName = "Joseph";
console.log(my.firstName);
