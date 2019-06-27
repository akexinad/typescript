

// DECORATORS

// A decorator is basically a TS function to which you pass it the class constructor.

function logged(constructorFn: Function): void {
    console.log(constructorFn);
}

@logged
class Person {
    
    constructor() {
        console.log('Hello!!!!');
        
    }
}




// FACTORY

function logging(value: boolean) {
    return value ? logged : null;
}

@logging(true)
class Car {

}




// ADVANCED DECORATORS

function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}

@logging(true)
@printable
class Plant {
    name = "Green Plant";
}

const plant = new Plant();
(<any>plant).print();